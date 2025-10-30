//Get all
const getAll=(req,res)=>{
    res.status(200).json({success:true,message:"Get all the books"})
}

//get Single
const getSingleBook=(req,res)=>{
    const {id}=req.params;

    res.status(200).json({success:true,message:"Get  the single books succesfully"})
}

//create

const newBook=(req,res)=>{
    const {title,author}=req.body;

    res.status(200).json({success:true,message:"Get  the new books succesfully"})
}

//updateBook
const updateBook=(req,res)=>{
    const {id}=req.params;

    res.status(200).json({success:true,message:"Update the book",bookId:id,title,author})
}

// delete book
const deleteBook = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, message: "Delete book", bookId: id });
};

module.exports={getAll,getSingleBook,newBook,updateBook,deleteBook}