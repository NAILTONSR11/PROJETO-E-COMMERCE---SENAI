export default function carrinho(){
// ====== VARIÁVEIS ======
const btnAbrirCarrinho = document.querySelector(".butaoCarrinho");
const btnFecharCarrinho = document.querySelector(".fecharCarrinho");
const carrinhoDiv = document.querySelector(".meu-carrinho");
const overlay = document.querySelector(".overlay");
const listaCarrinho = document.querySelector("#carrinho");
const botoesAdd = document.querySelectorAll(".btnAddItem");

let carrinho = []; // onde os itens serão armazenados

// ====== FUNÇÕES ======

// função de abrir o carrinho carrinho 
btnAbrirCarrinho.addEventListener("click", () => {
  carrinhoDiv.classList.add("ativo");
  overlay.classList.add("ativo");
});

// fecha carrinho obs isso e muito chato kkkk
btnFecharCarrinho.addEventListener("click", () => {
  carrinhoDiv.classList.remove("ativo");
  overlay.classList.remove("ativo");
});
overlay.addEventListener("click", () => {
  carrinhoDiv.classList.remove("ativo");
  overlay.classList.remove("ativo");
});

//deixar o carrinho na tela
function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";

  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade;

    const div = document.createElement("div");
    div.classList.add("item");

    //butoes tirar e add itens dentro do carrinho
    //esse 2 entre parenteses é para duas casas decimais
    div.innerHTML = `
      <p>${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
      <div class="acoes">
      <button class="menos" data-index="${index}">-</button>
        <button class="mais" data-index="${index}">+</button>
        <button class="remover" data-index="${index}">x</button>
      </div>
    `;

    listaCarrinho.appendChild(div);
  });
  //fechar compra
  if (carrinho.length > 0) {
    const totalDiv = document.createElement("div");
    totalDiv.innerHTML = `
    <h3 class="paitxttotal"><span class="totalTxt">Total </span>: R$ ${total.toFixed(2)}</h3>
    <button class="fazerCompra"><a href="#">Comprar</a></button>
    `;
    listaCarrinho.appendChild(totalDiv);
  }
}

// colocar produto ao carrinho
botoesAdd.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const card = btn.closest(".promo-produto, .experiencias_venda");
    const nome = card.querySelector(".item-name")?.innerText || "Produto";
    const precoText =
      card.querySelector(".preco-produto, .preco-produto")?.innerText || `R$ ${precoText} `;
    const preco = parseFloat(precoText.replace("R$", "").replace(",", "."));

    // verifica se já existe no carrinho
    const itemExistente = carrinho.find((item) => item.nome === nome);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
  });
});

// eventos dos botões dentro do carrinho (delegação)
listaCarrinho.addEventListener("click", (e) => {
  if (e.target.classList.contains("menos")) {
    let index = e.target.dataset.index;
    if (carrinho[index].quantidade > 1) {
      carrinho[index].quantidade--;
    } else {
      carrinho.splice(index, 1);
    }
    atualizarCarrinho();
  }

  if (e.target.classList.contains("mais")) {
    let index = e.target.dataset.index;
    carrinho[index].quantidade++;
    atualizarCarrinho();
  }

  if (e.target.classList.contains("remover")) {
    let index = e.target.dataset.index;
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }
});
}