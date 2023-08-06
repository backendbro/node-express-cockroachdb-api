const BookInventory = require('../schema/BookSchema.js')


const createBook = async (req,res) => {    
    let book = await BookInventory.sync({force: false})
    book = await BookInventory.create(req.body)
                .catch(err => res.status(500).json({message: err.message}))
    
    res.status(201).json({data: book})
}


const getAllBooks = async (req,res) => {
    const books = await BookInventory.findAll()
                 .catch(err => res.status(500).json({message: err.message}))
                 
    res.status(200).json({length:books.length, data:books})
 }


const getSingleBook = async (req,res) => {
    const {id} = req.params 
    
    const book = await BookInventory.findOne({ where: {id} })
                .catch(err => res.status(500).json({response: err.message})) 
    
    res.status(200).json({data:book})
}


const updateBook = async (req,res) => {
    const {id} = req.params
    let book = await BookInventory.findOne({ where: {id} })
    .catch(err => res.status(500).json({message: err.message}))     
    
    if(!book) {
        return res.status(404).json({message:`No book found with ID: ${id}`})
    }
    
    book = await book.update(req.body)
    res.status(200).json({data:book})
}   



const deleteSingleBook = async (req,res) => {
    const {id} = req.params 
    await BookInventory.destroy({ where: {id}})
                .catch(err => res.status(500).json({message: err.message}))
    
    res.status(202).json({data:"Book deleted"})
}


const deleteAllBooks = async (req,res) => {
    await BookInventory.destroy({ where: {} })
            .catch(err => res.status(500).json({message: err.message}))
    
    res.status(202).json({data:"Books deleted"})
}



module.exports = {
    createBook, 
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteSingleBook,
    deleteAllBooks
} 