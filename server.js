const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.get('/api/getUser', (req,res)=>{
    const user = 'Evgeni';
    res.json(user);
})

const port = 8000;
app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
