# ONG API

## Descrição

Esse projeto se trata de uma API desenvolvida com Node.js e Express.js, projetada para gerenciar ONGs, oportunidades de voluntariado e voluntários. A API fornece endpoints para criar, ler, atualizar e deletar informações relacionadas a essas entidades, facilitando a integração e a manipulação dos dados em aplicações voltadas para o voluntariado.

## Estrutura do Projeto

- `models/`: Contém as definições das classes para ONG, Opportunity e Volunteer.
- `controllers/`: Contém a lógica de manipulação dos dados.
- `routes/`: Contém as definições das rotas da API.
- `server.js`: Configuração do servidor Express.

## Tecnologias Utilizadas

- Node.js
- Express.js
- UUID (para geração de IDs únicos)
- Postman (para testes)

## Instalação

1. Clone o repositório:
    ```bash
    git clone <URL do repositório>
    cd nome-do-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    node server.js
    ```

## Uso

### Endpoints da API

Abaixo estão os endpoints disponíveis na API, juntamente com uma descrição de como utilizá-los.

#### ONGs

##### Criar ONG
- **Método:** POST
- **Endpoint:** `/ong`
- **Descrição:** Cria uma nova ONG. O corpo da requisição deve conter os detalhes da ONG, como nome, descrição, localização, site e email de contato.

##### Obter Todas as ONGs
- **Método:** GET
- **Endpoint:** `/ong`
- **Descrição:** Retorna uma lista de todas as ONGs cadastradas.

##### Obter ONG por ID
- **Método:** GET
- **Endpoint:** `/ong/:id`
- **Descrição:** Retorna os detalhes de uma ONG específica com base no ID fornecido na URL.

##### Atualizar ONG
- **Método:** PUT
- **Endpoint:** `/ong/:id`
- **Descrição:** Atualiza as informações de uma ONG específica com base no ID fornecido na URL. O corpo da requisição deve conter os novos detalhes da ONG.

##### Deletar ONG
- **Método:** DELETE
- **Endpoint:** `/ong/:id`
- **Descrição:** Deleta uma ONG específica com base no ID fornecido na URL.

#### Oportunidades

##### Criar Oportunidade
- **Método:** POST
- **Endpoint:** `/opportunity`
- **Descrição:** Cria uma nova oportunidade de voluntariado. O corpo da requisição deve conter os detalhes da oportunidade, como título, descrição, localização, ID da ONG associada, data de início, data de término e requisitos.

##### Obter Todas as Oportunidades
- **Método:** GET
- **Endpoint:** `/opportunity`
- **Descrição:** Retorna uma lista de todas as oportunidades de voluntariado cadastradas.

##### Obter Oportunidade por ID
- **Método:** GET
- **Endpoint:** `/opportunity/:id`
- **Descrição:** Retorna os detalhes de uma oportunidade específica com base no ID fornecido na URL.

##### Atualizar Oportunidade
- **Método:** PUT
- **Endpoint:** `/opportunity/:id`
- **Descrição:** Atualiza as informações de uma oportunidade específica com base no ID fornecido na URL. O corpo da requisição deve conter os novos detalhes da oportunidade.

##### Deletar Oportunidade
- **Método:** DELETE
- **Endpoint:** `/opportunity/:id`
- **Descrição:** Deleta uma oportunidade específica com base no ID fornecido na URL.

#### Voluntários

##### Criar Voluntário
- **Método:** POST
- **Endpoint:** `/volunteer`
- **Descrição:** Cria um novo voluntário. O corpo da requisição deve conter os detalhes do voluntário, como nome, email, telefone e interesses.

##### Obter Todos os Voluntários
- **Método:** GET
- **Endpoint:** `/volunteer`
- **Descrição:** Retorna uma lista de todos os voluntários cadastrados.

##### Obter Voluntário por ID
- **Método:** GET
- **Endpoint:** `/volunteer/:id`
- **Descrição:** Retorna os detalhes de um voluntário específico com base no ID fornecido na URL.

##### Atualizar Voluntário
- **Método:** PUT
- **Endpoint:** `/volunteer/:id`
- **Descrição:** Atualiza as informações de um voluntário específico com base no ID fornecido na URL. O corpo da requisição deve conter os novos detalhes do voluntário.

##### Deletar Voluntário
- **Método:** DELETE
- **Endpoint:** `/volunteer/:id`
- **Descrição:** Deleta um voluntário específico com base no ID fornecido na URL.

## Como Usar

1. **Configuração do Ambiente:**
   - Certifique-se de ter o Node.js instalado em seu sistema.
   - Clone o repositório e instale as dependências utilizando os comandos mencionados na seção de instalação.

2. **Inicialização do Servidor:**
   - Execute `node server.js` para iniciar o servidor.
   - O servidor estará rodando na porta definida (por padrão, 3000).

3. **Testando a API:**
   - Utilize o Postman ou qualquer outro cliente HTTP para testar os endpoints da API.
   - Crie requisições HTTP (GET, POST, PUT, DELETE) para interagir com os diferentes endpoints conforme descrito na seção de uso.

4. **Implementação de Funcionalidades:**
   - Para adicionar ou modificar funcionalidades, edite os arquivos nos diretórios `models`, `controllers` e `routes`.
   - Reinicie o servidor após fazer alterações para que elas entrem em vigor.

5. **Manutenção e Expansão:**
   - A API está estruturada para facilitar a expansão. Novas entidades ou funcionalidades podem ser adicionadas seguindo o padrão existente.
   - Utilize o sistema de roteamento e os controladores para gerenciar a lógica de negócios e as interações com os dados.

