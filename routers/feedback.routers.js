const express = require("express");
const {   createFeedBack,getAllFeedback,updateTrangThaiFeedBack} =require("../controllers/feedback.controllers");

const feedbackRouter = express.Router();
feedbackRouter.post("/create" ,createFeedBack);
feedbackRouter.get("/get-all-feedback" ,getAllFeedback);
feedbackRouter.put("/:id" ,updateTrangThaiFeedBack);
module.exports = {
    feedbackRouter,
    
  };