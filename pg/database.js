const Sequelize = require("sequelize");

const database = new Sequelize("postgres://postgres:8821025@localhost:5432/lwhh");

database.authenticate()
.then(e=>{
    console.log("Database connation susccessful");

})
.catch(e=>{
    console.log("Database connation faild");
})
const Task = database.define('task',{
    description:Sequelize.STRING
});
database.sync()
.then(e=>{
    console.log("database synced");
})
.catch(e=>{
    console.log('database synced faild');
})
module.exports={
    database,
    Task
}