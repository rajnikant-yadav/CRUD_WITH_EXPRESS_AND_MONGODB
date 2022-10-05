import express from "express";
import userController from '../controller/userController.js'
const router=express.Router()

router.get('/', userController.getAllDoc)
router.post('/', userController.createDoc)
router.get('/edit/:id', userController.editDoc)
router.post('/delete/:id', userController.deleteDocById)
router.post('/update/:id', userController.updateDoc)
export default router