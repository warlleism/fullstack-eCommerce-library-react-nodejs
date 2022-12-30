const Formulario = require('../model/cadastro')


const CreateUser = async (req, res) => {

    var { nome, preco, categoria, descricao, imagem, tipo } = req.body

    // const user = await Formulario.findOne({ where: { cpf } })

    // if (user) {
    //     return res.send({ status: 200, sucess: 'CPF já cadastrado', icon: "info" });
    // }

    try {

        const formulario = await Formulario.create({ nome, preco, categoria, descricao, imagem, tipo })

        return res.status(200).send({ status: 200, sucess: 'Cadastrado com sucesso', icon: 'success' });


    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = CreateUser