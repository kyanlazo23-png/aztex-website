const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰'}));const readiness=document.getElementById('readiness');const readinessValue=document.getElementById('readinessValue');readiness?.addEventListener('input',()=>readinessValue.textContent=readiness.value);document.getElementById('year').textContent=new Date().getFullYear();const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Retirement projection calculator
const calculator=document.getElementById('retirementCalculator');
const chart=document.getElementById('retirementChart');
const money=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
function value(id,fallback=0){const n=Number(document.getElementById(id)?.value);return Number.isFinite(n)?n:fallback}
function projectRetirement(){
  const starting=Math.max(0,value('currentBalance'));
  const years=Math.min(70,Math.max(1,Math.round(value('yearsToRetirement',30))));
  let annualContribution=Math.max(0,value('annualContribution'));
  const annualRate=value('annualReturn',7)/100;
  const increase=Math.max(0,value('contributionIncrease'))/100;
  const timing=document.getElementById('contributionTiming')?.value||'monthly';
  let balance=starting,totalContributed=starting;
  const rows=[{year:0,balance,contributions:totalContributed,growth:0}];
  for(let year=1;year<=years;year++){
    if(timing==='monthly'){
      const monthlyRate=Math.pow(1+annualRate,1/12)-1;
      const monthlyContribution=annualContribution/12;
      for(let month=0;month<12;month++){balance=balance*(1+monthlyRate)+monthlyContribution}
    }else{balance=balance*(1+annualRate)+annualContribution}
    totalContributed+=annualContribution;
    rows.push({year,balance,contributions:totalContributed,growth:balance-totalContributed});
    annualContribution*=1+increase;
  }
  document.getElementById('endingBalance').textContent=money.format(balance);
  document.getElementById('totalContributions').textContent=money.format(totalContributed);
  document.getElementById('investmentGrowth').textContent=money.format(balance-totalContributed);
  document.getElementById('projectionTable').innerHTML=rows.slice(1).map(r=>`<tr><td>${r.year}</td><td>${money.format(r.contributions)}</td><td>${money.format(r.growth)}</td><td>${money.format(r.balance)}</td></tr>`).join('');
  drawRetirementChart(rows);
}
function drawRetirementChart(rows){
  if(!chart)return;
  const dpr=window.devicePixelRatio||1;
  const rect=chart.getBoundingClientRect();
  const w=Math.max(320,rect.width),h=Math.max(240,rect.height);
  chart.width=w*dpr;chart.height=h*dpr;
  const ctx=chart.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
  const pad={l:62,r:18,t:18,b:40};const pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;
  const max=Math.max(...rows.map(r=>r.balance),1)*1.08;
  const x=i=>pad.l+(i/(rows.length-1||1))*pw;
  const y=v=>pad.t+ph-(v/max)*ph;
  ctx.font='11px DM Sans, Arial';ctx.fillStyle='#667085';ctx.strokeStyle='#e4e8ed';ctx.lineWidth=1;
  for(let i=0;i<=4;i++){const val=max*i/4;const yy=y(val);ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(w-pad.r,yy);ctx.stroke();ctx.textAlign='right';ctx.textBaseline='middle';ctx.fillText(val>=1e6?'$'+(val/1e6).toFixed(1)+'M':'$'+Math.round(val/1000)+'k',pad.l-9,yy)}
  const ticks=Math.min(6,rows.length);for(let i=0;i<ticks;i++){const idx=Math.round(i*(rows.length-1)/(ticks-1||1));ctx.textAlign='center';ctx.textBaseline='top';ctx.fillText(String(rows[idx].year),x(idx),h-pad.b+10)}
  function line(key,color,width){ctx.beginPath();rows.forEach((r,i)=>{const xx=x(i),yy=y(r[key]);i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)});ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke()}
  line('contributions','#b9975b',2);line('balance','#09172d',3);
  ctx.textAlign='center';ctx.fillStyle='#667085';ctx.fillText('Years',pad.l+pw/2,h-8);
}
calculator?.addEventListener('submit',e=>{e.preventDefault();projectRetirement()});
calculator?.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',projectRetirement));
window.addEventListener('resize',()=>{clearTimeout(window.__chartTimer);window.__chartTimer=setTimeout(projectRetirement,120)});
projectRetirement();
