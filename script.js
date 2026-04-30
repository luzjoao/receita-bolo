/* =========================================================
   BOLO DE CENOURA · JavaScript
   ========================================================= */

/* ---------- 1. Botão "Começar a receita" ---------- */
const botaoApetite = document.getElementById('btnApetite');

botaoApetite.addEventListener('click', function () {
  alert('Bom apetite! Prepare o café! ☕🍰');
});

/* ---------- 2. Ano automático no rodapé ---------- */
const anoSpan = document.getElementById('ano');
anoSpan.textContent = new Date().getFullYear();

/* ---------- 3. Lista de ingredientes clicáveis ----------
   Clica no item -> marca como "checado" (linha riscada).
   Usamos delegação de evento: um listener no <ul> cuida
   de todos os <li>, mesmo que sejam adicionados depois. */
const checklists = document.querySelectorAll('.checklist');

checklists.forEach(function (lista) {
  lista.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'LI') {
      evento.target.classList.toggle('checked');
    }
  });
});

/* ---------- 4. Botão "voltar ao topo" ----------
   Aparece quando a pessoa rola mais de 400px e some
   quando ela volta pro topo. Clique = scroll suave. */
const botaoTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    botaoTopo.classList.add('visible');
  } else {
    botaoTopo.classList.remove('visible');
  }
});

botaoTopo.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- 5. Animação de revelação no scroll ----------
   Os elementos com a classe .reveal começam invisíveis.
   Quando entram na tela, ganham a classe .revealed e
   aparecem com fade-in. Usamos IntersectionObserver
   pra só animar o que aparece (mais performático). */
const elementosReveal = document.querySelectorAll('.reveal');

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('revealed');
      observador.unobserve(entrada.target); // anima uma vez só
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

elementosReveal.forEach(function (el) {
  observador.observe(el);
});