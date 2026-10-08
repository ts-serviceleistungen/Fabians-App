const KEY="frostyx-fabian-v1";
const state=JSON.parse(localStorage.getItem(KEY)||"null")||{
  allowanceStart:"2026-09-21", allowanceAmount:10, expenses:[],
  events:[
    {date:"2026-10-09",title:"Fußballtraining",type:"football"},
    {date:"2026-10-10",title:"Triathlon-Training",type:"triathlon"}
  ], crystals:0
};
let page="home", month=new Date().getMonth(), year=new Date().getFullYear();

function save(){localStorage.setItem(KEY,JSON.stringify(state));updateQuick()}
function euro(n){return n.toLocaleString("de-DE",{style:"currency",currency:"EUR"})}
function dateKey(d){return d.toISOString().slice(0,10)}
function mondayCount(){
  // Schuljahr 2026/27 in Bayern beginnt am 15.09.2026.
  // Taschengeld wird jeden Montag ausgezahlt. Der erste Montag danach ist 21.09.2026.
  const schoolStart=new Date("2026-09-15T00:00:00");
  const firstMonday=new Date(schoolStart);
  const day=firstMonday.getDay(); // Sonntag=0, Montag=1
  const daysToMonday=(8-day)%7;
  firstMonday.setDate(firstMonday.getDate()+daysToMonday);
  const now=new Date(); now.setHours(23,59,59,999);
  if(now<firstMonday)return 0;
  return Math.floor((now-firstMonday)/604800000)+1;
}
function earned(){return mondayCount()*Number(state.allowanceAmount||0)}
function spent(){return state.expenses.reduce((s,e)=>s+Number(e.amount||0),0)}
function balance(){return earned()-spent()}
function updateQuick(){
  document.querySelector("#quickBalance").textContent=euro(balance());
  document.querySelector("#quickPoints").textContent=`${state.crystals} Kristalle`;
}
function setPage(p){
  page=p; render();
}
function render(){
  const titles={home:"Heute",calendar:"Mein Kalender",money:"Mein Taschengeld",games:"Meine Spiele",achievements:"Meine Erfolge"};
  document.querySelector("#pageTitle").textContent=titles[page]||"Frostyx";
  const c=document.querySelector("#pageContent");
  if(page==="home") c.innerHTML=home();
  if(page==="calendar") c.innerHTML=calendar();
  if(page==="money") c.innerHTML=money();
  if(page==="games") c.innerHTML=games();
  if(page==="achievements") c.innerHTML=achievements();
  bind();
  updateQuick();
}
function home(){
  const today=new Date(), k=dateKey(today);
  const ev=state.events.filter(e=>e.date===k);
  return `<div class="list">
    <div class="list-item"><div><b>Heute</b><br><span class="hint">${today.toLocaleDateString("de-DE",{weekday:"long",day:"2-digit",month:"long"})}</span></div><b>${ev.length} Termin${ev.length===1?"":"e"}</b></div>
    ${ev.map(e=>`<div class="list-item"><span>${icon(e.type)} ${escapeHtml(e.title)}</span><span>${typeName(e.type)}</span></div>`).join("")||`<div class="list-item">❄️ Heute ist noch kein Termin eingetragen.</div>`}
    <div class="list-item"><span>💰 Taschengeld</span><b>${euro(balance())}</b></div>
  </div>`;
}
function calendar(){
  const first=new Date(year,month,1), start=new Date(year,month,1-first.getDay()+1);
  let html=`<div class="calendar-head"><button class="small-btn" id="prevMonth">‹</button><b>${first.toLocaleDateString("de-DE",{month:"long",year:"numeric"})}</b><button class="small-btn" id="nextMonth">›</button></div>`;
  html+=`<div class="calendar-grid">${["Mo","Di","Mi","Do","Fr","Sa","So"].map(x=>`<div class="dow">${x}</div>`).join("")}`;
  for(let i=0;i<42;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);const k=dateKey(d);
    const ev=state.events.filter(e=>e.date===k);
    html+=`<div class="day ${d.getMonth()!==month?"muted":""} ${k===dateKey(new Date())?"today":""}" data-date="${k}">
      <div class="daynum">${d.getDate()}</div>${ev.slice(0,3).map(e=>`<div class="event-dot ${e.type}">${icon(e.type)} ${escapeHtml(e.title)}</div>`).join("")}</div>`;
  }
  html+=`</div><hr style="border-color:rgba(103,201,255,.15);margin:18px 0">
  <h3>Termin hinzufügen</h3>
  <div class="form-row"><label>Datum<input id="eventDate" type="date" value="${dateKey(new Date())}"></label><label>Art<select id="eventType"><option value="school">🏫 Schule</option><option value="football">⚽ Fußball</option><option value="triathlon">🏊 Triathlon</option><option value="other">⭐ Sonstiges</option></select></label></div>
  <label>Termin<input id="eventTitle" placeholder="z. B. Training um 17:00 Uhr"></label>
  <button class="primary" id="addEvent">Termin speichern</button>
  <div class="list">${state.events.slice().sort((a,b)=>a.date.localeCompare(b.date)).map((e,i)=>`<div class="list-item"><span>${icon(e.type)} ${escapeHtml(e.date)} – ${escapeHtml(e.title)}</span><button class="small-btn danger delete-event" data-i="${i}">Löschen</button></div>`).join("")}</div>`;
  return html;
}
function money(){
  return `<div class="money-card">
    <div><div class="eyebrow">DEIN EISSCHATZ</div><div class="balance">${euro(balance())}</div><p class="hint">Automatisch: ${euro(state.allowanceAmount)} jeden Montag seit Schulbeginn 2026/27</p></div>
    <div class="glass" style="padding:15px;border-radius:15px"><b>📈 Überblick</b><div class="list"><div class="list-item"><span>Erhalten</span><b>${euro(earned())}</b></div><div class="list-item"><span>Ausgegeben</span><b>${euro(spent())}</b></div><div class="list-item"><span>Montagszahlungen</span><b>${mondayCount()}</b></div></div></div>
  </div>
  <hr style="border-color:rgba(103,201,255,.15);margin:20px 0">
  <h3>💸 Taschengeld ausgeben</h3>
  <div class="form-row"><label>Betrag (€)<input id="expenseAmount" type="number" min="0.01" step="0.01" placeholder="15,00"></label><label>Wofür?<input id="expenseReason" placeholder="z. B. Fußballkarten"></label></div>
  <button class="primary" id="addExpense">Ausgabe speichern</button>
  <h3>Ausgaben</h3><div class="list">${state.expenses.length?state.expenses.slice().reverse().map((e,i)=>`<div class="list-item"><span>💸 ${escapeHtml(e.date)} · ${escapeHtml(e.reason)}</span><b>− ${euro(Number(e.amount))}</b></div>`).join(""):`<div class="list-item">Noch keine Ausgaben.</div>`}</div>`;
}
function games(){
  return `<div class="list-item"><span>💎 Kristalle</span><span class="crystal-count">${state.crystals}</span></div>
  <div class="game-grid" style="margin-top:12px">
    <div class="game glass" id="tapGame"><div style="font-size:45px">❄️</div><h3>Kristall-Klick</h3><p class="hint">Tippe Frostyx an und sammle Kristalle.</p><button class="primary">Spielen</button></div>
    <div class="game glass" id="memoryGame"><div style="font-size:45px">🧊</div><h3>Frostyx Memory</h3><p class="hint">Finde die gleichen Kristalle.</p><button class="primary">Spielen</button></div>
    <div class="game glass" id="quizGame"><div style="font-size:45px">🧠</div><h3>Frostyx Quiz</h3><p class="hint">Eine schnelle Frage.</p><button class="primary">Spielen</button></div>
  </div>
  <div id="gameArea"></div>`;
}
function achievements(){
  const a=[
    ["❄️","Erster Kristall","Sammle deinen ersten Kristall",state.crystals>=1],
    ["💎","Kristall-Sammler","Sammle 25 Kristalle",state.crystals>=25],
    ["🏆","Frostyx-Meister","Sammle 100 Kristalle",state.crystals>=100]
  ];
  return `<div class="achievements">${a.map(x=>`<div class="achievement"><div style="font-size:30px">${x[0]}</div><b>${x[1]}</b><p class="hint">${x[2]}</p><strong>${x[3]?"✓ geschafft":"🔒 noch gesperrt"}</strong></div>`).join("")}</div>`;
}
function bind(){
  document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>setPage(b.dataset.page));
  document.querySelector("#homeBtn").onclick=()=>setPage("home");
  const prev=document.querySelector("#prevMonth"); if(prev)prev.onclick=()=>{month--;if(month<0){month=11;year--}render()};
  const next=document.querySelector("#nextMonth"); if(next)next.onclick=()=>{month++;if(month>11){month=0;year++}render()};
  const add=document.querySelector("#addEvent"); if(add)add.onclick=()=>{const title=document.querySelector("#eventTitle").value.trim();if(!title)return alert("Bitte einen Termin eingeben.");state.events.push({date:document.querySelector("#eventDate").value,title,type:document.querySelector("#eventType").value});save();render()};
  document.querySelectorAll(".delete-event").forEach(b=>b.onclick=()=>{state.events.splice(Number(b.dataset.i),1);save();render()});
  const ex=document.querySelector("#addExpense");if(ex)ex.onclick=()=>{const amount=Number(document.querySelector("#expenseAmount").value),reason=document.querySelector("#expenseReason").value.trim();if(!amount||!reason)return alert("Bitte Betrag und Grund eintragen.");state.expenses.push({amount,reason,date:new Date().toLocaleDateString("de-DE")});save();render()};
  const tap=document.querySelector("#tapGame");if(tap)tap.onclick=()=>{state.crystals++;save();render();document.querySelector("#frostyxMessage").textContent="Stark gemacht! Ein Kristall für dich!"};
  const mem=document.querySelector("#memoryGame");if(mem)mem.onclick=memory;
  const quiz=document.querySelector("#quizGame");if(quiz)quiz.onclick=quizGame;
}
function memory(){
  const vals=["❄️","💎","⚽","🧊","❄️","💎","⚽","🧊"], shuffled=vals.sort(()=>Math.random()-.5);
  let first=null,lock=false,found=0;
  document.querySelector("#gameArea").innerHTML=`<div class="memory">${shuffled.map((x,i)=>`<button class="card" data-i="${i}" data-v="${x}">?</button>`).join("")}</div>`;
  document.querySelectorAll(".card").forEach(btn=>btn.onclick=()=>{
    if(lock||btn.textContent!=="?")return;btn.textContent=btn.dataset.v;
    if(!first){first=btn;return}
    if(first.dataset.v===btn.dataset.v){found++;first=null;if(found===4){state.crystals+=5;save();alert("Memory geschafft! +5 Kristalle");}}
    else{lock=true;setTimeout(()=>{first.textContent="?";btn.textContent="?";first=null;lock=false},650)}
  });
}
function quizGame(){
  const qs=[["Wie viele Tage hat eine Woche?",7,["5","7","10"]],["Welche Sportart nutzt einen Ball?",null,["Fußball","Schwimmen","Radfahren"]],["Welche Farbe hat Frostyx' Energie?",null,["Blau","Grün","Orange"]]];
  const q=qs[Math.floor(Math.random()*qs.length)];
  document.querySelector("#gameArea").innerHTML=`<div class="glass" style="padding:18px;margin-top:15px"><h3>🧠 ${q[0]}</h3>${q[2].map(o=>`<button class="small-btn quiz-answer" style="margin:4px" data-answer="${o}">${o}</button>`).join("")}</div>`;
  document.querySelectorAll(".quiz-answer").forEach(b=>b.onclick=()=>{const correct=(q[1]===7&&b.dataset.answer==="7")||(q[1]===null&&((q[0].startsWith("Welche Sportart"))?b.dataset.answer==="Fußball":b.dataset.answer==="Blau"));if(correct){state.crystals+=3;save();alert("Richtig! +3 Kristalle");}else alert("Fast! Versuch es beim nächsten Mal wieder.")});
}
function icon(t){return {school:"🏫",football:"⚽",triathlon:"🏊",other:"⭐"}[t]||"⭐"}
function typeName(t){return {school:"Schule",football:"Fußball",triathlon:"Triathlon",other:"Sonstiges"}[t]||"Termin"}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

