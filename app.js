const { query } = require('express');
const express=require('express');
const app=express();
const path=require('path');
const request=require('request');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));



app.get('/search',(req,res)=>{
    res.render('search');
})

app.get('/results',(req,res)=>{
     let query=req.query.search;
    request('https://api.themoviedb.org/3/search/movie?api_key=e26f8be025125b6c015b4214d1ca5c11&query='+query,(error,response,body)=>{
        if(error){
            console.log(error)
        }

        let data=JSON.parse(body);
        res.render('results',{dta:data,queryres:query});
    });


   
});
app.listen('3000',()=>{
    console.log("Server started at 3000")
})