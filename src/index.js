const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/server_config.js')
const cron = require('node-cron');
const {sendBasicEmail}=require('./services/email_service.js')
const setupAndStartServer=()=>{


    const app=express();
    app.use(bodyParser.json())


    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'anushkamotani@gmail.com',
        //     'HEY CHOTTI BACCHI',
        //     'KESE HO AAPPPP'
        // )

        

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });
        
    })


}



setupAndStartServer();