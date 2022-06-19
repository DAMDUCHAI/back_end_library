const express = require("express");
const {getListCategoryBook,getCategoryBook,updateCategoryBook,deleteCategoryBook,createCategoryBook} =require("../controllers/theloai.controllers");

const theloaiRouter = express.Router();
theloaiRouter.post("/create"  ,createCategoryBook);
theloaiRouter.get("/get-list-category"  ,getListCategoryBook);
theloaiRouter.get("/:id"  ,getCategoryBook);
theloaiRouter.put("/:id"  ,updateCategoryBook);
theloaiRouter.delete("/:id"  ,deleteCategoryBook);


module.exports = {
    theloaiRouter,
    
  };