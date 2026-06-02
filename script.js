/* ============================================================
   ¿QUIÉN QUIERE SER PROGRAMADOR EXPERTO?  ·  script.js
   Jhonaimer Diaz Cerquera · Instructor SENA
   ============================================================ */
'use strict';

/* ════════════════════════════════════════════════════════════
   BASE DE PREGUNTAS — 15 preguntas PSeInt
   correct: índice DENTRO de options[] antes de barajar
════════════════════════════════════════════════════════════ */
const QUESTIONS_DEFAULT = [
  // ──── NIVEL 1: BÁSICO ────────────────────────────────────
  {id:0,level:1,levelName:'Nivel 1 – Básico',category:'Cafetería del SENA',
   text:'En la cafetería del SENA se vende un menú a $8.500. Un aprendiz quiere saber cuánto gastará si compra N menús. ¿Cuál es la instrucción de PROCESO correcta en PSeInt?',
   options:['total ← N * 8500','Leer N, 8500','Escribir "El total es:", total','Definir total Como Entero'],
   correct:0,explanation:'El proceso es la asignación que calcula el resultado. "total ← N * 8500" multiplica la cantidad por el precio. Leer = entrada, Escribir = salida, Definir = declaración.'},

  {id:1,level:1,levelName:'Nivel 1 – Básico',category:'Consumo de Combustible',
   text:'Un conductor recorre 340 km y consume 28 litros. ¿Qué expresión en PSeInt calcula correctamente el rendimiento en km/litro?',
   options:['rendimiento ← distancia / litros','rendimiento ← litros / distancia','Leer rendimiento','rendimiento ← distancia + litros'],
   correct:0,explanation:'Rendimiento = distancia ÷ litros. Dividir distancia entre litros da km/litro. La opción B invierte los operandos y daría litros/km.'},

  {id:2,level:1,levelName:'Nivel 1 – Básico',category:'Cosecha de Café',
   text:'Un caficultor recolecta café 5 días seguidos. ¿Qué instrucción PSeInt recibe correctamente los kilos de cada día?',
   options:['Leer dia1, dia2, dia3, dia4, dia5','Escribir dia1 + dia2 + dia3 + dia4 + dia5','total ← dia1 + dia2 + dia3 + dia4 + dia5','Definir total Como Real'],
   correct:0,explanation:'"Leer" es la instrucción de ENTRADA en PSeInt. Permite al usuario ingresar valores. Se pueden listar varios separados por coma. Escribir = salida; ← = asignación.'},

  {id:3,level:1,levelName:'Nivel 1 – Básico',category:'Plan de Datos',
   text:'Un plan ofrece 10 GB por $35.000. Cada GB extra cuesta $2.500. Si el usuario consumió X GB adicionales, ¿cuál expresión calcula el total a pagar?',
   options:['total ← 35000 + (X * 2500)','total ← 35000 * X * 2500','total ← X + 2500 + 35000','total ← 35000 / X + 2500'],
   correct:0,explanation:'Costo adicional = X * 2500. Total = plan base + costo adicional = 35000 + (X*2500). Los paréntesis aseguran que la multiplicación se haga primero.'},

  {id:4,level:1,levelName:'Nivel 1 – Básico',category:'Fiesta de Grados',
   text:'Salón=$1.200.000, catering=$850.000, decorados=$320.000. Hay N invitados. ¿Cuál fórmula PSeInt calcula el costo por persona?',
   options:['costo_pp ← (1200000 + 850000 + 320000) / N','costo_pp ← 1200000 + 850000 + 320000 * N','costo_pp ← N / (1200000 + 850000 + 320000)','costo_pp ← (1200000 + 850000) / 320000 + N'],
   correct:0,explanation:'Total = 1.200.000+850.000+320.000 = 2.370.000. Costo por persona = Total / N. Los paréntesis son obligatorios para sumar antes de dividir.'},

  // ──── NIVEL 2: CONDICIONALES ─────────────────────────────
  {id:5,level:2,levelName:'Nivel 2 – Condicionales',category:'Descuento Supermercado',
   text:'Un supermercado aplica 15% de descuento si la compra supera $150.000. ¿Cuál estructura condicional PSeInt es CORRECTA?',
   options:[
     'Si compra > 150000 Entonces\n  descuento ← compra * 0.15\nSiNo\n  descuento ← 0\nFinSi',
     'Si compra = 150000 Entonces\n  descuento ← compra * 15\nFinSi',
     'Si compra < 150000 Entonces\n  descuento ← compra * 0.15\nFinSi',
     'Si descuento > 0.15 Entonces\n  compra ← compra - 150000\nFinSi'],
   correct:0,explanation:'Condición: > 150000 (mayor estricto). Descuento 15% = *0.15 (no *15). El SiNo garantiza descuento=0 cuando no aplica.'},

  {id:6,level:2,levelName:'Nivel 2 – Condicionales',category:'Semáforo Peatonal',
   text:'Un semáforo está en VERDE si el tiempo restante es mayor a 5 segundos, sino en ROJO. ¿Qué operador relacional PSeInt es correcto?',
   options:['Si tiempo > 5 Entonces','Si tiempo = 5 Entonces','Si tiempo < 5 Entonces','Si tiempo >= 5 Entonces'],
   correct:0,explanation:'">" significa "mayor que". Si dice "mayor a 5" se usa >. Para "mayor o igual a 5" sería >=. "= 5" solo evalúa exactamente ese valor.'},

  {id:7,level:2,levelName:'Nivel 2 – Condicionales',category:'Biblioteca SENA',
   text:'La biblioteca cobra $500/día si el libro llega tarde. El sistema solo debe mostrar la multa SI hay días de retraso. ¿Cuál estructura PSeInt es correcta?',
   options:[
     'Si dias_tarde > 0 Entonces\n  multa ← dias_tarde * 500\n  Escribir "Multa:", multa\nFinSi',
     'Si dias_tarde = 0 Entonces\n  multa ← dias_tarde * 500\n  Escribir "Multa:", multa\nFinSi',
     'Si dias_tarde > 0 Entonces\n  Escribir "Sin multa"\nSiNo\n  multa ← dias_tarde * 500\nFinSi',
     'multa ← dias_tarde * 500\nEscribir multa'],
   correct:0,explanation:'"dias_tarde > 0" detecta el retraso. Solo cuando es verdadero se calcula y muestra la multa. La opción B evalúa cuando NO hay retraso; la C invierte el SiNo; la D siempre calcula.'},

  {id:8,level:2,levelName:'Nivel 2 – Condicionales',category:'Gimnasio Comunitario',
   text:'El gimnasio da 20% de descuento si el afiliado TIENE membresía Y lleva más de 6 meses. ¿Qué operador lógico une las condiciones?',
   options:[
     'Si tiene_membresia = Verdadero Y meses > 6 Entonces',
     'Si tiene_membresia = Verdadero O meses > 6 Entonces',
     'Si tiene_membresia = Falso Y meses > 6 Entonces',
     'Si tiene_membresia > Verdadero Y meses >= 6 Entonces'],
   correct:0,explanation:'"Y" (AND) requiere que AMBAS condiciones sean verdaderas. "O" bastaría con una. "Falso" invierte la condición. meses > 6 es "más de 6" (no incluye 6 exacto).'},

  {id:9,level:2,levelName:'Nivel 2 – Condicionales',category:'Número Par o Impar',
   text:'¿Cuál condición en PSeInt determina correctamente si el número N es PAR?',
   options:['Si N MOD 2 = 0 Entonces','Si N / 2 = 0 Entonces','Si N MOD 2 = 1 Entonces','Si N * 2 = 0 Entonces'],
   correct:0,explanation:'MOD = residuo de la división entera. Si N MOD 2 = 0, el residuo al dividir entre 2 es cero → número par. MOD 2 = 1 → impar. N/2=0 solo aplica si N=0.'},

  // ──── NIVEL 3: CONDICIONALES ANIDADOS ────────────────────
  {id:10,level:3,levelName:'Nivel 3 – Anidados',category:'Clasificador de Notas',
   text:'Clasificación: ≥4.5=Excelente, ≥3.5=Bueno, ≥3.0=Aprobado, <3.0=Reprobado. ¿Cuál es el orden CORRECTO de evaluación en PSeInt?',
   options:[
     'Primero ≥4.5, luego ≥3.5, luego ≥3.0, finalmente SiNo (reprobado)',
     'Primero <3.0, luego ≥3.0, luego ≥3.5, finalmente ≥4.5',
     'Primero ≥3.0, luego ≥3.5, luego ≥4.5, finalmente SiNo',
     'El orden no importa en condicionales anidados'],
   correct:0,explanation:'En anidados el orden es CRUCIAL: evaluamos del criterio más restrictivo al menos. Si evaluamos ≥3.0 primero, todos los que aprueban entrarían ahí. Orden correcto: 4.5 → 3.5 → 3.0 → SiNo.'},

  {id:11,level:3,levelName:'Nivel 3 – Anidados',category:'Parqueadero',
   text:'Tarifas: ≤2 horas=$0, 2-5 horas=$3.000, >5 horas=$5.000. Si horas=3, ¿cuánto paga el conductor?',
   options:['$3.000','$0','$5.000','$9.000'],
   correct:0,explanation:'horas=3 cumple la condición horas>2 Y horas<=5, por lo que aplica la tarifa intermedia de $3.000. El Si evalúa primero <=2 (falso), luego <=5 (verdadero → $3.000).'},

  {id:12,level:3,levelName:'Nivel 3 – Anidados',category:'Diagnóstico de Internet',
   text:'≥100 Mbps="Fibra ideal", ≥30="Buena velocidad", ≥5="Básica", <5="Deficiente". Para 45 Mbps, ¿cuál es el diagnóstico?',
   options:['"Buena velocidad"','"Fibra óptica ideal"','"Velocidad básica"','"Conexión deficiente"'],
   correct:0,explanation:'45 Mbps: cumple ≥30 pero no ≥100. El algoritmo evalúa ≥100 (falso) → ≥30 (verdadero → "Buena velocidad"). Las condiciones posteriores no se evalúan gracias al SiNo encadenado.'},

  {id:13,level:3,levelName:'Nivel 3 – Anidados',category:'Categorías E-Commerce',
   text:'precio<$50.000="Económico", $50.000-$200.000="Estándar", >$200.000="Premium". ¿Cuál condición valida el rango "Estándar" correctamente?',
   options:['precio >= 50000 Y precio <= 200000','precio > 50000 Y precio < 200000','precio = 50000 O precio = 200000','precio >= 50000 O precio <= 200000'],
   correct:0,explanation:'>= y <= incluyen los valores límite (50.000 y 200.000). Con > y < se excluirían esos extremos. "O" en vez de "Y" daría cualquier precio fuera del rango también.'},

  {id:14,level:3,levelName:'Nivel 3 – Anidados',category:'Factura de Energía',
   text:'0-100 kWh=$350/kWh, 101-300 kWh=$520/kWh (todo el consumo), >300 kWh=$780/kWh. Para 250 kWh, ¿cuál es el valor total?',
   options:['$130.000','$87.500','$195.000','$52.000'],
   correct:0,explanation:'250 kWh está en el rango 101-300 → tarifa $520 aplicada a TODO: 250×$520=$130.000. Si kWh<=100→×350; SiNo Si kWh<=300→×520; SiNo→×780.'},
];

