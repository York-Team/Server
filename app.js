const express = require('express');
const app = express()

app.get('/register', (req, res) => {
    res.status(201).json({ message: 'success register' })
})

app.listen(3000)
