
const router = require('express').Router()
const {
    createBook, 
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteSingleBook,
    deleteAllBooks
} = require('../controller/Book.js')

router.post('/create', createBook)
router.get('/getAllBooks', getAllBooks)
router.get("/getSingleBook/:id", getSingleBook)
router.put('/updateBook/:id', updateBook)
router.delete('/deleteSingleBook/:id', deleteSingleBook)
router.delete('/deleteAllBooks', deleteAllBooks)

module.exports = router 