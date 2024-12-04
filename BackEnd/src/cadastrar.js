document.getElementById('cadastrar').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const CPF = document.getElementById('CPF').value
    const CEP = document.getElementById('CEP').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value


    const data = {
        nome: nome,
        idade: idade,
        CPF: CPF,
        CPE: CEP,
        email: email,
        senha: senha,

    }

    fetch('http://localhost:8081/cadastrar', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })


        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else if (response.status === 401) {
                return response.json();
            }
            else {
                throw new Error("Cadastro invalido");
            }
        })


        .then(data => {
            if (data.msg === "Usuário cadastrado com sucesso") {


                alert('Cadastro realizado com sucesso')

                window.location.href = 'index.html'
            }
            
            else if (data.msg === "O email já está cadastrado") {
                alert('O Email já está cadastrado')
            }
            else {
                alert('Ocorreu um erro ao cadastro' + data.msg)
            }
        })
        .catch(error => {
            throw new Error(error)
        })
})
