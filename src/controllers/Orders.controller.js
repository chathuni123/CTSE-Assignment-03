const Order = require('../models/Order.model');

//Add new Recipe
const createOrder = async (req, res) => {
    if (req.body) {
        
        const recipe = new Order(req.body);
        await recipe.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).
            catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//get all Orders
const getAllOrders = async (req, res) => {
    await Order.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Delete an Order
const deleteOrder = async (req, res) => {
    if (req.params && req.params.id) {
        await Recipe.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Update an Order 
const updateOrder = async (req, res) => {
    if (req.params && req.params.id) {
        await Recipe.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//find an Order
const getAnOrder = async(req,res) =>{
    if(req.params && req.params.id){
        await Recipe.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    deleteOrder,
    updateOrder,
    getAnOrder
}