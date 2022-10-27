const Contenedor = require("./Contenedor")
const express = require('express')
const app = express()

const PORT = 8080

const contenedor = new Contenedor("products.txt")

app.get('/', (req, res) => {
    res.send('Hi Express Server!')
})

app.get('/productos', async (req, res) => {
    const allProducts = await contenedor.getAll();
    res.json(allProducts)
})

app.get('/productoRandom', async (req, res) => {
    const allProducts = await contenedor.getAll()
    const maxId = allProducts.length

    const randomId = getRandomNumber(1, maxId)
    const randomProduct = await contenedor.getById(randomId)

    res.json(randomProduct)
})

const getRandomNumber = (minNumber, maxNumber) => {
    return Math.floor(Math.random() * ((maxNumber + 1) - minNumber) + minNumber)
}

const server = app.listen(PORT, () => {
    console.log(`Server started at port: ${server.address().port}`)
})

server.on('error', (error) => console.log(error))