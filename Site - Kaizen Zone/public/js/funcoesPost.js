var idUsuario = sessionStorage.getItem("ID_USUARIO");

pegarQtdPostsUser();
pegarQtdPostsTotal();
pegarPostTeoria();
pegarPostCompetitivo();
pegarPostNoticia();

  function pegarQtdPostsUser() {
    fetch(`/posts/pegarQtdPostsUser/${idUsuario}`)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            sessionStorage.POSTS_USUARIO = resposta[0].totalPostUsuario;
          });
        } else {
          console.log("Nenhum valor encontrado ou ocorreu algum erro na API!");
          alert("Nenhum valor encontrado ou ocorreu algum erro na API!");
        }
      })
      .catch(function (error) {
        console.log(
          `Erro na captura dos dados para o gráfico: ${error.message}`
        );
        alert(`Erro na captura dos dados para o gráfico: ${error.message}`);
      });

    return false;
  }

  function pegarQtdPostsTotal() {
    fetch(`/posts/pegarQtdPostsTotal`)
      .then(function (resposta) {
        if (resposta.ok) {
          resposta.json().then(function (response) {
            console.log(`Dados recebidos: ${JSON.stringify(response)}`);
            sessionStorage.POSTS_TOTAIS = response[0].totalPost;
          });
        } else {
          console.log("Nenhum valor encontrado ou ocorreu algum erro na API!");
          alert("Nenhum valor encontrado ou ocorreu algum erro na API!");
        }
      })
      .catch(function (error) {
        console.log(
          `Erro na captura dos dados para o gráfico: ${error.message}`
        );
        alert(`Erro na captura dos dados para o gráfico: ${error.message}`);
      });
  }

  function pegarPostTeoria() {

    fetch(`/posts/pegarPostTeoria/${idUsuario}`)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            sessionStorage.TIPO_POST_TEORIAS = resposta[0].postTeoria;
          });
        } else {
          console.log("Nenhum valor encontrado ou ocorreu algum erro na API!");
          alert("Nenhum valor encontrado ou ocorreu algum erro na API!");
        }
      })
      .catch(function (error) {
        console.log(
          `Erro na captura dos dados para o gráfico: ${error.message}`
        );
        alert(`Erro na captura dos dados para o gráfico: ${error.message}`);
      })

    return false;

  }

  function pegarPostCompetitivo() {
    fetch(`/posts/pegarPostCompetitivo/${idUsuario}`)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            sessionStorage.TIPO_POST_COMPETITIVO = resposta[0].postCompetitivo;
          });
        } else {
          console.log("Nenhum valor encontrado ou ocorreu algum erro na API!");
          alert("Nenhum valor encontrado ou ocorreu algum erro na API!");
        }
      })
      .catch(function (error) {
        console.log(
          `Erro na captura dos dados para o gráfico: ${error.message}`
        );
        alert(`Erro na captura dos dados para o gráfico: ${error.message}`);
      })

    return false;
  }

  function pegarPostNoticia() {
    fetch(`/posts/pegarPostNoticia/${idUsuario}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          sessionStorage.TIPO_POST_NOTICIA = resposta[0].postNoticias;
        });
      } else {
        console.log("Nenhum valor encontrado ou ocorreu algum erro na API!");
        alert("Nenhum valor encontrado ou ocorreu algum erro na API!");
      }
    })
    .catch(function (error) {
        console.log(
          `Erro na captura dos dados para o gráfico: ${error.message}`
        );
        alert(`Erro na captura dos dados para o gráfico: ${error.message}`);
      })

    return false;
  }

