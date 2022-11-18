const {GetAllProducts,addProduct,updateProduct,deleteProduct} = require('./product.js')
const express = require('express')
const router = express.Router()



router.get('/get_all_data',GetAllProducts);

router.post('/add_data',addProduct);

router.put('/Update_by/:id',updateProduct);

router.delete('/delete_by/:id',deleteProduct);



module.exports = router