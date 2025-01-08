# AgilStore
Gerenciamento de Produtos para a Loja AgilStore

# Gerenciamento de Produtos - AgilStore

## Descrição
Esta é uma aplicação para gerenciamento de inventário da loja AgilStore, desenvolvida em Node.js. Ela permite realizar as seguintes operações:

- Adicionar novos produtos.
- Listar produtos cadastrados.
- Atualizar informações de produtos.
- Excluir produtos.
- Buscar produtos pelo ID ou parte do nome.
- Persistir os dados em um arquivo JSON para garantir que não sejam perdidos.

## Funcionalidades

1. **Adicionar Produto**:
   - Insere um novo produto no inventário, com ID gerado automaticamente.

2. **Listar Produtos**:
   - Mostra todos os produtos em uma tabela.

3. **Atualizar Produto**:
   - Permite modificar campos específicos de um produto identificado pelo ID.

4. **Excluir Produto**:
   - Remove um produto do inventário após confirmação.

5. **Buscar Produto**:
   - Realiza busca detalhada pelo ID ou parte do nome do produto.

6. **Armazenamento de Dados**:
   - Salva os produtos automaticamente em um arquivo `inventory.json`.

## Tecnologias Utilizadas
- **Node.js**
- **File System (fs)** para manipulação de arquivos.
- **Readline** para interações via terminal.

## Como Executar a Aplicação

### Pré-requisitos
- Node.js instalado no computador.

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETORIO>
   ```
3. Instale as dependências (caso necessário):
   ```bash
   npm install
   ```
4. Execute a aplicação:
   ```bash
   node inventory.js
   ```

5. Siga as instruções no terminal para gerenciar os produtos.

## Estrutura do Projeto
```
.
├── inventory.js       # Código principal da aplicação
├── inventory.json     # Arquivo para armazenamento de dados
└── README.md          # Documentação do projeto
```

## Observações
- O arquivo `inventory.json` será criado automaticamente na primeira execução.
- Caso o arquivo `inventory.json` seja excluído, um novo arquivo vazio será gerado.

## Melhorias Futuras
- Implementar filtragem e ordenação na listagem de produtos.
- Adicionar suporte a testes automatizados.
- Criar uma interface gráfica para facilitar o uso.

## Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário!
