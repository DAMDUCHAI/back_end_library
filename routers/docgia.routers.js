const express = require("express");
const {        createReader,
    getListReader,
    getReader,
    updateReader,
    deleteReader} =require("../controllers/docgia.controllers");

const docgiaRouter = express.Router();
docgiaRouter.post("/create" ,createReader);
docgiaRouter.get("/get-list-reader" ,getListReader);
docgiaRouter.get("/:id",getReader);
docgiaRouter.put("/:id" ,updateReader);
docgiaRouter.delete("/:id" ,deleteReader);

module.exports = {
    docgiaRouter,
    
  };