/* ════════════════════════════════════════════════════════════
   CONSTANTES
════════════════════════════════════════════════════════════ */
const SAVEPOINTS = [4, 9, 14]; // índices (preguntas 5, 10, 15)

const SPEECHES = [
  '¡Bienvenidos al concurso más emocionante del aprendizaje digital! Soy Jhonaimer Diaz Cerquera, su instructor de Programación y Algoritmia. 🎓',
  'Hoy pondrán a prueba sus conocimientos en PSeInt con 15 preguntas de tres niveles de dificultad. ¡El conocimiento es su mejor arma! 💡',
  'Recuerden: tienen tres comodines y tres puntos de guardado en P5, P10 y P15. Si fallan después de un punto guardado, pueden conservar su avance. ¡Úsenlos con sabiduría!',
  '¡Que comiencen los algoritmos! ¿Están listos para demostrar que son verdaderos PROGRAMADORES EXPERTOS? 🚀'
];

const MOTIVATIONAL = ['¡Excelente razonamiento! 🎯','¡Eso es algoritmia pura! 💡','¡Un verdadero programador! 🏆','¡Imparable! ⚡','¡El código es tuyo! 💻','¡Magnífico! 🌟','¡Perfecto! ✨','¡Brillante! 🔥'];

/* ════════════════════════════════════════════════════════════
   ESTADO GLOBAL
════════════════════════════════════════════════════════════ */
const GS = {
  questions:       [],   // copia de trabajo
  shuffledOrders:  [],   // order[q][i] = índice original en posición visual i
  shuffledCorrect: [],   // correctBtn[q] = posición de botón 0-3 con la correcta
  currentQ:        0,
  score:           0,
  correctCount:    0,
  playerName:      '',
  playerProgram:   '',
  timeLimitSec:    30,
  lifelineUsed:    {fifty:false,friend:false,public:false},
  answeredResult:  [],   // true/false/null por pregunta
  lastSavepoint:   -1,   // índice del último savepoint alcanzado (-1=ninguno)
  savepointScore:  0,    // puntaje al alcanzar el savepoint
  savepointCorrect:0,    // correctas al savepoint
  finished:        false,
  speechStep:      0,
  questionsEdited: false,
};

