const cron=require('node-cron')
const emailService=require('../services/email_service.js');
const sender = require('../config/email_config.js');
 


const setupJobs= ()=>{

    cron.schedule('* * * * *', async() => {
  
        const response=await emailService.pendingEmails()

        // response.forEach((email) => {
        //     emailService.sendBasicEmail(
        //         'RemainderService@gamil.com',
        //         email.recepientEmail,
        //         email.subject,
        //         email.content
                
                
        //     )
        // });


        response.forEach((email) => {
            sender.sendMail({
            from:"RemainderService123@gmail.com",
            to:email.recepientEmail,
            subject:email.subject,
            text:email.content
           },
        
           async (err,data)=>{
            if(err){
                console.log(err);
                
            }
            else{
                console.log(data);
                await emailService.updateTicket(email.id,{status:"SUCCESS"})
                
            }
           }
        
        )

        });




            console.log(response);




    });

}


module.exports=setupJobs


