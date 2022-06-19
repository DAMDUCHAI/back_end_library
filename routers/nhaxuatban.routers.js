const express = require("express");
const {    createPublisher,
    getListPublisher,
    getPublisher,
    updatePublisher,
    deletePublisher} =require("../controllers/nhaxuatban.controllers");


const nhaxuatbanRouter = express.Router();
nhaxuatbanRouter.post("/create" ,createPublisher);
nhaxuatbanRouter.get("/get-list-publisher" ,getListPublisher);
nhaxuatbanRouter.get("/:id" ,getPublisher);
nhaxuatbanRouter.put("/:id" ,updatePublisher);
nhaxuatbanRouter.delete("/:id" ,deletePublisher);

module.exports = {
    nhaxuatbanRouter,
    
  };