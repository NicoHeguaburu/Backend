const Contenedor = require('./contenedor.js')

const newContainer = new Contenedor('products.txt')

const globalFunction = async () => {
    await newContainer.save({ title: 'The Marvel: Spiderman', price: 5000, thumbnail: 'url product'})
    await newContainer.save({ title: 'Dragon Ball Z: Fighter Z', price: 4200, thumbnail: 'url product'})
    await newContainer.save({ title: 'The Last Of Us', price: 3800, thumbnail: 'url product'})

    //Get by id
    const getId = await newContainer.getById(2)
    console.log(getId)

    //Delete by id
    await newContainer.deleteById(2)

    //Get all
    const getAll = await newContainer.getAll()
    console.log(getAll)

    //Delete all
    await newContainer.deleteAll()
}

globalFunction()