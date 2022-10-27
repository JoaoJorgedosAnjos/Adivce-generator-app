const btn = document.getElementById("btn").addEventListener("click", ()=>{
    tirarUmConselhoAleatorio()
})


async function criarOGeradorDeConselho(){
    const url ="https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return json = await resposta.json();
      
}
async function gerarUmConselhoAleatorio(slip_id){
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    const resposta = await fetch(url)
    return await resposta.json()

}

async function tirarUmConselhoAleatorio (){
    const gerador = await criarOGeradorDeConselho()
    const conselhoId = gerador.slip.id
    const conselhoText = gerador.slip.advice
    document.getElementById("advice-id").innerHTML = `ADVICE #${conselhoId}`
    document.getElementById("advice-text").innerHTML = `"${conselhoText}"`
   
}
tirarUmConselhoAleatorio()

