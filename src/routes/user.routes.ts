import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, getUser } from '../controllers/user.controllers'

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/user/:id', deleteUser);

import { createProducts, getProduct, updateProducts, deleteProducts, getProducts } from '../controllers/Products.controllers'

router.post('/products', createProducts);
router.get('/products', getProducts);
router.get('/products/:id', getProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

export default router;