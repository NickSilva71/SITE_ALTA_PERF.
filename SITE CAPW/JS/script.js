//Botão Dark-mode
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('check');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

//Ocultar e expor section de apresentação
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const apresentacaoSection = document.getElementById('apresentacao');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            apresentacaoSection.classList.remove('hidden');
        });
    });
});

//informações dos integrantes do grupo 
let integrantes = [
    {
    nome:'Nícolas Ferreira e Silva',
    idade: '19 anos',
    github: 'https://github.com/NickSilva71',
    linkedin: 'https://www.linkedin.com/in/n%C3%ADcolas-ferreira-b0029b2a5/',
    foto: 'IMG/perfil_nicolas.jpg', 
    competencia: '|HTML|CSS|JavaScript|Java|',
    resumo: 'Sempre tive curiosidade em aprender, com a tecnologia, pude testar meu raciocínio e compreender o funcionamento do mundo moderno. Nesta área, desejo contribuir com resoluções de problemas e trabalho em equipe, visando sempre o aprendizado e o desenvolvimento pessoal e coletivo.'
},

{
    nome:'Sérgio José de Araújo Júnior',
    idade: '22 anos',
    github: 'https://github.com/reKs1',
    linkedin: 'https://www.linkedin.com/in/s%C3%A9rgio-jos%C3%A9-7701b12a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    foto: 'IMG/perfil_sergio.jpeg', 
    competencia: '|HTML|CSS|JavaScript|Java|C#|',
    resumo: 'Oi.'
},

{
    nome:'Dário Felipe de Barros Faustino ',
    idade: '20 anos',
    github: 'https://github.com/Dariofelip',
    linkedin: 'https://www.linkedin.com/in/dario-felipe-083109287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    foto: 'IMG/perfil_dario.jpeg', 
    competencia: '|HTML|CSS|JavaScript|Java|',
    resumo: 'Desejo trabalhar de forma remota, gosto da área de vendas, estudo programação e quero estar trabalhando na área em cerca de 2 anos.'
},

{
    nome:'Eric Junior da Silva ',
    idade: '29 anos',
    github: 'https://github.com/eriteccod',
    linkedin: 'https://www.linkedin.com/in/eric-silva-60b371198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    foto: 'IMG/perfil_eric.jpeg', 
    competencia: '|HTML|CSS|JavaScript|Java|Python|',
    resumo: 'Gosto de estudar programação, aprender continuamente novas tecnologias e melhorar minhas habilidades. Além das minhas habilidades técnicas, tenho ampla experiência em atendimento ao cliente, o que aprimorou minha capacidade de comunicação eficaz e de trabalho colaborativo em ambientes de equipe.'
},

{
    nome:'Luiz Henrique "Nogoroh". ',
    idade: '',
    github: '',
    linkedin: '',
    foto: '', 
    competencia: '',
    resumo: 'um teste'
}

]

//função para selecionar cada integrante
function infos(index){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')
    let competencia = document.querySelector('#competencia')
    let foto = document.querySelector('#imagem-alunos')
    let github = document.querySelector('#link-github')
    let linkedin = document.querySelector('#link-linkedin')
    let resumo = document.querySelector('#resumo')

    if(index == 0){
        nome.innerHTML = integrantes[0].nome
        idade.innerHTML = integrantes[0].idade
        competencia.innerHTML = integrantes[0].competencia
        foto.src = integrantes[0].foto
        github.href = integrantes[0].github
        linkedin.href = integrantes[0].linkedin
        resumo.innerHTML = integrantes[0].resumo
    }else if(index == 1){
        nome.innerHTML = integrantes[1].nome
        idade.innerHTML = integrantes[1].idade
        competencia.innerHTML = integrantes[1].competencia
        foto.src = integrantes[1].foto
        github.href = integrantes[1].github
        linkedin.href = integrantes[1].linkedin
        resumo.innerHTML = integrantes[1].resumo
    }else if(index == 2){
        nome.innerHTML = integrantes[2].nome
        idade.innerHTML = integrantes[2].idade
        competencia.innerHTML = integrantes[2].competencia
        foto.src = integrantes[2].foto
        github.href = integrantes[2].github
        linkedin.href = integrantes[2].linkedin
        resumo.innerHTML = integrantes[2].resumo
    }else if(index == 3){
        nome.innerHTML = integrantes[3].nome
        idade.innerHTML = integrantes[3].idade
        competencia.innerHTML = integrantes[3].competencia
        foto.src = integrantes[3].foto
        github.href = integrantes[3].github
        linkedin.href = integrantes[3].linkedin
        resumo.innerHTML = integrantes[3].resumo
    }else{
        nome.innerHTML = integrantes[4].nome
        idade.innerHTML = integrantes[4].idade
        competencia.innerHTML = integrantes[4].competencia
        foto.src = integrantes[4].foto
        github.href = integrantes[4].github
        linkedin.href = integrantes[4].linkedin
        resumo.innerHTML = integrantes[4].resumo
    }
}

//função para botões do carrossel
let contador = 1
function avancar(){
    if(contador < 6){
        infos(contador)
        contador++
    }
    console.log(contador)
}

function voltar(){
    if(contador > 0){
        infos(contador)
        contador--
    }
    console.log(contador)
}

