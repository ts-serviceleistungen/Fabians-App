const { createClient } = window.supabase;
const db = createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY);
const CUSTOMER_FUNCTION_URL=`${window.SUPABASE_URL}/functions/v1/notify-customer`;
const CONFIRM_FUNCTION_URL=`${window.SUPABASE_URL}/functions/v1/confirm-appointment`;

const loginEl = document.getElementById('login');
const dashEl = document.getElementById('dash');
const loginForm = document.getElementById('loginForm');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const loginMsg = document.getElementById('loginMsg');
const logoutBtn = document.getElementById('logout');
const refreshBtn = document.getElementById('refresh');
const listEl = document.getElementById('list');
const userEl = document.getElementById('user');
const newEl = document.getElementById('newc');
const openEl = document.getElementById('open');
const todayEl = document.getElementById('today');
const dashboardHome = document.getElementById('dashboardHome');
const requestsView = document.getElementById('requestsView');
const receiptsView = document.getElementById('receiptsView');
const invoicesView = document.getElementById('invoicesView');
const offersView = document.getElementById('offersView');
const customersView = document.getElementById('customersView');
const customerList = document.getElementById('customerList');
const customerSearch = document.getElementById('customerSearch');
const customerForm = document.getElementById('customerForm');
const customerMsg = document.getElementById('customerMsg');
const customerCount = document.getElementById('customerCount');
const customerId = document.getElementById('customerId');
const customerNumber = document.getElementById('customerNumber');
const customerCompany = document.getElementById('customerCompany');
const customerFirstName = document.getElementById('customerFirstName');
const customerLastName = document.getElementById('customerLastName');
const customerStreet = document.getElementById('customerStreet');
const customerHouseNumber = document.getElementById('customerHouseNumber');
const customerZip = document.getElementById('customerZip');
const customerCity = document.getElementById('customerCity');
const customerPhone = document.getElementById('customerPhone');
const customerEmail = document.getElementById('customerEmail');
const customerNotes = document.getElementById('customerNotes');
const saveCustomerBtn = document.getElementById('saveCustomerBtn');
const cancelCustomerBtn = document.getElementById('cancelCustomerBtn');
const offerList = document.getElementById('offerList');
const offerSearch = document.getElementById('offerSearch');
const offerStatusFilter = document.getElementById('offerStatusFilter');
const offerTotal = document.getElementById('offerTotal');
const offerOpenTotal = document.getElementById('offerOpenTotal');
const offerAcceptedTotal = document.getElementById('offerAcceptedTotal');
const offerRejectedTotal = document.getElementById('offerRejectedTotal');
const offerCount = document.getElementById('offerCount');
const refreshOffersBtn = document.getElementById('refreshOffersBtn');
const invoiceList = document.getElementById('invoiceList');
const invoiceTotal = document.getElementById('invoiceTotal');
const invoiceMonthTotal = document.getElementById('invoiceMonthTotal');
const invoiceSearch = document.getElementById('invoiceSearch');
const pageTitle = document.getElementById('pageTitle');
const dashNew = document.getElementById('dashNew');
const dashOpen = document.getElementById('dashOpen');
const dashToday = document.getElementById('dashToday');
const dashReceiptCount = document.getElementById('dashReceiptCount');
const dashYearGross = document.getElementById('dashYearGross');
const dashMonthGross = document.getElementById('dashMonthGross');
const dashYearCash = document.getElementById('dashYearCash');
const dashYearCard = document.getElementById('dashYearCard');
const dashYearTotal = document.getElementById('dashYearTotal');
const dashMonthTotal = document.getElementById('dashMonthTotal');
const dashInvoiceGross = document.getElementById('dashInvoiceGross');
const dashProfit = document.getElementById('dashProfit');

const INVOICE_TOTAL_URL = 'https://script.google.com/macros/s/AKfycbziO0qeGhs0URutEScjmDNF3tUPGiefZW37s6JxOQSJoY1PHpt2LwxzRQCxC0AMgX0q/exec';
const RECEIPT_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbziO0qeGhs0URutEScjmDNF3tUPGiefZW37s6JxOQSJoY1PHpt2LwxzRQCxC0AMgX0q/exec';
const BELEG_UPLOAD_URL = 'https://script.google.com/macros/s/AKfycbxJDx4fWqtWjWj056-ZsFJyVPBgB-6uarBsIH0Fmbf30F025o9CmlfhfKXvLU-KLh3Y/exec';
const receiptForm = document.getElementById('receiptForm');
const receiptImage = document.getElementById('receiptImage');
const receiptDate = document.getElementById('receiptDate');
const receiptMerchant = document.getElementById('receiptMerchant');
const receiptNumber = document.getElementById('receiptNumber');
const receiptGross = document.getElementById('receiptGross');
const receiptCategory = document.getElementById('receiptCategory');
const receiptDescription = document.getElementById('receiptDescription');
const receiptPayment = document.getElementById('receiptPayment');
const receiptMsg = document.getElementById('receiptMsg');
const saveReceiptBtn = document.getElementById('saveReceiptBtn');
const ocrMsg = document.getElementById('ocrMsg');
const receiptList = document.getElementById('receiptList');

const modal = document.getElementById('detailModal');
const detailTitle = document.getElementById('detailTitle');
const detailBody = document.getElementById('detailBody');
const detailActions = document.getElementById('detailActions');
const closeModal = document.getElementById('closeModal');

