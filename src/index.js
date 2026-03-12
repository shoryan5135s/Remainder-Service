const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/server_config.js')

const {sendBasicEmail}=require('./services/email_service.js')
const setupAndStartServer=()=>{


    const app=express();
    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'agarwalshoryan2006@gmail.com',
            'Testing Email',
            'Hey,how are you'
        )
        
    })


}



setupAndStartServer();