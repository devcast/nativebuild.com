---
title: Como gerar ícones e splash screen para Phonegap/Cordova automaticamente
layout: v2-post
author: Felquis Gimenes
author_link: http://twitter.com/felquis
author_profile: https://plus.google.com/102754289882659476963/
twitter_creator: felquis
image: /img/posts/phonegap.png
tags: phonegap,cordova,android,ios,splash screen,icons,generate
keywords: phonegap,cordova,android,ios,splash screen,icons,generate
resumo: Quando iniciei no mundo de cordova e phonegap, o tamanho de splash screen e ícones era um grande  mistério para mim, depois que aprendi a usar-los, percebi que o problema era mante-los, de forma que quando ouvesse alguma atualização, as splash screen e ícones podussem ser mudificados de forma istantanea.

  Neste post você vai aprender como usar um shell script, para gerar ícones e splash screens automaticamente com referência em uma imagem de base.

---

## Como gerar ícones e splash screen automaticamente

Quando iniciei no mundo de cordova e phonegap, o tamanho de splash screen e ícones era um grande mistério para mim, depois que aprendi a usar-los, percebi que o problema era mante-los, de forma que quando ouvesse alguma atualização, as splash screen e ícones podussem ser mudificados de forma istantanea.

Neste post você vai aprender como usar um shell script, para gerar ícones e splash screens automaticamente com referência em uma imagem de base.

Vamos aos passos :)

OBS: Isso não foi testado no Windows, apenas no OSX e Ubuntu.

## Instalar o Image Magick

