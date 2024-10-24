

let nomeHeroi = "SupremoMix"
let nivel = 10000

if(nivel <= 1000)
{
    console.log("Ferro")
    nivel = "Ferro"
}
else if(nivel >= 1001 && nivel <= 2000)
{
    console.log("Bronze")
    nivel = "Bronze"
}
else if(nivel >= 2001 && nivel <= 5000)
{
    console.log("Prata")
    nivel = "Prata"
}
else if(nivel >= 5001 && nivel <= 7000)
{
     console.log("Ouro")
     nivel = "Ouro"
}
else if(nivel >= 7001 && nivel <= 8000)
{
     console.log("Platina")
     nivel = "Platina"
}
else if(nivel >= 8001 && nivel <= 9000)
{
     console.log("Ascendente")
     nivel = "Ascendente"
}
else if(nivel >= 9001 && nivel <= 10000)
{
        console.log("Imortal")
        nivel = "Imortal"
}
else
{
    console.log("Radiante")
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)