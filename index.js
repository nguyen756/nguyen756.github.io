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


app.listen(3000,function()
{
    console.log('server is running on port 3000')
}
);



