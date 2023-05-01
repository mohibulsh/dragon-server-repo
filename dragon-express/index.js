const express =require('express');
const app =express();
const port = process.env.PORT || 5000;
const categories = require('./data/catagories.json')
const cors =require('cors')
app.get('/',(req, res)=>{
     res.send('Dragon is comming ')
})
app.use(cors())
app.get('/categorie',(req,res)=>{
       res.send(categories)
})
app.listen(port,()=>{
    console.log(`dragon is running ${port}`)
})