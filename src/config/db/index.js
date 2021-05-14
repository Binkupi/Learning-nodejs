const mongoose=require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/F8-education', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('connect successfully!!!');
    } catch(error){
        console.log('connect failure!!!');
    }
    
}
module.exports={connect}
