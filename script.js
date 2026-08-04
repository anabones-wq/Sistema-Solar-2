const lista = [

"🌍 A Terra leva cerca de 365 dias e 6 horas para completar uma volta ao redor do Sol.",

"☀️ O Sol possui aproximadamente 1,39 milhão de quilômetros de diâmetro.",

"🪐 Saturno tem milhares de anéis compostos principalmente de gelo e pequenas rochas.",

"🌙 A Lua é o único satélite natural da Terra.",

"🚀 Júpiter possui mais de 90 luas conhecidas.",

"🔴 Marte abriga o Monte Olimpo, o maior vulcão conhecido do Sistema Solar.",

"💨 Netuno possui alguns dos ventos mais rápidos do Sistema Solar, ultrapassando 2.000 km/h.",

"🌡️ Vênus é o planeta mais quente do Sistema Solar devido ao intenso efeito estufa."

];

function curiosidade(){

let numero = Math.floor(Math.random()*lista.length);

document.getElementById("texto").innerHTML = lista[numero];

}
