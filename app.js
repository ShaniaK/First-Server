cd
const app = express();

// setting view engine
app.set('view engine','ejs')

app.get('/',function(request,response){
response.send('about.ejs');
});

app.listen(3000,function(){
    console.log('Server is running on port 3000')
});
