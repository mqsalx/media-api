npm install sequelize@6.32.1 sequelize-cli@6.6.2 sqlite3@5.1.6 --save-exact

npm install mysql2

npx sequelize-cli init

npx sequelize-cli model:generate --name Person --attributes name:string,email:string,cpf:string,active:boolean,role:string

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name demo-people

npx sequelize-cli db:seed:all

npx sequelize-cli model:generate --name Category --attributes title:string

npx sequelize-cli model:generate --name Course --attributes title:string,description:string,date_initial:dateonly

npx sequelize-cli model:generate --name Registration --attributes status:string

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name demo-categories

npx sequelize-cli seed:generate --name demo-courses

npx sequelize-cli seed:generate --name demo-registrations

npx sequelize-cli db:seed --seed 20240711010001-demo-categories.js

npx sequelize-cli db:seed --seed 20240711010011-demo-courses.js

npx sequelize-cli db:seed --seed 20240711010026-demo-registrations.js