/* ════════════════════════════════════════════════════════════
   AUDIO — Web Audio API (sin archivos externos)
════════════════════════════════════════════════════════════ */
const Audio = (() => {
  let ctx = null;
  const init = () => { if(!ctx) try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} };
  const tone = (freq, type, dur, vol=0.28, delay=0) => {
    init(); if(!ctx) return;
    try{
      const o=ctx.createOscillator(), g=ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type=type; o.frequency.value=freq;
      g.gain.setValueAtTime(vol, ctx.currentTime+delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+delay+dur);
      o.start(ctx.currentTime+delay); o.stop(ctx.currentTime+delay+dur+0.05);
    }catch(e){}
  };
  return {
    correct:  ()=>{ tone(523,'sine',.12,.25); tone(659,'sine',.12,.25,.14); tone(784,'sine',.22,.25,.28); },
    wrong:    ()=>{ tone(220,'sawtooth',.18,.2); tone(196,'sawtooth',.28,.2,.2); },
    tick:     ()=>  tone(880,'square',.05,.07),
    select:   ()=>  tone(440,'sine',.1,.14),
    lifeline: ()=>{ tone(330,'sine',.1,.18); tone(440,'sine',.1,.18,.12); tone(550,'sine',.15,.18,.24); },
    savepoint:()=>{ [523,659,784,1047].forEach((f,i)=>tone(f,'sine',.25,.22,i*.12)); },
    fanfare:  ()=>{ [523,659,784,1047,1319].forEach((f,i)=>tone(f,'triangle',.4,.3,i*.1)); }
  };
})();

/* ════════════════════════════════════════════════════════════
   PARTÍCULAS
════════════════════════════════════════════════════════════ */
(() => {
  const cv = document.getElementById('particles');
  const ct = cv.getContext('2d');
  let pts = [];
  const resize = () => { cv.width=innerWidth; cv.height=innerHeight; };
  window.addEventListener('resize', resize); resize();
  const n = Math.min(Math.floor(innerWidth/11), 120);
  for(let i=0;i<n;i++) pts.push({
    x:Math.random()*innerWidth, y:Math.random()*innerHeight,
    r:Math.random()*1.4+.3,
    vx:(Math.random()-.5)*.28, vy:(Math.random()-.5)*.28,
    a:Math.random()*.35+.08, h:Math.random()>.7?45:215
  });
  const draw = () => {
    ct.clearRect(0,0,cv.width,cv.height);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=cv.width; if(p.x>cv.width)p.x=0;
      if(p.y<0)p.y=cv.height; if(p.y>cv.height)p.y=0;
      ct.beginPath(); ct.arc(p.x,p.y,p.r,0,Math.PI*2);
      ct.fillStyle=`hsla(${p.h},80%,70%,${p.a})`; ct.fill();
    });
    requestAnimationFrame(draw);
  };
  draw();
})();

/* ════════════════════════════════════════════════════════════
   STORAGE
════════════════════════════════════════════════════════════ */
const Store = {
  k:'QPE_',
  get:(k)=>{ try{ return JSON.parse(localStorage.getItem(Store.k+k)||'null'); }catch{return null;} },
  set:(k,v)=>{ try{ localStorage.setItem(Store.k+k, JSON.stringify(v)); }catch{} },
  del:(k)=>{ try{ localStorage.removeItem(Store.k+k); }catch{} }
};

/* ════════════════════════════════════════════════════════════
   RANKING
════════════════════════════════════════════════════════════ */
const Ranking = {
  get: ()=> Store.get('ranking') || [],
  add: (e)=>{ const l=Ranking.get(); l.push(e); l.sort((a,b)=>b.score-a.score); Store.set('ranking',l.slice(0,20)); },
  clear: ()=> Store.del('ranking')
};

/* ════════════════════════════════════════════════════════════
   TIMER
════════════════════════════════════════════════════════════ */
const Timer = {
  _id: null,
  _total: 0,
  start(secs, onTick, onEnd){
    Timer.stop();
    if(secs===0){ onTick(null); return; }
    Timer._total = secs;
    GS.timerRemaining = secs;
    const arc = document.getElementById('timerArc');
    const disp= document.getElementById('timerDisplay');
    const C = 213.6;
    const upd = ()=>{
      const r = GS.timerRemaining;
      const pct = r / Timer._total;
      if(arc){
        arc.style.strokeDashoffset = C*(1-pct);
        arc.className = 'timer-arc' + (pct<.2?' danger':pct<.4?' warn':'');
      }
      if(disp) disp.textContent = r;
      onTick(r);
    };
    upd();
    Timer._id = setInterval(()=>{
      GS.timerRemaining--;
      if(GS.timerRemaining<=5 && GS.timerRemaining>0) Audio.tick();
      upd();
      if(GS.timerRemaining<=0){ Timer.stop(); onEnd(); }
    },1000);
  },
  stop(){ if(Timer._id){ clearInterval(Timer._id); Timer._id=null; } },
  reset(){
    const arc=document.getElementById('timerArc');
    const disp=document.getElementById('timerDisplay');
    if(arc){ arc.style.strokeDashoffset=0; arc.className='timer-arc'; }
    if(disp) disp.textContent = GS.timeLimitSec||'∞';
  }
};