const filterCountEl = document.getElementById('filterCount');
const searchFilter = document.getElementById('searchFilter');
const statusFilter = document.getElementById('statusFilter');
const dateFilter = document.getElementById('dateFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const calendarEl = document.getElementById('calendar');
const calendarTitleEl = document.getElementById('calendarTitle');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const appointmentOverview = document.getElementById('appointmentOverview');
const appointmentTitleEl = document.getElementById('appointmentTitle');
const appointmentSummaryEl = document.getElementById('appointmentSummary');
const appointmentTodayBtn = document.getElementById('appointmentToday');
const appointmentPrevBtn = document.getElementById('appointmentPrev');
const appointmentNextBtn = document.getElementById('appointmentNext');
const appointmentViewButtons = document.querySelectorAll('.appt-view');
const dashInvoiceMonth = document.getElementById('dashInvoiceMonth');
const dashProfitMonth = document.getElementById('dashProfitMonth');
const financialYearLabel = document.getElementById('financialYearLabel');
const financialYearLabel2 = document.getElementById('financialYearLabel2');
const financialMonthLabel = document.getElementById('financialMonthLabel');
const financialMonthlyTable = document.getElementById('financialMonthlyTable');
const RECHNUNGS_API_URL = 'https://script.google.com/macros/s/AKfycbxJDx4fWqtWjWj056-ZsFJyVPBgB-6uarBsIH0Fmbf30F025o9CmlfhfKXvLU-KLh3Y/exec';
const ANGEBOTE_API_URL = RECHNUNGS_API_URL;

// Google Apps Script GET-API über JSONP.
// GitHub Pages darf die Apps-Script-Antwort nicht per fetch() lesen,
// weil Apps Script hier keinen Access-Control-Allow-Origin-Header liefert.
function googleApiJsonp(baseUrl, params={}, timeoutMs=330000){
  return new Promise((resolve,reject)=>{
    // Nur einfache Buchstaben/Ziffern im Callback-Namen verwenden.
    // Das ist mit Google Apps Script JSONP maximal kompatibel.
    const callbackName='tsGoogleApi'+Date.now()+Math.random().toString(36).slice(2);
    const script=document.createElement('script');
    let finished=false;
    let timer=null;

    const cleanup=()=>{
      if(finished)return;
      finished=true;
      try{delete window[callbackName];}catch(e){window[callbackName]=undefined;}
      if(script.parentNode)script.parentNode.removeChild(script);
      if(timer)clearTimeout(timer);
    };

    window[callbackName]=(data)=>{
      cleanup();
      resolve(data||{});
    };

    script.onerror=()=>{
      cleanup();
      reject(new Error('Google-API konnte nicht geladen werden.'));
    };

    timer=setTimeout(()=>{
      cleanup();
      reject(new Error('Google-API antwortet nicht rechtzeitig.'));
    },timeoutMs);

    const query=new URLSearchParams();
    Object.entries(params||{}).forEach(([key,value])=>{
      if(value!==undefined && value!==null)query.set(key,String(value));
    });
    query.set('callback',callbackName);
    query.set('v',String(Date.now()));

    script.src=baseUrl+'?'+query.toString();
    script.async=true;
    document.head.appendChild(script);
  });
}
const OFFERS_INITIAL_SYNC_KEY = 'ts_serviceleistungen_offers_initial_sync_v5';
let currentOffers=[];
let currentCustomers=[];
let appointmentDate = new Date();
let appointmentView = 'day';
let calendarMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let requests=[];let selectedRequest=null;
let currentInvoiceTotal=null;
let currentReceiptTotal=null;

function escapeHtml(value){return String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;')}
function formatDate(value){if(!value)return '—';const d=new Date(value+'T00:00:00');return Number.isNaN(d.getTime())?value:d.toLocaleDateString('de-DE')}
function showLoginMessage(message){loginMsg.textContent=message;loginMsg.classList.remove('hidden')}
async function init(){const {data,error}=await db.auth.getSession();if(error){showLoginMessage(error.message);return}const session=data.session;if(!session){loginEl.classList.remove('hidden');dashEl.classList.add('hidden');return}loginEl.classList.add('hidden');dashEl.classList.remove('hidden');if(userEl) userEl.textContent=session.user.email||'';showView('dashboard');await load();await loadReceipts();await loadFinancials();await loadInvoices();await loadOffers(false)}
async function load(){
  listEl.innerHTML='<p>Aktualisiere Anfragen...</p>';
  const {data,error}=await db.from('requests').select('*').order('created_at',{ascending:false});
  if(error){
    listEl.innerHTML=`<p class="notice">Fehler beim Laden: ${escapeHtml(error.message)}</p>`;
    return;
  }
  requests=data||[];
  const newCount=requests.filter(x=>x.status==='Neue Anfrage').length;
  const openCount=requests.filter(x=>!['Abgelehnt','Abgeschlossen'].includes(x.status)).length;
  const today=new Date().toLocaleDateString('sv-SE');
  const todayCount=requests.filter(x=>x.requested_date===today).length;

  newEl.textContent=newCount;
  openEl.textContent=openCount;
  todayEl.textContent=todayCount;
  dashNew.textContent=newCount;
  dashOpen.textContent=openCount;
  dashToday.textContent=todayCount;

  if(!requests.length){
    listEl.innerHTML='<p>Keine Anfragen vorhanden.</p>';
    return;
  }

  listEl.innerHTML=requests.map(x=>`<div class="row request-row"><div><b>${escapeHtml(x.first_name)} ${escapeHtml(x.last_name)}</b><small>${escapeHtml(x.phone)}<br>${escapeHtml(x.email)}</small></div><div><b>${escapeHtml(x.make)} ${escapeHtml(x.model)}</b><small>${escapeHtml(x.vehicle_type)} · ${escapeHtml(x.color)}</small></div><div><b>${escapeHtml(x.service_type)}</b><small>${formatDate(x.requested_date)} · ${escapeHtml(x.requested_time||'—')}</small></div><div><span class="badge">${escapeHtml(x.status||'Neue Anfrage')}</span><br><button data-action="details" data-id="${x.id}">Details</button><button data-action="confirm" data-id="${x.id}">Bestätigen</button><button data-action="alternative" data-id="${x.id}">Alternative</button><button data-action="reject" data-id="${x.id}">Ablehnen</button><button data-action="delete" data-id="${x.id}">Löschen</button></div></div>`).join('');
}
function field(label,value){return `<div class="detail-field"><small>${escapeHtml(label)}</small><div>${escapeHtml(value||'—')}</div></div>`}
function arrayValue(value){return Array.isArray(value)&&value.length?value.join(', '):'—'}
async function openDetails(id){selectedRequest=requests.find(x=>x.id===id);if(!selectedRequest)return;const x=selectedRequest;detailTitle.textContent=`${x.first_name||''} ${x.last_name||''}`.trim()||'Anfrage';detailBody.innerHTML=`<div class="detail-grid">${field('Status',x.status)}${field('Leistung',x.service_type)}${field('Wunschdatum',formatDate(x.requested_date))}${field('Wunschzeit',x.requested_time)}${field('Vorname',x.first_name)}${field('Nachname',x.last_name)}${field('Telefon',x.phone)}${field('E-Mail',x.email)}${field('Fahrzeugart',x.vehicle_type)}${field('Hersteller',x.make)}${field('Modell / Typ',x.model)}${field('Farbe',x.color)}${field('Baujahr',x.year)}${field('Kennzeichen',x.plate)}${field('Verschmutzungsgrad',x.dirt_level)}${field('Tierhaare',x.pet_hair)}${field('Menge',x.quantity)}${field('Reifentyp',x.tire_type)}${field('Gewünschte Leistungen',arrayValue(x.care_options))}</div><div class="detail-text">${field('Details / Nachricht',x.details||x.message)}</div><div id="photoGallery" class="photo-gallery"><p>Fotos werden geladen...</p></div>`;detailActions.innerHTML='<button class="primary" data-modal-action="confirm">Termin bestätigen</button><button data-modal-action="alternative">Alternativtermin</button><button data-modal-action="reject">Anfrage ablehnen</button><button data-modal-action="delete">Löschen</button>';modal.classList.remove('hidden');await loadRequestPhotos(x.id)}
async function loadRequestPhotos(requestId){const gallery=document.getElementById('photoGallery');if(!gallery)return;const {data,error}=await db.from('request_photos').select('storage_path,created_at').eq('request_id',requestId).order('created_at',{ascending:true});if(error){gallery.innerHTML=`<p class="notice">Fotos konnten nicht geladen werden: ${escapeHtml(error.message)}</p>`;return}if(!data||!data.length){gallery.innerHTML='<p>Keine Fotos vorhanden.</p>';return}const items=[];for(const photo of data){const {data:urlData,error:urlError}=await db.storage.from('vehicle-photos').createSignedUrl(photo.storage_path,3600);if(urlError||!urlData?.signedUrl){items.push(`<div class="photo-item"><p>Foto konnte nicht geladen werden.</p></div>`)}else{items.push(`<a class="photo-item" href="${escapeHtml(urlData.signedUrl)}" target="_blank" rel="noopener"><img src="${escapeHtml(urlData.signedUrl)}" alt="Fahrzeugfoto" loading="lazy"></a>`)}}gallery.innerHTML=`<h3>Fahrzeugfotos</h3><div class="photo-grid">${items.join('')}</div>`}
function closeDetails(){modal.classList.add('hidden');selectedRequest=null}
async function sendCustomerEmail(r,status,extra={}){const {data:{session}}=await db.auth.getSession();if(!session)throw new Error('Admin-Sitzung abgelaufen');const url=status==='Bestätigt'?CONFIRM_FUNCTION_URL:CUSTOMER_FUNCTION_URL;const body=status==='Bestätigt'?{request:r}:{request:r,status,...extra};const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${session.access_token}`},body:JSON.stringify(body)});if(!response.ok){const t=await response.text();throw new Error(t||'E-Mail konnte nicht gesendet werden')}return response.json()}
async function syncCalendarForRequest(previous,updated){
  const customer=`${updated.first_name||''} ${updated.last_name||''}`.trim() || 'Kunde';
  const marker=`Kundentermin – ${customer} – ${updated.service_type||'Leistung'}`;
  const {error:delError}=await db.from('personal_calendar_events').delete().eq('title',marker);
  if(delError) throw new Error('Kalendereintrag konnte nicht bereinigt werden: '+delError.message);
  if(updated.status!=='Bestätigt' || !updated.requested_date || !updated.requested_time) return;
  const start=new Date(`${updated.requested_date}T${String(updated.requested_time).slice(0,8)}`);
  if(Number.isNaN(start.getTime())) throw new Error('Ungültiges Termin-Datum oder ungültige Uhrzeit.');
  let hours=2;
  const st=String(updated.service_type||'').toLowerCase();
  const opts=Array.isArray(updated.care_options)?updated.care_options.map(x=>String(x).toLowerCase()):[];
  if(st.includes('garten')) hours=Math.max(4,opts.length*4);
  else if(st.includes('fahrzeug')){
    let total=0; opts.forEach(o=>{if(o.includes('außenreinigung'))total+=2;else if(o.includes('innenraumreinigung'))total+=4;else if(o.includes('polsterreinigung'))total+=4;else if(o.includes('komplettaufbereitung'))total+=8;else if(o.includes('politur'))total+=8;else if(o.includes('lackversiegelung'))total+=8}); hours=total||2;
  }
  const end=new Date(start.getTime()+hours*3600000);
  const {error:insError}=await db.from('personal_calendar_events').insert({title:marker,event_type:st.includes('garten')?'garden':st.includes('fahrzeug')?'vehicle':'other',start_time:start.toISOString(),end_time:end.toISOString()});
  if(insError) throw new Error('Kalendereintrag konnte nicht erstellt werden: '+insError.message);
}

async function updateRequest(id,changes,emailStatus){const current=requests.find(x=>x.id===id);if(!current)return false;const {error}=await db.from('requests').update(changes).eq('id',id);if(error){alert('Fehler: '+error.message);return false}const updated={...current,...changes};try{await syncCalendarForRequest(current,updated)}catch(err){alert('Anfrage wurde gespeichert, aber der Kalender konnte nicht synchronisiert werden.\n\n'+err.message)}if(emailStatus){try{await sendCustomerEmail(updated,emailStatus,{old_status:current.status})}catch(err){alert('Anfrage wurde gespeichert, aber die Kunden-E-Mail konnte nicht gesendet werden.\n\n'+err.message)}}await load();return true}
async function confirmRequest(id){if(!confirm('Soll diese Terminanfrage als bestätigt markiert werden?'))return;await updateRequest(id,{status:'Bestätigt'},'Bestätigt');closeDetails()}
async function rejectRequest(id){if(!confirm('Soll diese Anfrage wirklich abgelehnt werden?'))return;await updateRequest(id,{status:'Abgelehnt'},'Abgelehnt');closeDetails()}
async function alternativeRequest(id){const r=requests.find(x=>x.id===id);if(!r)return;const date=prompt('Welches Alternativdatum möchtest du anbieten?',r.requested_date||'');if(date===null)return;const time=prompt('Welche Alternativzeit möchtest du anbieten?',r.requested_time||'');if(time===null)return;await updateRequest(id,{status:'Alternativtermin',requested_date:date||r.requested_date,requested_time:time||r.requested_time},'Alternativtermin');closeDetails()}
async function deleteRequest(id){
  const r=requests.find(x=>x.id===id);
  if(!r)return;
  const name=`${r.first_name||''} ${r.last_name||''}`.trim()||'diese Anfrage';
  if(!confirm(`Möchtest du die Terminanfrage von ${name} wirklich löschen?\n\nDie Anfrage wird dauerhaft aus der Datenbank entfernt.`))return;

  try{
    // Zugehörige Fotodatensätze ermitteln und aus dem Storage entfernen.
    const {data:photos,error:photoLoadError}=await db.from('request_photos').select('storage_path').eq('request_id',id);
    if(photoLoadError)throw photoLoadError;

    if(photos?.length){
      const paths=photos.map(p=>p.storage_path).filter(Boolean);
      if(paths.length){
        const {error:storageError}=await db.storage.from('vehicle-photos').remove(paths);
        // Falls für den Storage noch keine DELETE-Policy vorhanden ist,
        // darf das Löschen der Anfrage trotzdem nicht blockiert werden.
        if(storageError)console.warn('Fahrzeugfotos konnten nicht aus dem Storage gelöscht werden:',storageError.message);
      }
    }

    const {error:photosError}=await db.from('request_photos').delete().eq('request_id',id);
    if(photosError)throw photosError;

    const {error}=await db.from('requests').delete().eq('id',id);
    if(error)throw error;

    closeDetails();
    await load();
  }catch(err){
    alert('Die Anfrage konnte nicht gelöscht werden.\n\n'+err.message);
  }
}

function appointmentDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function appointmentDateFromKey(value) {
  if (!value) return new Date();
  const [y, m, d] = value.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function startOfWeek(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const monday = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - monday);
  return d;
}

function isAppointmentVisible(r) {
  return !!r.requested_date && normalizeStatus(r.status) !== 'Abgelehnt';
}

function sortedAppointments(items) {
  return items.slice().sort((a, b) => {
    const ad = `${a.requested_date || ''} ${a.requested_time || '99:99'}`;
    const bd = `${b.requested_date || ''} ${b.requested_time || '99:99'}`;
    return ad.localeCompare(bd) || String(a.last_name || '').localeCompare(String(b.last_name || ''));
  });
}

function appointmentCard(r, showDate = true) {
  const status = normalizeStatus(r.status);
  const dateText = formatDate(r.requested_date);
  const timeText = r.requested_time || 'Keine Uhrzeit';
  const vehicle = r.service_type === 'Gartenarbeiten'
    ? 'Gartenarbeiten'
    : ([r.make, r.model].filter(Boolean).join(' ') || r.vehicle_type || 'Fahrzeug');
  const cardStyle = r.service_type === 'Gartenarbeiten'
    ? 'border-left:5px solid #39a852;background:rgba(57,168,82,.10)'
    : (r.service_type === 'Fahrzeugpflege'
      ? 'border-left:5px solid #e58bb1;background:rgba(229,139,177,.10)'
      : 'border-left:5px solid #999');
  return `
    <div class="appointment-card" style="${cardStyle}">
      <div class="appointment-time">
        <b>${escapeHtml(timeText)}</b>
        ${showDate ? `<small>${escapeHtml(dateText)}</small>` : ''}
      </div>
      <div class="appointment-main">
        <b>${escapeHtml(`${r.first_name || ''} ${r.last_name || ''}`.trim() || 'Unbekannter Kunde')}</b>
        <span>${escapeHtml(vehicle)} · ${escapeHtml(r.service_type || 'Leistung')}</span>
        <small>${escapeHtml(r.phone || '')} ${r.plate ? `· ${escapeHtml(r.plate)}` : ''}</small>
      </div>
      <div class="appointment-actions">
        <span class="badge status-${escapeHtml(status.replaceAll(' ', '-'))}">${escapeHtml(status)}</span>
        <button type="button" data-appt-action="details" data-id="${r.id}">Details</button>
        <button type="button" data-appt-action="move" data-id="${r.id}">Termin ändern</button>
        ${status !== 'Abgeschlossen' ? `<button type="button" data-appt-action="complete" data-id="${r.id}">Erledigt</button>` : ''}
      </div>
    </div>`;
}

function renderAppointments() {
  if (!appointmentOverview) return;
  const all = sortedAppointments(requests.filter(isAppointmentVisible));
  appointmentSummaryEl.textContent = `${all.length} Termine mit Datum`;

  let title = '';
  let visible = [];
  let showDate = true;

  if (appointmentView === 'day') {
    const key = appointmentDateKey(appointmentDate);
    title = appointmentDate.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    visible = all.filter(r => r.requested_date === key);
    showDate = false;
  } else if (appointmentView === 'week') {
    const start = startOfWeek(appointmentDate);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    title = `${start.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })} – ${end.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
    const startKey = appointmentDateKey(start), endKey = appointmentDateKey(end);
    visible = all.filter(r => r.requested_date >= startKey && r.requested_date <= endKey);
  } else {
    title = appointmentDate.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
    const monthKey = `${appointmentDate.getFullYear()}-${String(appointmentDate.getMonth() + 1).padStart(2, '0')}`;
    visible = all.filter(r => String(r.requested_date || '').startsWith(monthKey));
  }

  appointmentTitleEl.textContent = title.charAt(0).toUpperCase() + title.slice(1);

  if (appointmentView === 'month') {
    if (!visible.length) {
      appointmentOverview.innerHTML = '<div class="appointment-empty">Keine Termine in diesem Zeitraum.</div>';
      return;
    }
    const grouped = {};
    visible.forEach(r => { (grouped[r.requested_date] ||= []).push(r); });
    appointmentOverview.innerHTML = Object.keys(grouped).sort().map(key => `
      <div class="appointment-day-group">
        <h3>${escapeHtml(formatDate(key))}</h3>
        ${sortedAppointments(grouped[key]).map(r => appointmentCard(r, false)).join('')}
      </div>`).join('');
  } else if (appointmentView === 'day') {
    renderDayTimeline(visible);
  } else {
    if (!visible.length) {
      appointmentOverview.innerHTML = '<div class="appointment-empty">Keine Termine in diesem Zeitraum.</div>';
      return;
    }
    appointmentOverview.innerHTML = visible.map(r => appointmentCard(r, showDate)).join('');
  }
}

