const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.urlencoded());
app.use(express.json())
const boxesList = [
    {boxNumber:'100',boxId:'a1'},
    {boxNumber:'200',boxId:'a2'},
    {boxNumber:'300',boxId:'a3'},
    {boxNumber:'400',boxId:'a4'},
    {boxNumber:'500',boxId:'a5'}

]
app.get('/',(req,res)=>{
    res.json(boxesList)
})

app.post('/updateBox',(req,res)=>{
    console.log(req.body)
    res.json({res:'than you '+req.body.name})
})

app.listen(2000,()=>{
    console.log('connected port 2000')
})