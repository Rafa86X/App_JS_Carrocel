'use strict';

const imagens = [
    { 'id':'1', 'url':'./imagens/1.png'},
    { 'id':'2', 'url':'./imagens/2.png'},
    { 'id':'3', 'url':'./imagens/3.png'},
    { 'id':'4', 'url':'./imagens/4.png'},
    { 'id':'5', 'url':'./imagens/5.png'},
    { 'id':'6', 'url':'./imagens/6.png'},
]

const conteudo = document.querySelector('[data-tipo="conteudo"]')

const loadImgens = ( imagens, conteudo) =>{
    imagens.forEach(imagem => {
        conteudo.innerHTML +=`
        <div class="slyde">
        <img src='${imagem.url}'>
        </div>
        `
    })
}

loadImgens(imagens,conteudo)

let slydes = document.querySelectorAll('.slyde')

const slydeAnterior = () =>{
    conteudo.appendChild(slydes[0])
    slydes = document.querySelectorAll('.slyde')
}

const slydePosterior = () =>{
    const ultimoslyde = slydes[slydes.length - 1]
    conteudo.insertBefore( ultimoslyde, slydes[0])
    slydes = document.querySelectorAll('.slyde')
}

document.querySelector('[data-tipo="anterior"]').addEventListener('click',slydeAnterior)
document.querySelector('[data-tipo="proximo"]').addEventListener('click',slydePosterior)