document.querySelector("#parentBtn").onclick=()=>{document.querySelector("#parentModal").classList.remove("hidden");document.querySelector("#allowanceStart").value=state.allowanceStart;document.querySelector("#allowanceAmount").value=state.allowanceAmount};
document.querySelector("#closeParent").onclick=()=>document.querySelector("#parentModal").classList.add("hidden");
document.querySelector("#saveSettings").onclick=()=>{state.allowanceStart=document.querySelector("#allowanceStart").value;state.allowanceAmount=Number(document.querySelector("#allowanceAmount").value||10);save();document.querySelector("#parentModal").classList.add("hidden");render()};
const LOGIN_USER="Fabian";
const LOGIN_PASS="Fabian2016";
const SESSION_KEY="frostyx-login";

function showApp(){
  document.querySelector("#loginScreen").classList.add("hidden");
}
function showLogin(){
  document.querySelector("#loginScreen").classList.remove("hidden");
  document.querySelector("#loginPass").value="";
}
function doLogin(){
  const u=document.querySelector("#loginUser").value.trim();
  const p=document.querySelector("#loginPass").value;
  const err=document.querySelector("#loginError");
  if(u===LOGIN_USER && p===LOGIN_PASS){
    sessionStorage.setItem(SESSION_KEY,"1");
    err.textContent="";
    showApp();
  }else{
    err.textContent="Benutzername oder Passwort ist falsch.";
  }
}
document.querySelector("#loginBtn").onclick=doLogin;
document.querySelector("#loginPass").addEventListener("keydown",e=>{if(e.key==="Enter")doLogin()});
document.querySelector("#logoutBtn").onclick=()=>{
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
};
if(sessionStorage.getItem(SESSION_KEY)==="1") showApp();
else showLogin();

render();
