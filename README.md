# Telzir Back-End

Esta api é direcionada ao uso em conjunto com Telzir Front End.
Um projeto feito para o teste técnico da empresa LOLDESIGN.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar editar o arquivo .env.example e renomeá-lo para .env

`PORT` - A porta a qual a aplicação vai rodar.

`DB_USER` - o usuário do banco de dados.

`DB_PASS` - A senha do banco de dados.

`DB_NAME='Telzir'` - não edite esta linha.

`DB_HOST` - o endereço onde o servidor vai rodar.

`DB_PORT` - a porta de comunicação com o banco de dados.
## Rodando localmente

Para rodar esse projeto, você vai precisar usar um banco de dados MySQL

Clone o projeto

```bash
  git clone git@github.com:serpaef/telzir-back-end.git
```

Entre no diretório do projeto

```bash
  cd telzir-back-end
```

Instale as dependências

```bash
  npm install
```

Crie o banco de dados

```bash
  npx sequelize-cli db:create
```

Execute as migrations

```bash
  npx sequelize-cli db:migrate
```

Popule as tabelas

```bash
  npx sequelize-cli db:seed:all
```

Inicie o servidor

```bash
  npm start
```

### Para rodar os testes

```bash
  npm test
```
## Endpoints

```GET /plans``` - Retorna um array em formato JSON com as informações dos planos.

```GET /rates``` - Retorna um array em formato JSON com as informações de tarifa de acordo com a origem e destino.

## Ferramentas utilizadas

TypeScript, Node, Express, Sequelize
