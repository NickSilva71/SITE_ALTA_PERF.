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

//PÁGINA 1

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
    resumo: 'Estou em busca de oportunidades para aplicar minhas habilidades e contribuir para o crescimento de uma equipe dinâmica na área de T.I e ansioso para fazer parte de uma empresa que valorize o desenvolvimento profissional e o trabalho em equipe. Tenho conhecimento em Mecânica Industrial, C#, Java e no Desenvolvimento Front-End.'
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
    nome:'Luis Henrique Oliveira Andrade ',
    idade: '20 anos',
    github: 'https://github.com/LuisHDurkin',
    linkedin: 'https://www.linkedin.com/in/luis-henrique-33787830b/',
    foto: 'IMG/perfil_luis.jpeg', 
    competencia: 'HTML|CSS|',
    resumo: 'Possuo competências com: Programação; Design de Sistemas; Análise de Algoritmos; Resolução de Problemas; Trabalho em Equipe e Habilidades de Comunicação Técnica. Gosto de trabalhar com: Códigos Lógicos; Simplificação de Sistemas; Algoritmos; Problemas Técnicos; Base de Dados; HTML e CSS.'
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

//PÁGINA 2    
let carros = [
    {
        marca: 'FIAT',   
        modelo: 'Argo',
        ano: '2022',
        foto: 'IMG/fiat-argo.jpeg', 
        consumo: '14,2km/l',
        motor: '1.0 Firefly de 3 cc|1.3 flex',
        cambio: '77'     
    },
    
    {
        marca: 'Fiat',   
        modelo: 'Argo',
        ano: '2022',
        foto: 'IMG/fiat-toro.jpeg', 
        consumo: '14,2km/l',
        motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
        cambio: '77' 
    },
    
    {
        marca: 'Fiat',   
        modelo: 'Argo',
        ano: '2022',
        foto: 'IMG/honda-city.jpg', 
        consumo: '14,2km/l',
        motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
        cambio: '77' 
    },
    
    {
        marca: 'Fiat',   
        modelo: 'Argo',
        ano: '2022',
        foto: 'IMG/honda-civic-TypeR.jpg', 
        consumo: '14,2km/l',
        motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
        cambio: '77' 
    },
    
    {
        marca: 'Peugeot',   
        modelo: '208',
        ano: '2022',
        foto: 'IMG/peugeot-208.jpg', 
        consumo: '14,2km/l',
        motor: '77.',
        cambio: '77'
    },
    
    {
        marca: 'Peugeot',   
        modelo: '208',
        ano: '2022',
        foto: 'IMG/corolla-hibrido.jpg', 
        consumo: '14,2km/l',
        motor: '77.',
        cambio: '77'
    },
    
    {
        marca: 'Peugeot',   
        modelo: '208',
        ano: '2022',
        foto: 'IMG/subaru-wrx-sti.webp', 
        consumo: '14,2km/l',
        motor: '77.',
        cambio: '77'
    },
    
    {
        marca: 'Peugeot',   
        modelo: '208',
        ano: '2022',
        foto: 'IMG/renault-captur.jpg', 
        consumo: '14,2km/l',
        motor: '77.',
        cambio: '77'
    }
    
    ]
    
    //função para selecionar cada carro
    function infos_carros(index){
        let marca = document.querySelector('#marca')
        let modelo = document.querySelector('#modelo')
        let ano = document.querySelector('#ano')
        let foto = document.querySelector('#imagem-carros')
        let consumo = document.querySelector('#consumo')
        let motor = document.querySelector('#motor')
        let cambio = document.querySelector('#cambio')
    
        if(index == 0){
            marca.innerHTML = carros[0].marca
            modelo.innerHTML = carros[0].modelo
            ano.innerHTML = carros[0].ano
            foto.src = carros[0].foto
            consumo.innerHTML = carros[0].consumo
            motor.innerHTML = carros[0].motor
            cambio.innerHTML = carros[0].cambio
        }else if(index == 1){
            marca.innerHTML = carros[1].marca
            modelo.innerHTML = carros[1].modelo
            ano.innerHTML = carros[1].ano
            foto.src = carros[1].foto
            consumo.innerHTML = carros[1].consumo
            motor.innerHTML = carros[1].motor
            cambio.innerHTML = carros[1].cambio
        }else if(index == 2){
            marca.innerHTML = carros[2].marca
            modelo.innerHTML = carros[2].modelo
            ano.innerHTML = carros[2].ano
            foto.src = carros[2].foto
            consumo.innerHTML = carros[2].consumo
            motor.innerHTML = carros[2].motor
            cambio.innerHTML = carros[2].cambio
        }else if(index == 3){
            marca.innerHTML = carros[3].marca
            modelo.innerHTML = carros[3].modelo
            ano.innerHTML = carros[3].ano
            foto.src = carros[3].foto
            consumo.innerHTML = carros[3].consumo
            motor.innerHTML = carros[3].motor
            cambio.innerHTML = carros[3].cambio
        }else if(index==4){
            marca.innerHTML = carros[4].marca
            modelo.innerHTML = carros[4].modelo
            ano.innerHTML = carros[4].ano
            foto.src = carros[4].foto
            consumo.innerHTML = carros[4].consumo
            motor.innerHTML = carros[4].motor
            cambio.innerHTML = carros[4].cambio
        }else if(index==5){
            marca.innerHTML = carros[5].marca
            modelo.innerHTML = carros[5].modelo
            ano.innerHTML = carros[5].ano
            foto.src = carros[5].foto
            consumo.innerHTML = carros[5].consumo
            motor.innerHTML = carros[5].motor
            cambio.innerHTML = carros[5].cambio
        }else if(index==6){
            marca.innerHTML = carros[6].marca
            modelo.innerHTML = carros[6].modelo
            ano.innerHTML = carros[6].ano
            foto.src = carros[6].foto
            consumo.innerHTML = carros[6].consumo
            motor.innerHTML = carros[6].motor
            cambio.innerHTML = carros[6].cambio
        }else{
            marca.innerHTML = carros[7].marca
            modelo.innerHTML = carros[7].modelo
            ano.innerHTML = carros[7].ano
            foto.src = carros[7].foto
            consumo.innerHTML = carros[7].consumo
            motor.innerHTML = carros[7].motor
            cambio.innerHTML = carros[7].cambio
    }}
    
    //função para botões do carrossel
    let contador_carros = 1
    function avancar_carros(){
        if(contador_carros < 8){
            infos_carros(contador)
            contador_carros++
        }
        console.log(contador_carros)
    }
    
    function voltar_carros(){
        if(contador_carros > 0){
            infos_carros(contador_carros)
            contador_carros--
        }
        console.log(contador)
    }

//PÁGINA 3
