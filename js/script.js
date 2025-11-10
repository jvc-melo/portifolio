async function fetchRepos() {
    try {
        const response = await fetch("https://api.github.com/users/kuniix/repos");
        const repos = await response.json();
        const reposContainer = document.getElementById("repos");

        // Filtra o repositório do portfólio (substitua "portfolio" pelo nome do seu repositório)
        const filteredRepos = repos.filter(repo => repo.name !== "portfolio");

        // Limita a 6 repositórios
        const reposToShow = filteredRepos.slice(0, 6);

        for (const repo of reposToShow) {
            // Busca as linguagens do repositório
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
            const languages = Object.keys(languagesData); // Pega apenas os nomes das linguagens

            // Cria o card do projeto
            const repoElement = document.createElement("div");
            repoElement.classList.add("projeto-card");
            repoElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "Sem descrição"}</p>
                <div class="linguagens">
                    ${languages.map(lang => `<span class="linguagem">${lang}</span>`).join(" ")}
                </div>
                <a href="${repo.html_url}" target="_blank">
                    Ver no GitHub <i class="fab fa-github"></i>
                </a>
            `;
            reposContainer.appendChild(repoElement);
        }
    } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
    }
}
fetchRepos();

// Script para ajustar o padding-top da seção #sobre
        function ajustarPadding() {
            const header = document.querySelector('header');
            const sobreSection = document.getElementById('sobre');
            const headerHeight = header.offsetHeight;
            sobreSection.style.paddingTop = `${headerHeight + 20}px`;
        }
        window.addEventListener('load', ajustarPadding);
        window.addEventListener('resize', ajustarPadding);

        const texto = "Desenvolvedor"; // Texto que será digitado
    let i = 0;
    const elemento = document.getElementById("texto");

    function digitar() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 100); // Tempo entre cada letra
      } else {
        setTimeout(reiniciar, 5000); // Aguarda 1 segundo antes de reiniciar
      }
    }

    function reiniciar() {
      i = 0;
      elemento.innerHTML = ''; // Limpa o conteúdo do h2
      digitar(); // Inicia o efeito novamente
    }

    digitar(); // Inicia a animação

