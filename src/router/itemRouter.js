const {Router} = require('express')
const {
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
} = require('../controller/itemController.js')

const itemRouter = Router()

itemRouter.post('/', createItem)

itemRouter.get('/', getItems)

itemRouter.get('/:id', getItem)

itemRouter.patch('/:id', updateItem)

itemRouter.delete('/:id', deleteItem)

module.exports = itemRouter
