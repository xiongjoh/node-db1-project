
const db = require("../../data/dbConfig.js");

module.exports = {
    getAll() {
        // select * from accounts
        return db('accounts')
    },
    getById(id) {
        // select * from accounts where id = id
        return db('accounts').where('id', id).first()
    },
    create(account) {
        // insert into accounts (name, budget) values ('name', budget)
        return db('accounts').insert(account)
        // grabs id from results
        .then(([id]) => {
            return db('accounts').where('id', id).first()
        })
    },
    update(id, account) {
        // update account set name = name, budget = budget where accountid = id
        return db('accounts').where('id', id).update(account)
        .then(res => {
            return db('accounts').where('id', id).first()
        })
    },
    delete(id) {
        return db('posts').where('id', id).del()
    }
}