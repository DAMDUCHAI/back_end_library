const express = require("express");
const {          createAcount,
    getListAcount,
    getAcount,
    updateAcount,
    deleteAcount,login} =require("../controllers/acount.controllers");

const acountRouter = express.Router();
acountRouter.post("/create" ,createAcount);
acountRouter.get("/get-list-acount" ,getListAcount);
acountRouter.get("/:id" ,getAcount);
acountRouter.put("/:id" ,updateAcount);
acountRouter.delete("/:id" ,deleteAcount);
acountRouter.delete("/:id" ,deleteAcount);
acountRouter.post("/login", login);
module.exports = {
    acountRouter,
    
  };