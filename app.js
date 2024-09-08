function pesquisar() {
    /*
     * Função responsável por pesquisar dados e renderizar os resultados na seção com o ID "resultados-pesquisa".
     * Itera sobre um array de dados (assumido que 'dados' seja um array global ou passado como parâmetro)
     * e cria elementos HTML para cada resultado da pesquisa, inserindo-os na seção.
     */

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campo pesquisa for uma string sem nada
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um modelo de carro</p>"
        return
    }

    // String que armazenará os elementos HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada objeto dentro do array de dados
    for (let dado of dados) {
      // Cria uma nova div para cada resultado, formatando-a com template literals
      titulo = dado.titulo.toLowerCase() 
      descricao = dado.descricao.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="boxShow">
          <img src="${dado.imagem}" alt="">
          <div class="resultado-pesquisa">
            <h2>
              <a href="${dado.linkTitulo}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        </div>
      `;
      }
     
    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Insere os resultados HTML construídos na seção selecionada
    section.innerHTML = resultados;
  }


