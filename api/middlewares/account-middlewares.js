
const Account = require('../accounts/account-model')

// middleware

async function validateId(req, res, next) {
    const { id } = req.params
    try {
        const data = await Account.getById(id)
        if (!data) {
            res.status(404).json({message: `data not found for id:${id}`})
        } else {
            req.accountInfo = data
            next()
        }
    }
    catch(error) {
        res.status(500).json({message: message.error})
    }
}

function validateEntries(req, res, next) {
    const {budget, name} = req.body
    if (!req.body) {
        res.status(400).json({message:`no body found`})
    } else if (!budget || !name) {
        res.status(400).json({message:`budget and name required for account`})
    } else {
        console.log(typeof budget)
        next()
    }
    
}

module.exports = {
    validateId,
    validateEntries,
}