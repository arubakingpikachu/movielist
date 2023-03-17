const express=require('express')
const app=express()
const port=3000

const exphbs=require('express-handlebars')
//召喚express-handlebars

app.engine('handlebars',exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    res.render('index')
})

app.use(express.static('public'))
//靜態檔案的express路由

app.listen(port,() => {
  console.log(`Express is listening on localhost:${port}`)
})