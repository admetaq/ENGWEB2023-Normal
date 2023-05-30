var Planta = require('../models/planta')


module.exports.list = () => {
    return Planta
        .find()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


module.exports.listQuery = query => {
    return Planta
        .find(query)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getPlanta = id => {
    return Planta
        .findById(id)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getFreguesias = () => {
    return Planta
        .distinct("Freguesia")
        .sort()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getEspecies = () => {
    return Planta
        .distinct("Espécie")
        .sort()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


module.exports.addPlanta = (planta) => {
    return Planta.create(planta)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = (id) => {

    return Planta.deleteOne({ _id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}