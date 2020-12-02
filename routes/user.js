var express = require('express');
var router = express.Router();
const productsHelpers = require('../helpers/products-helpers');
/* GET home page. */
router.get('/', function(req, res, next) {
  productsHelpers.getAllProducts().then((products)=>{
    console.log(products);
   res.render('user/view-products',{admin:true,products})
  })
  
});

module.exports = router;
