const express=require('express')
const { getSingleBook, getAll, newBook, updateBook, deleteBook } = require('../controller/bookController');


const bookRouter=express.Router();


bookRouter.get('/',getAll);
bookRouter.get('/:id',getSingleBook);

bookRouter.post('/',newBook);

bookRouter.put('/:id',updateBook);

bookRouter.delete('/:id',deleteBook);

module.exports={bookRouter};
