# Radio Rio de Janeiro Player

Projeto front-end estatico para reproduzir a Radio Rio de Janeiro via streaming de audio.
A interface mostra capa da radio, status ao vivo, botao de reproducao e links para redes sociais.

## Funcionalidades

- Reproducao de stream MP3 com botao Play/Pause
- Atualizacao de estado da interface durante reproducao
- Animacao de onda sonora enquanto o audio esta tocando
- Layout responsivo para desktop e mobile
- Acesso rapido para Facebook, YouTube, X e Instagram
- Suporte a preferencia de reducao de movimento do sistema

## Tecnologias

- HTML5
- CSS3
- JavaScript puro (sem framework)

## Estrutura do projeto

- index.html: estrutura da pagina, player e links sociais
- styles.css: visual, responsividade e animacoes
- index.js: logica do botao de audio e estado do player
- radio-rio-de-janeiro-1.jpg: imagem de capa exibida no card

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
  edite o atributo src da tag source dentro de index.html.
- Nome da radio e textos:
  altere os textos do titulo, status e labels em index.html e index.js.
- Links de redes sociais:
  atualize os href da secao de redes em index.html.
- Cores e espacos:
  ajuste as variaveis CSS no bloco :root em styles.css.

## Observacoes

- A reproducao de audio pode depender das politicas de autoplay do navegador.
- Em dispositivos moveis, o layout foi ajustado para manter os botoes sociais em linha e sem quebrar o card.
