---
title: Como instalar o PhoneGap no Ubuntu
layout: v2-post
author: Felquis Gimenes
author_link: http://twitter.com/felquis
author_profile: https://plus.google.com/102754289882659476963/
twitter_creator: felquis
image: /img/posts/phonegap-droid.png
tags: phonegap,android,ubuntu
keywords: phonegap,android,ubuntu
resumo: Neste post irei mostrar como compilar e testar um app para Android usando PhoneGap sem precisar usar nenhuma IDE especifica, tudo via linha de comando. Ao final do post você estará apto para desenvolver um aplicativo completo.

---

ATENÇÃO: Este post foi atualizado, leia o novo em [Como instalar o PhoneGap/Cordova](/2014/como-instalar-phonegap-no-windows-ubuntu-mac-osx.html)

Hoje irei mostrar como compilar e testar um app para
Android usando PhoneGap sem precisar usar nenhuma IDE especifica, tudo via linha de comando.

Ao final do post você estará apto para desenvolver um aplicativo completo.

Enquanto escrevo este post, estou usando o Ubuntu 12.10 64bit, então pode ser que eu diga algo que seja
apenas para o Ubuntu 12.10.

## Passo 1 - Baixe o Android SDK

Baixe o [Android SDK](http://developer.android.com/sdk/index.html), ele trás o emulador do Android e o compilador. Esteja preparado porque o download tem mais ou menos 400mb.

Descompacte o arquivo baixado e coloque na pasta que você desejar.

Irei colocar na pasta ~/android-sdk

## Passo 2 - Instale o Java e o Ant

O Android SDK precisa do Java, por que Android é movido a Java
{% highlight text %}
sudo apt-get install openjdk-7-jdk
{% endhighlight %}

Também precisa do Ant, com ele você vai compilar todo o código e gerar o instalador do app.
{% highlight text %}
sudo apt-get install ant
{% endhighlight %}

## Passo 3 - Configure as variáveis do sistema

Depois de baixar o Android SDK, você vai ter que adiciona-lo ao seu PATH para que alguns comandos estejam disponíveis no seu terminal.

Aqui estou usando o Ubuntu, acredito que no Mac seja bem semelhante.

Abra o arquivo ~/.bash_profile na sua IDE
{% highlight text %}
nano ~/.bash_profile
{% endhighlight %}

e adicione esses dois caminhos a variável PATH
{% highlight text %}
export PATH=${PATH}:$HOME/android-sdk/sdk/platform-tools
export PATH=${PATH}:$HOME/android-sdk/sdk/tools

{% endhighlight %}

Depois execute

{% highlight text %}
source ~/.bash_profile
{% endhighlight %}

## Passo 3 - Instale pacotes do Android

Execute no terminal
{% highlight text %}
android sdk
{% endhighlight %}

Irá abrir esta Janela e você vai poder instalar várias versões do Android e ferramentas. Não precisa baixar tudo, baixe só o necessário.

<img src="/img/posts/android-sdk-window.png" width="500" alt="">

## Passo 4 - Prepare um Android para testar no Emulador
O comando
{% highlight text %}
android avd
{% endhighlight %}

Vai abrir essa janela onde você deve configurar dispositivos Android para rodar no emulador:
<img src="/img/posts/android-avd-window.png" alt="" width="400">


Para criar um dispositivo clique no botão "New", deve aparecer essa janela:

<img src="/img/posts/android-create-avd-window.png" alt="" width="400">

Tem 3 opções obrigatórias aqui:
1. Na opção "AVD Name" você deve informar um nome qualquer que identifique o dispositivo que você está criando, no meu caso vou por apenas um "s";
1. Em "Device" você escolhe qual dispositivo você quer emular, aqui vou escolher um Nexus S para testar;
1. Em CPU/ABI você escolhe o processador usado no emulador;
1. Clique no botão "ok".

Fique a vontade pra experimentar diferentes configurações, aliás nós só aprendemos testando.

O resultado será esse:

<img src="/img/posts/android-avd-device-window.png" alt="" width="400">

Você já pode selecionar o seu dispositivo criado e clicar no botão "start" que fica ali ao lado.

O sistema irá abrir uma janela e ficará um tempo carregando o emulador, o resultado será este:

<img src="/img/posts/android-sdk-emulator-2.3.3.png" alt="">

Neste caso, estamos testando com o Android 2.3.3

## Nota - Erro ao iniciar Emulador ou ao compilar o app
No meu Ubuntu, tive problemas para executar o emulador,
por que uso Ubuntu 12.10 64 bit
e o compilador do Android SDK usa programas em 32 bit.
Para resolver isso eu tive que instalar essa lib:
{% highlight text %}
sudo apt-get install ia32-libs
{% endhighlight %}

Mas eu tive outro problema, a lib não instalava :/ ... Porque a lib tinha
uma outra dependência que não era instalável no Ubuntu 12.10 64 bit.

Para resolver esse segundo problema tiver que exutar o seguinte comando:
{% highlight text %}
sudo dpkg --add-architecture i386 && sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade
{% endhighlight %}
Ai sim eu consegui instalar

{% highlight text %}
sudo apt-get install ia32-libs
{% endhighlight %}

## Passo 5 - Criar o primeiro projeto

Para criar um novo projeto com Android SDK, vamos usar o comando "android create
project" com os seguintes parâmetros:
PS: Primeiro mostrarei o atalho, depois a versão completa, então:
-n é o parâmetro abreviado e --name
o parâmetro completo, você escolhe o que quer usar.
{% highlight text %}
-n --name    : Nome do projeto
-t --target  : Target ID [required]
-p --path    : Pasta onde vai ser criado o projeto [required]
-k --package : Nome do package do aplicativo. [required]
-a --activity: Nome da ação default. [required]
{% endhighlight %}

Onde:
* target é a plataforma Android alvo para a construção da sua aplicação. Para ver a lista de targets disponíveis e seus IDs, use o comando "android list targets";
* activity é o nome para a classe padrão de inicialização, apenas escreva "nomeDoProjeto"+Activity e tudo vai funcionar ok, iremos reescrever isso mais tarde;
* package é o namespace do package do seu projeto, no caso deste exemplo eu usei teste.nativebuild.com.br ao contrário br.com.nativebuild.teste.

Para criar o app de teste executei o seguinte comando
{% highlight text %}
android create project -n teste -t 1 -p ~/project/phonegap -p br.com.nativebuild.teste -a testeActivity -k br.com.nativebuild.teste
{% endhighlight %}

O SDK criará esta estrutura:

<img src="/img/posts/android-sdk-create-project-teste.png" alt="">

Eu poderia mostrar aqui como compilar nossa aplicação e testá-la no emulador,
mas até agora ainda não instalamos o PhoneGap, então o próximo passo é...

## Passo 6 - Instalar o PhoneGap
Faça [download do PhoneGap](http://phonegap.com/download/) e descompacte-o.
Na pasta que foi descompactada, acesse o subdiretório "lib" e dentro de lib a pasta "android", nessa pasta vai ter os arquivos que precisamos.
Faça os seguintes passos:
1. Na raiz do nosso projeto crie o diretório assets/www
1. Copie o arquivo /phonegap/lib/android/cordova-2.6.0.js para a pasta assets/www/
1. Copie o arquivo /phonegap/lib/android/cordova-2.6.0.jar para a pasta libs/
1. Copie a pasta /phonegap/lib/android/xml para a pasta res/
1. Abra o arquivo .jar que esta no último subdiretório da pasta src
	1. Altere a linha "import android.app.Activity;" para "import org.apache.cordova.\*;"
	1. Altere o final da linha "extends Activity" para "extends DroidGap"
	1. Altere a linha "setContentView(R.layout.main);" para "super.loadUrl(Config.getStartUrl());"
1. Vá na pasta assets/www/ crie um arquivo index.html e insira o seguinte código
{% highlight html %}
<!DOCTYPE HTML>
<html>
  <head>
    <title>Android + PhoneGap</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="cordova-2.0.0.js"></script>
  </head>
  <body>
    <h1>Hello World! =)</h1>
  </body>
</html>
{% endhighlight %}
7. Abra o arquivo AndroidManifest.xml e abaixo da linha "android:versionName" adicione o seguinte código:
{% highlight xml %}
<supports-screens
  android:largeScreens="true"
  android:normalScreens="true"
  android:smallScreens="true"
  android:resizeable="true"
  android:anyDensity="true"
/>
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.RECEIVE_SMS" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
<uses-permission android:name="android.permission.BROADCAST_STICKY" />
{% endhighlight %}
Isso são permissões de funcionalidades do app que estamos desenvolvendo, você não vai precisar de tudo
isso, só coloquei para exemplificar. Por exemplo se você precisar usar a camera do celular, basta adicionar
a permissão de camera assim como é [mostrado na documentação](http://docs.phonegap.com/en/2.6.0/cordova_camera_camera.md.html#Camera)

Bom, até aqui já temos tudo pronto e configurado, agora só nos resta aprender a compilar e testar o aplicativo.

## Passo 7 - Compilar e instalar o aplicativo

Para compilar o aplicativo, basta executar:
{% highlight text %}
ant debug
{% endhighlight %}

Na pasta bin/ será criado um teste-debug.apk onde teste é o nome do aplicativo.

Para testar um app você precisa primeiro estar com o emulador rodando.
Basta entrar em android avd e dar um start em algum que você criou.

Se você quiser uma forma mais rápida de iniciar o emulador, basta memorizar o nome
do device que você criou no "android avd" e executar o comando:
{% highlight text %}
emulator @nome_do_device
{% endhighlight %}
No meu caso, eu criei o device "s", então fica assim:
{% highlight text %}
emulator @s
{% endhighlight %}

Quando o seu emulador já estiver rodando, para instalar e reinstalar um aplicativo
nele, basta executar este comando:
{% highlight text %}
adb install -r bin/teste-debug.apk
{% endhighlight %}

Agora você pode entrar na lista de aplicativos do Android do emulador e procurar pelo seu app.

<img src="/img/posts/android-sdk-install-first-app.png" alt="" width="400">

Aplicativo aberto

<img src="/img/posts/android-sdk-install-first-app-aberto.png" alt="" width="400">

Quando você estiver desenvolvendo um aplicativo, você vai precisar compilar e testar
de uma forma mais rápida, então você pode executar este comando para compilar e instalar
no emulador em seguida:

{% highlight text %}
ant debug install
{% endhighlight %}

Faça alguns testes, altere o HTML, compile novamente, teste etc...

## Conclusão
Neste post vimos como configurar um ambiente de desenvolvimento para Android sem uso do Eclipse.
A partir daqui você fica com o caminho livre para ler a (documentação do PhoneGap)[http://docs.phonegap.com/en/2.6.0/] e fazer vários testes.

Boa sorte :D

Eu gostaria de receber feedback sobre este post, então faça um comentário por favor.