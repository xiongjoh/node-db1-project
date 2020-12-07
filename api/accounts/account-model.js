
const db = require("../../data/dbConfig.js");

module.exports = {
    getAll() {
        // select * from accounts
        return db('accounts')
    },
    getById(id) {
        return db('accounts').where('id', id).first()
    },
    create(account) {
        return db('accounts').insert(account)
        .then(([id]) => {
            return db('accounts').where('id', id).first()
        })
    },
    update(id, account) {
        return db('accounts').where('id', id).update(account)
        .then(res => {
            return db('accounts').where('id', id).first()
        })
    },
    delete(id) {
        return db('posts').where('id', id).del()
    }
}