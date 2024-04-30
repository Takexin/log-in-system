
const nomes=[]
const senha=[]
function register(){
    username = window.localStorage.setItem("user_name",document.getElementById("user").value)
    nomes.push(window.localStorage.getItem("user_name"))
    password = window.localStorage.setItem("user_pass",document.getElementById("pass").value)
    senha.push(window.localStorage.getItem("user_pass"))
    alert(nomes)
    alert(senha)
}
function login(){
    var nome_true = Boolean(false)
    var senha_true = Boolean(false)
    
    for (let i = 0; i < nomes.length; i++) {
        if(nomes[i] == document.getElementById("user_reg").value){
            nome_true=true
            alert("nome certo")
        }
    }
    for (let e = 0; e < senha.length; e++) {
        if(senha[e] == document.getElementById("pass_reg").value){
            senha_true=true
            alert("senha certo")
            
        }
    }
    if(nome_true==true && senha_true==true){
        alert("vc esta logado")
    }
}
function tamanho(){
    alert(nomes.length)
}