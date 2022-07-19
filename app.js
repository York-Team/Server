const express = require('express');
const app = express()

app.get('/register', (req, res) => {
    res.status(201).json({ message: 'success register' })
})

app.get('/gsignin', (req, res) => {
    res.status(200).json({ access_token: 'usfiueyfhesir2u3728uedawdj' })
})


app.listen(3000)
