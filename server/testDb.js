const date = require('date-and-time')
const mongoose = require('mongoose')
const {Schema}=mongoose



const findAndUpdateScan = async (qrCodeNumber)=>{
  
    try{
        const now = new Date()
        const currentDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
        await mongoose.connect('mongodb://127.0.0.1:27017/postBox')
        console.log('Connected to Database')
        
        const boxes = mongoose.model('boxes',new Schema(
            
            {
                lastDateOpen:String,
                locationId:String,
                lastDateOpen:String,
                qrNumber:String
            }
            ))
            await boxes.findOneAndUpdate({qrNumber:qrCodeNumber},{lastDateOpen:currentDate})
            
            
            //disconnected
        }
       
        catch(e){
            console.log(e)
            console.log('can not to connect ')
        }
        finally{
            await mongoose.disconnect()
            console.log('Disonnected to Database')

    }
  






}



findAndUpdateScan(6060)