function renderDayTimeline(items) {
  const sorted = sortedAppointments(items);
  const withTime = sorted.filter(r => /^\d{2}:\d{2}$/.test(r.requested_time || ''));
  const withoutTime = sorted.filter(r => !/^\d{2}:\d{2}$/.test(r.requested_time || ''));
  const startHour = 7;
  const endHour = 20;
  const byHour = {};
  withTime.forEach(r => {
    const hour = Number(r.requested_time.slice(0, 2));
    const minute = Number(r.requested_time.slice(3, 5));
    const key = `${String(hour).padStart(2, '0')}:00`;
    (byHour[key] ||= []).push(r);
    r.__minute = minute;
  });

  let html = '';
  for (let hour = startHour; hour <= endHour; hour++) {
    const key = `${String(hour).padStart(2, '0')}:00`;
    const entries = byHour[key] || [];
    html += `
      <div class="day-slot ${entries.length ? 'has-appointments' : ''}">
        <div class="day-slot-time">${key}</div>
        <div class="day-slot-content">
          ${entries.length ? entries.sort((a,b) => (a.__minute || 0) - (b.__minute || 0)).map(r => appointmentCard(r, false)).join('') : '<span class="day-slot-empty">frei</span>'}
        </div>
      </div>`;
  }

  if (withoutTime.length) {
    html += `
      <div class="day-slot has-appointments no-time">
        <div class="day-slot-time">—</div>
        <div class="day-slot-content">
          <div class="day-slot-label">Termine ohne Uhrzeit</div>
          ${withoutTime.map(r => appointmentCard(r, false)).join('')}
        </div>
      </div>`;
  }

  appointmentOverview.innerHTML = html || '<div class="appointment-empty">Keine Termine für diesen Tag.</div>';
}

async function moveAppointment(id) {
  const r = requests.find(x => x.id === id);
  if (!r) return;
  const date = prompt('Neues Datum (TT.MM.JJJJ oder JJJJ-MM-TT):', formatDate(r.requested_date));
  if (date === null) return;
  const normalized = /^\d{2}\.\d{2}\.\d{4}$/.test(date)
    ? `${date.slice(6)}-${date.slice(3,5)}-${date.slice(0,2)}`
    : date;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    alert('Bitte ein gültiges Datum eingeben.');
    return;
  }
  const time = prompt('Neue Uhrzeit (z. B. 09:30):', r.requested_time || '');
  if (time === null) return;
  if (time && !/^\d{2}:\d{2}$/.test(time)) {
    alert('Bitte die Uhrzeit im Format HH:MM eingeben.');
    return;
  }
  const ok = await updateRequest(id, { requested_date: normalized, requested_time: time || r.requested_time }, null);
  if (ok) {
    alert('Termin wurde geändert.');
    renderAppointments();
  }
}

async function completeAppointment(id) {
  if (!confirm('Soll dieser Termin als erledigt markiert werden?')) return;
  await updateRequest(id, { status: 'Abgeschlossen' }, null);
  renderAppointments();
}

function shiftAppointmentPeriod(direction) {
  if (appointmentView === 'day') appointmentDate.setDate(appointmentDate.getDate() + direction);
  else if (appointmentView === 'week') appointmentDate.setDate(appointmentDate.getDate() + direction * 7);
  else appointmentDate = new Date(appointmentDate.getFullYear(), appointmentDate.getMonth() + direction, 1);
  renderAppointments();
}


function getCalendarFilteredRequests(){
  if(!Array.isArray(requests)) return [];
  const search = searchFilter?.value?.trim().toLowerCase() || '';
  const status = statusFilter?.value || '';
  const date = dateFilter?.value || '';
  return requests.filter(r=>{
    if(status && normalizeStatus(r.status)!==status) return false;
    if(date && r.requested_date!==date) return false;
    if(search){
      const hay=[r.first_name,r.last_name,r.phone,r.email,r.vehicle_type,r.make,r.model,r.plate,r.service_type,r.status,r.details,r.message].join(' ').toLowerCase();
      if(!hay.includes(search)) return false;
    }
    return true;
  });
}

function renderCalendar(){
  if(!calendarEl) return;
  const year=calendarMonth.getFullYear();
  const month=calendarMonth.getMonth();
  const first=new Date(year,month,1);
  const daysInMonth=new Date(year,month+1,0).getDate();
  const mondayOffset=(first.getDay()+6)%7;
  const todayKey=appointmentDateKey(new Date());
  const selectedKey=dateFilter?.value||'';
  const names=['Mo','Di','Mi','Do','Fr','Sa','So'];
  const eventsByDate={};
  (requests||[]).filter(isAppointmentVisible).forEach(r=>{
    if(r.requested_date)(eventsByDate[r.requested_date] ||= []).push(r);
  });
  let html=names.map(n=>`<div class="calendar-weekday">${n}</div>`).join('');
  for(let i=0;i<mondayOffset;i++) html+='<div class="calendar-day empty"></div>';
  for(let day=1;day<=daysInMonth;day++){
    const key=appointmentDateKey(new Date(year,month,day));
    const entries=eventsByDate[key]||[];
    const dots=entries.slice(0,6).map(r=>{
      const st=String(r.service_type||'').toLowerCase();
      const cls=st.includes('garten')?'garden':st.includes('fahrzeug')?'vehicle':'other';
      return `<span class="calendar-dot ${cls}" title="${escapeHtml(r.first_name||'')} ${escapeHtml(r.last_name||'')}"></span>`;
    }).join('');
    const classes=['calendar-day'];
    if(key===todayKey)classes.push('today');
    if(key===selectedKey)classes.push('selected');
    html+=`<button type="button" class="${classes.join(' ')}" data-calendar-date="${key}"><div class="calendar-day-number">${day}</div>${entries.length?`<div class="calendar-day-count">${entries.length} Termin${entries.length===1?'':'e'}</div><div class="calendar-day-dots">${dots}</div>`:''}</button>`;
  }
  calendarEl.innerHTML=html;
  if(calendarTitleEl)calendarTitleEl.textContent=new Date(year,month,1).toLocaleDateString('de-DE',{month:'long',year:'numeric'});
  if(filterCountEl)filterCountEl.textContent=`${getCalendarFilteredRequests().length} von ${requests.length}`;
}

function renderCalendarRequests(){
  if(!calendarEl) return;
  const original=requests;
  const filtered=getCalendarFilteredRequests();
  if(filterCountEl) filterCountEl.textContent=`${filtered.length} von ${original.length}`;
  requests=filtered;
  renderCalendar();
  renderAppointments();
  requests=original;
}

function euro(value){
  return Number(value||0).toLocaleString('de-DE',{style:'currency',currency:'EUR'});
}

// Google-Sheets-Sync läuft bewusst im Hintergrund und darf die App nicht blockieren.
function syncReceiptToGoogle(row){
  if(!row || !row.id || !RECEIPT_SHEETS_URL)return;
  const payload={action:'syncReceipt',id:row.id,receipt_date:row.receipt_date||'',merchant:row.merchant||'',receipt_number:row.receipt_number||'',gross_amount:Number(row.gross_amount||0),category:row.category||'',description:row.description||'',payment_method:row.payment_method||'',storage_path:row.storage_path||''};
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),10000);
  fetch(RECEIPT_SHEETS_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(payload),signal:controller.signal})
    .catch(err=>console.warn('Google-Beleg-Sync:',err.message))
    .finally(()=>clearTimeout(timer));
}

function syncAllReceiptsToGoogle(rows){
  if(!Array.isArray(rows)||!rows.length)return;
  rows.forEach(row=>syncReceiptToGoogle(row));
}

