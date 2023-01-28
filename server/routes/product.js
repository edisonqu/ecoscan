var express = require('express');
// const {fetch} = require('node-fetch');
const {log} = require("debug");
var router = express.Router();

const options = {
    method: 'GET',

};

router.get('/:number', async function (req, res, next) {
        // fetch(`https://world.openfoodfacts.org/api/v0/product/${number}.json`)
        //     .then(
        //         res=>res.json()
        //     )
        //     .then(data => res.send(data)).then(datas = data)
        try {
            const number = req.params.number;
            // res.send(number)
            const url = `https://world.openfoodfacts.org/api/v0/product/${number}.json`
            const response = await fetch(url)
            const data = await response.json();
            if(data.status === 1) {
                const datas = {
                    code: data.code,
                    status_verbose: data.status_verbose,
                    image: data.product.image_url,
                    name: data.product.product_name,
                    ecoscore: data.product.ecoscore_grade,
                    nutrition: data.product.nutrition_grades,
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
