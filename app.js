const express = require('express');
const app = express();
const PORT = process.env.PORT || 9095;

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
})

app.listen(PORT,()=>{console.log(`Server is running on this ${PORT} port number`)});