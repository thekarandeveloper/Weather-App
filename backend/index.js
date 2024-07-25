const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://karanKumar:Zvno5Ik0LPg5HVW1@cluster0.uyfvl1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('MonogoDB Connected'))
    .catch(err => console.log("MongoDB Connection Error", err))

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})