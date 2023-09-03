const express = require("express");
const {
  summaryController,
  chatGptController ,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openiaController");

const router = express.Router();

//route
// router.post("/summary", summaryController);
router.post("/paragraph", chatGptController );
// router.post("/chatbot", chatbotController);
// router.post("/js-converter", jsconverterController);
// router.post("/scifi-image", scifiImageController);

module.exports = router;
