const { Model, DataTypes } = require('sequelize')

class Cadastro extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.STRING,
            categoria: DataTypes.STRING,
            descricao: DataTypes.STRING,
            imagem: DataTypes.STRING,
            tipo: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Cadastro