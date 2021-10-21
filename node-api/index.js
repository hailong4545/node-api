const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

users = [{username : 'Long', password: '1'}]

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', (req, res) => {
    // let username = req.body.username;
    // let password = req.body.password;
    // users.push({username: username, password: password});
    // res.redirect('http://localhost:3001/home');
    res.send('ccccc');
})

app.delete('/users/:pos1', (req, res) => {
    let pos = parseInt(req.params.pos1);
    users_ps = []
    for(let i = 0; i < users.length; i++) {
        if (i != pos) {
            users_ps.push(users[i]);
        }
    }
    users = users_ps;
    res.json(users);
})

app.listen(3000);