const express = require('express')
const router = express.Router()

//Getting all
router.get('/', (req, res)=>{
    res.send('Hello world')
})

//Getting One
router.get('/:id',(req,res)=> {

})

//Creating one
router.post('/:id',(req,res)=> {

})

//Updating One
router.patch('/:id',(req,res)=> {

})

//Deleting One
router.delete('/:id',(req,res)=> {

})

module.exports=router