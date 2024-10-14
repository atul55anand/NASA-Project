const {planets} = require('../../models/planets.models')

function getAllplanets(req,res){
 return   res.status(200).json(planets);
}

module.exports = {
    getAllplanets,
}