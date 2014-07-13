---
title: Como instalar o PhoneGap/Cordova no Windows, Ubuntu e Mac OSX
layout: v2-post
author: Felquis Gimenes
author_link: http://twitter.com/felquis
author_profile: https://plus.google.com/102754289882659476963/
twitter_creator: felquis
image: /img/posts/phonegap.png
tags: phonegap,cordova,node,android,ubuntu,windows,mac,osx
keywords: phonegap,android,ubuntu
resumo: Hoje em dia ainda tem desenvolvedores usando o Cordova como se usava a 1 ano, alguns desenvolvedores acham que eles realmente precisam do eclipse para desenvolver, neste post vou mostrar como configurar um ambiente de desenvolvimento de aplicativos híbridos totalmente livre de IDE's, tudo no terminal e de forma tão fácil com a ajuda do NodeJS que vai te deixar louco!

---

Este post, serve para todos os sistemas operacionais, Windows, OSX, Ubuntu etc... Iremos usar apenas o CMD ou Terminal, e qualquer IDE que você goste de usar para o desenvolvimento de aplicativos híbridos usando Phonegap e Cordova

Alguns desenvolvedores, acham que para desenvolver aplicativos para Android é necessário usar a IDE Eclipse, mas isso não é verdade, neste post iremos configurar sua maquina para você trabalhar independente de IDE's

Para fazer o que descrevo aqui, o ideial é que você já tenha alguma familiaridade com terminal do seu sistema operacional, tanto no Windows quanto no Linux e OSX.

Bom, mas siga adiante, vamos aos passos.

# [Passo 1, instale o Android SDK no seu computador](/2014/como-instalar-android-sdk-mac-osx.html)

Depois que você já tiver configurado o Android SDK, temos que ter instalado em nossa maquina o [NodeJS](http://nodejs.org/) e o [GIT](http://git-scm.com/), para instala-los basta seguir os passos contidos no site de cada um, é bem simples.

Com o NodeJS e o GIT instalados, vamos agora instalar os pacotes do NodeJS que irão nos ajudar a desenvolver aplicativos híbridos, são eles

* Phonegap `npm install -g phonegap`
* Cordova `npm install -g cordova`

Agora temos estes dois comandos no terminal para testa-los, experimente executar `phonegap --version` e `cordova --version`

Nós iremos usar muito mais o phonegap, porque o phonegap usa o cordova dentro dele, sendo assim nós usamos os comandos do cordova atrás do phonegap, isso porque o phonegap faz algumas articulações para nós, essa é uma dica importante, sempre use os comandos do phonegap e deixe os comandos do cordova de lado.

# Passo 2, Phonegap Build

O Phonegap Build, é um ambiente remoto onde podemos fazer build de nossos aplicativos em várias plataformas, iOS, Android, WindowsPhone entre outras.

* Acesse [build.phonegap.com](https://build.phonegap.com/) e faça o cadastro na plataforma.

Quando tiver seu login e senha, você precisa fazer login via terminal, para isso, rode `phonegap remote login` e entre com seu usuário e senha.

<img src="/img/posts/phonegap-remote-login-002.png" height="139" width="401" alt="">

A partir de agora, já temos tudo o que precisamos instalado, e podemos finalmente criar um projeto para testar tudo isso

# Passo 3, criando um projeto de teste

No terminal, vá para uma pasta que você usa para guardar os seus projetos e execute o comando `phonegap create meuAplicativo`

Este comando, irá criar a pasta `meuAplicativo` com toda a estrutura do projeto necessário para você sair desenvolvendo, a estrutura é algo parecido com essa abaixo

<img src="/img/posts/phonegap-create-project.png" height="323" width="238" alt="">

Dentro da pasta `www` é onde temos todos os arquivos que iremos precisar para trabalhar, fora da pasta `www` raramente alteramos alguma coisa, configurações mesmo são feitas no arquivo `www/config.xml`

Bom, nosso projeto foi criado e já podemos começar a trabalhar, agora vamos ver como rodar nosso aplicativo direto em nosso celular

# Pass 4, emulando aplicativo direto no smartphone Android

Muitas pessoas gostam de usar um Emulador Android, mas eu gosto de trabalhar usando meu celular de verdade, e no Mac é mais rápido eu fazer um build e testar no celular do que fazer um build e abrir no emulador.

Caso você queira usar o emulador, basta rodar o comando `phonegap emulate android` (ou iOS etc...)

Antes de fazer o build, é preciso configurar seu celular para aceitar um aplicativo dessa forma, para isso é preciso ativar algumas opções de desenvolvimento, são elas

* Configurações > Programador > Depuração USB
* Configurações > Programador > Verificar aplicativo por USB
* Configurações > Programador > Permanecer ativa

Essas três opções irão nos ajudar, sinta-se a vontade para testar as demais, tem algumas bem divertidas.

Agora, basta acessar o nosso projeto `meuAplicativo` no terminal e rodar `phonegap run android`, se o passo 1 foi feito corretamente, nosso aplicativo será compilado e instalado diretamente no celular, o que é incrível! :D

Sinta-se a vontade para editar o `www/index.html` e fazer o que você quiser

Quando você quiser atualizar a versão do aplicativo no seu celular, basta rodar novamente o comando `phonegap run android` que o phonegap irá automaticamente atualizar o aplicativo posteriormente instalado, sem nenhum problema.

# Conclusão

Acredito que para iniciar no desenvolvimento de aplicativos híbridos este post está ótimo, sujeito a revisões claro.

[Configurações do config.xml do Phonegap, podem ser encontradas na página oficial](http://docs.build.phonegap.com/en_US/)

Qualquer dúvida deixe nos comentários.
