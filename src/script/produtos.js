const imagens = [
        '/src/assets/images/71E0oNEjf5S._AC_SX679_.jpg',
        '/src/assets/images/image.webp',
        '/src/assets/images/51lGW2nP9qL._AC_SX679_.jpg'
      ];
      
      let indice = 0;
      const hero = document.querySelector('.hero-slid');
      
      // Função para trocar a imagem 
      function trocarImagem() {
        hero.style.backgroundImage = `url('${imagens[indice]}')`;
        indice = (indice + 1) % imagens.length; // volta ao início
      }

      // Troca a cada 5 segundos
    trocarImagem(); // define a primeira
    setInterval(trocarImagem, 3000);