```javascript
// Sistema de Estoque de Produtos

let produtos = [];

function cadastrarProduto() {
    let codigo = prompt("Digite o código do produto:");

    if (codigo === null || codigo.trim() === "") {
        alert("Código inválido!");
        return;
    }

    codigo = codigo.trim();

    if (produtos.some(produto => produto.codigo === codigo)) {
        alert("Já existe um produto com esse código!");
        return;
    }

    let descricao = prompt("Digite a descrição do produto:");

    if (descricao === null || descricao.trim() === "") {
        alert("Descrição inválida!");
        return;
    }

    let quantidadeTexto = prompt("Digite a quantidade em estoque:");
    if (quantidadeTexto === null || quantidadeTexto.trim() === "") {
        alert("Quantidade inválida!");
        return;
    }

    let quantidade = Number(quantidadeTexto);

    if (!Number.isInteger(quantidade) || quantidade < 0) {
        alert("A quantidade deve ser um número inteiro não negativo!");
        return;
    }

    let valorTexto = prompt("Digite o valor do produto:");
    if (valorTexto === null || valorTexto.trim() === "") {
        alert("Valor inválido!");
        return;
    }

    let valor = Number(valorTexto.replace(",", "."));

    if (!Number.isFinite(valor) || valor < 0) {
        alert("O valor deve ser um número não negativo!");
        return;
    }

    produtos.push({
        codigo: codigo,
        descricao: descricao.trim(),
        quantidade: quantidade,
        valor: valor
    });

    alert("Produto cadastrado com sucesso!");
}

function listarProdutos() {
    if (produtos.length === 0) {
        alert("Nenhum produto cadastrado.");
        return;
    }

    let lista = "PRODUTOS CADASTRADOS:\n\n";

    produtos.forEach(function(produto) {
        lista +=
            "Código: " + produto.codigo + "\n" +
            "Descrição: " + produto.descricao + "\n" +
            "Quantidade: " + produto.quantidade + "\n" +
            "Valor: R$ " + produto.valor.toFixed(2) + "\n\n";
    });

    alert(lista);
}

function alterarValor() {
    let codigo = prompt("Digite o código do produto:");

    if (codigo === null) {
        return;
    }

    let produto = produtos.find(p => p.codigo === codigo.trim());

    if (!produto) {
        alert("Produto não encontrado!");
        return;
    }

    let valorTexto = prompt("Digite o novo valor do produto:");

    if (valorTexto === null || valorTexto.trim() === "") {
        alert("Valor inválido!");
        return;
    }

    let novoValor = Number(valorTexto.replace(",", "."));

    if (!Number.isFinite(novoValor) || novoValor < 0) {
        alert("Valor inválido!");
        return;
    }

    produto.valor = novoValor;

    alert("Valor alterado com sucesso!");
}

function alterarQuantidade() {
    let codigo = prompt("Digite o código do produto:");

    if (codigo === null) {
        return;
    }

    let produto = produtos.find(p => p.codigo === codigo.trim());

    if (!produto) {
        alert("Produto não encontrado!");
        return;
    }

    let quantidadeTexto = prompt("Digite a nova quantidade em estoque:");

    if (quantidadeTexto === null || quantidadeTexto.trim() === "") {
        alert("Quantidade inválida!");
        return;
    }

    let novaQuantidade = Number(quantidadeTexto);

    if (!Number.isInteger(novaQuantidade) || novaQuantidade < 0) {
        alert("A quantidade deve ser um número inteiro não negativo!");
        return;
    }

    produto.quantidade = novaQuantidade;

    alert("Quantidade alterada com sucesso!");
}

function menu() {
    let opcao;

    do {
        opcao = prompt(
            "SISTEMA DE ESTOQUE\n\n" +
            "1 - Cadastrar produto\n" +
            "2 - Listar produtos cadastrados\n" +
            "3 - Alterar valor de um produto\n" +
            "4 - Alterar quantidade de um produto\n" +
            "0 - Sair\n\n" +
            "Escolha uma opção:"
        );

        if (opcao === null) {
            break;
        }

        switch (opcao) {
            case "1":
                cadastrarProduto();
                break;

            case "2":
                listarProdutos();
                break;

            case "3":
                alterarValor();
                break;

            case "4":
                alterarQuantidade();
                break;

            case "0":
                alert("Sistema encerrado.");
                break;

            default:
                alert("Opção inválida!");
        }
    } while (opcao !== "0");
}

menu();
```