async function loadFinancials(){
  const now=new Date();
  const year=now.getFullYear();
  const month=now.getMonth()+1;
  if(financialYearLabel) financialYearLabel.textContent=String(year);
  if(financialYearLabel2) financialYearLabel2.textContent=String(year);
  if(financialMonthLabel) financialMonthLabel.textContent=now.toLocaleDateString('de-DE',{month:'long',year:'numeric'});

  let invoiceYear=0, invoiceMonth=0;
  let monthlyInvoices=Array.from({length:12},()=>0);

  // First load the invoice API. A failure must NOT prevent the expense side
  // of the financial overview from being rendered.
  try{
    const result=await googleApiJsonp(RECHNUNGS_API_URL,{year:year});
    if(result && result.ok!==false){
      invoiceYear=Number(result.bruttoGesamtJahr ?? result.bruttoGesamt ?? 0)||0;
      if(Array.isArray(result.monatlich)){
        result.monatlich.forEach((v,i)=>{if(i<12) monthlyInvoices[i]=Number(v)||0;});
      }
      invoiceMonth=Number(result.bruttoGesamtMonat ?? monthlyInvoices[month-1] ?? 0)||0;

      // Monatswerte robust aus den gelieferten Rechnungszeilen ableiten.
      // Wichtig: Das bestehende Dashboard-Design und alle anderen Berechnungen bleiben unverändert.
      if(Array.isArray(result.rechnungen) && result.rechnungen.length){
        const parsed=result.rechnungen.map(r=>({
          amount:parseInvoiceMoney(
            r.bruttobetrag ?? r.brutto ?? r.gesamtbetrag ?? r.gesamt ?? r.betrag ?? r.amount ?? r.summe ?? 0
          ),
          date:String(
            r.rechnungsdatum ?? r.datum ?? r.date ?? r.invoice_date ?? r.rechnungsDate ?? r.created_at ?? ''
          ).trim()
        })).filter(r=>r.amount!==0 || r.date);

        // Nur dann aus Einzelrechnungen berechnen, wenn die API keine brauchbaren
        // Monatswerte geliefert hat. So werden Werte nicht doppelt addiert.
        const apiMonthlyHasValues=monthlyInvoices.some(v=>Number(v)>0);
        if(!apiMonthlyHasValues){
          monthlyInvoices=Array.from({length:12},()=>0);
          parsed.forEach(r=>{
            const d=parseFlexibleDate(r.date);
            if(d && d.getFullYear()===year) monthlyInvoices[d.getMonth()]+=r.amount;
          });
        }

        // Falls die API-Jahressumme nicht vorhanden wäre, ebenfalls aus den Zeilen rechnen.
        if(!invoiceYear){
          invoiceYear=parsed.reduce((sum,r)=>{
            const d=parseFlexibleDate(r.date);
            return d && d.getFullYear()===year ? sum+r.amount : sum;
          },0);
        }
        invoiceMonth=monthlyInvoices[month-1]||0;
      }
    }else{
      console.warn('Rechnungsdaten:',result.error||'API nicht erreichbar');
    }
  }catch(err){
    console.warn('Rechnungsdaten:',err.message);
  }

  const receiptTotals=window.receiptTotals||{year:{gross:0},month:{gross:0}};
  const expenseYear=Number(receiptTotals.year?.gross||0);
  const expenseMonth=Number(receiptTotals.month?.gross||0);

  if(dashInvoiceGross) dashInvoiceGross.textContent=euro(invoiceYear);
  if(dashInvoiceMonth) dashInvoiceMonth.textContent=euro(invoiceMonth);
  if(dashProfit) dashProfit.textContent=euro(invoiceYear-expenseYear);
  if(dashProfitMonth) dashProfitMonth.textContent=euro(invoiceMonth-expenseMonth);

  if(financialMonthlyTable){
    const rows=monthlyInvoices.map((income,i)=>{
      const expense=Number(window.receiptMonthlyTotals?.[i]||0);
      const profit=income-expense;
      const name=new Date(year,i,1).toLocaleDateString('de-DE',{month:'long'});
      return {name,income,expense,profit};
    });
    financialMonthlyTable.innerHTML=rows.map(r=>`<tr><td>${escapeHtml(r.name)}</td><td>${euro(r.income)}</td><td>${euro(r.expense)}</td><td>${euro(r.profit)}</td></tr>`).join('');
    const chart=document.getElementById('financialChart');
    if(chart){
      const max=Math.max(1,...rows.map(r=>Math.max(r.income,r.expense)));
      chart.innerHTML=rows.map(r=>{
        const ih=Math.max(2,Math.round(r.income/max*100));
        const eh=Math.max(2,Math.round(r.expense/max*100));
        return `<div class=\"chart-month\" title=\"${escapeHtml(r.name)}: Einnahmen ${euro(r.income)}, Ausgaben ${euro(r.expense)}\"><div class=\"chart-bars\"><span class=\"bar income\" style=\"height:${ih}%\"></span><span class=\"bar expense\" style=\"height:${eh}%\"></span></div><small>${escapeHtml(r.name.slice(0,3))}</small></div>`;
      }).join('');
    }
  }
}

function parseInvoiceMoney(value){
  if(typeof value==='number') return Number.isFinite(value)?value:0;
  let s=String(value??'').trim();
  if(!s)return 0;
  s=s.replace(/€/g,'').replace(/\s/g,'');
  // Deutsche Schreibweise: 1.234,56 -> 1234.56
  if(s.includes(',') && s.includes('.')) s=s.replace(/\./g,'').replace(',','.');
  else if(s.includes(',')) s=s.replace(',','.');
  // Falls nur Tausenderpunkte vorhanden sind: 1.234 -> 1234
  else if(/^[-+]?\d{1,3}(?:\.\d{3})+$/.test(s)) s=s.replace(/\./g,'');
  const n=Number(s);
  return Number.isFinite(n)?n:0;
}

function parseFlexibleDate(value){
  if(!value)return null;
  if(value instanceof Date && !isNaN(value))return value;
  const s=String(value).trim();
  let m=s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if(m)return new Date(Number(m[3]),Number(m[2])-1,Number(m[1]));
  m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if(m)return new Date(Number(m[1]),Number(m[2])-1,Number(m[3]));
  const d=new Date(s);
  return isNaN(d)?null:d;
}
function dateYear(value){const d=parseFlexibleDate(value);return d?d.getFullYear():null;}

function showReceiptMsg(message, error=false){
  receiptMsg.textContent=message;
  receiptMsg.classList.remove('hidden');
  receiptMsg.style.color=error?'#b00020':'';
}

async function loadReceipts(){
  if(!receiptList)return;
  receiptList.innerHTML='<p>Belege werden geladen...</p>';
  const {data,error}=await db.from('receipts').select('*').order('receipt_date',{ascending:false}).order('created_at',{ascending:false});
  if(error){
    receiptList.innerHTML=`<p class="notice">Fehler beim Laden: ${escapeHtml(error.message)}</p>`;
    dashReceiptCount.textContent='—';
    dashYearGross.textContent='—';
    dashMonthGross.textContent='—';
    return;
  }

  const rows=data||[];
  const now=new Date();
  const year=now.getFullYear();
  const month=now.getMonth()+1;
  const yearRows=rows.filter(r=>String(r.receipt_date||'').startsWith(String(year)));
  const monthRows=rows.filter(r=>{
    const d=String(r.receipt_date||'').split('-');
    return Number(d[0])===year && Number(d[1])===month;
  });

  // Der Gesamtbetrag enthält ALLE Zahlungsarten – Bar, EC/Karte,
  // Überweisung und Sonstiges. Es wird nichts gegeneinander verrechnet.
  const sumGross=list=>list.reduce((sum,r)=>{
    const amount=Number(String(r.gross_amount??0).replace(',','.'));
    return sum+(Number.isFinite(amount)?amount:0);
  },0);

  const yearGross=sumGross(yearRows);
  const monthGross=sumGross(monthRows);

  // Separate Summen für Bar und EC/Karte. Diese sind zusätzlich
  // zum Gesamtbetrag verfügbar, ohne den Gesamtbetrag zu verändern.
  const yearCash=sumGross(yearRows.filter(r=>r.payment_method==='Bar'));
  const yearCard=sumGross(yearRows.filter(r=>r.payment_method==='EC/Karte'));
  const monthCash=sumGross(monthRows.filter(r=>r.payment_method==='Bar'));
  const monthCard=sumGross(monthRows.filter(r=>r.payment_method==='EC/Karte'));

  // Monatliche Brutto-Ausgaben für die Finanzübersicht.
  window.receiptMonthlyTotals=Array.from({length:12},()=>0);
  yearRows.forEach(r=>{
    const parts=String(r.receipt_date||'').split('-');
    const m=Number(parts[1]);
    const amount=Number(String(r.gross_amount??0).replace(',','.'));
    if(m>=1 && m<=12 && Number.isFinite(amount)) window.receiptMonthlyTotals[m-1]+=amount;
  });

  dashReceiptCount.textContent=String(rows.length);
  dashYearGross.textContent=euro(yearGross);
  dashMonthGross.textContent=euro(monthGross);
  if(dashYearCash)dashYearCash.textContent=euro(yearCash);
  if(dashYearCard)dashYearCard.textContent=euro(yearCard);
  if(dashYearTotal)dashYearTotal.textContent=euro(yearGross);
  if(dashMonthTotal)dashMonthTotal.textContent=euro(monthGross);

  // Für spätere Auswertung bereits bereitgestellt.
  window.receiptTotals={
    year:{gross:yearGross,cash:yearCash,card:yearCard},
    month:{gross:monthGross,cash:monthCash,card:monthCard}
  };

  if(!rows.length){
    receiptList.innerHTML='<p>Noch keine Belege vorhanden.</p>';
    return;
  }

  receiptList.innerHTML=rows.map(r=>`
    <div class="row request-row">
      <div><b>${escapeHtml(r.merchant||'Unbekannter Händler')}</b><small>${formatDate(r.receipt_date)}<br>${escapeHtml(r.receipt_number||'')}</small></div>
      <div><b>${escapeHtml(r.category||'Sonstiges')}</b><small>${escapeHtml(r.description||'')}</small></div>
      <div><b>${euro(r.gross_amount)}</b><small>${escapeHtml(r.payment_method||'')}</small></div>
      <div>
        ${r.storage_path ? `<button data-receipt-open="${escapeHtml(r.storage_path)}">Beleg öffnen</button>` : ''}
        <button data-receipt-delete="${r.id}">Löschen</button>
      </div>
    </div>`).join('');

  // WICHTIG: Bereits geladene Belege werden hier NICHT erneut gesammelt
  // an Google Sheets gesendet. Das würde bei jedem Dashboard-Aufruf für
  // alle vorhandenen Belege parallele Apps-Script-Aufrufe erzeugen und
  // kann zu "Too many simultaneous calls: Tabellen" führen.
  // Ein neu gespeicherter Beleg wird weiter direkt über syncReceiptToGoogle()
  // synchronisiert.
}

