function handleClick(event){
    event.preventDefault();
    const day = document.querySelector("#inputDay").value;
    const month = document.querySelector("#inputMonth").value;
    const year = document.querySelector("#inputYear").value;
    if (verificaDia(day, month, year)){
        let ano = calcAge(day, month, year);
        const dataAtual = new Date();
        let mes, dia;
        if (day > dataAtual.getDate()){
            if ((month % 2 != 0) || month == 12 || month == 8 || month == 10 || month == 12){
                dia = 31 - (day - dataAtual.getDate());
            } else {
                dia = day - dataAtual.getDate();
            }
        } else {
            dia = dataAtual.getDate() - day;
        }
        if (month > (dataAtual.getMonth()+1)){
            mes = 12 - (month - (dataAtual.getMonth() + 1));
        } else if (month < (dataAtual.getMonth()+1)){
            mes = (dataAtual.getMonth()+1) - month;
        } else{
            if (day > dataAtual.getDate()){
                mes = 12 - (month - (dataAtual.getMonth() + 1)) - 1;
            } else {
                mes = (dataAtual.getMonth()+1) - month
            }
        }
        if (day == dataAtual.getDate() && month == (dataAtual.getMonth()+1)){
            ano++;
        }
        document.getElementById("resultYear").innerHTML = ano;
        document.getElementById("resultMonth").innerHTML = mes;
        document.getElementById("resultDay").innerHTML = dia;
    }
}

function verificaDia(day, month, year){
    
    if (((day > 31 || day < 1) || (month > 12 || month < 1) || (year < 0)) || (day == "" || month == "" || year == "")){
        error();
        return false;
    } else {
        return verificaMes(day, month);
    }
}

function verificaMes(day, month){
    if (month == 2){
        if (day > 28) {
            error();
            return false;
        }
    } else {
        if (day == 31){
            if ((month % 2 != 0) || month == 8 || month == 10 || month == 12) {
                return true;
            } else {
                return false;
            }
        }
    }
    ok();
    return true;
}

function calcAge(day, month, year){
    const dataAtual = new Date();
    let ano = dataAtual.getFullYear() - year;
    if (dataAtual.getMonth() < month){
        ano--;
    } else if (dataAtual.getMonth() == month){
        if (dataAtual.getDay() < day){
            ano--;
        }
    }
    return ano;
}

function error(){
    const dia = document.querySelector("#dia");
    const mes = document.querySelector("#mes");
    const ano = document.querySelector("#ano");
    const inputDay = document.querySelector("#inputDay");
    const inputMonth = document.querySelector("#inputMonth");
    const inputYear = document.querySelector("#inputYear");
    dia.style.color = "red";
    mes.style.color = "red";
    ano.style.color = "red";
    inputDay.style.borderColor = "red";
    inputMonth.style.borderColor = "red";
    inputYear.style.borderColor = "red";
    document.getElementById("resultYear").innerHTML = "--";
    document.getElementById("resultMonth").innerHTML = "--";
    document.getElementById("resultDay").innerHTML = "--";
    document.querySelector("#inputDay").value = "";
    document.querySelector("#inputMonth").value = "";
    document.querySelector("#inputYear").value = "";
}

function ok(){
    const dia = document.querySelector("#dia");
    const mes = document.querySelector("#mes");
    const ano = document.querySelector("#ano");
    const inputDay = document.querySelector("#inputDay");
    const inputMonth = document.querySelector("#inputMonth");
    const inputYear = document.querySelector("#inputYear");
    dia.style.color = "hsla(0, 1%, 44%, 0.542)";
    mes.style.color = "hsla(0, 1%, 44%, 0.542)";
    ano.style.color = "hsla(0, 1%, 44%, 0.542)";
    inputDay.style.borderColor = "hsla(0, 1%, 44%, 0.542)";
    inputMonth.style.borderColor = "hsla(0, 1%, 44%, 0.542)";
    inputYear.style.borderColor = "hsla(0, 1%, 44%, 0.542)";
}