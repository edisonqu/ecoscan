var express = require('express');
// const {fetch} = require('node-fetch');
const {log} = require("debug");
const axios = require('axios')
var router = express.Router();
const cors = require('cors')

router.use(cors({
    origin: '*'
}));
router.get('/:number', async function (req, res, next) {
        try {
            const number = req.params.number;
            const url = `https://world.openfoodfacts.org/api/v0/product/${number}.json`
            const response = await axios.get(url)
            const data = response.data;
            if(data.status === 1) {
                const datas = {
                    code: data.code,
                    status_verbose: data.status_verbose,
                    image: data.product.image_url,
                    name: data.product.product_name,
                    ecoscore: data.product.ecoscore_grade,
                    nutrition: data.product.nutrition_grades,
                    keywords: data.product._keywords,
                    packaging: data.product.packaging_text
                }
                res.send(datas);

            }
            else{
                const datas = {
                    code: data.code,
                    status_verbose: data.status_verbose,
                }
                res.send(datas);

            }
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;
