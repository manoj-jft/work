const Sequelize = require("sequelize");

const sequelize = new Sequelize('students_data','root','manoj123',{
    dialect: 'mysql'
})

sequelize.authenticate().then((data)=>{
    console.log('connection establish')
}).catch((err)=>{

    console.log(err)
})

const users = sequelize.define('user',{
    id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: Sequelize.DataTypes.STRING
    },
    email:{
        type:Sequelize.DataTypes.STRING
    },
    password:{
        type:Sequelize.DataTypes.TEXT
    }
},{
    timeStamp: false
});

users.sync().then(()=>{
    console.log("table created");

}).catch((err)=>{
    console.log(err)
})

module.exports = sequelize;