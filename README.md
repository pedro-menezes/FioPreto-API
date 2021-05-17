
## Antes de executar
1. Criar arquivo .env contendo informações sobre o banco de dados que será utilizado (existe um arquivo de exemplo no diretório chamado .env.example).
2. Criar o banco de dados com o nome escolhido e registrado no .env.
3. É indicado inserções no banco para algun teste.
4. Depois deve executar os seguintes comandos, para criação das tabelas e algum seed:
```
npm install 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all 
```
