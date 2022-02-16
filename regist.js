let reglemets = document.getElementsByClassName("formRegustrInput");
document.getElementById("formRegustr").addEventListener("submit",checkes);
for (let index = 0; index < reglemets.length; index++) {
    reglemets[index].addEventListener("invalid", errores);
    reglemets[index].addEventListener("input",reset);
}

function errores(event) {
   
   // console.log(event);
    this.classList.add("eror");
    document.getElementById("edr").innerText = "Возникла ошибка";
    document.getElementById("edr").style.display = "block";
    event.preventDefault();
}
function reset() {
    this.classList.remove("eror");
}
function checkes(event) {
    let pass1 = document.getElementById("passwprd1").value;
    let pass2 = document.getElementById("passwprd2").value;
    if (pass1!=pass2) {
        event.preventDefault();
        document.getElementById("edr").innerText = "пароль не совпадают";
        document.getElementById("edr").style.display = "block";
        document.getElementById("passwprd1").classList.add("eror");
        document.getElementById("passwprd2").classList.add("eror");
     
    }
    let checked = document.getElementById("checked").checked;
    console.log(checked);
    if(!checked){
        document.getElementById("edr").innerText = "вы не поставили галочку";
        document.getElementById("edr").style.display = "block";
        event.preventDefault();
     
    }
    event.preventDefault();
        logg();
}
async function logg() {
    let data = new FormData();
    let login = document.getElementById('logun').value;
    console.log(login+0);
    data.append("login",login);
    let response = await fetch('../php/regustrLogun.php',{
        method:"POST",
        body:data
    });
    let restut = await response.json();
    console.log(restut.status);
    if(restut.status == 'erors'){
        document.getElementById("edr").innerText = "такой логин уже занят";
        document.getElementById("edr").style.display = "block";
        document.getElementById('logun').classList.add("eror");
    }
    else{
       document.getElementById("formRegustr").submit();
      document.getElementById("edr").innerText = "дадада";
       document.getElementById("edr").style.display = "block";
    }
}