function showOcrMsg(message,error=false){
  ocrMsg.textContent=message;
  ocrMsg.classList.remove('hidden');
  ocrMsg.style.color=error?'#b00020':'';
}

function fileToDataUrl(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=()=>reject(reader.error||new Error('Datei konnte nicht gelesen werden.'));
    reader.readAsDataURL(file);
  });
}

async function pdfFirstPageToDataUrl(file){
  if(typeof pdfjsLib!=='undefined' && pdfjsLib.GlobalWorkerOptions){
    pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }
  if(typeof pdfjsLib==='undefined'){
    throw new Error('Die PDF-Bibliothek konnte nicht geladen werden. Bitte die Seite einmal mit Strg+F5 neu laden.');
  }

  const buffer=await file.arrayBuffer();
  const pdf=await pdfjsLib.getDocument({data:buffer}).promise;
  const page=await pdf.getPage(1);
  const viewport=page.getViewport({scale:2});

  const canvas=document.createElement('canvas');
  canvas.width=Math.ceil(viewport.width);
  canvas.height=Math.ceil(viewport.height);
  const ctx=canvas.getContext('2d',{alpha:false});

  await page.render({canvasContext:ctx,viewport}).promise;
  return canvas.toDataURL('image/jpeg',0.88);
}

async function fileToOcrDataUrl(file){
  if(file.type.startsWith('image/')){
    return fileToDataUrl(file);
  }

  if(file.type==='application/pdf' || file.name.toLowerCase().endsWith('.pdf')){
    showOcrMsg('PDF wird für die KI vorbereitet…');
    return pdfFirstPageToDataUrl(file);
  }

  throw new Error('Dieser Dateityp kann nicht automatisch per KI ausgewertet werden. Bitte JPG, PNG oder PDF verwenden.');
}

