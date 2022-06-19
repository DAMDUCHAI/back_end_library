const express = require("express");
const {    createAuthor,
    getListAuthor,
    getAuthor,
    updateAuthor,
    deleteAuthor} =require("../controllers/tacgia.controllers");


const tacgiaRouter = express.Router();
tacgiaRouter.post("/create" ,createAuthor);
tacgiaRouter.get("/get-list-author"  ,getListAuthor);
tacgiaRouter.get("/:id"  ,getAuthor);
tacgiaRouter.put("/:id"  ,updateAuthor);
tacgiaRouter.delete("/:id"  ,deleteAuthor);

module.exports = {
    tacgiaRouter,
    
  };