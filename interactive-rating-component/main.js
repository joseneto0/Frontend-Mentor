function handleClick(id){
    verificarLaranjas(id);
    const botao = document.querySelector(`#${id}`);
    document.querySelector("#inserir").innerHTML = id[3];
    botao.style.color = "white";
    botao.style.backgroundColor = "hsl(25, 97%, 53%)";
}

function verificarLaranjas(id){
    for (let i = 1; i <= 5; i++){
        let botao = document.querySelector(`#btn${i}`);
        if (i != id[4]){
            botao.style.color = "hsl(217, 12%, 63%)";
            botao.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        } else {
            continue;
        }
    }
}

function swap(event){
    event.preventDefault();
    const box = document.querySelector(".box");
    const after = document.querySelector(".afterSubmit");
    box.style.display = "none";
    after.style.display = "block";
}