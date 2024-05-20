const express = require('express')
const app = express()
const PORT = 8000

const object = {
    'hammy':{
        'age': 40,
        'ability': 'stuff',
        'cost': 10, 
    },
    'toby':{
        'age': 27,
        'ability': 'other stuff',
        'cost': 14,
    },
    'aka':{
        'age': 30,
        'ability': 'other other stuff',
        'cost': 8,
    },
    'blank':{
        'age': 0,
        'ability': 'blank',
        'cost': 0,
    },
}


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) =>{
    res.json(object)
})
app.get('/api/:name', (req, res) =>{
    const gameName = req.params.name.toLowerCase()
    if (object[gameName])
        {
            res.json(object[gameName])
        }
    else{
        res.json(object['blank'])
    }
})
app.listen(process.env.PORT || PORT, () =>{
    console.log(`Running on port ${PORT}`)
})