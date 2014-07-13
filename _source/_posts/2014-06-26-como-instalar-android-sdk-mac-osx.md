---
title: Como instalar o Android SDK no OSX
layout: v2-post
author: Felquis Gimenes
author_link: http://twitter.com/felquis
author_profile: https://plus.google.com/102754289882659476963/
twitter_creator: felquis
image: /img/posts/terminal-default.png
tags: phonegap,cordova,android,mac,osx
keywords: phonegap,cordova,android,mac,osx
resumo: Neste post você verá como configurar o Android SDK e o Ant no OSX, este post é uma base para o desenvolvimento de aplicativo para o Android, e o que está contido aqui também serve de certa forma para os usuários Windows e Linux a ideia é a mesma

---

Você precisa fazer download do [Android SDK](https://developer.android.com/sdk/installing/index.html?pkg=tools), quando terminar o download, descompacte a pasta e coloque-a em um lugar da sua escolha que você nunca irá mecher, por exemplo `/android/sdk/`

O conteúdo baixado, será algo semelhante a este do print

<img src="/img/posts/como-instalar-phonegap-001.png" height="239" width="215" alt="">

Com destaque as pastas `tools` e `platform-tools`, essas duas pastas você terá que apontar para ser usadas no seu terminal, para isso abra o seu terminal e abra o arquivo `~/.bash_profile`

{% highlight text %}
vim ~/.bash_profile
{% endhighlight %}

E adicione as duas pastas ao final do seu arquivo ~/.bash_profile, lembrando de editar o caminho abaixo para o caminho que você salvou o Android SDK na sua maquina (pelo amor, lembre-se disso)

Seu arquivo ficará parecido com isso

{% highlight text %}
export PATH=${PATH}:~/Documents/development/android-sdk/platform-tools

export PATH=${PATH}:~/Documents/development/android-sdk/tools
{% endhighlight %}

Para sair do vim e salvar suas alterações, basta precionar "CONTROL+C", em seguida digitar ":x" e preciosar ENTER e pronto, saiu e salvou as suas modificações

Agora que já alteramos nosso arquivo .bash_profile, temos que recarrega-lo para ele interpretar o que nos colocamos nele, para isso basta rodar o comando

{% highlight text %}
source ~/.bash_profile
{% endhighlight %}

E pronto, agora temos acessível em nosso terminal dois comandos muito importantes, o 'android help' e o 'adv --version'

Este mesmo processo é bem parecido no Windows e no Linux, porém mudam algumas coisas, no Windows você configura variáveis de sistema, no Linux é bem parecido porém não temos um homebrew para instalar o Ant, no Linux instalamos o Ant com o seguinte comando

# Como instalar o Ant no OSX

Você também precisará instalar o `ant` em sua maquina, aqui eu instalei usando o homebrew. Mas para isso você precisa primeiro instalar o homebrew, no [site do homebrew tem as instruções para instala-lo](http://brew.sh/), depois de instala-do basta rodar

{% highlight text %}
brew install ant
{% endhighlight %}

E pronto, já irá instala-lo, para certificar-se que instalou corretamente, execute o comando `ant -v` que irá mostrar a versão do ant instalado

# Conclusão

Este post trata de um pré-requisito para o desenvolvimento de aplicativos híbridos, continue a sua leitura com o post [Como instalar o PhoneGap/Cordova](/2014/como-instalar-phonegap-no-windows-ubuntu-mac-osx.html)

Qualquer dúvida use os comentários.
