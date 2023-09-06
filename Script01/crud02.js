const produtos = [
    {
        nome: 'Teclado',
        valor: 250,
        estoque: 10
    },
    {
        nome: 'Mouse',
        valor: 150,
        estoque: 20
    }
];

const clientes = [
    {
        nome: 'Kelwin',
        soldo: 1500,
        produtos: []
    },
    {
        nome: 'Karla',
        soldo: 400,
        produtos: []
    }
]
//Crirar Produto (CREATE)
function criaProduto(nome, valor, estoque) {
    const objeto = {nome: nome, valor: valor, estoque: estoque};
    produtos.push(objeto);
}

//Ver produtos (READ)
function verProdutos() {
    console.log(produtos);
    return produtos;
}




//Atualizar produtos (UPDATE)
function atualizaProduto(nome, novoValor, novoEstoque) {
    const index = produtos.findIndex(item => item.nome == nome);

    if(novoValor){
        produtos[index].valor = novoValor;
    }
    if(novoEstoque){
        produtos[index].estoque = novoEstoque;
    }
};

//Excluir produtos(DELETE)
function excluirProduto(nome){
    const index = produtos.findIndex(item => item.nome == nome);
    produtos.splice(index, 1);
}

//Compra Produtos
function compraProduto(nomeProduto, nomeCliente, quantidade){
    const produtoIndex = produtos.findIndex(item => item.nome == nomeProduto);
    const clienteIndex = clientes.findIndex(item => item.nome == nomeCliente);
    const valorCompra = produtos[produtoIndex].valor * quantidade;

    if(clientes[clienteIndex].saldo >= valorCompra){
        clientes[clienteIndex].saldo = clientes[clienteIndex].saldo -valorCompra;
        produtos[produtoIndex].estoque = produtos[produtoIndex].estoque - quantidade
        let i = 1;
        while(i <= quantidade){
            i++;
            clientes[clienteIndex].produtos.push(nomeProduto);
        }
        console.log(clientes[clienteIndex]);
        console.log(produtos[produtoIndex]);
    } else{
        console.log('Saldo insuficiente.');
    }
}

//criaProduto('Monitor', 500, 1000);
//atualizaProduto('Teclado', 230, 5)
//excluirProduto('Mouse');
compraProduto('Teclado', 'Kelwin', 25)
verProdutos();