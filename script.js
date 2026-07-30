

// Função auxiliar para carregar um componente HTML dentro de um container
async function carregarComponente(idContainer, caminhoArquivo) {
    try {
        const resposta = await fetch(caminhoArquivo);
        if (!resposta.ok) {
            throw new Error(`Erro ao carregar ${caminhoArquivo}: status ${resposta.status}`);
        }
        const html = await resposta.text();
        document.getElementById(idContainer).innerHTML = html;
    } catch (erro) {
        console.error('Erro no carregamento do componente:', erro);
    }
}

// Aplicar configs
function aplicarConfiguracoes(){
    document.querySelectorAll('.link-github').forEach(el => el.href = CONFIG.LINKS.GITHUB);
    document.querySelectorAll('.link-linkedin').forEach(el => el.href = CONFIG.LINKS.LINKEDIN);
    document.querySelectorAll('.link-email').forEach(el => el.href = CONFIG.LINKS.EMAIL);
    document.querySelectorAll('.link-curriculo').forEach(el => el.href = CONFIG.LINKS.CURRICULO);
    
    const btnBolaoGithubFront = document.getElementById('bolao-link-github-front');
    const btnBolaoGithubBack = document.getElementById('bolao-link-github-back');
    const btnBolaoDemo = document.getElementById('bolao-link-demo');
    if(btnBolaoGithubFront) btnBolaoGithubFront.href = CONFIG.PROJETOS.BOLAO.GITHUB_FRONT;
    if(btnBolaoGithubBack) btnBolaoGithubBack.href = CONFIG.PROJETOS.BOLAO.GITHUB_BACK;
    if(btnBolaoDemo) btnBolaoDemo.href = CONFIG.PROJETOS.BOLAO.DEMO;

    const btnReagentesGithub = document.getElementById('reagentes-link-github');
    const btnReagentesDemo = document.getElementById('reagentes-link-demo');
    if(btnReagentesGithub) btnReagentesGithub.href = CONFIG.PROJETOS.REAGENTES.GITHUB;
    if(btnReagentesDemo) btnReagentesDemo.href = CONFIG.PROJETOS.REAGENTES.DEMO;
};

// Carrega todos os componentes quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    await carregarComponente('navbar-container', 'components/navbar.html');
    await carregarComponente('hero-container', 'components/hero.html');
    await carregarComponente('sobre-container', 'components/sobre.html');
    await carregarComponente('experiencia-container', 'components/experiencia.html')
    await carregarComponente('tecnologias-container', 'components/tecnologias.html');
    await carregarComponente('projetos-container', 'components/projetos.html');
    await carregarComponente('contato-container', 'components/contato.html');
    await carregarComponente('footer-container', 'components/footer.html');

    // Só aplica as configs após o carregamento do DOM 
    aplicarConfiguracoes();
});