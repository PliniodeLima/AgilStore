// Importações necessárias
const fs = require('fs');
const readline = require('readline');

// Caminho do arquivo para armazenamento de dados
const dataFile = 'inventory.json';

// Carregar ou inicializar inventário
let inventory = [];
if (fs.existsSync(dataFile)) {
    inventory = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
}

// Função para salvar dados no arquivo JSON
function saveInventory() {
    fs.writeFileSync(dataFile, JSON.stringify(inventory, null, 2));
}

// Gerar ID único
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menu Principal
function showMenu() {
    console.log(`\n===== Gerenciamento de Produtos - AgilStore =====`);
    console.log(`1. Adicionar Produto`);
    console.log(`2. Listar Produtos`);
    console.log(`3. Atualizar Produto`);
    console.log(`4. Excluir Produto`);
    console.log(`5. Buscar Produto`);
    console.log(`6. Sair`);
    rl.question('Escolha uma opção: ', handleMenu);
}

// Gerenciar as opções do menu
function handleMenu(option) {
    switch (option) {
        case '1':
            addProduct();
            break;
        case '2':
            listProducts();
            break;
        case '3':
            updateProduct();
            break;
        case '4':
            deleteProduct();
            break;
        case '5':
            searchProduct();
            break;
        case '6':
            console.log('Saindo...');
            rl.close();
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            showMenu();
    }
}

// Função para adicionar um novo produto
function addProduct() {
    rl.question('Nome do Produto: ', (name) => {
        rl.question('Categoria: ', (category) => {
            rl.question('Quantidade em Estoque: ', (quantity) => {
                rl.question('Preço: ', (price) => {
                    const product = {
                        id: generateId(),
                        name,
                        category,
                        quantity: parseInt(quantity, 10),
                        price: parseFloat(price)
                    };
                    inventory.push(product);
                    saveInventory();
                    console.log('Produto adicionado com sucesso!');
                    showMenu();
                });
            });
        });
    });
}

// Função para listar produtos
function listProducts() {
    if (inventory.length === 0) {
        console.log('O inventário está vazio.');
    } else {
        console.table(inventory);
    }
    showMenu();
}

// Função para atualizar produto
function updateProduct() {
    rl.question('ID do Produto para atualizar: ', (id) => {
        const product = inventory.find((p) => p.id === id);
        if (!product) {
            console.log('Produto não encontrado.');
            return showMenu();
        }
        rl.question('Novo Nome (deixe vazio para manter atual): ', (name) => {
            rl.question('Nova Categoria (deixe vazio para manter atual): ', (category) => {
                rl.question('Nova Quantidade (deixe vazio para manter atual): ', (quantity) => {
                    rl.question('Novo Preço (deixe vazio para manter atual): ', (price) => {
                        if (name) product.name = name;
                        if (category) product.category = category;
                        if (quantity) product.quantity = parseInt(quantity, 10);
                        if (price) product.price = parseFloat(price);
                        saveInventory();
                        console.log('Produto atualizado com sucesso!');
                        showMenu();
                    });
                });
            });
        });
    });
}

// Função para excluir produto
function deleteProduct() {
    rl.question('ID do Produto para excluir: ', (id) => {
        const index = inventory.findIndex((p) => p.id === id);
        if (index === -1) {
            console.log('Produto não encontrado.');
            return showMenu();
        }
        inventory.splice(index, 1);
        saveInventory();
        console.log('Produto excluído com sucesso!');
        showMenu();
    });
}

// Função para buscar produto
function searchProduct() {
    rl.question('Digite o ID ou parte do Nome do Produto: ', (query) => {
        const results = inventory.filter((p) =>
            p.id.includes(query) || p.name.toLowerCase().includes(query.toLowerCase())
        );
        if (results.length === 0) {
            console.log('Nenhum produto encontrado.');
        } else {
            console.table(results);
        }
        showMenu();
    });
}

// Iniciar a aplicação
showMenu();
