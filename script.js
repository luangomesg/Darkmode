import {robots} from './db.js'

let robot = robots;
let secao = document.querySelector(".section");
let btn = document.querySelector(".btn");

const allMonster = robot.map((value)=>{
    return `
    <div class="conteiner">
        <p> Nome: ${value.Nome} </p>
        <p> Altura: ${value.Altura} </p>
        <p> Habilidade: ${value.Habilidade} </p>
        <img class="robot" src="https://robohash.org/${value.Foto}">
    </div>` 
})
secao.innerHTML = allMonster;

btn.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("dark")
})



