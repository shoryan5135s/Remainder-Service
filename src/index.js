const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/server_config.js')
const jobs=require('./utils/job.js')
const {sendBasicEmail}=require('./services/email_service.js')


const TicketController=require('./controller/ticketControlleer.js')


const setupAndStartServer=()=>{


    const app=express();
    app.use(bodyParser.json())


    app.use(bodyParser.urlencoded({extended:true}))


    app.post('/api/v1/tickets',TicketController.create)


    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        jobs();
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