const express = require('express');
const app = express()

app.get('/register', (req, res) => {
    res.status(201).json({ message: 'success register' })
})

app.get('/products', (req, res) => {
    let products = [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Keyboard' }
    ]
    res.status(200).json(products)
})


app.listen(3000)
