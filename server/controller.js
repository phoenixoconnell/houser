module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipcode, img, mortgage, rent} = req.body
        
        db.houses.post(name, address, city, state, zipcode, img, mortgage, rent)
            .then(result => res.status(200).send(result))
            .catch(err => {
                console.log('Error adding item', err)
                res.status(500).json('Error adding item')
            })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        db.houses.delete(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(err => {
                console.log('Error deleting item', err)
                res.status(500).json('Error deleting item')
            })
    }
}