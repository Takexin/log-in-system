
const nomes=[]
const senha=[]
function save_login(username, password){
    
    username = window.localStorage.setItem("user_name",document.getElementById("user").value)
    nomes.push(window.localStorage.getItem("user_name"))
    password = window.localStorage.setItem("user_pass",document.getElementById("pass").value)
    senha.push(window.localStorage.getItem("user_pass"))
    alert(nomes)
    alert(senha)
}
function register(){
    user_reg = nomes.find((element) => document.getElementById("user_reg").value)
    pass_reg = senha.find((element) => document.getElementById("pass_reg").value)
    if (user_reg && pass_reg){
        document.getElementById("res").innerHTML="Senha e usuário validos"
    }
    else{
        document.getElementById("res").innerHTML="Senha ou usuário invalidos"
    }
    

}