const nomes=[]
const senha=[]

var username = window.localStorage.setItem("user_name",document.getElementById("user").value)
function get_cookie(){
    let name = username + "=";
    let cooks = document.cookie.split(";")
    for (let i = 0; i < cooks.lengt; i++){
        let c = i
        alert(c)
    }
}
var cookie_num = 0

function register(){
    cookie_num+=1
    
    nomes.push(window.localStorage.getItem("user_name"))
    password = window.localStorage.setItem("user_pass",document.getElementById("pass").value)
    senha.push(window.localStorage.getItem("user_pass"))
    alert(nomes)
    alert(senha)
    document.cookie = document.getElementById("user").value + "=" + cookie_num + ";path/"
}
function login(){
    var nome_true = Boolean(false)
    var senha_true = Boolean(false)
    
    for (var i = 0; i < nomes.length; i++) {
        if(nomes[i] == document.getElementById("user_reg").value){
            nome_true=true
        }
    }
    if(senha[i] == document.getElementById("pass_reg").value){
        senha_true=true
    }
    if(nome_true==true && senha_true==true){
        alert("VOCÊ ESTÁ LOGADO!")
    }
    else{
        alert("ALGUM ERRO OCORREU...")
    }
}
