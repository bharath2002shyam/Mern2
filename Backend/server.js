const express = require('express')
const app = express();
const cors=require('cors');
const mongoose=require('mongoose');
app.use(cors());
app.use(express.urlencoded({extended:true}));
const Mongodb_URL='mongodb+srv://shyambharath50:jRAOVvXoPGbORXRY@bscluster.5xvth.mongodb.net/?retryWrites=true&w=majority&appName=BsCluster'
mongoose.connect(Mongodb_URL)
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("Failed")
});
const dbSchema=new mongoose.Schema({Username:String,Usernumber:Number});
const Data = mongoose.model('Student',dbSchema)
app.post('/login',(req,res)=>{
    const Uname=req.body.Name;
    const Unumber=req.body.Number;
    const NewData= new Data({Username:Uname,Usernumber:Unumber})
    NewData.save()
    .then(()=>{
        res.send("Form submitted")
    })
    .catch(()=>{
        res.send("Check again")
    })

})
app.listen(5173,()=>{
    console.log("Server is running")
})