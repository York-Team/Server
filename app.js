const express = require('express');
const app = express()

app.get('/register', (req, res) => {
    res.status(201).json({ message: 'success register' })
})

app.get('/gsignin', (req, res) => {
    res.status(200).json({ access_token: 'usfiueyfhesir2u3728uedawdj' })
})

app.get('/products', (req, res) => {
    let products = [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Keyboard' }
    ]
    res.status(200).json(products)
})

app.delete('/products/:id', (req, res) => {
    res.status(200).json({ message: 'success delete product' })
})


app.listen(3000)
