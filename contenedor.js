const fs = require("fs");

class Contenedor {
    constructor(filename) {
        this.filename = filename
    }

    //1. Create file
    async createFile() {
        try {
            fs.writeFile(this.filename, '[]', (error) => {
                error ? console.log(error) : console.log(`File ${this.filename} was succesfully created.`);
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    //2. Read file
    async readFile() {
        const data = await fs.promises.readFile("./products.txt", "utf-8")
        return data
    }

    //3. Save(Object)
    async save(object) {
        try {
            const newObject = await this.readFile()
            const parseObject = JSON.parse(newObject)

            object.id = parseObject.length + 1
            parseObject.push(object)

            fs.promises.writeFile(this.filename, JSON.stringify(parseObject, null, 2))
            return object.id
        }
        catch(error) {
            console.log('There was an error when you try to add a product');
        }
    }

    //4. getById(Number)
    async getById(id) {
        try {
            const newObject = await this.readFile()
            const parseObject = JSON.parse(newObject)

            return parseObject.find(product => product.id === id)
        }
        catch (error) {
            return null
        }
    }

    //5. getAll()
    async getAll() {
        try {
            const newObject = await this.readFile()
            const parseObject = JSON.parse(newObject)
            return parseObject
        }
        catch (error) {
            console.log('There was an error when trying to get all products')
        }
    }

    //6. deleteById(number)
    async deleteById(id) {
        try {
            const newObject = await this.readFile()
            const parseObject = JSON.parse(newObject)

            const objectToDelete = parseObject.find(product => product.id === id)
            if (objectToDelete) {
                const index = parseObject.indexOf(objectToDelete)
                parseObject.splice(1, index)
                await fs.promises.writeFile(this.filename, JSON.stringify(parseObject, null, 2))
            } else {
                console.log(`Id ${id} does not exist`)           
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    //7. deleteAll()
    async deleteAll() {
        fs.writeFile(this.filename, '[]', (error) => {
            error ? console.log(error) : console.log(`All objects from ${this.filename} has been deleted.`);
        })
    }
}

module.exports = Contenedor