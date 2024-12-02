
const express = require('express');

const connection = require('./db');
const router = express.Router();

 router.get("/listar" , (req,res)=>{
    const sql = "SELECT * FROM cliente"})

router.post("/cadastrarCliente", async(req,res)=>{
        
    const {id,nome,sobrenome,CPF,CPE,email,senha} = req.body

    const sql = "SELECT * FROM cliente WHERE email = ?"
    const [check] = await connection.query(sql, [email])

    if(check.length> 0){
        res.json({msg:"Verifique o seu Email ou CPF"})
    }
    else{  
    try{
            
        connection.query("INSERT INTO cliente values (?,?,?,?,?,?,?)",[id,nome,sobrenome,CPF,CPE,email,senha,], (erro)=>{
            if(erro){
                res.status(400).json(erro)
            }

            else{
                res.status(200).json("Cadastrado com sucesso!!!");
            }
                
        })
    }
    catch(erro){
        console.log(erro)
    }
}
        
})

router.post("/cadastrarEndereco", (req,res)=>{
    const {id,rua,cep,cidade,estado,bairro} = req.body

    try{
        connection.query("INSERT INTO endereco values(?,?,?,?,?,?)",[id,rua,cep,cidade,estado,bairro], (erro)=>{
            if(erro){
                res.status(400).json(erro)
            }

            else{
                res.status(201).json("Cadastrado com sucesso!!!");
            }

        })
    }
    catch(erro){
        console.log(erro)
    }
})


router.post("/contato", (req,res)=>{
    const {id,nome,sobrenome,CPF,CEP,email,senha,} = req.body
    try{
        connection.query("INSERT INTO cliente(id,nome,sobrenome,CPF,CPE,email,senha) values (?,?,?,?,?,?,?)", [id,nome,sobrenome,CPF,CEP,email,senha,], (erro)=>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(201).json("Cadastrado com sucesso")
            }
        })
    }
    catch(erro){
        console.log(erro)
    }
})
    module.exports = router;