const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/hi', (req, res) => {
    res.send('Hello World!')
})

app.post('/user', (req, res) => {
    if(!req.body.userid) {
        return res.status(400).send('request body malformed')
    }
    if(req.body.userid === 'admin' && req.body.passwd === 'admin') {
        res.status(200).send({success: true, message: "Welcome Admin"})
    }
    else {
        res.status(200).send({success: false, message: "Invalid User"})
    }
})


app.listen(PORT, console.log(`Running @ ${PORT}`));

