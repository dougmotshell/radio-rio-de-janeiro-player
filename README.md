# Radio Rio de Janeiro Player

Projeto front-end estatico com tres experiencias para acompanhar a Radio Rio de Janeiro:
pagina inicial com navegacao, player de audio e player de video.

## Funcionalidades

- Pagina inicial com atalhos para ouvir e assistir
- Reproducao de stream MP3 com botao Play/Pause
- Atualizacao de estado da interface durante reproducao do audio
- Player de video ao vivo com redimensionamento responsivo
- Layout responsivo para desktop e mobile
- Acesso rapido para Facebook, YouTube, X e Instagram
- Suporte a preferencia de reducao de movimento do sistema

## Tecnologias

- HTML5
- CSS3
- JavaScript puro (sem framework)

## Estrutura do projeto

- index.html: landing page com botoes de navegacao
- pages/audio.html: pagina do player de audio
- pages/video.html: pagina do player de video
- assets/css/index.css: visual da landing page
- assets/css/audio.css: visual e responsividade do player de audio
- assets/css/video.css: visual e responsividade do player de video
- assets/js/index.js: animacao de entrada da landing page
- assets/js/audio.js: logica do botao Play/Pause e status do audio
- assets/js/video.js: inicializacao e ajuste do player Clappr
- assets/images/radio-rio-de-janeiro-1.jpg: imagem de capa exibida no card

## Como executar localmente

Como e um projeto estatico, nao ha etapa de build.

Opcao 1:

1. Abra o arquivo index.html no navegador.

Opcao 2 (recomendado):

1. No terminal, entre na pasta do projeto.
2. Rode um servidor local, por exemplo:
   python3 -m http.server 5500
3. Abra no navegador:
   http://localhost:5500

## Pontos de customizacao

- Stream de audio:
  edite o atributo src da tag source dentro de pages/audio.html.
- Stream de video:
  edite o atributo data-source do elemento #player em pages/video.html.
- Nome da radio e textos:
  altere os textos nas paginas index.html, pages/audio.html e pages/video.html.
- Links de redes sociais:
  atualize os href da secao de redes em index.html, pages/audio.html e pages/video.html.
- Cores e espacos:
  ajuste as variaveis CSS no bloco :root em assets/css/index.css, assets/css/audio.css e assets/css/video.css.

## Observacoes

- A reproducao de audio pode depender das politicas de autoplay do navegador.
- Em dispositivos moveis, o layout foi ajustado para manter os botoes sociais em linha e sem quebrar o card.
