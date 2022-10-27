const Contenedor = require('./contenedor.js')

//New Contenedor
const newContainer = new Contenedor('products.txt')

const globalFunction = async () => {
    await newContainer.save({title: 'El principito', price: 500, thumbnail: 'https://imgs.search.brave.com/uAPyec5e4-PSpbDRf0ZIkjIIYCYCGiaKA230KGofwm8/rs:fit:617:1000:1/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5kaWFyaW9k/ZW5hdmFycmEuZXMv/dXBsb2Fkcy9pbWFn/ZW5lcy9iYWphY2Fs/aWRhZC8yMDEzLzEy/LzA5L19wcmluY2lw/aXRvXzMxOTFhODhj/LmpwZz9mYTMzODE1/NDAyMDM0NWNjNzZl/YmMwM2ExYmUzNjc1/ZQ'})
    await newContainer.save({title: 'Maze runner', price: 350, thumbnail: 'https://imgs.search.brave.com/NMXjefqIOeB4XwO8-cP5dMYlkRFY7J4orMzYhZEVz64/rs:fit:1058:1200:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1hZEZ6ZzFDNHVF/US9WQjd0VndHdVli/SS9BQUFBQUFBQUJL/US9tM1J4QVRQN2VS/NC9zMTYwMC9NYXpl/cnVubmVyLmpwZw'})
    await newContainer.save({title: 'Harry Potter', price: 200, thumbnail: 'https://imgs.search.brave.com/JRmw7RTkY_2IsjdbbXQhz_YUyGnKl8-73Tow3v0tHIE/rs:fit:630:965:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1sVURRT1YwWC1x/Zy9WRkRNTlpWazY0/SS9BQUFBQUFBQXRN/by8tekJINkxwMFZO/Zy9zMTYwMC9IYXJy/eVBvdHRlckNoYW1i/ZXJCbG9vc21idXJ5/TmV3LmpwZw'})

    const getId = await newContainer.getById(2)
    console.log(getId)

    await newContainer.deleteById(2)

    const getAll = await newContainer.getAll()
    console.log(getAll)

    await newContainer.deleteAll()
}

globalFunction()