document.getElementById('logar').addEventListener(submit, function(event){

    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    
    const datas ={
        email:email,
        senha:senha,
    };

    
    fetch('http://localhost:8081/logar',{
        method: 'POST',
        
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    })

    
    .then(response=>{
        if(response.status === 200){
            return response.json();
        }
        else{
            alert("Email ou senha divergentes")
        }
    })

    
    .then(data=>{
        
        if(data.msg === "Success"){
            
            localStorage.setItem('nomeUsuarui', data.nome)
            
            
            window.location.href = 'index.html'
        }
    
})
.catch ((error)=>{
    alert("Ocorreu um erro ao realiar o login")
})

})