[Image Magick](http://www.imagemagick.org/) é uma ferramenta de manipulação de imagem, usada geralmente pela linha de comando, ela é capaz de redimensionar, girar, distorcer, aplicar efeitos especiais, cliar linhas e shapes enfim, é foda!

Em nosso contexto, principalmente o comando `convert` do imagemagick tem que estar disponível via command line

## Estrutura do projeto

Após criar um projeto com o comando `cordova create appTest`, faça os seguintes passos

1 - Baixe o arquivo `gsi.sh` [deste repositório](https://github.com/tlvince/phonegap-icon-splash-generator) e salve na raiz do projeto em que você quer gerar a splash screen e ícones
2 - Crie uma imagem para ser usada como base para gerar as splash screens, essa imagem deverá ter 2048x2048 (variando conforme sua necessidade), essa imagem tem que ter nome `gsi-base-splash.png`
3 - Crie uma imagem para ser usada como base para gerar os ícons, essa imagem deve ter até 500x500, variando conforme a sua necessidade, essa imagem ter que ter o nome `gsi-base-icon.png`

Seu projeto ficará assim:

<img src="/img/posts/gsi-project-folders">

## Gerando imagens automaticamente

Abra seu terminal, vá para a pasta onde está seu projeto, e digite o comando `sh gsi.sh`, o script irá mostrar algo assim para você, dizendo que está gerando imagem por imagem

<img src="img/post/gsi-output-print.png">

No final, a pasta `res` será criada na raiz do seu projeto, com essa estrutura:

<img src="img/post/gsi-output-files.png">

## Coloque os ícones e splash screen em seu config.xml

Seu config.xml ficará assim, especificando cada ícone e cada splash screen.
{% highlight xml %}
<platform name="android">
    <splash density="land-hdpi" src="res/screen/android/drawable-land-hdpi.png" />
    <splash density="land-ldpi" src="res/screen/android/drawable-land-ldpi.png" />
    <splash density="land-mdpi" src="res/screen/android/drawable-land-mdpi.png" />
    <splash density="land-xhdpi" src="res/screen/android/drawable-land-xhdpi.png" />
    <splash density="port-hdpi" src="res/screen/android/drawable-port-hdpi.png" />
    <splash density="port-ldpi" src="res/screen/android/drawable-port-ldpi.png" />
    <splash density="port-mdpi" src="res/screen/android/drawable-port-mdpi.png" />
    <splash density="port-xhdpi" src="res/screen/android/drawable-port-xhdpi.png" />
    <icon density="ldpi" src="res/icon/android/drawable-ldpi.png" />
    <icon density="mdpi" src="res/icon/android/drawable-mdpi.png" />
    <icon density="hdpi" src="res/icon/android/drawable-hdpi.png" />
    <icon density="xhdpi" src="res/icon/android/drawable-xhdpi.png" />
</platform>
<platform name="ios">
    <splash height="480" src="res/screen/ios/Default~iphone.png" width="320" />
    <splash height="960" src="res/screen/ios/Default@2x~iphone.png" width="640" />
    <splash height="1024" src="res/screen/ios/Default-Portrait~ipad.png" width="768" />
    <splash height="2048" src="res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" />
    <splash height="768" src="res/screen/ios/Default-Landscape~ipad.png" width="1024" />
    <splash height="1536" src="res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" />
    <splash height="1136" src="res/screen/ios/Default-568h@2x~iphone.png" width="640" />
    <icon height="60" src="res/icon/ios/icon-60.png" width="60" />
    <icon height="120" src="res/icon/ios/icon-60@2x.png" width="120" />
    <icon height="76" src="res/icon/ios/icon-76.png" width="76" />
    <icon height="152" src="res/icon/ios/icon-76@2x.png" width="152" />
    <icon height="40" src="res/icon/ios/icon-40.png" width="40" />
    <icon height="80" src="res/icon/ios/icon-40@2x.png" width="80" />
    <icon height="57" src="res/icon/ios/icon.png" width="57" />
    <icon height="114" src="res/icon/ios/icon@2x.png" width="114" />
    <icon height="72" src="res/icon/ios/icon-72.png" width="72" />
    <icon height="144" src="res/icon/ios/icon-72@2x.png" width="144" />
    <icon height="29" src="res/icon/ios/icon-small.png" width="29" />
    <icon height="58" src="res/icon/ios/icon-small@2x.png" width="58" />
    <icon height="50" src="res/icon/ios/icon-50.png" width="50" />
    <icon height="100" src="res/icon/ios/icon-50@2x.png" width="100" />
</platform>

<icon src="res/icon/icon.png" />
{% endhighlight %}

Estes arquivos são os mesmos exebidos na [documentação mais atual do Cordova](http://cordova.apache.org/docs/en/4.0.0/config_ref_images.md.html)

## Fazendo um build

Vamos fazer um build para ter certeza que funcionou certo?

Vamos adicionar as platformas iOS e Android `cordova platforms add ios`, `cordova platforms add android`

<img src="/img/posts/gsi-add-platforms.png">

OBS: Os dois comandos são válidos `cordova platform` e `cordova platforms`

Uma dica aqui é você observar que no output na hora que o cordova adiciona uma platform, ele não reclama que você especificou no config.xml uma imagem que não existe, isso significa que as imagens que você colocou no config.xml existem dentro da pasta `res` e ele pegou as imagens de ícones e splash screens corretamente.

## Fazendo um build para iOS

Execute o comando `cordova emulate ios`, o projeto será buildado e o emulador do iOS será aberto como no GIF abaixo:

<img src="/img/posts/gsi-on-ios.gif" width="300">

## Fazendo um build para Android

PS: No meu caso eu não uso um emulador do Android, eu faço build direto no meu Android

Precisamos colocar uma linha a mais para funcionar no Android, isso porque no Android não é padrão usar uma splash screen, mas muita gente usa.

Abaixo da linha `<platform name="android">` adicione `<preference name="SplashScreen" value="screen" />`

Isso porque, por default, o cordova irá procurar por imagens chamadas splash.png dentro da pasta `platforms/android/res/**` porém o cordova nomeia os arquivos como `screen.png`

Agora sim! Execute o comando `cordova run android`, o projeto será buildado e aberto no device Android como no GIF baixo:

<img src="/img/posts/gsi-on-android.gif" width="300">

Algumas coisas que você pode achar interessante, no Android tem algumas opções como `SplashScreenDelay`, que por default é 3 segundos, isso é algo muito ruim o ideal é você usar um plugin como [splashscreen](http://plugins.cordova.io/#/package/org.apache.cordova.splashscreen) para oculpar a splash screen assim que seu app ficar pronto para mostrar ao usuário, porque essa é a intenção da splash screen.

## Conclusão e links

Splash screen são muito úteis, o ideal é que sem app seja tão rápido que não precise de uma splash screen, mas se precisar, está ai na mão :D

* [Configurações do Cordova específicas para Android](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_android_config.md.html)
* 
