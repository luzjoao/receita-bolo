# 🥕 Bolo de Cenoura com Cobertura de Chocolate

Página web da receita feita com **HTML5 + CSS3 + JavaScript**.

Projeto desenvolvido por **João Eduardo**.

## 📂 Estrutura do projeto

```
receita-bolo/
├── index.html   ← estrutura semântica da página
├── style.css    ← estilos (paleta cenoura/chocolate, tipografia, animações)
├── script.js    ← interações: botão, checklist, voltar ao topo, fade-in
├── bolo.jpg     ← foto do bolo (você precisa adicionar essa)
└── README.md    ← este arquivo
```

## 🖼️ Adicionando a foto do bolo

A página espera um arquivo chamado **`bolo.jpg`** na mesma pasta:

1. Procure no Google Imagens uma foto de "bolo de cenoura com cobertura de chocolate"
2. Clique na imagem → **"Visitar"** para abrir o site original
3. **Botão direito na imagem → "Salvar imagem como..."**
4. Salve com o nome `bolo.jpg` na pasta do projeto

> Se salvou com outro nome, abra `index.html` e troque `src="bolo.jpg"` pelo nome correto.

## ✨ Funcionalidades

### Interativas
- **Lista de ingredientes clicável** — clica no item e ele fica riscado (estilo lista de compras)
- **Botão "Começar a receita"** — dispara um `alert` divertido
- **Botão "voltar ao topo"** — aparece flutuando quando você rola a página
- **Animação fade-in** ao rolar — os blocos surgem suavemente na tela
- **Header fixo** com efeito blur enquanto rola
- **Hover effects** em cards e botões

### Visuais
- **Elementos decorativos** flutuando no hero (cenourinha + gotas de chocolate)
- **3 cards de "Dicas da Vovó"** com ícones SVG temáticos
- **Numeração estilizada** dos passos (01, 02, 03...) com círculos de chocolate
- **Paleta harmoniosa** de creme + laranja-cenoura + chocolate
- **Tipografia editorial** com Fraunces (serifa elegante) + Manrope (corpo limpo)

### Práticas
- **Estilos de impressão** — dá um `Ctrl+P` que sai bonitinho, sem botões e em preto e branco
- **Acessibilidade** — `aria-label`, `alt` em imagens, respeita `prefers-reduced-motion`
- **Responsivo** — funciona em celular, tablet e desktop

## 🚀 Publicando no GitHub Pages

1. Crie um repositório no GitHub (ex.: `receita-bolo`)
2. Suba **todos os arquivos** (incluindo o `bolo.jpg`)
3. Vá em **Settings → Pages**
4. Em **Source**, selecione o branch `main` e a pasta `/ (root)`
5. Salve. O link aparece no topo:
   `https://SEU-USUARIO.github.io/receita-bolo/`

## ✅ Critérios atendidos

| Critério | Onde está |
|---|---|
| Tags semânticas | `<header>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>` |
| Hierarquia visual | `<h1>` 4.6rem, `<h2>` 2.8rem, `<h3>` 1.5rem |
| Lista não-ordenada | `<ul class="checklist">` para ingredientes |
| Lista ordenada | `<ol class="steps">` para o passo a passo |
| Imagem com `alt` | `<img src="bolo.jpg" alt="...">` |
| Google Fonts | Fraunces + Manrope |
| Box Model | `padding`, `margin`, `border` em todos os blocos |
| Responsividade | `clamp()`, `max-width`, media queries (1, 2 e 3 colunas) |
| Estética | paleta harmoniosa com bom contraste |
| JavaScript | `alert()` + checklist + voltar ao topo + scroll reveal |

## 🎓 Conceitos extras demonstrados

- **CSS Variables** (`:root` com `--carrot`, `--chocolate`, etc.)
- **CSS Grid + Flexbox** combinados
- **Counters CSS** para numeração automática (`counter-reset`, `counter-increment`)
- **Pseudo-elementos** (`::before`, `::after`) pra detalhes decorativos
- **Animações com `@keyframes`** (elementos flutuando)
- **IntersectionObserver** em JS pra animar só o que aparece (performance)
- **Event delegation** em JS (um listener cuida de vários elementos)
- **Print stylesheet** com `@media print`
- **`prefers-reduced-motion`** pra respeitar quem prefere menos animação