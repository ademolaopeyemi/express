const express= require('express');

const router = express.Router()

router.get('/products',(req, res)=>{
    res.status(200)
    res.json([
    {
        productName:"Iphone 15",
        productPrice:"$1500"
    },
    {
        productName:"Iphone 15",
        productPrice:"$1500"
    },
    {
        productName:"Iphone 15",
        productPrice:"$1400"
    },
    {
        productName:"Iphone 15",
        productPrice:"$1300"
    }
    ])
})
// get a single product
router.get('/products/:id',(req, res)=>{
    res.status(200)
    res.json({
        productName:"Iphone 15",
        productPrice:"$1500"

    })

})
// create a product
router.post('/products',(req, res)=>{
    res.status(200)
    res.json({
        message:"product added succesfully"
    })
})

// updating a product
router.put("/products",(req, res)=>{
    res.status(200)
    res.json({
        message:"product updated succesfully"
    })
})

// delete a product
router.delete('/products',(req, res)=>{
    res.status(200)
    res.json({
        message:"product has been deleted 4"
    })
})




module.exports =router