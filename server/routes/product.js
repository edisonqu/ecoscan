var express = require("express");
// const {fetch} = require('node-fetch');
const { log } = require("debug");
const axios = require("axios");
var router = express.Router();
const cors = require("cors");

router.use(
  cors({
    origin: "*",
  })
);

const data = [
  {
    name: "Old Dutch Original",
    code: "0066343137094",
    packaging: "1 plastic bag for trash",
    ecoscore: "C",
  },
  {
    name: "Lays Dill Pickle",
    code: "0060410001585",
    packaging: "1 plastic bag for trash",
    ecoscore: "C",
  },
  {
    name: "Rice Krispies",
    code: "0064100389014",
    packaging: "1 plastic wrapper for trash",
    ecoscore: "B",
  },
  {
    name: "Sea Salt & Malt Vinegar Flavor Chips",
    code: "0060410020647",
    packaging: "1 plastic bag for trash",
    ecoscore: "B",
    image:
      "https://i5.walmartimages.com/asr/c5b60f03-e935-400f-af8e-e2a90d625141.ac953a7b33f454d75037d5d6f9c569b1.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  },
  {
    name: "Sweet Chili & Sour Cream",
    code: "0060410020654",
    packaging: "1 plastic bag for trash",
    ecoscore: "B",
  },
  {
    name: "Kirkland Natural Spring Water",
    code: "0096619321841",
    packaging: "1 plastic bottle for recycling",
    ecoscore: "A",
  },
  {
    name: "Red Bull The Apricot Edition",
    code: "0629071000889",
    packaging: "1 tin can for recycling",
    ecoscore: "A",
  },
];
router.get("/:number", async function (req, res, next) {
  try {
    const number = req.params.number;
    const url = `https://world.openfoodfacts.org/api/v0/product/${number}.json`;
    const response = await axios.get(url);
    const data = response.data;
    if (data.status === 1) {
      const datas = {
        code: data.code,
        status_verbose: data.status_verbose,
        image: data.product.image_url,
        name: data.product.product_name,
        ecoscore: data.product.ecoscore_grade,
        nutrition: data.product.nutrition_grades,
        keywords: data.product._keywords,
        packaging: data.product.packaging_text,
      };
      res.send(datas);
    } else {
      const datas = {
        code: data.code,
        status_verbose: data.status_verbose,
      };
      res.send(datas);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
