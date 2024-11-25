
const express = require('express');

const connection = require('./db');
const router = express.Router();

 router.get("/listar" , (req,res)=>{
    const sql = "SELECT * FROM cliente"})

router.post("/cadastrarCliente", (req,res)=>{
        
    const {id,nome,idade,CPF,RG,email,endereco,telefone} = req.body
    
    try{
            
        connection.query("INSERT INTO cliente values (?,?,?,?,?,?,?,?)",[id,nome,idade,CPF,RG,email,endereco,telefone], (erro)=>{
            if(erro){
                res.status(500).json(erro)
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

router.post("/cadastrarEndereco", (req,res)=>{
    const {id,rua,cep,cidade,estado,bairro} = req.body

    try{
        connection.query("INSERT INTO endereco values(?,?,?,?,?,?)",[id,rua,cep,cidade,estado,bairro], (erro)=>{
            if(erro){
                res.status(500).json(erro)
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

    module.exports = router;