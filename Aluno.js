const pessoa= {
    nome:"eliab",
    idade: 16,
    curso: "Tecnico no desemvolvimento de sistemas",
    disciplinas: ["Banco de dados","PMOB", "APS","PNDS"]

};

for(let chave in pessoa){
    console.log(chave+":"+pessoa[chave])
}


const produto = {
    nome: "Livro",
    titulo:"a volta dos que nao foram",
    autor: "graciliano Ramos",
    preco: 499,
    desconto: 0.4,
    precoComDesconto: function() {
      return this.preco * (1 - this.desconto);
    }
  };

  console.log(produto.precoComDesconto()); // 499

  const novoProduto = {
    ...produto,
    preco: 350 // sobrescreve o preço original
  };
  
  
  console.log(novoProduto); // mantém os demais dados
  
