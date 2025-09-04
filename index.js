import express from 'express'
const app = express();
const __dirname=import.meta.dirname;

app.use('/static',express.static('static'));

app.get('/',function(req,res)
{
   
    res.sendFile(__dirname+'/index.html');
    
});
app.get('/bs',function(req,res)
{
   
    res.sendFile(__dirname+'/bs.html');
    
});
app.get('/about',function(req,res){
//res.sendFile('D:/College/_hk5/Web/demo/about.html');
res.sendFile(__dirname+'/about.html');
});
app.get('/account/signup',function(req,res){
    res.sendFile(__dirname+'/register.html');
});
app.use(express.urlencoded({
extended:true
}));
app.post('/account/signup',function(req,res){
    res.send(JSON.stringify(req.body));
});
app.listen(3000,function()
{
    console.log('server is running on port 3000')
}
);



