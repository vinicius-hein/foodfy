const { date } = require("../../lib/utils")
const db = require("../../config/db")

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM recipes`, function(err, results) {
            if(err) throw `Database error! ${err}`

            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    }
}