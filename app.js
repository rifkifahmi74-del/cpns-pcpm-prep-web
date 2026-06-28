/* ============================================================
   CPNS & PCPM BI - Latihan Soal  ·  app logic (vanilla JS)
   Alur: Materi pembelajaran → Ujian (bertimer) → Pembahasan per soal
   ============================================================ */
(function(){
  'use strict';
  const DB = window.EXAM_DB || {};
  const app = document.getElementById('app');
  const STORE_KEY = 'cpns_pcpm_progress_v1';

  /* ---------- tiny helpers ---------- */
  const $ = (s, r=document)=>r.querySelector(s);
  const h = (html)=>{ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; };
  const esc = (s)=>String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const pad = n=>String(n).padStart(2,'0');
  const shuffle = a=>{ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
  const fmtClock = sec=>{ sec=Math.max(0,sec|0); const m=Math.floor(sec/60),s=sec%60; return (m>=60?Math.floor(m/60)+':'+pad(m%60):m)+':'+pad(s); };

  let timerId=null, cdId=null;
  function clearTimers(){ if(timerId){clearInterval(timerId);timerId=null;} }

  function load(){ try{return JSON.parse(localStorage.getItem(STORE_KEY))||{};}catch(e){return {};} }
  function save(d){ try{localStorage.setItem(STORE_KEY,JSON.stringify(d));}catch(e){} }
  function recordBest(examId, key, pct){
    const d=load(); d.best=d.best||{}; const k=examId+':'+key;
    if(d.best[k]==null || pct>d.best[k]) d.best[k]=pct; save(d);
  }
  const getBest=(examId,key)=>{ const d=load(); return d.best?d.best[examId+':'+key]:null; };
  function recordHistory(rec){ const d=load(); d.hist=d.hist||[]; d.hist.unshift(rec); d.hist=d.hist.slice(0,300); save(d); }
  const getHistory=(examId)=>{ const d=load(); return (d.hist||[]).filter(r=>!examId||r.examId===examId); };
  const optContent = o => /^\s*<svg/i.test(o.text) ? o.text : esc(o.text); // figural options are inline SVG

  function toast(msg){
    let t=$('.toast'); if(!t){t=h('<div class="toast"></div>');document.body.appendChild(t);}
    t.textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2200);
  }

  /* ---------- motion + interaction helpers ---------- */
  const reduceMotion = ()=> matchMedia('(prefers-reduced-motion: reduce)').matches;
  const haptic = (ms=7)=>{ if(navigator.vibrate && !reduceMotion()){ try{navigator.vibrate(ms);}catch(e){} } };
  const TILE = ['#0a84ff','#30b0c7','#34c759','#ff9f0a','#ff375f','#bf5af2','#5e5ce6','#ff453a']; // iOS Settings-style icon tiles
  function staggerKids(container){ if(!container) return; [...container.children].forEach((c,i)=>{ c.classList.add('stagger'); c.style.setProperty('--i', i); }); }
  function countUp(el, to, suffix, dur=900){
    if(!el) return;
    if(reduceMotion()){ el.textContent=to+(suffix||''); return; }
    const start=performance.now();
    const tick=now=>{ const t=Math.min(1,(now-start)/dur); el.textContent=Math.round(to*(1-Math.pow(1-t,3)))+(suffix||''); if(t<1)requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }

  /* ---------- view router (Apple-style view transitions) ---------- */
  function setView(node, showBack, after){
    clearTimers();
    const swap=()=>{
      app.innerHTML=''; app.appendChild(node);
      const back=$('#backBtn'); back.classList.toggle('hidden', !showBack);
      window.scrollTo({top:0,behavior:'instant'});
      if(after) after();
    };
    if(document.startViewTransition && !reduceMotion()) document.startViewTransition(swap);
    else swap();
  }

  // animate the results ring, score bars, and count-up number once the view is shown
  function animateResults(pct){
    const dbl = fn => requestAnimationFrame(()=>requestAnimationFrame(fn)); // ensure initial paint before transition
    const ring=$('.ring-prog');
    if(ring){ const C=parseFloat(ring.dataset.c), final=C*(1-pct/100);
      if(reduceMotion()) ring.style.strokeDashoffset=final; else dbl(()=>{ ring.style.strokeDashoffset=final; }); }
    document.querySelectorAll('.score-row .bar>i[data-w]').forEach(b=>{
      const w=b.dataset.w; if(reduceMotion()) b.style.width=w+'%'; else dbl(()=>{ b.style.width=w+'%'; }); });
    countUp($('.ring-wrap .pct b'), pct, '%', 1000);
  }

  /* ====================== HOME ====================== */
  function renderHome(){
    const exams=[DB.cpns, DB.pcpm, DB.ojk].filter(Boolean);
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`
      <header class="hero">
        <div class="eyebrow">Persiapan 2026</div>
        <h1>Latihan Soal CPNS &amp; PCPM BI</h1>
        <p>Belajar materi, kerjakan simulasi ujian seperti aslinya, lalu pelajari pembahasan tiap soal. Data struktur &amp; passing grade mengacu sumber resmi.</p>
      </header>`));

    // countdowns
    const cds=(DB.config&&DB.config.countdowns)||[];
    if(cds.length){
      const row=h(`<div class="cd-row"></div>`);
      cds.forEach(cd=>row.appendChild(countdownCard(cd)));
      v.appendChild(row);
    }

    v.appendChild(h(`<div class="section-title">Pilih Ujian</div>`));
    const grid=h(`<div class="exam-grid"></div>`);
    exams.forEach(ex=>{
      const card=h(`
        <div class="exam-card" style="--ac:${ex.accent}">
          <div class="ribbon"></div>
          <span class="pill">${esc(ex.short)}</span>
          <h3>${esc(ex.name.split('-')[0].trim())}</h3>
          <p>${esc(ex.tagline)}</p>
          <div class="meta">
            <div>${ex.categories.length} subtes</div>
            <div><b>${ex.categories.reduce((n,c)=>n+c.questions.length,0)}</b> soal latihan</div>
          </div>
          <span class="go">Mulai →</span>
        </div>`);
      card.onclick=()=>renderExam(ex.id);
      grid.appendChild(card);
    });
    staggerKids(grid);
    v.appendChild(grid);
    v.appendChild(footer());
    setView(v,false, ()=>startCountdownTick());
  }

  function countdownCard(cd){
    const live = cd.active && new Date(cd.date).getTime()>Date.now();
    const card=h(`
      <div class="cd-card" data-date="${esc(cd.date)}" data-active="${cd.active}">
        <div class="cd-top"><span class="dot ${live?'live':'wait'}"></span>${esc(cd.label)}</div>
        ${ live
          ? `<div class="cd-timer">
               <div class="cd-unit"><b data-u="d">00</b><span>Hari</span></div>
               <div class="cd-unit"><b data-u="h">00</b><span>Jam</span></div>
               <div class="cd-unit"><b data-u="m">00</b><span>Menit</span></div>
               <div class="cd-unit"><b data-u="s">00</b><span>Detik</span></div>
             </div>`
          : `<div class="cd-wait">⏳ Menunggu jadwal resmi - belum diumumkan.</div>` }
        <a class="src" href="${esc(cd.source.url)}" target="_blank" rel="noopener">${esc(cd.source.label)} ↗</a>
      </div>`);
    return card;
  }
  function startCountdownTick(){
    if(cdId) clearInterval(cdId);
    const tick=()=>{
      document.querySelectorAll('.cd-card[data-active="true"]').forEach(card=>{
        const t=new Date(card.dataset.date).getTime()-Date.now();
        if(t<=0) return;
        const d=Math.floor(t/864e5), hh=Math.floor(t%864e5/36e5), m=Math.floor(t%36e5/6e4), s=Math.floor(t%6e4/1e3);
        const set=(u,val)=>{const e=card.querySelector(`[data-u="${u}"]`); if(e)e.textContent=pad(val);};
        set('d',d);set('h',hh);set('m',m);set('s',s);
      });
    };
    tick(); cdId=setInterval(tick,1000);
  }

  /* ====================== EXAM (subtes list) ====================== */
  function renderExam(examId){
    const ex=DB[examId]; if(!ex) return renderHome();
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`
      <header class="hero" style="padding-bottom:0">
        <div class="eyebrow" style="color:${ex.accent}">${esc(ex.short)}</div>
        <h1>${esc(ex.name)}</h1>
        <p>${esc(ex.tagline)}</p>
      </header>`));

    // exam info card
    const e=ex.exam;
    const passTxt = e.passing ? `TWK ≥${e.passing.twk} · TIU ≥${e.passing.tiu} · TKP ≥${e.passing.tkp}` : 'Sistem gugur bertahap (kompetitif)';
    v.appendChild(h(`
      <div class="card start-card" style="margin-top:18px">
        <div class="kv"><span>Format resmi</span><b>${e.totalSoal} soal · ${e.durationMin} menit</b></div>
        <div class="kv"><span>${e.maxScore?'Skor maksimal':'Penilaian'}</span><b>${e.maxScore? e.maxScore : 'Benar = 5 / soal'}</b></div>
        <div class="kv"><span>Ambang batas</span><b>${esc(passTxt)}</b></div>
        <div class="kv"><span>Catatan</span><b style="font-weight:500;color:var(--muted);text-align:right;max-width:60%">${esc(e.note)}</b></div>
      </div>`));

    // full simulation button
    const simBtn=h(`<button class="btn btn-primary" style="margin-top:16px">▶︎ Mulai Simulasi Penuh (semua subtes, bertimer)</button>`);
    simBtn.onclick=()=>startSession(examId,null,'full');
    v.appendChild(simBtn);
    const statBtn=h(`<button class="btn btn-ghost" style="margin-top:12px">📊 Statistik &amp; Riwayat</button>`);
    statBtn.onclick=()=>renderStats(examId);
    v.appendChild(statBtn);

    v.appendChild(h(`<div class="section-title">Latihan per Subtes</div>`));
    const list=h(`<div class="cat-list"></div>`);
    ex.categories.forEach((cat,idx)=>{
      const best=getBest(examId,cat.id);
      const item=h(`
        <div class="cat-item">
          <div class="cat-emoji">${cat.icon||'📘'}</div>
          <div class="cat-meta">
            <h4>${esc(cat.name)}</h4>
            <p>${esc(cat.desc)}</p>
          </div>
          <div style="text-align:right">
            <div class="cat-badge">${cat.questions.length} soal</div>
            ${best!=null?`<div class="cat-badge" style="color:var(--green);font-weight:700">★ ${Math.round(best)}%</div>`:''}
          </div>
          <div class="chev">›</div>
        </div>`);
      item.onclick=()=>renderCategory(examId,cat.id);
      const tile=item.querySelector('.cat-emoji'); if(tile) tile.style.setProperty('--tile', TILE[idx % TILE.length]);
      list.appendChild(item);
    });
    staggerKids(list);
    v.appendChild(list);

    // --- CPNS extras: Formasi & SKB, SKB practice, articles ---
    if(ex.formasi){
      const fbtn=h(`<button class="btn btn-secondary" style="margin-top:18px">🏛️ Formasi Instansi Pusat &amp; Pembobotan SKB</button>`);
      fbtn.onclick=()=>renderFormasi(examId);
      v.appendChild(fbtn);
    }
    if(ex.skbCategories && ex.skbCategories.length){
      v.appendChild(h(`<div class="section-title">Latihan SKB (per Rumpun Jabatan)</div>`));
      const slist=h(`<div class="cat-list"></div>`);
      ex.skbCategories.forEach((cat,idx)=>{
        const best=getBest(examId,cat.id);
        const item=h(`
          <div class="cat-item">
            <div class="cat-emoji">${cat.icon||'📘'}</div>
            <div class="cat-meta"><h4>${esc(cat.name)}</h4><p>${esc(cat.desc)}</p></div>
            <div style="text-align:right"><div class="cat-badge">${cat.questions.length} soal</div>${best!=null?`<div class="cat-badge" style="color:var(--green);font-weight:700">★ ${Math.round(best)}%</div>`:''}</div>
            <div class="chev">›</div>
          </div>`);
        item.onclick=()=>renderCategory(examId,cat.id);
        const tile=item.querySelector('.cat-emoji'); if(tile) tile.style.setProperty('--tile', TILE[(idx+3) % TILE.length]);
        slist.appendChild(item);
      });
      staggerKids(slist);
      v.appendChild(slist);
    }
    if(ex.articles && ex.articles.length){
      v.appendChild(h(`<div class="section-title">Materi &amp; Analisis</div>`));
      const alist=h(`<div class="cat-list"></div>`);
      ex.articles.forEach((art,idx)=>{
        const item=h(`
          <div class="cat-item">
            <div class="cat-emoji">${art.icon||'📄'}</div>
            <div class="cat-meta"><h4>${esc(art.title)}</h4><p>${esc(art.desc)}</p></div>
            <div class="chev">›</div>
          </div>`);
        item.onclick=()=>renderArticle(examId,art.id);
        const tile=item.querySelector('.cat-emoji'); if(tile) tile.style.setProperty('--tile', TILE[(idx+5) % TILE.length]);
        alist.appendChild(item);
      });
      staggerKids(alist);
      v.appendChild(alist);
    }

    v.appendChild(footer());
    setView(v,true);
    backTo(()=>renderHome());
  }

  /* ====================== CATEGORY landing ====================== */
  function renderCategory(examId,catId){
    const ex=DB[examId], cat=findCat(ex,catId);
    const best=getBest(examId,catId);
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`
      <header class="hero" style="padding-bottom:0">
        <div style="font-size:46px">${cat.icon||'📘'}</div>
        <h1 style="font-size:30px">${esc(cat.name)}</h1>
        <p>${esc(cat.desc)}</p>
      </header>`));
    v.appendChild(h(`
      <div class="card start-card" style="margin-top:16px">
        <div class="kv"><span>Jumlah soal latihan</span><b>${cat.questions.length} soal</b></div>
        ${cat.jumlahSoal?`<div class="kv"><span>Format resmi</span><b>${cat.jumlahSoal} soal${cat.maxScore?' · maks '+cat.maxScore:''}</b></div>`:`<div class="kv"><span>Jenis</span><b>SKB CAT (substansi jabatan)</b></div>`}
        ${cat.passing?`<div class="kv"><span>Ambang batas</span><b>≥ ${cat.passing}</b></div>`:''}
        ${best!=null?`<div class="kv"><span>Skor terbaikmu</span><b style="color:var(--green)">${Math.round(best)}%</b></div>`:''}
      </div>`));

    const b1=h(`<button class="btn btn-secondary" style="margin-top:16px">📖 Pelajari Materi dulu</button>`);
    b1.onclick=()=>renderMaterial(examId,catId);
    const b2=h(`<button class="btn btn-primary" style="margin-top:12px">▶︎ Langsung Mulai Latihan</button>`);
    b2.onclick=()=>startSession(examId,catId,'category');
    v.appendChild(b1); v.appendChild(b2);
    v.appendChild(footer());
    setView(v,true);
    backTo(()=>renderExam(examId));
  }

  /* ====================== MATERIAL ====================== */
  function renderMaterial(examId,catId){
    const ex=DB[examId], cat=findCat(ex,catId);
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`<header class="hero" style="padding-bottom:0"><div class="eyebrow" style="color:${ex.accent}">Materi · ${esc(cat.short)}</div><h1 style="font-size:28px">${esc(cat.name)}</h1></header>`));
    v.appendChild(h(`<div class="card material">${cat.material||'<p>Materi belum tersedia.</p>'}</div>`));
    const go=h(`<button class="btn btn-primary" style="margin-top:18px">Lanjut ke Latihan →</button>`);
    go.onclick=()=>startSession(examId,catId,'category');
    v.appendChild(go);
    v.appendChild(footer());
    setView(v,true);
    backTo(()=>renderCategory(examId,catId));
  }

  /* ====================== ARTIKEL (materi & analisis) ====================== */
  function renderArticle(examId, artId){
    const ex=DB[examId], art=(ex.articles||[]).find(a=>a.id===artId);
    if(!art) return renderExam(examId);
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`<header class="hero" style="padding-bottom:0"><div style="font-size:42px">${art.icon||'📄'}</div><h1 style="font-size:27px">${esc(art.title)}</h1></header>`));
    v.appendChild(h(`<div class="card material" style="margin-top:14px">${art.html}</div>`));
    const bk=h(`<button class="btn btn-ghost" style="margin-top:18px">← Kembali</button>`); bk.onclick=()=>renderExam(examId); v.appendChild(bk);
    v.appendChild(footer());
    setView(v,true);
    backTo(()=>renderExam(examId));
  }

  /* ====================== FORMASI & PEMBOBOTAN SKB ====================== */
  function renderFormasi(examId){
    const ex=DB[examId], f=ex.formasi; if(!f) return renderExam(examId);
    const b=f.bobot, s=f.summary.tahun2024;
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`<header class="hero" style="padding-bottom:0"><div class="eyebrow" style="color:${ex.accent}">Formasi &amp; SKB</div><h1 style="font-size:26px">Formasi Instansi Pusat &amp; Pembobotan SKB</h1><p>${esc(f.updated)}</p></header>`));
    v.appendChild(h(`
      <div class="card start-card" style="margin-top:16px">
        <div class="kv"><span>Pembobotan akhir</span><b>${esc(b.ringkas)}</b></div>
        <div class="kv"><span>Dasar hukum</span><b>${esc(b.dasar)}</b></div>
        <div class="kv"><span>Rumus SKD</span><b style="font-weight:500;text-align:right;max-width:62%">${esc(b.rumusSKD)}</b></div>
        <div class="kv"><span>Rumus SKB</span><b style="font-weight:500;text-align:right;max-width:62%">${esc(b.rumusSKB)}</b></div>
      </div>`));
    v.appendChild(h(`<div class="card material" style="margin-top:12px;padding:16px 18px"><p style="margin:0;font-size:14.5px"><b>Komponen SKB:</b> ${esc(b.skbCAT)}</p></div>`));
    v.appendChild(h(`<div class="section-title">Referensi Resmi CPNS 2024</div>`));
    v.appendChild(h(`
      <div class="stat-row">
        <div class="stat"><b>${s.total.toLocaleString('id-ID')}</b><span>Total formasi</span></div>
        <div class="stat"><b>${s.pusat.toLocaleString('id-ID')}</b><span>Formasi pusat</span></div>
        <div class="stat"><b>${s.instansiPusat}</b><span>Instansi pusat</span></div>
      </div>`));
    v.appendChild(h(`<div class="card material" style="margin-top:12px;padding:16px 18px"><p style="margin:0;font-size:14.5px">⚠️ <b>Status 2026:</b> ${esc(f.summary.status2026)}</p></div>`));
    v.appendChild(h(`<div class="section-title">Instansi Pusat &amp; Pola SKB</div>`));
    const list=h(`<div class="cat-list"></div>`);
    f.instansi.forEach((ins,idx)=>{
      const item=h(`
        <div class="cat-item" style="cursor:default; align-items:flex-start">
          <div class="cat-emoji" style="--tile:${TILE[idx % TILE.length]}">🏛️</div>
          <div class="cat-meta">
            <h4>${esc(ins.nama)}</h4>
            <p style="-webkit-line-clamp:4">SKB: ${esc(ins.skb.join(' · '))}</p>
            <a href="${esc(ins.url)}" target="_blank" rel="noopener" style="font-size:13px;font-weight:600">Situs resmi ↗</a>
          </div>
        </div>`);
      list.appendChild(item);
    });
    staggerKids(list);
    v.appendChild(list);
    v.appendChild(h(`<div class="card material" style="margin-top:12px;padding:16px 18px"><p style="margin:0;font-size:13.5px;color:var(--muted)">${esc(f.catatan)}</p></div>`));
    const src=h(`<a class="btn btn-ghost" style="margin-top:14px" href="${esc(s.sumber.url)}" target="_blank" rel="noopener">Cek formasi resmi: ${esc(s.sumber.label)} ↗</a>`);
    v.appendChild(src);
    const bk=h(`<button class="btn btn-secondary" style="margin-top:12px">← Kembali</button>`); bk.onclick=()=>renderExam(examId); v.appendChild(bk);
    v.appendChild(footer());
    setView(v,true);
    backTo(()=>renderExam(examId));
  }

  /* ====================== SESSION BUILD ====================== */
  let S=null; // current session

  function makeItem(cat,q){
    let opts;
    if(q.t==='tkp') opts=q.o.map(o=>({text:o.x,score:o.s,isCorrect:o.s===5}));
    else opts=q.o.map((txt,i)=>({text:txt,score:i===q.a?5:0,isCorrect:i===q.a})); // mc & fig
    shuffle(opts);
    return {catId:cat.id,catName:cat.short,type:q.t,q:q.q,img:q.img||null,opts,e:q.e};
  }
  const cloneItem=it=>{ const opts=it.opts.map(o=>({...o})); shuffle(opts); return {...it,opts}; };
  // look up a category across SKD categories AND SKB categories
  function findCat(ex, catId){ return (ex.categories||[]).concat(ex.skbCategories||[]).find(c=>c.id===catId); }
  function sessionLabel(){ if(S.mode==='full')return 'Simulasi Penuh'; if(S.mode==='wrong')return 'Ulangi Soal Salah'; const c=findCat(S.ex,S.catId); return 'Latihan '+(c?c.short:''); }

  function startSession(examId,catId,mode){
    const ex=DB[examId];
    let items=[], cats=[];
    if(mode==='full'){ cats=ex.categories; }   // full simulation = SKD only
    else { cats=[findCat(ex,catId)]; }
    cats.forEach(cat=>{
      const qs=cat.questions.map(q=>makeItem(cat,q));
      shuffle(qs); items=items.concat(qs);
    });
    const pace=ex.exam.durationMin*60/ex.exam.totalSoal; // realistic seconds/soal
    const durationSec=Math.max(60,Math.ceil(items.length*pace));
    S={ examId, mode, catId, ex, items, answers:new Array(items.length).fill(null),
        flags:new Array(items.length).fill(false), cur:0, durationSec, endTs:Date.now()+durationSec*1000, submitted:false };
    renderExamRunner();
  }

  /* ====================== EXAM RUNNER ====================== */
  function renderExamRunner(){
    const v=h(`<div class="view"></div>`);
    // sticky head
    const head=h(`
      <div class="exam-head">
        <div class="row">
          <div class="timer" id="timer">⏱ --:--</div>
          <div class="prog"><i id="progBar"></i></div>
          <div class="qcount" id="qcount"></div>
        </div>
      </div>`);
    v.appendChild(head);
    const body=h(`<div class="wrap" id="examBody"></div>`);
    v.appendChild(body);
    // run drawQuestion + timer AFTER the view swap (setView is async via View Transitions)
    setView(v,true, ()=>{ drawQuestion(); startExamTimer(); });
    backTo(()=>{ confirmModal('Keluar dari ujian?','Progress latihan ini tidak disimpan.','Keluar',()=>{ renderExam(S.examId); }); });
  }

  function startExamTimer(){
    clearTimers();
    const t=$('#timer');
    const upd=()=>{
      const left=Math.round((S.endTs-Date.now())/1000);
      t.textContent='⏱ '+fmtClock(left);
      t.classList.toggle('warn',left<=120&&left>30);
      t.classList.toggle('danger',left<=30);
      if(left<=0){ clearTimers(); toast('Waktu habis - otomatis dikumpulkan'); finishSession(); }
    };
    upd(); timerId=setInterval(upd,500);
  }

  function drawQuestion(){
    const body=$('#examBody'); const i=S.cur, it=S.items[i];
    $('#qcount').textContent=`${i+1} / ${S.items.length}`;
    $('#progBar').style.width=(S.answers.filter(a=>a!=null).length/S.items.length*100)+'%';

    const card=h(`<div class="card q-card"></div>`);
    card.appendChild(h(`<div class="q-num">${S.mode!=='category'?esc(it.catName)+' · ':''}Soal ${i+1}${it.type==='tkp'?' · TKP (skor 1-5)':''}${it.type==='fig'?' · Figural':''}</div>`));
    card.appendChild(h(`<div class="q-text">${esc(it.q)}</div>`));
    if(it.img) card.appendChild(h(`<div class="q-img">${it.img}</div>`));
    const opts=h(`<div class="opts ${it.type==='fig'?'grid2':''}"></div>`);
    const letters='ABCDE';
    it.opts.forEach((o,oi)=>{
      const sel=S.answers[i]===oi;
      const op=h(`<div class="opt ${sel?'sel':''}"><div class="mark">${sel?'✓':letters[oi]}</div><div class="otext">${optContent(o)}</div></div>`);
      op.onclick=()=>{ haptic(); S.answers[i]=oi; drawQuestion(); };
      opts.appendChild(op);
    });
    card.appendChild(opts);
    body.innerHTML=''; body.appendChild(card);

    // nav
    const nav=h(`<div class="q-nav"></div>`);
    const flag=h(`<button class="flag-btn ${S.flags[i]?'on':''}">${S.flags[i]?'★ Ditandai':'☆ Tandai'}</button>`);
    flag.onclick=()=>{ S.flags[i]=!S.flags[i]; drawQuestion(); };
    const prev=h(`<button class="btn btn-secondary">← Sebelumnya</button>`);
    prev.disabled=i===0; prev.style.opacity=i===0?.4:1;
    prev.onclick=()=>{ if(S.cur>0){S.cur--; drawQuestion();} };
    const isLast=i===S.items.length-1;
    const next=h(`<button class="btn btn-primary">${isLast?'Selesai & Kumpulkan':'Selanjutnya →'}</button>`);
    next.onclick=()=>{ if(isLast){ promptFinish(); } else { S.cur++; drawQuestion(); } };
    nav.appendChild(prev); nav.appendChild(flag); nav.appendChild(next);
    body.appendChild(nav);

    // palette
    const pal=h(`<div class="card palette"></div>`);
    pal.appendChild(h(`<h4>Navigasi Soal</h4>`));
    const grid=h(`<div class="pal-grid"></div>`);
    S.items.forEach((_,k)=>{
      const cls=['pal-btn']; if(S.answers[k]!=null)cls.push('answered'); if(S.flags[k])cls.push('flagged'); if(k===i)cls.push('current');
      const b=h(`<button class="${cls.join(' ')}">${k+1}</button>`);
      b.onclick=()=>{ S.cur=k; drawQuestion(); };
      grid.appendChild(b);
    });
    pal.appendChild(grid);
    pal.appendChild(h(`<div class="pal-legend"><span><i class="lg a"></i>Terjawab</span><span><i class="lg f"></i>Ditandai</span><span><i class="lg"></i>Kosong</span></div>`));
    const sub=h(`<button class="btn btn-ghost" style="margin-top:16px">Kumpulkan Jawaban</button>`);
    sub.onclick=()=>promptFinish();
    pal.appendChild(sub);
    body.appendChild(pal);
  }

  function promptFinish(){
    const blank=S.answers.filter(a=>a==null).length;
    const msg=blank>0 ? `Masih ada <b>${blank} soal</b> belum dijawab. Kumpulkan sekarang?` : 'Kumpulkan jawaban dan lihat hasil?';
    confirmModal('Kumpulkan Jawaban?',msg,'Kumpulkan',()=>finishSession());
  }

  /* ====================== SCORING + RESULTS ====================== */
  function scoreSession(){
    // group by category
    const groups={};
    S.items.forEach((it,i)=>{
      const g=groups[it.catId]||(groups[it.catId]={catId:it.catId,name:it.catName,earned:0,max:0,correct:0,total:0});
      g.total++; g.max+=5;
      const sel=S.answers[i];
      if(sel!=null){ g.earned+=it.opts[sel].score; if(it.opts[sel].isCorrect)g.correct++; }
    });
    const cats=Object.values(groups).map(g=>{
      const def=findCat(S.ex,g.catId);
      g.pct=g.max? g.earned/g.max*100 : 0;
      if(def&&def.passing&&def.maxScore){ g.thresholdPct=def.passing/def.maxScore*100; g.pass=g.pct>=g.thresholdPct; }
      else { g.thresholdPct=null; g.pass=null; }
      return g;
    });
    const totEarned=cats.reduce((s,g)=>s+g.earned,0), totMax=cats.reduce((s,g)=>s+g.max,0);
    const totPct=totMax? totEarned/totMax*100:0;
    const anyGraded=cats.some(g=>g.pass!=null);
    const overallPass=anyGraded? cats.every(g=>g.pass!==false) : null;
    return {cats,totEarned,totMax,totPct,overallPass};
  }

  function finishSession(){
    clearTimers(); S.submitted=true;
    const r=scoreSession();
    // record best (not for wrong-only drills)
    const key=S.mode==='full'?'__full':(S.mode==='wrong'?'__wrong':S.catId);
    if(S.mode!=='wrong') recordBest(S.examId,key,r.totPct);
    recordHistory({examId:S.examId, mode:S.mode, catId:S.catId||null, label:sessionLabel(),
      ts:Date.now(), pct:Math.round(r.totPct), earned:r.totEarned, max:r.totMax, n:S.items.length, pass:r.overallPass});
    renderResults(r);
  }

  // build a fresh session containing only the questions answered wrongly / kurang tepat
  function startWrongSession(){
    const wrong=S.items.filter((it,i)=>{ const sel=S.answers[i]; if(sel==null) return true; return it.type==='tkp'? it.opts[sel].score<5 : !it.opts[sel].isCorrect; });
    if(!wrong.length){ toast('Semua sudah tepat! 🎉'); return; }
    const items=wrong.map(cloneItem);
    const pace=S.ex.exam.durationMin*60/S.ex.exam.totalSoal;
    S={ examId:S.examId, mode:'wrong', catId:S.catId, ex:S.ex, items,
        answers:new Array(items.length).fill(null), flags:new Array(items.length).fill(false),
        cur:0, durationSec:Math.max(60,Math.ceil(items.length*pace)), endTs:Date.now()+Math.max(60,Math.ceil(items.length*pace))*1000, submitted:false };
    renderExamRunner();
  }

  function renderResults(r){
    const ex=S.ex;
    const v=h(`<div class="view wrap"></div>`);
    const pct=Math.round(r.totPct);
    const verdict = r.overallPass===null ? {cls:'neutral',txt:'Selesai!'} : (r.overallPass?{cls:'pass',txt:'Lulus Ambang Batas 🎉'}:{cls:'fail',txt:'Belum Lolos Ambang Batas'});
    const ringColor = r.overallPass===false?'var(--red)':(r.overallPass?'var(--green)':'var(--accent)');
    const C=2*Math.PI*80;
    v.appendChild(h(`
      <div class="card result-hero">
        <div class="ring-wrap">
          <svg width="184" height="184" viewBox="0 0 184 184">
            <circle cx="92" cy="92" r="80" fill="none" stroke="var(--fill)" stroke-width="14"/>
            <circle class="ring-prog" cx="92" cy="92" r="80" fill="none" stroke="${ringColor}" stroke-width="14" stroke-linecap="round"
              stroke-dasharray="${C}" stroke-dashoffset="${C}" data-c="${C}"
              transform="rotate(-90 92 92)" style="transition:stroke-dashoffset 1.1s var(--ease-out)"/>
          </svg>
          <div class="pct"><b>0%</b><span>${r.totEarned} / ${r.totMax} poin</span></div>
        </div>
        <div class="verdict ${verdict.cls}">${verdict.txt}</div>
        <div class="result-sub">${S.mode==='full'?'Simulasi penuh':'Latihan '+esc(r.cats[0].name)} · ${ex.short}</div>
      </div>`));

    // per-category breakdown
    const rows=h(`<div class="score-rows"></div>`);
    r.cats.forEach(g=>{
      const def=findCat(ex,g.catId);
      const cpct=Math.round(g.pct);
      const barColor=g.pass===false?'var(--red)':(g.pass?'var(--green)':'var(--accent)');
      const tag = g.pass==null ? `${cpct}%` : `<span class="${g.pass?'tag-pass':'tag-fail'}">${g.pass?'LULUS':'GAGAL'}</span>`;
      rows.appendChild(h(`
        <div class="score-row">
          <div class="nm">${esc(def?def.name:g.name)}<div style="font-size:12.5px;color:var(--muted);font-weight:500">${g.correct}/${g.total} benar${g.thresholdPct!=null?' · ambang '+Math.round(g.thresholdPct)+'%':''}</div></div>
          <div class="bar"><i data-w="${cpct}" style="width:0;background:${barColor}"></i></div>
          <div class="val">${tag}</div>
        </div>`));
    });
    staggerKids(rows);
    v.appendChild(rows);

    // stats
    const totalQ=S.items.length, answered=S.answers.filter(a=>a!=null).length, correct=r.cats.reduce((s,g)=>s+g.correct,0);
    v.appendChild(h(`
      <div class="stat-row">
        <div class="stat"><b>${correct}</b><span>Benar</span></div>
        <div class="stat"><b>${answered-correct}</b><span>Kurang tepat</span></div>
        <div class="stat"><b>${totalQ-answered}</b><span>Kosong</span></div>
      </div>`));

    if(r.overallPass===null) v.appendChild(h(`<p class="result-sub" style="text-align:center;margin-top:14px">ℹ️ PCPM BI tidak memakai ambang batas baku - fokus penguasaan materi & kecepatan (kompetitif).</p>`));

    // actions
    const wrongCount=S.items.filter((it,i)=>{ const sel=S.answers[i]; if(sel==null)return true; return it.type==='tkp'?it.opts[sel].score<5:!it.opts[sel].isCorrect; }).length;
    const b1=h(`<button class="btn btn-primary" style="margin-top:20px">📖 Lihat Pembahasan per Soal</button>`);
    b1.onclick=()=>renderReview(0);
    v.appendChild(b1);
    if(wrongCount>0){
      const bw=h(`<button class="btn btn-secondary" style="margin-top:12px">🎯 Latih ulang ${wrongCount} soal yang belum tepat</button>`);
      bw.onclick=()=>startWrongSession();
      v.appendChild(bw);
    }
    const b2=h(`<button class="btn btn-secondary" style="margin-top:12px">↻ Ulangi semua</button>`);
    b2.onclick=()=>{ if(S.mode==='wrong'){ const items=S.items.map(cloneItem); const pace=S.ex.exam.durationMin*60/S.ex.exam.totalSoal, dur=Math.max(60,Math.ceil(items.length*pace)); S={...S,items,answers:new Array(items.length).fill(null),flags:new Array(items.length).fill(false),cur:0,durationSec:dur,endTs:Date.now()+dur*1000,submitted:false}; renderExamRunner(); } else startSession(S.examId,S.catId,S.mode); };
    const bs=h(`<button class="btn btn-ghost" style="margin-top:12px">📊 Lihat Statistik</button>`);
    bs.onclick=()=>renderStats(S.examId);
    const b3=h(`<button class="btn btn-ghost" style="margin-top:12px">← Kembali ke ${esc(ex.short)}</button>`);
    b3.onclick=()=>renderExam(S.examId);
    v.appendChild(b2); v.appendChild(bs); v.appendChild(b3);
    v.appendChild(footer());
    setView(v,true, ()=>animateResults(pct));
    backTo(()=>renderExam(S.examId));
  }

  /* ====================== REVIEW (pembahasan) ====================== */
  function renderReview(idx){
    const v=h(`<div class="view"></div>`);
    v.appendChild(h(`
      <div class="exam-head"><div class="row">
        <div class="qcount" id="qcount" style="font-size:16px;font-weight:700;color:var(--text)">Pembahasan ${idx+1} / ${S.items.length}</div>
        <div class="nav-spacer" style="flex:1"></div>
        <button class="btn small btn-secondary" id="toResults" style="width:auto">Hasil</button>
      </div></div>`));
    const body=h(`<div class="wrap"></div>`);
    const it=S.items[idx], sel=S.answers[idx];
    const card=h(`<div class="card q-card view"></div>`);
    card.appendChild(h(`<div class="q-num">${S.mode!=='category'?esc(it.catName)+' · ':''}Soal ${idx+1}${it.type==='tkp'?' · TKP (skor 1-5)':''}${it.type==='fig'?' · Figural':''}</div>`));
    card.appendChild(h(`<div class="q-text">${esc(it.q)}</div>`));
    if(it.img) card.appendChild(h(`<div class="q-img">${it.img}</div>`));
    const opts=h(`<div class="opts ${it.type==='fig'?'grid2':''}"></div>`);
    const letters='ABCDE';
    it.opts.forEach((o,oi)=>{
      let cls='opt';
      if(it.type==='tkp'){
        if(oi===sel) cls+=' sel';
        if(o.isCorrect) cls+=' correct';
      }else{
        if(o.isCorrect) cls+=' correct';
        else if(oi===sel) cls+=' wrong';
      }
      const mark = o.isCorrect?'✓':(oi===sel?'✗':letters[oi]);
      const scoreTag = it.type==='tkp'?`<div class="score-tag">${o.score}</div>`:(o.isCorrect?`<div class="score-tag">+5</div>`:(oi===sel?`<div class="score-tag">0</div>`:''));
      opts.appendChild(h(`<div class="${cls}"><div class="mark">${mark}</div><div class="otext">${optContent(o)}</div>${scoreTag}</div>`));
    });
    card.appendChild(opts);
    const yourScore = sel!=null? it.opts[sel].score : 0;
    card.appendChild(h(`
      <div class="explain">
        <div class="lbl">💡 Pembahasan${it.type==='tkp'?` · poinmu: ${yourScore}/5`:(sel==null?' · (kosong)':(it.opts[sel].isCorrect?' · benar (+5)':' · kurang tepat (0)'))}</div>
        <p>${esc(it.e)}</p>
      </div>`));
    body.appendChild(card);

    const nav=h(`<div class="q-nav"></div>`);
    const prev=h(`<button class="btn btn-secondary">← Sebelumnya</button>`);
    prev.disabled=idx===0; prev.style.opacity=idx===0?.4:1;
    prev.onclick=()=>renderReview(idx-1);
    const isLast=idx===S.items.length-1;
    const next=h(`<button class="btn btn-primary">${isLast?'Selesai Pembahasan':'Soal berikutnya →'}</button>`);
    next.onclick=()=> isLast? finishSession() : renderReview(idx+1);
    nav.appendChild(prev); nav.appendChild(next);
    body.appendChild(nav);

    // jump palette (color by correctness)
    const pal=h(`<div class="card palette"></div>`); pal.appendChild(h(`<h4>Lompat ke soal</h4>`));
    const grid=h(`<div class="pal-grid"></div>`);
    S.items.forEach((q,k)=>{
      const s=S.answers[k]; const correctish = s!=null && (q.type==='tkp'? q.opts[s].score>=4 : q.opts[s].isCorrect);
      const b=h(`<button class="pal-btn ${k===idx?'current':''}" style="${correctish?'background:var(--green);color:#fff;border-color:var(--green)':(s!=null?'background:var(--red);color:#fff;border-color:var(--red)':'')}">${k+1}</button>`);
      b.onclick=()=>renderReview(k); grid.appendChild(b);
    });
    pal.appendChild(grid);
    body.appendChild(pal);
    body.appendChild(footer());
    v.appendChild(body);
    setView(v,true, ()=>{ const t=$('#toResults'); if(t) t.onclick=()=>finishSession(); });
    backTo(()=>finishSession());
  }

  /* ====================== STATISTIK ====================== */
  function renderStats(examId){
    const ex=DB[examId];
    const hist=getHistory(examId);
    const v=h(`<div class="view wrap"></div>`);
    v.appendChild(h(`<header class="hero" style="padding-bottom:0"><div class="eyebrow" style="color:${ex.accent}">Statistik · ${esc(ex.short)}</div><h1 style="font-size:28px">Riwayat Latihanmu</h1></header>`));

    if(!hist.length){
      v.appendChild(h(`<div class="card start-card" style="margin-top:18px;text-align:center"><p style="color:var(--muted)">Belum ada riwayat. Kerjakan latihan dulu, hasilnya akan tercatat di sini. 📈</p></div>`));
      const bb=h(`<button class="btn btn-primary" style="margin-top:16px">Mulai Latihan</button>`); bb.onclick=()=>renderExam(examId); v.appendChild(bb);
      v.appendChild(footer()); setView(v,true); backTo(()=>renderExam(examId)); return;
    }

    const n=hist.length, avg=Math.round(hist.reduce((s,r)=>s+r.pct,0)/n), best=Math.max(...hist.map(r=>r.pct));
    const passes=hist.filter(r=>r.pass===true).length;
    v.appendChild(h(`
      <div class="stat-row" style="margin-top:18px">
        <div class="stat"><b>${n}</b><span>Percobaan</span></div>
        <div class="stat"><b>${avg}%</b><span>Rata-rata</span></div>
        <div class="stat"><b style="color:var(--green)">${best}%</b><span>Terbaik</span></div>
        <div class="stat"><b>${passes}</b><span>Lulus ambang</span></div>
      </div>`));

    // trend (last up to 12)
    const trend=hist.slice(0,12).reverse();
    const bars=trend.map(r=>`<div class="tb" title="${r.pct}%"><i style="height:${Math.max(4,r.pct)}%;background:${r.pass===false?'var(--red)':(r.pass?'var(--green)':'var(--accent)')}"></i></div>`).join('');
    v.appendChild(h(`<div class="card" style="padding:18px;margin-top:14px"><h4 style="font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px">Tren skor (terbaru di kanan)</h4><div class="trend">${bars}</div></div>`));

    // history list
    v.appendChild(h(`<div class="section-title">Semua Percobaan</div>`));
    const list=h(`<div class="cat-list"></div>`);
    hist.forEach(r=>{
      const dt=new Date(r.ts), ds=dt.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'})+' '+dt.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
      const col=r.pass===false?'var(--red)':(r.pass?'var(--green)':'var(--accent)');
      list.appendChild(h(`
        <div class="cat-item" style="cursor:default">
          <div class="cat-emoji" style="font-size:18px;font-weight:800;color:${col};background:var(--fill);box-shadow:none">${r.pct}%</div>
          <div class="cat-meta"><h4>${esc(r.label||'Latihan')}</h4><p>${ds} · ${r.n||'-'} soal · ${r.earned}/${r.max} poin</p></div>
          <div class="cat-badge">${r.pass==null?'':(r.pass?'<span class="tag-pass">LULUS</span>':'<span class="tag-fail">GAGAL</span>')}</div>
        </div>`));
    });
    v.appendChild(list);

    const clr=h(`<button class="btn btn-danger" style="margin-top:16px">🗑 Hapus Riwayat ${esc(ex.short)}</button>`);
    clr.onclick=()=>confirmModal('Hapus riwayat?','Riwayat percobaan '+esc(ex.short)+' akan dihapus dari perangkat ini.','Hapus',()=>{ const d=load(); d.hist=(d.hist||[]).filter(r=>r.examId!==examId); save(d); toast('Riwayat dihapus'); renderStats(examId); });
    v.appendChild(clr);
    const bk=h(`<button class="btn btn-ghost" style="margin-top:12px">← Kembali</button>`); bk.onclick=()=>renderExam(examId); v.appendChild(bk);
    v.appendChild(footer());
    setView(v,true);
    backTo(()=>renderExam(examId));
  }

  /* ====================== shared UI ====================== */
  function footer(){
    return h(`<div class="footer">
      Soal di sini adalah <b>latihan</b> yang meniru format & materi resmi - soal asli ujian bersifat rahasia.<br>
      Selalu verifikasi jadwal & ketentuan di kanal resmi:
      <a href="https://sscasn.bkn.go.id" target="_blank" rel="noopener">sscasn.bkn.go.id</a> ·
      <a href="https://pcpmbi.rekrutmenbi.id" target="_blank" rel="noopener">pcpmbi.rekrutmenbi.id</a><br>
      Progress &amp; skor tersimpan di perangkat ini saja. Semoga sukses! 🚀
    </div>`);
  }
  function confirmModal(title,msg,okLabel,onOk){
    const bg=h(`<div class="modal-bg"><div class="modal"><h3>${esc(title)}</h3><p>${msg}</p><button class="btn btn-primary" id="mOk">${esc(okLabel)}</button><button class="btn btn-ghost" id="mCancel" style="margin-top:10px">Batal</button></div></div>`);
    document.body.appendChild(bg);
    const close=()=>bg.remove();
    bg.querySelector('#mOk').onclick=()=>{close();onOk();};
    bg.querySelector('#mCancel').onclick=close;
    bg.onclick=e=>{ if(e.target===bg)close(); };
  }
  let _back=null;
  function backTo(fn){ _back=fn; }
  document.getElementById('backBtn').onclick=()=>{ if(_back)_back(); };
  document.getElementById('brand').onclick=()=>renderHome();

  /* ====================== boot ====================== */
  if(!DB.cpns && !DB.pcpm){
    app.innerHTML='<div class="wrap" style="padding:40px 0;text-align:center;color:var(--muted)">Gagal memuat bank soal. Pastikan file di folder <b>data/</b> ikut terupload.</div>';
  } else {
    renderHome();
  }
})();
