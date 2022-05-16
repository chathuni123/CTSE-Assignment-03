const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/Orders.controller');

module.exports = function(){
    router.post('/create', OrderController.createOrder);
    router.get('/', OrderController.getAllOrders);
    router.delete('/delete/:id',OrderController.deleteOrder);
    router.put('/update/:id',OrderController.updateOrder);
    router.get('/a/:id', OrderController.getAnOrder);
    return router;
}
