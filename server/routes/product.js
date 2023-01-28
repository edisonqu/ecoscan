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
            const datas = {code: data.code,product: data.product._id}
            res.send(datas);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;