async function recognizeReceipt(){
  const file=receiptImage.files?.[0];
  if(!file)return;

  showOcrMsg('Beleg wird automatisch von der KI ausgewertet…');
  try{
    const dataUrl=await fileToOcrDataUrl(file);
    const {data:{session}}=await db.auth.getSession();
    if(!session)throw new Error('Deine Anmeldung ist abgelaufen. Bitte erneut anmelden.');

    const response=await fetch(`${window.SUPABASE_URL}/functions/v1/ocr-receipt`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${session.access_token}`
      },
      body:JSON.stringify({image:dataUrl})
    });

    const result=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(result.error||'Die Belegerkennung ist fehlgeschlagen.');

    if(result.receipt_date)receiptDate.value=result.receipt_date;
    if(result.merchant)receiptMerchant.value=result.merchant;
    if(result.receipt_number)receiptNumber.value=result.receipt_number;
    if(result.gross_amount!==null && result.gross_amount!==undefined)receiptGross.value=Number(result.gross_amount).toFixed(2);
    if(result.category)receiptCategory.value=result.category;
    if(result.description)receiptDescription.value=result.description;
    if(result.payment_method)receiptPayment.value=result.payment_method;

    showOcrMsg('Erkennung abgeschlossen. Bitte die Daten kontrollieren – besonders den Bruttobetrag – und anschließend hochladen.');
  }catch(err){
    showOcrMsg(err.message,true);
  }
}

function dataUrlParts(dataUrl){
  const match=String(dataUrl).match(/^data:([^;,]+)(?:;[^,]*)?,(.*)$/s);
  if(!match)throw new Error('Datei konnte für Google Drive nicht vorbereitet werden.');
  return {mimeType:match[1]||'application/octet-stream',base64:match[2]};
}

function safeFilePart(value){
  return String(value||'').trim().replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').slice(0,80);
}

function driveFileName(file){
  const date=receiptDate.value||new Date().toLocaleDateString('sv-SE');
  const merchant=safeFilePart(receiptMerchant.value)||'Unbekannt';
  const number=safeFilePart(receiptNumber.value)||'ohne-Nr';
  const gross=Number(String(receiptGross.value||0).replace(',','.'));
  const amount=Number.isFinite(gross)?gross.toFixed(2).replace('.',','):'0,00';
  const ext=(file.name.split('.').pop()||'bin').toLowerCase().replace(/[^a-z0-9]/g,'')||'bin';
  return `${date}_${merchant}_${number}_${amount}EUR.${ext}`.slice(0,180);
}

async function uploadReceiptToDrive(file){
  const dataUrl=await fileToDataUrl(file);
  const parts=dataUrlParts(dataUrl);
  const payload={
    action:'uploadBeleg',
    fileName:driveFileName(file),
    mimeType:parts.mimeType||file.type||'application/octet-stream',
    base64:parts.base64,
    receiptDate:receiptDate.value,
    merchant:receiptMerchant.value.trim(),
    receiptNumber:receiptNumber.value.trim(),
    grossAmount:Number(String(receiptGross.value).replace(',','.')),
    category:receiptCategory.value,
    description:receiptDescription.value.trim(),
    paymentMethod:receiptPayment.value
  };

  // text/plain avoids a browser CORS preflight while the Apps Script web app
  // still receives the raw JSON in e.postData.contents.
  const response=await fetch(BELEG_UPLOAD_URL,{
    method:'POST',
    headers:{'Content-Type':'text/plain;charset=UTF-8'},
    body:JSON.stringify(payload)
  });
  const result=await response.json().catch(()=>({}));
  if(!response.ok || !result.ok)throw new Error(result.error||'Google Drive Upload fehlgeschlagen.');
  return result;
}

async function saveReceipt(){
  const file=receiptImage.files?.[0];
  if(!file){
    showReceiptMsg('Bitte zuerst einen Beleg oder eine Rechnung auswählen.',true);
    return;
  }

  // Der Bruttobetrag muss beim ersten Klick noch nicht vorhanden sein.
  // Wenn es sich um ein Bild handelt, wird die vorhandene OCR automatisch
  // ausgeführt und der erkannte Betrag anschließend geprüft.
  let gross=Number(String(receiptGross.value||'').replace(',','.'));
  if(!Number.isFinite(gross)||gross<0){
    if(file.type.startsWith('image/')){
      await recognizeReceipt();
      gross=Number(String(receiptGross.value||'').replace(',','.'));
    }
  }

  if(!Number.isFinite(gross)||gross<0){
    showReceiptMsg('Der Bruttobetrag konnte noch nicht erkannt werden. Bitte kurz die OCR abwarten oder den Betrag manuell eintragen.',true);
    return;
  }

  const {data:{session}}=await db.auth.getSession();
  if(!session){
    showReceiptMsg('Deine Anmeldung ist abgelaufen. Bitte erneut anmelden.',true);
    return;
  }

  const id=crypto.randomUUID();
  const ext=(file.name.split('.').pop()||'jpg').toLowerCase().replace(/[^a-z0-9]/g,'')||'jpg';
  const path=`${id}.${ext}`;

  saveReceiptBtn.disabled=true;
  saveReceiptBtn.textContent='⏳ Wird hochgeladen…';
  showReceiptMsg('Dokument wird dauerhaft in Supabase Storage und anschließend in Google Drive archiviert…');

  let storageUploaded=false;
  try{
    const upload=await db.storage.from('receipts').upload(path,file,{contentType:file.type||'application/octet-stream',upsert:false});
    if(upload.error)throw upload.error;
    storageUploaded=true;

    const {error}=await db.from('receipts').insert({
      id,
      receipt_date:receiptDate.value,
      merchant:receiptMerchant.value.trim()||null,
      receipt_number:receiptNumber.value.trim()||null,
      gross_amount:gross,
      category:receiptCategory.value,
      description:receiptDescription.value.trim()||null,
      payment_method:receiptPayment.value,
      storage_path:path
    });
    if(error){
      await db.storage.from('receipts').remove([path]);
      storageUploaded=false;
      throw error;
    }

    let driveResult=null;
    try{
      driveResult=await uploadReceiptToDrive(file);
    }catch(driveError){
      console.warn('Google Drive Upload fehlgeschlagen:',driveError.message);
      showReceiptMsg(`Beleg wurde in der App gespeichert, aber Google Drive konnte nicht erreicht werden: ${driveError.message}`,true);
      await loadReceipts();
      return;
    }

    const savedReceiptForGoogle={
      id,
      receipt_date:receiptDate.value,
      merchant:receiptMerchant.value.trim()||null,
      receipt_number:receiptNumber.value.trim()||null,
      gross_amount:gross,
      category:receiptCategory.value,
      description:receiptDescription.value.trim()||null,
      payment_method:receiptPayment.value,
      storage_path:path
    };

    receiptForm.reset();
    receiptDate.value=new Date().toLocaleDateString('sv-SE');
    showOcrMsg('');
    ocrMsg.classList.add('hidden');
    showReceiptMsg(`Beleg erfolgreich gespeichert. Google Drive: ${driveResult.fileName||'archiviert'}`);
    syncReceiptToGoogle(savedReceiptForGoogle);
    await loadReceipts();
  }catch(err){
    if(storageUploaded){
      // The DB row normally exists only after a successful insert. Keep the
      // document if a later step failed so no original is lost.
    }
    showReceiptMsg('Beleg konnte nicht gespeichert werden: '+err.message,true);
  }finally{
    saveReceiptBtn.disabled=false;
    saveReceiptBtn.textContent='📤 Beleg / Rechnung hochladen';
  }
}

async function openReceipt(path){
  const {data,error}=await db.storage.from('receipts').createSignedUrl(path,3600);
  if(error||!data?.signedUrl){
    alert('Beleg konnte nicht geöffnet werden.');
    return;
  }
  window.open(data.signedUrl,'_blank','noopener');
}

async function deleteReceipt(id){
  if(!confirm('Diesen Beleg wirklich löschen?'))return;
  const {data,error}=await db.from('receipts').select('storage_path').eq('id',id).single();
  if(error){alert('Beleg konnte nicht gefunden werden: '+error.message);return;}
  if(data?.storage_path)await db.storage.from('receipts').remove([data.storage_path]);
  const result=await db.from('receipts').delete().eq('id',id);
  if(result.error){alert('Beleg konnte nicht gelöscht werden: '+result.error.message);return;}
  await loadReceipts();
}


function normalizeCustomerText(value){
  return String(value??'').toLowerCase().trim().replace(/\s+/g,' ').replace(/[.,;:()\[\]{}]/g,'');
}

function invoiceCustomerParts(value){
  const raw=String(value??'').trim();
  if(!raw)return {firma:'',vorname:'',nachname:''};
  const business=/\b(gmbh|ug|ag|kg|ohg|gbr|e\.k\.|e\.v\.|brandschutz|service|leistungen|fahrzeug|autohaus|autoteile|werkstatt|immobilien|verwaltung|handel|technik|solutions|logistik|bau|bauunternehmen|versicherung|hotel|gastronomie)\b/i.test(raw);
  const parts=raw.split(/\s+/).filter(Boolean);
  if(!business && parts.length===2)return {firma:'',vorname:parts[0],nachname:parts[1]};
  return {firma:raw,vorname:'',nachname:''};
}

async function syncInvoiceCustomers(rows){
  if(!Array.isArray(rows)||!rows.length)return;
  try{
    const {data:existing,error}=await db.from('customers').select('*');
    if(error)throw error;
    const customers=Array.isArray(existing)?existing:[];
    let changed=false;
    for(const invoice of rows){
      const invoiceName=String(invoice.kunde||'').trim();
      if(!invoiceName || invoiceName==='—')continue;
      const norm=normalizeCustomerText(invoiceName);
      const parts=invoiceCustomerParts(invoiceName);
      const fullName=normalizeCustomerText([parts.vorname,parts.nachname].filter(Boolean).join(' '));
      let match=customers.find(c=>{
        const company=normalizeCustomerText(c.firma);
        const name=normalizeCustomerText([c.vorname,c.nachname].filter(Boolean).join(' '));
        return company===norm || name===norm || (fullName && name===fullName);
      });
      if(match){
        const patch={updated_at:new Date().toISOString()};
        if(!match.firma && parts.firma)patch.firma=parts.firma;
        if(!match.vorname && parts.vorname)patch.vorname=parts.vorname;
        if(!match.nachname && parts.nachname)patch.nachname=parts.nachname;
        if(Object.keys(patch).length>1){
          const {error:updateError}=await db.from('customers').update(patch).eq('id',match.id);
          if(updateError)console.warn('Rechnungskunde konnte nicht ergänzt werden:',updateError.message);
          else Object.assign(match,patch);
        }
      }else{
        const payload={
          kundennummer:null,
          firma:parts.firma||null,
          vorname:parts.vorname||null,
          nachname:parts.nachname||null,
          strasse:null,hausnummer:null,plz:null,ort:null,land:'Deutschland',
          telefon:null,email:null,notizen:'Automatisch aus Rechnung übernommen.',
          updated_at:new Date().toISOString()
        };
        const {data:newCustomer,error:insertError}=await db.from('customers').insert(payload).select().single();
        if(insertError)console.warn('Rechnungskunde konnte nicht angelegt werden:',insertError.message);
        else if(newCustomer){customers.push(newCustomer);changed=true;}
      }
    }
    if(changed && customersView && !customersView.classList.contains('hidden'))renderCustomers();
  }catch(err){
    console.warn('Kundenübernahme aus Rechnungen fehlgeschlagen:',err.message);
  }
}

async function loadInvoices(){
  if(!invoiceList)return;
  invoiceList.innerHTML='<p>Rechnungen werden geladen...</p>';
  try{
    const result=await googleApiJsonp(RECHNUNGS_API_URL,{year:new Date().getFullYear()});
    if(result.ok===false)throw new Error(result.error||'Rechnungsdaten konnten nicht geladen werden.');
    const rows=Array.isArray(result.rechnungen)?result.rechnungen:[];
    const year=Number(result.bruttoGesamtJahr??result.bruttoGesamt??0);
    const month=Number(result.bruttoGesamtMonat??0);
    if(invoiceTotal)invoiceTotal.textContent=euro(year);
    if(invoiceMonthTotal)invoiceMonthTotal.textContent=euro(month);
    if(!rows.length){invoiceList.innerHTML='<div class="empty-box">Die Rechnungs-API liefert aktuell nur Summen. Sobald die erweiterte <b>doGet()</b>-Version eingespielt ist, erscheinen hier wieder alle Rechnungen.</div>';return;}

    // Rechnungen speisen zusätzlich den gemeinsamen Kundenstamm.
    // Die eigentliche Rechnungsberechnung oben bleibt unverändert.
    await syncInvoiceCustomers(rows);

    const q=(invoiceSearch?.value||'').trim().toLowerCase();
    const filtered=rows.filter(r=>[r.rechnungsnummer,r.kunde,r.beschreibung,r.rechnungsdatum].join(' ').toLowerCase().includes(q));
    invoiceList.innerHTML=filtered.length?`<div class="invoice-table"><div class="invoice-row invoice-head"><span>Datum</span><span>Rechnungsnr.</span><span>Kunde</span><span>Beschreibung</span><span>Brutto</span><span>Quelle</span></div>${filtered.map(r=>`<div class="invoice-row"><span>${escapeHtml(r.rechnungsdatum||'—')}</span><span><b>${escapeHtml(r.rechnungsnummer||'—')}</b></span><span>${escapeHtml(r.kunde||'—')}</span><span>${escapeHtml(r.beschreibung||'—')}</span><span><b>${euro(r.bruttobetrag||0)}</b></span><span>${r.quelldatei?`<a href="${escapeHtml(r.quelldatei)}" target="_blank" rel="noopener">PDF</a>`:'—'}</span></div>`).join('')}</div>`:'<div class="empty-box">Keine passende Rechnung gefunden.</div>';
  }catch(err){invoiceList.innerHTML=`<p class="notice">Rechnungsdaten konnten nicht geladen werden: ${escapeHtml(err.message)}</p>`}
}


async function syncOfferCustomers(rows){
  if(!Array.isArray(rows)||!rows.length)return;
  try{
    const {data:existing,error}=await db.from('customers').select('*');
    if(error)throw error;
    const customers=Array.isArray(existing)?existing:[];
    for(const offer of rows){
      const k=offer.kundendaten||{};
      const number=String(k.kundennummer||'').trim();
      const email=String(k.email||'').trim().toLowerCase();
      const company=String(k.firma||'').trim();
      const first=String(k.vorname||'').trim();
      const last=String(k.nachname||'').trim();
      const name=normalizeCustomerText([first,last].filter(Boolean).join(' '));
      if(!number&&!email&&!company&&!name)continue;
      let match=customers.find(c=>number&&String(c.kundennummer||'').trim()===number);
      if(!match&&email)match=customers.find(c=>String(c.email||'').trim().toLowerCase()===email);
      if(!match)match=customers.find(c=>{
        const cName=normalizeCustomerText([c.vorname,c.nachname].filter(Boolean).join(' '));
        return company && normalizeCustomerText(c.firma)===normalizeCustomerText(company) || (name && cName===name);
      });
      const payload={
        kundennummer:number||null,firma:company||null,vorname:first||null,nachname:last||null,
        strasse:String(k.strasse||'').trim()||null,hausnummer:String(k.hausnummer||'').trim()||null,
        plz:String(k.plz||'').trim()||null,ort:String(k.ort||'').trim()||null,land:String(k.land||'Deutschland').trim()||'Deutschland',
        telefon:String(k.telefon||'').trim()||null,email:String(k.email||'').trim()||null,updated_at:new Date().toISOString()
      };
      if(match){
        const patch={updated_at:payload.updated_at};
        for(const key of ['kundennummer','firma','vorname','nachname','strasse','hausnummer','plz','ort','land','telefon','email']){
          if(!match[key] && payload[key])patch[key]=payload[key];
        }
        if(Object.keys(patch).length>1){
          const {error:updateError}=await db.from('customers').update(patch).eq('id',match.id);
          if(updateError)console.warn('Angebotskunde konnte nicht ergänzt werden:',updateError.message);
          else Object.assign(match,patch);
        }
      }else{
        const {data:newCustomer,error:insertError}=await db.from('customers').insert(payload).select().single();
        if(insertError)console.warn('Angebotskunde konnte nicht angelegt werden:',insertError.message);
        else if(newCustomer){customers.push(newCustomer);match=newCustomer;}
      }
      if(match){
        offer.customer_id=match.id;
        const offerNumber=String(offer.angebotsnummer||offer.angebotsnr||'').trim();
        if(offerNumber){
          const {data:savedOffer}=await db.from('offers').select('id').eq('angebotsnummer',offerNumber).maybeSingle();
          if(savedOffer?.id){
            const {error:updateOfferError}=await db.from('offers').update({customer_id:match.id}).eq('id',savedOffer.id);
            if(updateOfferError)console.warn('Angebot konnte nicht mit Kunde verknüpft werden:',updateOfferError.message);
          }
        }
      }
    }
  }catch(err){
    console.warn('Kundenübernahme aus Angeboten fehlgeschlagen:',err.message);
  }
}

function normalizeOfferDate(value){
  if(value===null||value===undefined||value==='')return null;
  const s=String(value).trim();
  let m=s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if(m)return `${m[3]}-${String(m[2]).padStart(2,'0')}-${String(m[1]).padStart(2,'0')}`;
  m=s.match(/^(\d{4})[\/.](\d{1,2})[\/.](\d{1,2})$/);
  if(m)return `${m[1]}-${String(m[2]).padStart(2,'0')}-${String(m[3]).padStart(2,'0')}`;
  const d=new Date(s);
  if(!Number.isNaN(d.getTime()))return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  return null;
}

async function syncOffersToSupabase(rows){
  if(!Array.isArray(rows)||!rows.length)return [];

  // Google Drive kann bei einem manuellen/erneuten Import dieselbe
  // Angebotsnummer mehrfach liefern. Supabase/Postgres lehnt ein UPSERT
  // mit demselben Conflict-Key innerhalb eines Statements ab.
  // Deshalb wird VOR dem UPSERT eindeutig nach Angebotsnummer dedupliziert.
  const uniqueMap=new Map();
  let duplicateCount=0;

  for(const r of rows){
    const number=String(r?.angebotsnummer||r?.angebotsnr||'').trim();
    if(!number)continue;

    const normalized={
      ...r,
      angebotsnummer:number
    };

    if(uniqueMap.has(number)){
      duplicateCount++;
      const previous=uniqueMap.get(number);
      // Den Datensatz mit den vollständigeren Angaben behalten.
      const score=(x)=>[
        x?.betrag,
        x?.angebotsdatum||x?.datum||x?.date,
        x?.kunde||x?.kundenname,
        x?.firma,
        x?.beschreibung,
        x?.dateiId||x?.drive_file_id,
        x?.dateiUrl||x?.drive_url
      ].filter(v=>v!==undefined&&v!==null&&String(v).trim()!=='').length;
      if(score(normalized)>=score(previous))uniqueMap.set(number,normalized);
    }else{
      uniqueMap.set(number,normalized);
    }
  }

  const cleanRows=[...uniqueMap.values()];
  if(!cleanRows.length)return [];

  const numbers=cleanRows.map(r=>r.angebotsnummer);
  const {data:saved,error}=await db.from('offers').select('*').in('angebotsnummer',numbers);
  if(error)throw error;
  const savedMap=new Map((saved||[]).map(x=>[String(x.angebotsnummer||'').trim(),x]));

  const payload=cleanRows.map(r=>{
    const number=String(r.angebotsnummer||'').trim();
    const old=savedMap.get(number);
    return {
      angebotsnummer:number,
      angebotsdatum:normalizeOfferDate(r.angebotsdatum||r.datum||r.date),
      firma:r.firma||'',
      kundenname:r.kunde||r.kundenname||'',
      beschreibung:r.beschreibung||'',
      betrag:Number(r.betrag||0),
      status:old?.status||r.status||'Offen / In Bearbeitung',
      dateiname:r.dateiname||'',
      drive_file_id:r.dateiId||r.drive_file_id||'',
      drive_url:r.dateiUrl||r.drive_url||''
    };
  });

  const {error:upsertError}=await db.from('offers').upsert(payload,{onConflict:'angebotsnummer'});
  if(upsertError)throw upsertError;

  if(duplicateCount){
    console.info(`Angebote: ${duplicateCount} doppelte Angebotsnummer(n) beim Import bereinigt.`);
  }
  return payload;
}

async function loadOffers(forceRefresh=false){
  if(!offerList)return;
  offerList.innerHTML=forceRefresh?'<p>Angebote werden aktualisiert… Google Drive wird gelesen. Das kann bei vielen PDFs einige Minuten dauern.</p>':'<p>Gespeicherte Angebote werden geladen...</p>';
  try{
    // Normal: ausschließlich Supabase verwenden. Dadurch wird nicht bei jedem Öffnen
    // erneut jedes PDF aus Google Drive gelesen.
    const {data:saved,error:savedError}=await db.from('offers').select('*').order('angebotsdatum',{ascending:false});
    if(savedError)throw savedError;
    let rows=Array.isArray(saved)?saved.map(x=>({
      ...x,
      angebotsnummer:x.angebotsnummer,
      angebotsdatum:x.angebotsdatum,
      datum:x.angebotsdatum,
      kunde:x.kundenname,
      dateiUrl:x.drive_url
    })):[];

    // Beim ersten Start dieser neuen Angebotsversion einmalig aus Google Drive importieren.
    // Danach kommt das normale Öffnen ausschließlich aus Supabase.
    // Der Import-Schlüssel verhindert, dass bei jedem Seitenaufruf erneut alle PDFs gelesen werden.
    let initialSyncDone=false;
    try{ initialSyncDone=localStorage.getItem(OFFERS_INITIAL_SYNC_KEY)==='1'; }catch(e){}
    // Falls die Datenbank leer ist oder diese Version noch nicht initial importiert hat,
    // einmalig alle Angebote aus Google Drive übernehmen.
    const shouldSync=forceRefresh || !initialSyncDone || rows.length===0;
    if(shouldSync){
      const result=await googleApiJsonp(ANGEBOTE_API_URL,{action:'angebote'});
      if(result.ok===false)throw new Error(result.error||'Angebotsdaten konnten nicht geladen werden.');
      const driveRows=Array.isArray(result.angebote)?result.angebote:[];
      if(driveRows.length){
        await syncOffersToSupabase(driveRows);
        // Kundenübernahme läuft bewusst im Hintergrund und darf den Angebotsimport nicht blockieren.
        syncOfferCustomers(driveRows).catch(err=>console.warn('Kundenübernahme aus Angeboten:',err.message));
        const {data:fresh,error:freshError}=await db.from('offers').select('*').order('angebotsdatum',{ascending:false});
        if(freshError)throw freshError;
        rows=Array.isArray(fresh)?fresh.map(x=>({...x,datum:x.angebotsdatum,kunde:x.kundenname,dateiUrl:x.drive_url})):[];
        // Nur als erfolgreich initialisiert markieren, wenn mindestens ein Angebot importiert wurde.
        if(!forceRefresh && driveRows.length>0){
          try{ localStorage.setItem(OFFERS_INITIAL_SYNC_KEY,'1'); }catch(e){}
        }
      }
    }

    currentOffers=rows;
    renderOffers();
  }catch(err){
    currentOffers=[];
    offerList.innerHTML=`<p class="notice">Angebotsdaten konnten nicht geladen werden: ${escapeHtml(err.message)}</p>`;
    updateOfferTotals([]);
  }finally{
    if(refreshOffersBtn)refreshOffersBtn.disabled=false;
  }
}


function showCustomerMsg(message,isError=false){
  if(!customerMsg)return;
  customerMsg.textContent=message;
  customerMsg.classList.toggle('hidden',!message);
  customerMsg.classList.toggle('notice-error',isError);
}

function resetCustomerForm(){
  customerForm?.reset();
  if(customerId)customerId.value='';
  if(customerCompany)customerCompany.value='';
  if(customerFirstName)customerFirstName.value='';
  if(customerLastName)customerLastName.value='';
  if(customerStreet)customerStreet.value='';
  if(customerHouseNumber)customerHouseNumber.value='';
  if(customerZip)customerZip.value='';
  if(customerCity)customerCity.value='';
  if(customerPhone)customerPhone.value='';
  if(customerEmail)customerEmail.value='';
  if(customerNotes)customerNotes.value='';
  if(saveCustomerBtn)saveCustomerBtn.textContent='Kunde speichern';
  showCustomerMsg('');
}

function renderCustomers(){
  if(!customerList)return;
  const q=(customerSearch?.value||'').trim().toLowerCase();
  const rows=currentCustomers.filter(c=>[
    c.kundennummer,c.firma,c.vorname,c.nachname,c.strasse,c.hausnummer,c.plz,c.ort,c.telefon,c.email
  ].join(' ').toLowerCase().includes(q));
  if(customerCount)customerCount.textContent=String(currentCustomers.length);
  if(!rows.length){
    customerList.innerHTML='<div class="empty-box">Keine Kunden gefunden.</div>';
    return;
  }
  customerList.innerHTML=rows.map(c=>{
    const name=[c.vorname,c.nachname].filter(Boolean).join(' ');
    const title=c.firma||name||'Ohne Namen';
    const address=[c.strasse,c.hausnummer].filter(Boolean).join(' ');
    const city=[c.plz,c.ort].filter(Boolean).join(' ');
    return `<div class="customer-card" style="padding:16px;border:1px solid #e6dfcf;border-radius:16px;margin:10px 0;background:#fff">
      <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;flex-wrap:wrap">
        <div><b>${escapeHtml(title)}</b><div style="margin-top:4px;color:#777">${escapeHtml(name&&c.firma?name+' · ':'')}${escapeHtml(c.kundennummer||'')}</div>
        <div style="margin-top:8px;color:#555">${escapeHtml(address||'')}${address&&city?' · ':''}${escapeHtml(city||'')}</div>
        <div style="margin-top:4px;color:#555">${escapeHtml(c.telefon||'')}${c.telefon&&c.email?' · ':''}${escapeHtml(c.email||'')}</div></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="small-btn" data-customer-edit="${escapeHtml(c.id)}">Bearbeiten</button><button type="button" class="small-btn" data-customer-delete="${escapeHtml(c.id)}">Löschen</button></div>
      </div>
    </div>`;
  }).join('');
}

async function loadCustomers(){
  if(!customerList)return;
  customerList.innerHTML='<p>Kunden werden geladen...</p>';
  const {data,error}=await db.from('customers').select('*').order('nachname',{ascending:true}).order('firma',{ascending:true});
  if(error){
    currentCustomers=[];
    if(customerCount)customerCount.textContent='0';
    customerList.innerHTML=`<p class="notice">Kunden konnten nicht geladen werden: ${escapeHtml(error.message)}</p>`;
    return;
  }
  currentCustomers=data||[];
  renderCustomers();
}

function editCustomer(id){
  const c=currentCustomers.find(x=>x.id===id);
  if(!c)return;
  customerId.value=c.id||'';
  customerNumber.value=c.kundennummer||'';
  customerCompany.value=c.firma||'';
  customerFirstName.value=c.vorname||'';
  customerLastName.value=c.nachname||'';
  customerStreet.value=c.strasse||'';
  customerHouseNumber.value=c.hausnummer||'';
  customerZip.value=c.plz||'';
  customerCity.value=c.ort||'';
  customerPhone.value=c.telefon||'';
  customerEmail.value=c.email||'';
  customerNotes.value=c.notizen||'';
  saveCustomerBtn.textContent='Änderungen speichern';
  showCustomerMsg('');
  window.scrollTo({top:0,behavior:'smooth'});
}

async function saveCustomer(e){
  e.preventDefault();
  if(saveCustomerBtn)saveCustomerBtn.disabled=true;
  showCustomerMsg('');
  try{
    const payload={
      kundennummer:customerNumber.value.trim()||null,
      firma:customerCompany.value.trim()||null,
      vorname:customerFirstName.value.trim()||null,
      nachname:customerLastName.value.trim()||null,
      strasse:customerStreet.value.trim()||null,
      hausnummer:customerHouseNumber.value.trim()||null,
      plz:customerZip.value.trim()||null,
      ort:customerCity.value.trim()||null,
      land:'Deutschland',
      telefon:customerPhone.value.trim()||null,
      email:customerEmail.value.trim()||null,
      notizen:customerNotes.value.trim()||null,
      updated_at:new Date().toISOString()
    };
    const id=customerId.value.trim();
    const result=id?await db.from('customers').update(payload).eq('id',id):await db.from('customers').insert(payload);
    if(result.error)throw result.error;
    resetCustomerForm();
    await loadCustomers();
    showCustomerMsg('Kunde erfolgreich gespeichert.');
  }catch(err){
    showCustomerMsg('Kunde konnte nicht gespeichert werden: '+err.message,true);
  }finally{
    if(saveCustomerBtn)saveCustomerBtn.disabled=false;
  }
}

async function deleteCustomer(id){
  const c=currentCustomers.find(x=>x.id===id);
  if(!c)return;
  const title=c.firma||[c.vorname,c.nachname].filter(Boolean).join(' ')||'diesen Kunden';
  if(!confirm(`„${title}“ wirklich löschen?`))return;
  const {error}=await db.from('customers').delete().eq('id',id);
  if(error){alert('Kunde konnte nicht gelöscht werden: '+error.message);return;}
  if(customerId.value===id)resetCustomerForm();
  await loadCustomers();
}

function offerStatusClass(status){
  if(status==='Angenommen')return 'offer-status accepted';
  if(status==='Abgelehnt')return 'offer-status rejected';
  return 'offer-status open';
}

function updateOfferTotals(rows){
  const all=rows.reduce((s,r)=>s+Number(r.betrag||0),0);
  const open=rows.filter(r=>r.status==='Offen / In Bearbeitung').reduce((s,r)=>s+Number(r.betrag||0),0);
  const accepted=rows.filter(r=>r.status==='Angenommen').reduce((s,r)=>s+Number(r.betrag||0),0);
  const rejected=rows.filter(r=>r.status==='Abgelehnt').reduce((s,r)=>s+Number(r.betrag||0),0);
  if(offerTotal)offerTotal.textContent=euro(all);
  if(offerOpenTotal)offerOpenTotal.textContent=euro(open);
  if(offerAcceptedTotal)offerAcceptedTotal.textContent=euro(accepted);
  if(offerRejectedTotal)offerRejectedTotal.textContent=euro(rejected);
  if(offerCount)offerCount.textContent=String(rows.length);
}

function renderOffers(){
  if(!offerList)return;
  const q=(offerSearch?.value||'').trim().toLowerCase();
  const status=offerStatusFilter?.value||'';
  const filtered=currentOffers.filter(r=>{
    const hay=[r.angebotsnummer,r.kunde,r.kundenname,r.firma,r.beschreibung,r.dateiname].join(' ').toLowerCase();
    return (!q||hay.includes(q))&&(!status||r.status===status);
  });
  updateOfferTotals(currentOffers);
  if(!filtered.length){
    offerList.innerHTML='<div class="empty-box">Keine passenden Angebote gefunden.</div>';
    return;
  }
  offerList.innerHTML=`<div class="invoice-table offer-table"><div class="invoice-row invoice-head"><span>Datum</span><span>Angebotsnr.</span><span>Kunde</span><span>Beschreibung</span><span>Betrag</span><span>Status</span><span>PDF</span></div>${filtered.map(r=>{
    const number=String(r.angebotsnummer||r.angebotsnr||'—');
    const customer=String(r.kunde||r.kundenname||r.firma||'—');
    const status=r.status||'Offen / In Bearbeitung';
    const pdf=r.dateiUrl||r.drive_url||r.driveUrl||'';
    return `<div class="invoice-row offer-row"><span>${escapeHtml(r.datum||r.angebotsdatum||'—')}</span><span><b>${escapeHtml(number)}</b></span><span>${escapeHtml(customer)}</span><span>${escapeHtml(r.beschreibung||'—')}</span><span><b>${euro(r.betrag||0)}</b></span><span><select class="offer-status-select ${offerStatusClass(status)}" data-offer-number="${escapeHtml(number)}"><option value="Offen / In Bearbeitung" ${status==='Offen / In Bearbeitung'?'selected':''}>Offen / In Bearbeitung</option><option value="Angenommen" ${status==='Angenommen'?'selected':''}>Angenommen</option><option value="Abgelehnt" ${status==='Abgelehnt'?'selected':''}>Abgelehnt</option></select></span><span>${pdf?`<a href="${escapeHtml(pdf)}" target="_blank" rel="noopener">PDF</a>`:'—'}</span></div>`;
  }).join('')}</div>`;
}

async function saveOfferStatus(offer, status){
  const number=String(offer.angebotsnummer||offer.angebotsnr||'').trim();
  if(!number)return;
  const payload={
    angebotsnummer:number,
    angebotsdatum:normalizeOfferDate(offer.angebotsdatum||offer.datum||offer.date),
    firma:offer.firma||'',
    kundenname:offer.kunde||offer.kundenname||'',
    beschreibung:offer.beschreibung||'',
    betrag:Number(offer.betrag||0),
    status,
    dateiname:offer.dateiname||'',
    drive_file_id:offer.dateiId||offer.drive_file_id||'',
    drive_url:offer.dateiUrl||offer.drive_url||''
  };
  const {error}=await db.from('offers').upsert(payload,{onConflict:'angebotsnummer'});
  if(error)throw error;
}

async function handleOfferStatusChange(select){
  const number=select.dataset.offerNumber;
  const offer=currentOffers.find(r=>String(r.angebotsnummer||r.angebotsnr||'').trim()===number);
  if(!offer)return;
  const oldStatus=offer.status||'Offen / In Bearbeitung';
  const newStatus=select.value;
  if(oldStatus===newStatus)return;
  select.disabled=true;
  try{
    await saveOfferStatus(offer,newStatus);
    offer.status=newStatus;
    renderOffers();
  }catch(err){
    select.value=oldStatus;
    alert('Angebotsstatus konnte nicht gespeichert werden: '+err.message);
  }finally{
    select.disabled=false;
  }
}

function showView(view){
  dashboardHome.classList.toggle('hidden',view!=='dashboard');
  requestsView.classList.toggle('hidden',view!=='requests');
  receiptsView.classList.toggle('hidden',view!=='receipts');
  if(invoicesView)invoicesView.classList.toggle('hidden',view!=='invoices');
  if(offersView)offersView.classList.toggle('hidden',view!=='offers');
  if(customersView)customersView.classList.toggle('hidden',view!=='customers');
  document.querySelectorAll('[data-back-dashboard]').forEach(btn=>btn.classList.toggle('hidden',view==='dashboard'));

  if(pageTitle && view==='dashboard')pageTitle.textContent='Dashboard';
  if(pageTitle && view==='requests')pageTitle.textContent='Terminanfragen';
  if(pageTitle && view==='receipts')pageTitle.textContent='Belege';
  if(pageTitle && view==='invoices')pageTitle.textContent='Rechnungen';
  if(pageTitle && view==='offers')pageTitle.textContent='Angebote';
  if(pageTitle && view==='customers')pageTitle.textContent='Kunden & Firmen';

  if(view==='requests')load();
  if(view==='receipts'){
    receiptDate.value=receiptDate.value||new Date().toLocaleDateString('sv-SE');
    loadReceipts();
  }
  if(view==='invoices')loadInvoices();
  if(view==='offers')loadOffers(false);
  if(view==='customers')loadCustomers();
}

document.querySelectorAll('[data-nav]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    showView(btn.dataset.nav);
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

document.querySelectorAll('[data-back-dashboard]').forEach(btn=>btn.addEventListener('click',()=>{showView('dashboard');window.scrollTo({top:0,behavior:'smooth'});}));


offerSearch?.addEventListener('input',renderOffers);
offerStatusFilter?.addEventListener('change',renderOffers);
offerList?.addEventListener('change',e=>{
  const select=e.target.closest('[data-offer-number]');
  if(select)handleOfferStatusChange(select);
});

customerSearch?.addEventListener('input',renderCustomers);
customerForm?.addEventListener('submit',saveCustomer);
cancelCustomerBtn?.addEventListener('click',resetCustomerForm);
customerList?.addEventListener('click',e=>{
  const edit=e.target.closest('[data-customer-edit]');
  if(edit)return editCustomer(edit.dataset.customerEdit);
  const del=e.target.closest('[data-customer-delete]');
  if(del)return deleteCustomer(del.dataset.customerDelete);
});

receiptImage?.addEventListener('change',()=>{
  ocrMsg.classList.add('hidden');
  if(receiptImage.files?.[0]){
    if(!receiptDate.value)receiptDate.value=new Date().toLocaleDateString('sv-SE');
    recognizeReceipt();
  }
});

receiptForm?.addEventListener('submit',async e=>{
  e.preventDefault();
  await saveReceipt();
});
receiptList?.addEventListener('click',async e=>{
  const open=e.target.closest('[data-receipt-open]');
  if(open)return openReceipt(open.dataset.receiptOpen);
  const del=e.target.closest('[data-receipt-delete]');
  if(del)return deleteReceipt(del.dataset.receiptDelete);
});

if(appointmentTodayBtn){
  appointmentTodayBtn.addEventListener('click',()=>{appointmentDate=new Date();renderAppointments();});
  appointmentPrevBtn?.addEventListener('click',()=>shiftAppointmentPeriod(-1));
  appointmentNextBtn?.addEventListener('click',()=>shiftAppointmentPeriod(1));
  appointmentViewButtons.forEach(btn=>btn.addEventListener('click',()=>{
    appointmentView=btn.dataset.view;
    appointmentViewButtons.forEach(x=>x.classList.toggle('active',x===btn));
    renderAppointments();
  }));
}
appointmentOverview?.addEventListener('click',async e=>{
  const button=e.target.closest('button[data-appt-action]');
  if(!button)return;
  const id=button.dataset.id;
  const action=button.dataset.apptAction;
  if(action==='details')return openDetails(id);
  if(action==='move')return moveAppointment(id);
  if(action==='complete')return completeAppointment(id);
});
searchFilter?.addEventListener('input',renderCalendarRequests);
statusFilter?.addEventListener('change',renderCalendarRequests);
dateFilter?.addEventListener('change',renderCalendarRequests);
clearFiltersBtn?.addEventListener('click',()=>{
  if(searchFilter)searchFilter.value='';
  if(statusFilter)statusFilter.value='';
  if(dateFilter)dateFilter.value='';
  renderCalendarRequests();
});
calendarEl?.addEventListener('click',e=>{
  const button=e.target.closest('[data-calendar-date]');
  if(!button)return;
  if(dateFilter)dateFilter.value=button.dataset.calendarDate;
  appointmentDate=appointmentDateFromKey(button.dataset.calendarDate);
  appointmentView='day';
  appointmentViewButtons.forEach(x=>x.classList.toggle('active',x.dataset.view==='day'));
  renderCalendarRequests();
});
prevMonthBtn?.addEventListener('click',()=>{
  calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()-1,1);
  renderCalendarRequests();
});
nextMonthBtn?.addEventListener('click',()=>{
  calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()+1,1);
  renderCalendarRequests();
});

loginForm.addEventListener('submit',async e=>{e.preventDefault();loginMsg.classList.add('hidden');const {error}=await db.auth.signInWithPassword({email:emailEl.value.trim(),password:passwordEl.value});if(error){showLoginMessage(error.message);return}await init()});
listEl.addEventListener('click',async e=>{const button=e.target.closest('button[data-action]');if(!button)return;const id=button.dataset.id;const action=button.dataset.action;if(action==='details')return openDetails(id);if(action==='confirm')return confirmRequest(id);if(action==='reject')return rejectRequest(id);if(action==='alternative')return alternativeRequest(id);if(action==='delete')return deleteRequest(id)});
detailActions.addEventListener('click',async e=>{const button=e.target.closest('button[data-modal-action]');if(!button||!selectedRequest)return;const action=button.dataset.modalAction;if(action==='confirm')await confirmRequest(selectedRequest.id);if(action==='reject')await rejectRequest(selectedRequest.id);if(action==='alternative')await alternativeRequest(selectedRequest.id);if(action==='delete')await deleteRequest(selectedRequest.id)});
closeModal.addEventListener('click',closeDetails);modal.addEventListener('click',e=>{if(e.target===modal)closeDetails()});logoutBtn.addEventListener('click',async()=>{await db.auth.signOut();location.reload()});refreshBtn.addEventListener('click',async()=>{refreshBtn.disabled=true;try{await load();await loadReceipts();await loadFinancials();await loadInvoices();await loadOffers(false);await loadCustomers();}finally{refreshBtn.disabled=false;}});
refreshOffersBtn?.addEventListener('click',async()=>{refreshOffersBtn.disabled=true;try{await loadOffers(true);}finally{refreshOffersBtn.disabled=false;}});
init();