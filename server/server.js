const express = require ('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001
const {MONGOURI} = require('./config/keys')




mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () =>{
    console.log('connected to mongo')
})
mongoose.connection.on('error',(err) =>{
    console.log('Error Connecting', err)
})

require('./models/user')
require('./models/post')

app.use(cors())
app.use(express.json()) 
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path,resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log("server is running on", PORT) 
})
