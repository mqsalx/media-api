# media-api

npm install sequelize@6.32.1 sequelize-cli@6.6.2 sqlite3@5.1.6 --save-exact

npm install mysql2

npx sequelize-cli init

npx sequelize-cli model:generate --name People --atributes name:string,email:string,cpf:string,active:boolean,role:string

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name demo-people

npx sequelize-cli db:seed:all

npx sequelize-cli model:generate --name Category --attributes title:string

npx sequelize-cli model:generate --name Course --attributes title:string,decription:string,date_initial:dateonly

npx sequelize-cli model:generate --name Registration --attributes status:string