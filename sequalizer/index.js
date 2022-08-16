const Sequelize = require('sequelize');
const sequelize = new Sequelize('student_data','root','manoj123',{

    dialect:'mysql'
});

async function authntic(){
    await sequelize.authenticate();
    console.log("connection is successful");

} 

authntic();


const users= sequelize.define('user',{
    id:{
        type : Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    
    }, 
    name:{
        type: Sequelize.DataTypes.STRING
    },
    age:{
        type: Sequelize.DataTypes.INTEGER
    },
    height:{
        type: Sequelize.DataTypes.INTEGER
    }
},{
    //freezeTableName: true,
    timestamps: false

    });

//console.log(sequelize.models.user)


//creating user and saving user using build and save metod//

// users.sync({force:true}).then(()=>{
//     const user = users.build({
//     name: 'manoj', age:24})
//     return user.save();
//     }).then(()=>{
//         console.log("user added to the database")
//     }).catch(()=>{
//     console.log("error");})


// creating and saving data in table using create method//
// users.sync().then(()=>{

//     return users.create({
//         name: 'manoj',
//         age : 24,
//         height: 5
//     })
// }).then((data)=>{

//     console.log(data.toJSON())
//     data.name = 'rahul'
//     data.age = 40;
//     console.log("User added to the database");
//     console.log(data.toJSON())
//     // return data.reload();
    
    
//     //working on save with fields
//     //data.save({fields: ['age']});
//     return data

// }).then((data)=>{

//     console.log('abc', data);
//     data.increment({age :5,height:2})
//     console.log("user updated ")

// }).catch((err)=>{

users.sync({force:true}).then(()=>{

    return   users.bulkCreate([{
            name:   'manoj',
            age:    25,
            height: 5.6
        },{
            name: 'Rahul',
            age:    30,
            height: 6
        },
        {
            name: 'Himanshu',
            age: 20,
            height: 5.5 
        }
    ]);

})
.then((data)=>{
    console.log('manjdksd123j')
})
.catch((err)=>{[]
    console.log('error', err)
})

