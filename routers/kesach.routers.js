const express = require("express");
const {    createBookshelf,
    getListBookshelf,
    getBookshelf,
    updateBookshelf,
    deleteBookshelf} =require("../controllers/kesach.controllers");

const kesachRouter = express.Router();
kesachRouter.post("/create" ,createBookshelf);
kesachRouter.get("/get-list-bookshelft" ,getListBookshelf);
kesachRouter.get("/:id" ,getBookshelf);
kesachRouter.put("/:id" ,updateBookshelf);
kesachRouter.delete("/:id" ,deleteBookshelf);

module.exports = {
    kesachRouter,
    
  };