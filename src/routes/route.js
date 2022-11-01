const express = require('express')
const router= express.Router()

//import express from "express";
// const route = express.Router()

const{register,userLogin,getUser,updateUser} =require( '../controllers/userController.js')
const {createProduct,getProductsById,getByFilter,updateProduct,deleteProduct} =require ('../controllers/productController.js')
const {createCart,updateCart,getCart,deleteCart} =require( "../controllers/cartController.js")
const {createOrder,updateOrder}= require ('../controllers/orderController.js')
const {Authn,Authz} =require ('../utils/auth.js')


//! Testing route
router.get('/test-me',(req,res)=>{res.json('APi fired 🎇🎇')})


//!User Apis
router.post('/register',register)
router.post('/login',userLogin)
router.get('/user/:userId/profile',Authn,Authz,getUser)
router.put('/user/:userId/profile',Authn,Authz,updateUser)



// //!Product Apis
router.post('/products',createProduct)
router.get('/products',getByFilter)
router.get('/products/:productId',getProductsById)
router.put('/products/:productId',updateProduct)
router.delete('/products/:productId',deleteProduct)


// //!Cart Apis
router.post('/users/:userId/cart',Authn,Authz,createCart)
router.put('/users/:userId/cart',Authn,Authz,updateCart)
router.get('/users/:userId/cart',Authn,Authz,getCart)
router.delete('/users/:userId/cart',Authn,Authz,deleteCart)

// //!Order Apis
// route.post('/users/:userId/orders',Authn,Authz,createOrder)
// route.put('/users/:userId/orders',Authn,Authz,updateOrder)

router.post('/users/:userId/orders',createOrder)
router.put('/users/:userId/orders',updateOrder)



    // export default route














 module.exports=router