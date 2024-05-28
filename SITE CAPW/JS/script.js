//Botão Dark-mode
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('check');
    const ball = document.querySelector('.ball'); // Seleciona a bola
    const Tema = localStorage.getItem('tema');

    if (Tema === 'dark') {
        document.body.classList.add('dark-mode');
        if (ball) {
            ball.classList.add('mover'); 
        }
        toggleButton.checked = true; 
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (ball) {
            ball.classList.toggle('mover'); 
        }
        let tema = 'light';
        if (document.body.classList.contains('dark-mode')) {
            tema = 'dark';
        }
        localStorage.setItem('tema', tema);
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
    competencia: 'HTML|CSS|Java|SQL|',
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
        contador = index
        nome.innerHTML = integrantes[0].nome
        idade.innerHTML = integrantes[0].idade
        competencia.innerHTML = integrantes[0].competencia
        foto.src = integrantes[0].foto
        github.href = integrantes[0].github
        linkedin.href = integrantes[0].linkedin
        resumo.innerHTML = integrantes[0].resumo
    }else if(index == 1){
        contador = index
        nome.innerHTML = integrantes[1].nome
        idade.innerHTML = integrantes[1].idade
        competencia.innerHTML = integrantes[1].competencia
        foto.src = integrantes[1].foto
        github.href = integrantes[1].github
        linkedin.href = integrantes[1].linkedin
        resumo.innerHTML = integrantes[1].resumo
    }else if(index == 2){
        contador = index
        nome.innerHTML = integrantes[2].nome
        idade.innerHTML = integrantes[2].idade
        competencia.innerHTML = integrantes[2].competencia
        foto.src = integrantes[2].foto
        github.href = integrantes[2].github
        linkedin.href = integrantes[2].linkedin
        resumo.innerHTML = integrantes[2].resumo
    }else if(index == 3){
        contador = index
        nome.innerHTML = integrantes[3].nome
        idade.innerHTML = integrantes[3].idade
        competencia.innerHTML = integrantes[3].competencia
        foto.src = integrantes[3].foto
        github.href = integrantes[3].github
        linkedin.href = integrantes[3].linkedin
        resumo.innerHTML = integrantes[3].resumo
    }else{
        contador = index
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
let contador = 0
function avancar(){
    if(contador < 4){
        contador++
        infos(contador)
    }
}

function voltar(){
    if(contador > 0){
        contador--
        infos(contador)
    }
}

//PÁGINA 2    
let carros = [
    {
        marca: 'FIAT',   
        modelo: 'Argo 1.0',
        ano: '2022',
        foto: 'IMG/fiat-argo.jpeg', 
        consumo: 'Urbano: 9,8km/L(A), 14,1km/L(G). Rodoviário: 11km/L(A), 15,8km/L(G).',
        motor: '1.0 Firefly de 3 cc, 77cv(A), 72cv(G) a 6250 rpm.',
        cambio: 'Manual 5 marchas, C513.'     
    },
    
    {
        marca: 'Fiat',   
        modelo: ' Toro 1.3 T270 Endurance',
        ano: '2024',
        foto: 'IMG/fiat-toro.jpeg', 
        consumo: 'Urbano: 6,3km/L(A), 9,6km/L(G). Rodoviário: 8,3km/L(A), 11,7km/L(G).',
        motor: '1.3 Turbo, 185cv(A), 180cv(G) a 5750 rpm.',
        cambio: 'Automática com modo manual de 6 marchas.' 
    },
    
    {
        marca: 'Honda',   
        modelo: 'City Touring',
        ano: '2023',
        foto: 'IMG/honda-city.jpg', 
        consumo: 'Urbano: 9,2km/L(A), 13,1km/L(G). Rodoviário: 10,5km/L(A), 15,2km/L(G).',
        motor: '1.5 126cv(A), 126cv(G) a 6200 rpm.',
        cambio: 'CVT de 7 marchas.' 
    },
    
    {
        marca: 'Honda',   
        modelo: 'Civic Type R',
        ano: '2023',
        foto: 'IMG/honda-civic-TypeR.jpg', 
        consumo: 'Urbano: 8,8km/L(G). Rodoviário: 11,1km/L(G).',
        motor: '2.0 297cv a 6500 rpm.',
        cambio: 'Manual de 6 marchas.' 
    },
    
    {
        marca: 'Peugeot',   
        modelo: '208 STYLE',
        ano: '2024',
        foto: 'IMG/peugeot-208.jpg', 
        consumo: 'Urbano: 10,4km/L(A), 14,7km/L(G). Rodoviário: 11,3km/L(A), 16,3km/L(G).',
        motor: '1.0 75cv(A), 71cv(G) a 6000 rpm.',
        cambio: 'Manual de 5 marchas, C513.'
    },
    
    {
        marca: 'Toyota',   
        modelo: 'Corolla Altis Hibrid',
        ano: '2024',
        foto: 'IMG/corolla-hibrido.jpg', 
        consumo: 'Urbano: 11,8km/L(A), 17,9km/L(G). Rodoviário: 10,5km/L(A), 15,4km/L(G).',
        motor: '1.8 101cv(A), 98cv(G) a 5200 rpm.',
        cambio: 'CVT de 0 marchas, P610.'
    },
    
    {
        marca: 'Subaru',   
        modelo: 'Impreza WRX Hatch',
        ano: '2012',
        foto: 'IMG/subaru-wrx-sti.webp', 
        consumo: 'Urbano: 7,3km/L(G). Rodoviário: 10,9km/L(G).',
        motor: '2.7 270cv a 6000 rpm.',
        cambio: 'Manual de 5 marchas.'
    },
    
    {
        marca: 'Reanult',   
        modelo: 'Captur',
        ano: '2021',
        foto: 'IMG/renault-captur.jpg', 
        consumo: 'Urbano: 7,2km/L(A), 10,5km/L(G). Rodoviário: 8,1km/L(A), 11,7km/L(G).',
        motor: '1.6 120cv(A),118cv(G) a 5500 rpm.',
        cambio: 'CVT de 6 marchas.'
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
            contador_carros = index
            marca.innerHTML = carros[0].marca
            modelo.innerHTML = carros[0].modelo
            ano.innerHTML = carros[0].ano
            foto.src = carros[0].foto
            consumo.innerHTML = carros[0].consumo
            motor.innerHTML = carros[0].motor
            cambio.innerHTML = carros[0].cambio
        }else if(index == 1){
            contador_carros = index
            marca.innerHTML = carros[1].marca
            modelo.innerHTML = carros[1].modelo
            ano.innerHTML = carros[1].ano
            foto.src = carros[1].foto
            consumo.innerHTML = carros[1].consumo
            motor.innerHTML = carros[1].motor
            cambio.innerHTML = carros[1].cambio
        }else if(index == 2){
            contador_carros = index
            marca.innerHTML = carros[2].marca
            modelo.innerHTML = carros[2].modelo
            ano.innerHTML = carros[2].ano
            foto.src = carros[2].foto
            consumo.innerHTML = carros[2].consumo
            motor.innerHTML = carros[2].motor
            cambio.innerHTML = carros[2].cambio
        }else if(index == 3){
            contador_carros = index
            marca.innerHTML = carros[3].marca
            modelo.innerHTML = carros[3].modelo
            ano.innerHTML = carros[3].ano
            foto.src = carros[3].foto
            consumo.innerHTML = carros[3].consumo
            motor.innerHTML = carros[3].motor
            cambio.innerHTML = carros[3].cambio
        }else if(index==4){
            contador_carros = index
            marca.innerHTML = carros[4].marca
            modelo.innerHTML = carros[4].modelo
            ano.innerHTML = carros[4].ano
            foto.src = carros[4].foto
            consumo.innerHTML = carros[4].consumo
            motor.innerHTML = carros[4].motor
            cambio.innerHTML = carros[4].cambio
        }else if(index==5){
            contador_carros = index
            marca.innerHTML = carros[5].marca
            modelo.innerHTML = carros[5].modelo
            ano.innerHTML = carros[5].ano
            foto.src = carros[5].foto
            consumo.innerHTML = carros[5].consumo
            motor.innerHTML = carros[5].motor
            cambio.innerHTML = carros[5].cambio
        }else if(index==6){
            contador_carros = index
            marca.innerHTML = carros[6].marca
            modelo.innerHTML = carros[6].modelo
            ano.innerHTML = carros[6].ano
            foto.src = carros[6].foto
            consumo.innerHTML = carros[6].consumo
            motor.innerHTML = carros[6].motor
            cambio.innerHTML = carros[6].cambio
        }else{
            contador_carros = index
            marca.innerHTML = carros[7].marca
            modelo.innerHTML = carros[7].modelo
            ano.innerHTML = carros[7].ano
            foto.src = carros[7].foto
            consumo.innerHTML = carros[7].consumo
            motor.innerHTML = carros[7].motor
            cambio.innerHTML = carros[7].cambio
    }}
    
    //função para botões do carrossel
    let contador_carros = 0
    function avancar_carros(){
        if(contador_carros < 7){
            contador_carros++
            infos_carros(contador_carros)
        }
    }
    
    function voltar_carros(){
        if(contador_carros > 0){
            contador_carros--
            infos_carros(contador_carros)
        }
    }

//PÁGINA 3
document.getElementById("contato-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio do formulário
    
        // Referências aos elementos do formulário
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const mensagem = document.getElementById("mensagem");
    
        // Referências aos elementos de aviso
        const avisoNome = document.getElementById("aviso-nome");
        const avisoEmail = document.getElementById("aviso-email");
        const avisoSenha = document.getElementById("aviso-senha");
        const avisoMensagem = document.getElementById("aviso-mensagem");
    
        // Limpar mensagens de erro
        avisoNome.style.display = "none";
        avisoEmail.style.display = "none";
        avisoSenha.style.display = "none";
        avisoMensagem.style.display = "none";
    
        let isValid = true;
    
        // Validação do nome
        if (nome.value.trim() === "") {
            avisoNome.textContent = "O nome é obrigatório.";
            avisoNome.style.display = "block";
            isValid = false;
        }
    
        // Validação do email
        if (email.value.trim() === "") {
            avisoEmail.textContent = "O email é obrigatório.";
            avisoEmail.style.display = "block";
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            avisoEmail.textContent = "O email não é válido.";
            avisoEmail.style.display = "block";
            isValid = false;
        }
    
        // Validação da senha
        if (senha.value.trim() === "") {
            avisoSenha.textContent = "A senha é obrigatória.";
            avisoSenha.style.display = "block";
            isValid = false;
        } else if (senha.value.trim().length < 8) {
            avisoSenha.textContent = "A senha deve ter no mínimo 8 caracteres.";
            avisoSenha.style.display = "block";
            isValid = false;
        }
    
        // Validação da mensagem
        if (mensagem.value.trim() === "") {
            avisoMensagem.textContent = "A mensagem é obrigatória.";
            avisoMensagem.style.display = "block";
            isValid = false;
        }
    
        // Se todos os campos forem válidos, exibir mensagem de sucesso
        if (isValid) {
            showModal("Cadastro realizado com sucesso e sua opinião foi recebida.");
        } else {
            showModal("Erro ao se cadastrar. Favor verificar os campos.");
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    function showModal(message) {
        const modal = document.getElementById("modal");
        const fade = document.getElementById("fade");
        const modalHeaderText = document.getElementById("modal-header-text");
    
        modalHeaderText.textContent = message;
    
        modal.classList.remove("hide");
        fade.classList.remove("hide");
    
        document.getElementById("close-modal").addEventListener("click", function() {
            modal.classList.add("hide");
            fade.classList.add("hide");
        });
    
        fade.addEventListener("click", function() {
            modal.classList.add("hide");
            fade.classList.add("hide");
        });
    }
