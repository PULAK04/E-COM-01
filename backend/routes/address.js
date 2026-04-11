import express from 'express';

import {saveAddress,getAddresses} from "../controllers/addressController.js"

const router=express.Router();

router.post('/add',saveAddress)
router.post('/:userId',getAddresses)

export default router;