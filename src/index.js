const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/server_config.js')
const setupAndStartServer=()=>{


    const app=express();
    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        
    })


}



setupAndStartServer();