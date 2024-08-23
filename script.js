



function mostrarTabela(){
 const tabelaPrecos = document.querySelector(".tabela-preços")
const mascara = document.querySelector(".mascara")

    mascara.style.visibility = "visible"
    tabelaPrecos.style.left = ("35%")
    if(innerWidth < 1100){
        tabelaPrecos.style.left = ("15%")
    }

}

function esconderTabela(){
    const tabelaPrecos = document.querySelector(".tabela-preços")
    const mascara = document.querySelector(".mascara")
    mascara.style.visibility = "hidden"
    tabelaPrecos.style.left = ("-599px")
}