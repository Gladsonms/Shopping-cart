var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"mustardseed",
      category:"spices",
      description:"Mustard seeds are the small round seeds of various mustard plants",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Fenugreek",
      category:"spices",
      description:"Fenugreek is an annual plant in the family Fabaceae, with leaves consisting of three small obovate to oblong leaflet",
      image: "data:image/jpeg;base64,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"
    },
    {
      name:"Cumin",
      category:"spices",
      description:"Cumin is a flowering plant in the family Apiaceae",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Dried ginger",
      category:"spices",
      description:"Mustard seeds are the small round seeds of various mustard plants",
      image: "https://www.google.com/search?q=dry+ginger&safe=active&sxsrf=ALeKk007rsej_Hd_Xi9ZHZJSP861HPrsfQ:1606717702269&tbm=isch&source=iu&ictx=1&fir=-AGtrEsrzCbToM%252C7r0un1S3W1nOzM%252C_&vet=1&usg=AI4_-kT5eK7K5OWUNWBCjpsQCG-o7YAjVg&sa=X&ved=2ahUKEwizmJfv0antAhX3zzgGHTdqBSEQ_h0wAXoECA4QBA#imgrc=-AGtrEsrzCbToM"
    },
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
console.log(req.body);
console.log(req.files.image);
})
module.exports = router;
