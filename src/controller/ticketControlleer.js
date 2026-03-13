const TicketService=require('../services/email_service.js')



const create= async (req,res)=>{

    try {
        
        const response=await TicketService.createNotification(req.body);

        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:"Succesfully registered an Email remainder "


        })


    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success:false,
            data:{},
            err:error,
            message:"unable to registered an email remainder "


        })

        
    }


}



module.exports={
    create
}