/* ════════════════════════════════════════════════════════════
   CÁLCULO DE NOTA 1.0 – 5.0
════════════════════════════════════════════════════════════ */
const gradeFromCorrect = (correct, total=15) => {
  // Escala SENA: 0 correctas = 1.0, 15 correctas = 5.0
  const pct = correct / total;
  const grade = 1 + pct * 4;
  return Math.round(grade * 10) / 10; // 1 decimal
};

/* ════════════════════════════════════════════════════════════
   APP PRINCIPAL
════════════════════════════════════════════════════════════ */
const App = {

  /* ── Navegación ── */
  goTo(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    const t = document.getElementById(id);
    if(t) t.classList.add('active');
    if(id==='screen-presenter') App.initPresenter();
    if(id==='screen-ranking')   App.renderRanking();
    if(id==='screen-teacher')   App.initTeacherPanel();
  },

  /* ── Presentador ── */
  initPresenter(){ GS.speechStep=0; App.showSpeech(); },
  showSpeech(){
    const txt = document.getElementById('speechText');
    const btn = document.getElementById('btnNextSpeech');
    if(!txt) return;
    txt.style.opacity=0;
    setTimeout(()=>{ txt.textContent=SPEECHES[GS.speechStep]; txt.style.transition='opacity .4s'; txt.style.opacity=1; },220);
    const last = GS.speechStep>=SPEECHES.length-1;
    if(btn) btn.textContent = last?'¡Comenzar! ▶':'Continuar ▶';
  },
  nextSpeech(){
    GS.speechStep++;
    if(GS.speechStep>=SPEECHES.length) App.goTo('screen-instructions');
    else App.showSpeech();
  },

  /* ── Inicio de juego ── */
  startGame(){
    const nameEl=document.getElementById('playerName');
    const progEl=document.getElementById('playerProgram');
    const timeEl=document.getElementById('timeLimit');

    if(nameEl && nameEl.value.trim()){
      GS.playerName    = nameEl.value.trim();
      GS.playerProgram = progEl?progEl.value.trim():'';
      GS.timeLimitSec  = timeEl?parseInt(timeEl.value):30;
    } else if(!GS.playerName){
      App.goTo('screen-player'); return;
    }

    // Reiniciar estado
    GS.currentQ=0; GS.score=0; GS.correctCount=0;
    GS.answeredResult=[]; GS.lifelineUsed={fifty:false,friend:false,public:false};
    GS.lastSavepoint=-1; GS.savepointScore=0; GS.savepointCorrect=0;
    GS.lives=3; GS.finished=false;

    // Copia de preguntas
    if(!GS.questionsEdited){
      GS.questions = JSON.parse(JSON.stringify(QUESTIONS_DEFAULT));
    }

    // Barajar opciones con Fisher-Yates por cada pregunta
    GS.shuffledOrders=[]; GS.shuffledCorrect=[];
    GS.questions.forEach(q=>{
      const ord=[0,1,2,3];
      for(let i=3;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [ord[i],ord[j]]=[ord[j],ord[i]]; }
      GS.shuffledOrders.push(ord);
      GS.shuffledCorrect.push(ord.indexOf(q.correct));
    });

    App.goTo('screen-game');
    App._setupGameUI();
    App._loadQuestion();
  },

  restartGame(){
    // Vuelve al registro para poder cambiar tiempo, luego arranca
    GS.playerName=''; // fuerza re-registro
    App.goTo('screen-player');
  },

  _setupGameUI(){
    const hudName=document.getElementById('hudName');
    if(hudName) hudName.textContent=GS.playerName;

    // Escalera de premios (de arriba=15 a abajo=1)
    const ladderEl=document.getElementById('ladderSteps');
    if(ladderEl){
      ladderEl.innerHTML='';
      for(let i=14;i>=0;i--){
        const d=document.createElement('div');
        const isSP = SAVEPOINTS.includes(i);
        d.className='ladder-step'+(isSP?' savepoint':'');
        d.id=`ls${i}`;
        d.innerHTML=`<span class="ls-q">${isSP?'🛡':''}P${i+1}</span><span class="ls-pts">${((i+1)*100).toLocaleString()}</span>`;
        ladderEl.appendChild(d);
      }
    }

    // Comodines activos
    ['ll5050','llFriend','llPublic'].forEach(id=>{ const e=document.getElementById(id); if(e) e.disabled=false; });
    // Vidas
    App._updateLivesHUD();
  },

  /* ── Actualizar display de vidas ── */
  _updateLivesHUD(){
    const el=document.getElementById('hudLives');
    if(!el) return;
    let html='';
    for(let i=0;i<3;i++) html+=`<span class="life-heart ${i<GS.lives?'alive':'dead'}">❤</span>`;
    el.innerHTML=html;
  },

  /* ── Cargar pregunta ── */
  _loadQuestion(){
    const q = GS.questions[GS.currentQ];
    if(!q){ App._endGame(); return; }

    // Indicador savepoint
    const spEl=document.getElementById('qSavepoint');
    if(spEl) spEl.textContent = SAVEPOINTS.includes(GS.currentQ)?'🛡 Punto de Guardado':'';

    // HUD
    const isSP = SAVEPOINTS.includes(GS.currentQ);
    document.getElementById('hudQNum').textContent  = `Pregunta ${GS.currentQ+1} / 15`;
    document.getElementById('hudLevel').textContent = q.levelName;
    document.getElementById('hudScore').textContent = GS.score.toLocaleString();
    document.getElementById('qCategory').textContent= q.category;
    document.getElementById('qText').innerHTML      = q.text.replace(/\n/g,'<br>');

    // Barra de progreso
    const fill=document.getElementById('progressFill');
    if(fill) fill.style.width=((GS.currentQ/15)*100)+'%';

    // Escalera
    for(let i=0;i<15;i++){
      const el=document.getElementById(`ls${i}`);
      if(!el) continue;
      const r=GS.answeredResult[i];
      el.className='ladder-step'+(SAVEPOINTS.includes(i)?' savepoint':'')+
        (i===GS.currentQ?' current':'')+(r===true?' done-ok':r===false?' done-fail':'');
    }

    // Opciones barajadas
    const ord=GS.shuffledOrders[GS.currentQ];
    ['A','B','C','D'].forEach((lbl,i)=>{
      const btn=document.getElementById(`opt${i}`);
      if(!btn) return;
      btn.className='option-btn';
      btn.disabled=false;
      btn.querySelector('.opt-label').textContent=lbl;
      btn.querySelector('.opt-text').innerHTML=q.options[ord[i]].replace(/\n/g,'<br>');
    });

    // Timer — aplicar timeLimitSec que eligió el jugador
    Timer.reset();
    Timer.start(
      GS.timeLimitSec,
      (r)=>{ const d=document.getElementById('timerDisplay'); if(d) d.textContent=r===null?'∞':r; },
      ()=>App._timeUp()
    );
  },

  /* ── Selección de respuesta ── */
  selectAnswer(idx){
    Timer.stop();
    for(let i=0;i<4;i++){ const b=document.getElementById(`opt${i}`); if(b) b.disabled=true; }
    const sel=document.getElementById(`opt${idx}`);
    if(sel) sel.classList.add('selected');
    Audio.select();
    setTimeout(()=>App._revealAnswer(idx, GS.shuffledCorrect[GS.currentQ]), 1200);
  },

  _revealAnswer(selected, correct){
    const isOk = selected===correct;
    const q    = GS.questions[GS.currentQ];
    const pts  = (GS.currentQ+1)*100;

    for(let i=0;i<4;i++){
      const b=document.getElementById(`opt${i}`);
      if(!b) continue;
      if(i===correct) b.classList.add('correct');
      else if(i===selected&&!isOk) b.classList.add('wrong');
    }

    if(isOk){
      Audio.correct();
      GS.score+=pts; GS.correctCount++;
      GS.answeredResult[GS.currentQ]=true;
    } else {
      Audio.wrong();
      GS.lives--;
      App._updateLivesHUD();
      GS.answeredResult[GS.currentQ]=false;
    }

    // ¿Es savepoint? (solo si respondió bien)
    const isSP = SAVEPOINTS.includes(GS.currentQ);
    if(isSP && isOk){
      GS.lastSavepoint   = GS.currentQ;
      GS.savepointScore  = GS.score;
      GS.savepointCorrect= GS.correctCount;
      Audio.savepoint();
    }

    // ¿Se quedó sin vidas?
    if(!isOk && GS.lives<=0){
      setTimeout(()=>App._loseAllLives(q.explanation), 600);
      return;
    }

    if(isSP && isOk){
      setTimeout(()=>App._showFeedback(true, pts, q.explanation, true), 600);
    } else {
      setTimeout(()=>App._showFeedback(isOk, pts, q.explanation, false), 600);
    }
  },

  _timeUp(){
    const correct=GS.shuffledCorrect[GS.currentQ];
    const q=GS.questions[GS.currentQ];
    const b=document.getElementById(`opt${correct}`); if(b) b.classList.add('correct');
    for(let i=0;i<4;i++){ const x=document.getElementById(`opt${i}`); if(x) x.disabled=true; }
    Audio.wrong();
    GS.lives--;
    App._updateLivesHUD();
    GS.answeredResult[GS.currentQ]=false;

    if(GS.lives<=0){
      setTimeout(()=>App._loseAllLives('⏰ Tiempo agotado. '+q.explanation),600);
    } else {
      setTimeout(()=>App._showFeedback(false, 0, '⏰ Tiempo agotado. '+q.explanation, false),600);
    }
  },

  /* ── Sin vidas: terminar aplicando nota del seguro ── */
  _loseAllLives(explanation){
    Timer.stop();
    // Nota actual basada en correctas sobre 15
    const gradeCurrent = gradeFromCorrect(GS.correctCount, 15);
    // Nota del último seguro alcanzado (garantizada)
    const gradeSavepoint = GS.lastSavepoint>=0 ? gradeFromCorrect(GS.savepointCorrect, 15) : null;
    // La nota final es la MAYOR entre la actual y la del seguro
    const finalGrade = gradeSavepoint!==null ? Math.max(gradeCurrent, gradeSavepoint) : gradeCurrent;
    // Si el seguro da mejor nota, usar ese puntaje
    if(gradeSavepoint!==null && gradeSavepoint >= gradeCurrent){
      GS.score        = GS.savepointScore;
      GS.correctCount = GS.savepointCorrect;
    }

    const spLabel = GS.lastSavepoint>=0 ? `🛡 Seguro P${GS.lastSavepoint+1}` : 'Sin seguro alcanzado';
    const ol=document.getElementById('feedbackOverlay');
    const ic=document.getElementById('feedbackIcon');
    const ti=document.getElementById('feedbackTitle');
    const tx=document.getElementById('feedbackText');
    const pt=document.getElementById('feedbackPoints');
    const gr=document.getElementById('feedbackGrade');
    const bt=document.getElementById('btnNextQ');
    if(!ol) return;

    ic.textContent='💔'; ic.className='feedback-icon wi';
    ti.textContent='¡Sin Vidas!'; ti.className='feedback-title wt';
    tx.innerHTML=`${explanation}<br/><br/><strong style="color:var(--gold)">${spLabel}</strong><br/>Tu nota garantizada: <strong style="color:var(--green);font-size:1.1rem">${finalGrade.toFixed(1)} / 5.0</strong>`;
    pt.textContent='Se acabaron las ❤️';
    pt.style.color='var(--red)';
    gr.textContent=`Nota final: ${finalGrade.toFixed(1)} / 5.0`;

    bt.textContent='Ver Resultados';
    bt.onclick=()=>App._endGame();
    ol.classList.add('show');
  },

  /* ── Mostrar feedback ── */
  _showFeedback(isOk, pts, explanation, isSavepoint){
    const ol = document.getElementById('feedbackOverlay');
    const ic = document.getElementById('feedbackIcon');
    const ti = document.getElementById('feedbackTitle');
    const tx = document.getElementById('feedbackText');
    const pt = document.getElementById('feedbackPoints');
    const gr = document.getElementById('feedbackGrade');
    const bt = document.getElementById('btnNextQ');
    if(!ol) return;

    ic.textContent = isOk?'✓':'✗';
    ic.className   = 'feedback-icon '+(isOk?'ci':'wi');
    ti.textContent = isOk?(isSavepoint?'🛡 ¡Punto Guardado!':MOTIVATIONAL[Math.floor(Math.random()*MOTIVATIONAL.length)]):'¡Incorrecto!';
    ti.className   = 'feedback-title '+(isOk?'ct':'wt');
    tx.textContent = explanation;
    pt.textContent = isOk?`+${pts} pts`:'0 pts';
    pt.style.color = isOk?'var(--gold)':'var(--red)';

    // Nota parcial + vidas
    const partialGrade = gradeFromCorrect(GS.correctCount, 15);
    const livesStr = '❤'.repeat(GS.lives) + '🖤'.repeat(3-GS.lives);
    gr.textContent = `Nota parcial: ${partialGrade.toFixed(1)} / 5.0  ·  Vidas: ${livesStr}`;

    bt.onclick = ()=>App.nextQuestion();
    bt.textContent = 'Siguiente ▶';
    ol.classList.add('show');
  },

  /* ── Modal ¿continuar desde savepoint? ── */
  _showWrongWithSavepoint(pts, explanation){
    const spName = `Pregunta ${GS.lastSavepoint+1}`;
    const spGrade= gradeFromCorrect(GS.savepointCorrect,15).toFixed(1);

    App._showModal(
      '🛡 Punto de Guardado Disponible',
      `<p style="margin-bottom:12px">${explanation}</p>
       <div style="background:rgba(245,197,24,.08);border:1px solid rgba(245,197,24,.3);border-radius:8px;padding:14px;margin-bottom:4px">
         <div style="font-size:.8rem;color:var(--txt-dim);margin-bottom:6px">Tu avance guardado en <strong style="color:var(--gold)">${spName}</strong>:</div>
         <div style="font-family:var(--font-d);font-size:1.1rem;color:var(--gold)">${GS.savepointScore.toLocaleString()} pts · ${GS.savepointCorrect} correctas · Nota ${spGrade}</div>
       </div>
       <p style="font-size:.85rem;color:var(--txt-dim);margin-top:12px">¿Deseas <strong>continuar desde ${spName}</strong> conservando ese puntaje, o <strong>terminar aquí</strong>?</p>`,
      [
        {label:'🛡 Continuar desde el guardado', action:()=>{ App.closeModal(); App._restoreFromSavepoint(); }},
        {label:'🏁 Terminar aquí',               action:()=>{ App.closeModal(); App._endGame(); }}
      ]
    );
  },

  _restoreFromSavepoint(){
    // Restaurar al estado del savepoint y continuar
    GS.currentQ     = GS.lastSavepoint+1;
    GS.score        = GS.savepointScore;
    GS.correctCount = GS.savepointCorrect;
    // Limpiar respuestas posteriores al savepoint
    for(let i=GS.lastSavepoint+1;i<15;i++) GS.answeredResult[i]=undefined;
    // Re-barajar las preguntas restantes
    for(let i=GS.currentQ;i<15;i++){
      const ord=[0,1,2,3];
      for(let j=3;j>0;j--){ const k=Math.floor(Math.random()*(j+1)); [ord[j],ord[k]]=[ord[k],ord[j]]; }
      GS.shuffledOrders[i]=ord;
      GS.shuffledCorrect[i]=ord.indexOf(GS.questions[i].correct);
    }

    const feedOl=document.getElementById('feedbackOverlay');
    if(feedOl) feedOl.classList.remove('show');
    App._setupGameUI();
    App._loadQuestion();
  },

  nextQuestion(){
    const ol=document.getElementById('feedbackOverlay');
    if(ol) ol.classList.remove('show');
    GS.currentQ++;
    if(GS.currentQ>=15) App._endGame();
    else App._loadQuestion();
  },

  /* ── Comodines ── */
  useFiftyFifty(){
    if(GS.lifelineUsed.fifty) return;
    GS.lifelineUsed.fifty=true;
    document.getElementById('ll5050').disabled=true;
    Audio.lifeline();
    const correct=GS.shuffledCorrect[GS.currentQ];
    const wrongs=[0,1,2,3].filter(i=>i!==correct);
    for(let i=wrongs.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [wrongs[i],wrongs[j]]=[wrongs[j],wrongs[i]]; }
    wrongs.slice(0,2).forEach(idx=>{ const b=document.getElementById(`opt${idx}`); if(b){b.classList.add('eliminated');b.disabled=true;} });
  },

  useCallFriend(){
    if(GS.lifelineUsed.friend) return;
    GS.lifelineUsed.friend=true;
    document.getElementById('llFriend').disabled=true;
    Audio.lifeline();
    const correct=GS.shuffledCorrect[GS.currentQ];
    const ok70=Math.random()<.70;
    const sug=ok70?correct:[0,1,2,3].filter(i=>i!==correct)[Math.floor(Math.random()*3)];
    const lbls=['A','B','C','D'];
    const amigos=['Carlos Gómez','Valentina Torres','Sebastián Ruiz','María Paula Castro','Andrés López'];
    const a=amigos[Math.floor(Math.random()*amigos.length)];
    App._showModal('📞 Llamar a un Amigo',
      `<strong>${a}</strong> dice:<br><br>"Hmm, creo que la respuesta es la <strong>opción ${lbls[sug]}</strong>. Basándome en lo que estudié en clase, ese sería mi razonamiento. ¡Pero tú decides!" 📚`);
  },

  usePublicVote(){
    if(GS.lifelineUsed.public) return;
    GS.lifelineUsed.public=true;
    document.getElementById('llPublic').disabled=true;
    Audio.lifeline();
    const correct=GS.shuffledCorrect[GS.currentQ];
    const cp=Math.floor(Math.random()*25+45);
    let rem=100-cp;
    const oth=[];
    for(let i=0;i<2;i++){ const v=Math.floor(Math.random()*(rem/2)); oth.push(v); rem-=v; } oth.push(rem);
    for(let i=oth.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [oth[i],oth[j]]=[oth[j],oth[i]]; }
    const pcts=[0,0,0,0]; let oi=0;
    for(let i=0;i<4;i++) pcts[i]= i===correct?cp:oth[oi++];
    const lbls=['A','B','C','D'];
    const bars=pcts.map((p,i)=>`<div class="vote-bar-row"><span class="vote-bar-label">${lbls[i]}</span><div class="vote-bar-track"><div class="vote-bar-fill" style="width:0" data-t="${p}"></div></div><span class="vote-bar-pct">${p}%</span></div>`).join('');
    App._showModal('👥 Voto del Público', bars);
    setTimeout(()=>{ document.querySelectorAll('.vote-bar-fill').forEach(el=>{ el.style.width=el.dataset.t+'%'; }); },120);
  },

  _showModal(title, content, actions){
    const ol=document.getElementById('modalOverlay');
    const ti=document.getElementById('modalTitle');
    const ct=document.getElementById('modalContent');
    const ac=document.getElementById('modalActions');
    if(!ol) return;
    if(ti) ti.textContent=title;
    if(ct) ct.innerHTML=content;
    if(ac){
      if(actions && actions.length){
        ac.innerHTML='';
        actions.forEach(a=>{
          const b=document.createElement('button');
          b.className='btn-secondary'; b.textContent=a.label;
          b.onclick=a.action; ac.appendChild(b);
        });
      } else {
        ac.innerHTML='<button class="btn-main" onclick="App.closeModal()">Cerrar</button>';
      }
    }
    ol.classList.add('show');
  },
  closeModal(){ document.getElementById('modalOverlay')?.classList.remove('show'); },

  /* ── Fin del juego ── */
  _endGame(){
    Timer.stop();
    GS.finished=true;

    // Nota actual
    const gradeCurrent = gradeFromCorrect(GS.correctCount, 15);
    // Nota del seguro garantizada
    const gradeSavepoint = GS.lastSavepoint>=0 ? gradeFromCorrect(GS.savepointCorrect,15) : null;
    // Nota final = la mayor entre actual y seguro
    const grade = gradeSavepoint!==null ? Math.max(gradeCurrent, gradeSavepoint) : gradeCurrent;
    const correct = GS.correctCount;
    const passed  = grade >= 3.0;
    const pct     = Math.round((correct/15)*100);

    // Guardar en ranking
    Ranking.add({
      name:    GS.playerName,
      program: GS.playerProgram,
      score:   GS.score,
      correct, pct, grade,
      savepoint: GS.lastSavepoint>=0?`P${GS.lastSavepoint+1}`:'—',
      date:    new Date().toLocaleDateString('es-CO')
    });

    // Estadísticas
    const st=Store.get('stats')||{games:0,totalScore:0,passed:0,totalGrade:0};
    st.games++; st.totalScore+=GS.score; st.totalGrade+=grade;
    if(passed) st.passed++;
    Store.set('stats',st);

    // Pantalla de resultados
    const trophy=document.getElementById('resultsTrophy');
    const titleEl=document.getElementById('resultsTitle');
    const nameEl =document.getElementById('resultsName');
    const scoreEl=document.getElementById('statScore');
    const corrEl =document.getElementById('statCorrect');
    const gradeEl=document.getElementById('statGrade');
    const spEl   =document.getElementById('statSavepoint');
    const msgEl  =document.getElementById('resultsMessage');
    const certBtn=document.getElementById('btnCertificate');
    const grFill =document.getElementById('gradeBarFill');
    const grLine =document.getElementById('gradeLine');

    if(trophy)  trophy.textContent  = passed?'🏆':'📚';
    if(titleEl) titleEl.textContent = passed?'¡Programador Experto!':'Buen Intento';
    if(nameEl)  nameEl.textContent  = GS.playerName;
    if(scoreEl) scoreEl.textContent = GS.score.toLocaleString();
    if(corrEl)  corrEl.textContent  = `${correct}/15`;
    if(gradeEl) gradeEl.textContent = grade.toFixed(1);
    if(spEl)    spEl.textContent    = GS.lastSavepoint>=0?`P${GS.lastSavepoint+1} (nota garantizada ${gradeFromCorrect(GS.savepointCorrect,15).toFixed(1)})`:'Ninguno';
    const livesEl=document.getElementById('statLives');
    if(livesEl) livesEl.textContent = '❤'.repeat(GS.lives)+'🖤'.repeat(3-GS.lives);
    const livesLeft = GS.lives>0 ? `Con ${GS.lives} vida(s) restante(s).` : 'Perdiste todas las vidas.';
    if(msgEl)   msgEl.textContent   = passed
      ? `¡Felicitaciones, ${GS.playerName}! Obtuviste ${correct} respuestas correctas con nota ${grade.toFixed(1)}/5.0. ${livesLeft} ¡Eres un Programador Experto!`
      : `Obtuviste ${correct} correctas y nota ${grade.toFixed(1)}/5.0. ${livesLeft} Necesitas ≥3.0 para el certificado. ¡Sigue practicando!`;
    if(certBtn) certBtn.style.display = passed?'inline-block':'none';

    // Barra de nota animada
    const fillPct = ((grade-1)/4)*100;
    setTimeout(()=>{
      if(grFill) grFill.style.width=fillPct+'%';
      if(grLine) grLine.style.left=fillPct+'%';
    },400);

    if(passed) Audio.fanfare();
    App.goTo('screen-results');
  },

  /* ── Certificado ── */
  showCertificate(){
    const grade=gradeFromCorrect(GS.correctCount,15);
    const pct=Math.round((GS.correctCount/15)*100);
    const now=new Date();
    const dateStr=now.toLocaleDateString('es-CO',{year:'numeric',month:'long',day:'numeric'});

    document.getElementById('certStudent').textContent = GS.playerName;
    document.getElementById('certScore').textContent   = GS.score.toLocaleString()+' pts';
    document.getElementById('certPercent').textContent = pct+'%';
    document.getElementById('certGrade').textContent   = grade.toFixed(1)+' / 5.0';
    document.getElementById('certDate').textContent    = `Bogotá D.C., ${dateStr}`;
    App.goTo('screen-certificate');
  },
  printCertificate(){ window.print(); },

  /* ── Ranking ── */
  renderRanking(){
    const list=Ranking.get();
    const el=document.getElementById('rankingList');
    if(!el) return;
    if(!list.length){ el.innerHTML='<div class="ranking-empty">🏆 Aún no hay registros.<br/>¡Sé el primero en participar!</div>'; return; }
    el.innerHTML=list.map((r,i)=>{
      const tc=i===0?'top1':i===1?'top2':i===2?'top3':'';
      const md=i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1;
      return `<div class="ranking-row ${tc}">
        <div class="rank-pos">${md}</div>
        <div><div class="rank-name">${_esc(r.name)}</div><div class="rank-prog">${_esc(r.program||'SENA')}</div></div>
        <div><div class="rank-score">${r.score.toLocaleString()} pts</div><div class="rank-grade">Nota ${(r.grade||0).toFixed(1)}</div></div>
        <div class="rank-date">${r.date}</div>
      </div>`;
    }).join('');
  },
  clearRanking(){
    if(confirm('¿Borrar todo el ranking?')){ Ranking.clear(); App.renderRanking(); }
  },

  /* ── Panel Docente ── */
  initTeacherPanel(){
    const st=Store.get('stats')||{games:0,totalScore:0,passed:0,totalGrade:0};
    const el=document.getElementById('teacherStats');
    if(el) el.innerHTML=`
      <span>🎮 Partidas: <strong>${st.games}</strong></span>
      <span>✅ Aprobadas: <strong>${st.passed}</strong></span>
      <span>❌ Reprobadas: <strong>${st.games-st.passed}</strong></span>
      <span>📊 Aprobación: <strong>${st.games?Math.round(st.passed/st.games*100):0}%</strong></span>
      <span>📈 Nota promedio: <strong>${st.games?(st.totalGrade/st.games).toFixed(2):0}</strong></span>
      <span>💰 Puntaje promedio: <strong>${st.games?Math.round(st.totalScore/st.games).toLocaleString():0}</strong></span>`;

    const sel=document.getElementById('qEditorSelect');
    if(sel){
      sel.innerHTML='<option value="">— Selecciona una pregunta —</option>';
      GS.questions.forEach((q,i)=>{ const o=document.createElement('option'); o.value=i; o.textContent=`P${i+1} (N${q.level}) ${q.category}`; sel.appendChild(o); });
    }
    const cfg=Store.get('config')||{};
    const cn=document.getElementById('tContestName'); if(cn&&cfg.contestName) cn.value=cfg.contestName;
    const dt=document.getElementById('tDefaultTime'); if(dt&&cfg.defaultTime) dt.value=cfg.defaultTime;
  },

  loadQuestionEditor(){
    const sel=document.getElementById('qEditorSelect');
    const form=document.getElementById('qEditorForm');
    if(!sel||!form) return;
    const idx=parseInt(sel.value);
    if(isNaN(idx)){ form.style.display='none'; return; }
    form.style.display='flex';
    const q=GS.questions[idx];
    document.getElementById('qeText').value    =q.text;
    document.getElementById('qeOpt0').value    =q.options[0];
    document.getElementById('qeOpt1').value    =q.options[1];
    document.getElementById('qeOpt2').value    =q.options[2];
    document.getElementById('qeOpt3').value    =q.options[3];
    document.getElementById('qeCorrect').value =q.correct;
    document.getElementById('qeExplain').value =q.explanation;
  },

  saveQuestion(){
    const sel=document.getElementById('qEditorSelect');
    if(!sel) return;
    const idx=parseInt(sel.value); if(isNaN(idx)) return;
    GS.questions[idx]={
      ...GS.questions[idx],
      text:       document.getElementById('qeText').value,
      options:   [document.getElementById('qeOpt0').value,document.getElementById('qeOpt1').value,
                  document.getElementById('qeOpt2').value,document.getElementById('qeOpt3').value],
      correct:    parseInt(document.getElementById('qeCorrect').value)||0,
      explanation:document.getElementById('qeExplain').value
    };
    GS.questionsEdited=true;
    Store.set('customQuestions',GS.questions);
    alert('✅ Pregunta guardada.');
  },

  resetQuestion(){
    const sel=document.getElementById('qEditorSelect');
    if(!sel) return;
    const idx=parseInt(sel.value); if(isNaN(idx)) return;
    if(confirm('¿Restaurar pregunta original?')){
      GS.questions[idx]=JSON.parse(JSON.stringify(QUESTIONS_DEFAULT[idx]));
      App.loadQuestionEditor();
    }
  },

  saveTeacherConfig(){
    const cn=document.getElementById('tContestName')?.value?.trim();
    const dt=document.getElementById('tDefaultTime')?.value;
    Store.set('config',{contestName:cn||'¿Quién Quiere Ser Programador Experto?',defaultTime:dt||'30'});
    alert('✅ Configuración guardada.');
  },

  resetStats(){
    if(confirm('¿Reiniciar estadísticas globales?')){ Store.del('stats'); App.initTeacherPanel(); }
  },

  exportResults(){
    const list=Ranking.get();
    if(!list.length){ alert('No hay resultados para exportar.'); return; }
    const rows=list.map(r=>`"${r.name}","${r.program}",${r.score},${r.correct},${r.pct}%,${(r.grade||0).toFixed(1)},"${r.savepoint||'—'}","${r.date}"`);
    const csv='\uFEFF'+'Nombre,Programa,Puntaje,Correctas,Porcentaje,Nota,Guardado,Fecha\n'+rows.join('\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
    const a=document.createElement('a'); a.href=url; a.download='resultados_QPE.csv'; a.click();
    URL.revokeObjectURL(url);
  }
};

/* ════════════════════════════════════════════════════════════
   HELPER
════════════════════════════════════════════════════════════ */
function _esc(s){ const d=document.createElement('div'); d.appendChild(document.createTextNode(String(s))); return d.innerHTML; }

/* ════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  // Cargar preguntas personalizadas si existen
  const cq=Store.get('customQuestions');
  if(cq&&Array.isArray(cq)&&cq.length===15){ GS.questions=cq; GS.questionsEdited=true; }
  else GS.questions=JSON.parse(JSON.stringify(QUESTIONS_DEFAULT));

  App.goTo('screen-welcome');

  // Enter en el presentador
  document.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&document.getElementById('screen-presenter')?.classList.contains('active')) App.nextSpeech();
  });
});
