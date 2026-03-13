const sender= require('../config/email_config.js')
const TicketRepository=require('../repository/ticket_repository.js')


const repo=new TicketRepository();


const sendBasicEmail=async(mailFrom,mailTo,mailSubject,mailBody)=>{


      const response=await  sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
        })


        console.log(response);
        

}


const pendingEmails=async (timeStamp)=>{

    try {
        const response=await repo.get({status:"PENDING"});

        return response



    } catch (error) {
        console.log(error);
        
    }



}


const createNotification=async (data)=>{
    try {
        
        const response=await repo.create(data);
        return response
    } catch (error) {
            console.log(error);
            
        }



}


const updateTicket=async(id,data)=>{
    try {
        
        const ticket=await repo.update(id,data)
        return ticket

    } 
    
    catch (error) {
        console.log(error);
        
    }
}



module.exports={
    sendBasicEmail,
    pendingEmails,
    createNotification,
    updateTicket
}