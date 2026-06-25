const display = document.getElementById("display");

function inserir(valor){
    display.value += valor;
}

function limpar(){
    display.value = "";
}

function apagar(){
    display.value = display.value.slice(0, -1);
}

function calcular(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Erro";
    }
}

// suporte ao teclado
document.addEventListener("keydown", (e) => {
    const tecla = e.key;

    if(!isNaN(tecla) || ["+", "-", "*", "/", "."].includes(tecla)){
        inserir(tecla);
    }

    if(tecla === "Enter"){
        calcular();
    }

    if(tecla === "Backspace"){
        apagar();
    }

    if(tecla === "Escape"){
        limpar();
    }
});