//=========================== CARROSSEL PROJETOS ==========================
function scrollCarousel(direction) {
  const container = document.getElementById('projectsList');
  // Pega a largura do primeiro card + o gap (2rem = 32px aproximadamente)
  const cardWidth = container.querySelector('.project-card').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
//=========================== CARROSSEL TIMELINE ==========================
function scrollTimeline(direction) {
  const container = document.getElementById('timelineList');
  // Pega a largura de um card + o gap de 2rem (32px)
  const cardWidth = container.querySelector('.card-timeline').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
//=========================== CARROSSEL DE MINI FOTOS ==========================
let currentIdx = 0;

function moveMini(direction, trackId) {
  const track = document.getElementById(trackId);
  const container = track.parentElement;
  const images = track.querySelectorAll('img');
  const dots = container.querySelectorAll('.dot');
  
  let index = parseInt(track.dataset.index || 0);
  
  index += direction;

  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;

  track.style.transform = `translateX(-${index * 400}px)`;
  track.dataset.index = index;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

//=========================== SELEÇÃO DE SKILLS ==========================
const skillsData = {
  design: {
    title: "Produto & Design (A Arte)",
    description: "Foi na FATEC que dei meus primeiros passos no Figma e me apaixonei por UI/UX. Gosto de pensar na interface como a ponte humana do projeto, garantindo consistência visual e focando sempre na experiência de quem vai usar.",
    mediaImg: "caminho-da-sua-imagem-design.png",
    mediaDesc: "Prototipagem de telas no Figma",
    projects: [
      { name: "IntegraCAT (B2B)", summary: "Sistema para digitalização de relatórios de incidentes e gestão de riscos ocupacionais, com foco total na usabilidade para o RH." },
      { name: "A&C Renova Estofados", summary: "Landing page responsiva projetada com foco em conversão e otimização de SEO local." }
    ]
  },
  frontend: {
    title: "Front-end",
    description: "Onde a arte encontra a lógica. Percebi que para voar alto no mobile, eu precisava de raízes fortes na web. Dei um passo atrás para dominar HTML, CSS e JavaScript puros, e hoje construo interfaces modernas com React.",
    mediaImg: "caminho-da-sua-imagem-front.png",
    mediaDesc: "Código Front-end em execução",
    projects: [
      { name: "Transforme-se (Serasa Experian)", summary: "Imersão em desenvolvimento Front-end, onde pude aliar as melhores práticas de código com visão de negócio." },
      { name: "A&C Renova Estofados", summary: "Desenvolvimento da interface web com integração para WhatsApp, focando em performance e acessibilidade." }
    ]
  },
  mobile: {
    title: "Mobile (A Virada de Chave)",
    description: "Foi construindo o app 'Amigo de Sangue' no TCC que minha paixão pela programação ganhou forma. Mas a grande descoberta ali foram os bastidores: as sprints, os brainstorms e a comunicação com o time. Ali eu entendi que amava codar, mas amava ainda mais construir junto.",
    mediaImg: "caminho-da-sua-imagem-mobile.png",
    mediaDesc: "Aplicativo Mobile rodando ou foto da equipe do TCC",
    projects: [
      { name: "Amigo de Sangue", summary: "Aplicativo mobile construído do zero com React Native e TypeScript. Mais do que código, foi meu primeiro grande contato com o desenvolvimento de um produto ponta a ponta em equipe." }
    ]
  },
  logica: {
    title: "Lógica & Algoritmos (A Matemática)",
    description: "Minha raiz analítica. A matemática e a lógica me acompanham desde a ETEC. É o que me permite enxergar a estrutura por trás de cada problema antes mesmo de escrever a primeira linha de código.",
    mediaImg: "caminho-da-sua-imagem-logica.png",
    mediaDesc: "Resolução de algoritmos",
    projects: [
      { name: "Maratona Interfatecs", summary: "Treinamento e resolução de desafios de programação competitiva utilizando Python para aprimorar o pensamento estruturado e a agilidade." }
    ]
  },
  scrum: {
    title: "Produto & Liderança",
    description: "Aquela semente de amar os bastidores, plantada lá no TCC, floresceu no programa da Serasa Experian. Me desafiei como Product Owner no IntegraCAT, aprendendo a gerenciar backlogs, conduzir a equipe e equilibrar visão de negócio com entregas técnicas.",
    mediaImg: "caminho-da-sua-imagem-scrum.png",
    mediaDesc: "Reunião de alinhamento com a equipe",
    projects: [
      { name: "IntegraCAT (Liderança)", summary: "Atuação como PO e Desenvolvedora, gerenciando o backlog e garantindo a comunicação entre a equipe para entregar uma plataforma B2B para o RH." }
    ]
  },
  backend: {
    title: "Back-end & Banco de Dados",
    description: "Minha jornada começou explorando Java e bancos de dados para entender como as engrenagens rodam por trás das cortinas. Hoje, sigo expandindo essa base com Node.js na faculdade.",
    mediaImg: "caminho-da-sua-imagem-banco.png",
    mediaDesc: "Modelagem de dados e APIs",
    projects: [
      { name: "Amigo de Sangue (Modelagem)", summary: "Participação na modelagem do banco de dados e arquitetura da informação durante a criação do projeto." }
    ]
  }
}

//Lógica de Criação
const cards = document.querySelectorAll('.skill__card');
const title = document.querySelector('#detail-title');
const description = document.querySelector('#detail-description');
const list = document.querySelector('#detail-list');
const mediaImg = document.querySelector('.details-midia img');
const mediaDesc = document.querySelector('.details-midia p');

cards.forEach(card =>{
  card.addEventListener('click', () =>{
    const skillKey = card.getAttribute('data-skill');
    const data = skillsData[skillKey];

    if (data){
      title.textContent = data.title;
      description.textContent = data.description;
      mediaImg.src = data.mediaImg;
      mediaImg.alt = data.mediaDesc;
      mediaDesc.textContent = data.mediaDesc;

      //limpa a lista anterior
      list.innerHTML = '';

      //cria cada item da lista dinamicamente
      data.projects.forEach(proj => {
        const li = document.createElement('li');
        li.classList.add('project-item');

        // 1. Cria o título do projeto (onde o usuário vai clicar)
        const projectTitle = document.createElement('span');
        projectTitle.classList.add('project-item-title');
        projectTitle.textContent = proj.name;

        // 2. Cria o parágrafo com o texto que vai expandir
        const projectSummary = document.createElement('p');
        projectSummary.classList.add('project-item-summary');
        projectSummary.textContent = proj.summary

        //3. Junta tudo dentro da tag <li>
        li.appendChild(projectTitle);
        li.appendChild(projectSummary);

        // 4. O EVENTO: Clicar no título do projeto abre/fecha o resumo dele
        projectTitle.addEventListener('click', () =>{
          // fecha os outros resumos abertos na mesma lista
          list.querySelectorAll('.project-item').forEach(item =>{
            if (item !== li) item.classList.remove('active');
          })
          //liga/desliga a classe active no <li> atual
          li.classList.toggle('active');
        });

        // adiciona o <li> pronto dentro da <ul> no HTML
        list.appendChild(li);
      })
    }
  })
})