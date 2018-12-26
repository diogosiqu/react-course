const produto = {
  nome: 'Caneta Castle',
  preco: 190,
  desconto: 0.05
}

function clone(objeto){
  return { ...objeto }
}

const novoProduto = clone(produto)

novoProduto.nome = 'Caneta Castle Especial'

console.log(produto,novoProduto)