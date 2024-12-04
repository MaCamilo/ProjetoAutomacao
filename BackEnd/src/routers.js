
const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('./db');
const salt = 10;
const router = express.Router();



// router.post("/cadastrarCliente", async (req, res) => {

//     const { id, nome, sobrenome, CPF, CEP, email, senha } = req.body

//     const password = await bcrypt.hash(senha, salt)
//     console.log(password);

//     if (check.length > 0) {
//         res.json({ msg: "Verifique o seu Email ou CPF" })
//     }
//     else {
//         try {

//             const cadastrar = connection.query("INSERT INTO cliente values (?,?,?,?,?,?,?)", [id, nome, sobrenome, CPF, CEP, email, senha,], (erro) => {
//                 if (erro) {
//                     res.status(400).json(erro)
//                 }

//                 else {
//                     res.status(200).json("Cadastrado com sucesso!!!");
//                 }

//             })
//         }
//         catch (erro) {
//             console.log(erro)
//         }
//     }

// })

// router.post("/cadastrarEndereco", async (req, res) => {
//     const { id, rua, cep, cidade, estado, bairro } = req.body

//     try {
//         connection.query("INSERT INTO endereco values(?,?,?,?,?,?)", [id, rua, cep, cidade, estado, bairro], (erro) => {
//             if (erro) {
//                 res.status(400).json(erro)
//             }

//             else {
//                 res.status(201).json("Cadastrado com sucesso!!!");
//             }

//         })
//     }
//     catch (erro) {
//         console.log(erro)
//     }
// })


router.post('/api/contato', async(req, res)=>{
    const{id,nome,sobrenome,CPF,CEP,email,senha} = req.body;
    console.log(req.body)

    const password = await bcrypt.hash(senha,salt)
    console.log(password);

    const sql = "INSERT INTO cliente values(?,?,?,?,?,?,?)";

    try{
        
            const cadastrar =  connection.query(sql,[id,nome,CPF,CEP,email,sobrenome,password], (erro)=>{
            if (erro){
                console.log(erro);
                res.status(401).json({msg:"Erro ao cadastro"})
            }
            else{
                res.status(200).json({msg:"Usuário cadastrado com sucesso!!!"});
            }
        })

        
    }
    catch(erro){
        console.log(erro)
    }
});

router.post('/login',async(req,res)=>{
    const {email,senha} = req.body

    const password = await bcrypt.hash(senha,salt)
    console.log(password);

    const sql = "SELECT * FROM cliente WHERE email = ?"
    try{
        const [rows] = await connection.promise().query(sql,[email]);

        if(rows.length > 0){
            const match = await bcrypt.compare(senha,rows[0].senha);

            if(match){
                res.status(200).json({msg:"Sucesso", nome:rows[0].nome})
            }
            else{
                res.status(401).json({msg:"Email ou senha incorretos"})
            }
        }
        else{
            res.status(400).json({msg:"Erro"})
        }

    }
    catch(erro){
        console.log(erro)
    }
})


module.exports = router;