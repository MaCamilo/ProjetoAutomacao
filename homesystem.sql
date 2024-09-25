/* TIPOS DE DADOS SQL
tipos para numeros;
int- inteiro ex: 1,2,3...
float- decimal ex: 10.10, 10.3, 99.99...

tipos para texto;
char - caractere ex: A,B,C,D,E...
OBS: O campo do tipo char, vai possuir sempre o tamanho definido
em sua criaçao.

varchar
OBS:O campo do tipo varchar, vai aumentar e diminuir de acordo
com o tamanho do dado, respeitando sempre o tamanho definido.
em sua criaçao.

text 
OBS: O campo do tipo text, se não definido o tamanho padrao,
vai alocar todo o teto

data
date - ano, mês e dia no padrao americano
EX: date 2024-09-18 (ano,mês e dia)
datetime - ano, mes, dia e horario no padrao americano
EX: 2024-09-18 11:42:42
*/

cliente 
    id - int(11)
    nome - varchar(100)
    data_nascimento - date
    CPF - char(14)
    RG -  char(12)
    CNPJ - char (18)
    email - varchar(100)
    endereço - varchar(100)
    telefone- char (11)
fornecedor
    id - int (11)
    nome - varchar(100)
    localizaçao - varchar (200)
    telefone- char (11)
    valor - float ()

compra_fornecedor 
    id - int (11)
    fornecedor_id 
    produto_fornecedor_id 
    entrega - datetime
    devoluçao - datetime
    
peoduto_fornecedor
    id - int (11)
   nome - varchar(100)
   marcas - varchar(100)
   descriçao - text
   valor - float ()
   imagem - varchar ()

produto
   id - int (11)
   nome - varchar(100)
   marcas - varchar(100)
   descriçao - text
   valor - float ()
   resoluçao - varchar(10)
   imagem - varchar ()
   categorias- varchar (100)+

vendas 
    id - int(11)
    cliente_id - int(11)
    produto_id - int(11)
    devoluçao - datetime
cadastro
     id - int(11)
     nome - varchar(100)
     sobrenome - varchar(100)
     email- varchar(100)
     CPF - char(14)
     CEP - char (9)
     senha - varchar(100)
contato 
    id - int (11)
    nome_empresa -  varchar(100)
    localizaçao - varchar (200)
    telefone- char (11)
    endereço_de_email - varchar(100)
