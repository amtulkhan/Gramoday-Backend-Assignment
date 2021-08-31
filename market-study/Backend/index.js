const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Amtul from Backend")
})


const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`App is at ${port}`)})