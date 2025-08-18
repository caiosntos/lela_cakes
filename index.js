const express = require("express");
const app = express();
const port = 8000;

app.listen(8000, (error) => {
    if(error){
        console.log("Deu erro!");
        return;
    }else{
        console.log("Deu Boa!");
    }
})