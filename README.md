![Logo do projeto](https://wakanda-home-ng.herokuapp.com/assets/images/logo-wakanda.png)

# LandingPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Getting started

Para executar o projeto, será necessário instalar os seguintes programas:
* [NodeJS: Contém o gerenciador de pacotes npm](https://nodejs.org/pt-br/download/)
* AngularCLI
	```shell
	npm install @angular/cli --global
	```
* Modules Versions
	* AngularCLI: 6.0.7
	* Angular: 6.0.3
	* Bootstrap: 4.5.0
	* Express: 4.17.1
	* Express-http-proxy: 1.6.2
	* Rxjs: 6.3.3
## Developing

Abra o terminal do seu sistema operacional em um diretório de sua preferência e execute os seguintes comandos:

```shell
git clone https://github.com/aceleradev/wakanda-landingpage-ng.git
cd wakanda-landingpage-ng/
npm install
```

O projeto será baixado e as dependências serão instaladas.

### Building

Para buildar projeto basta abrir o terminal do diretório do projeto e executar o seguinte comando:
```shell
ng build --configuration=dev
```
O comando irá compilar o projeto e gerar um diretório de distribuição(dist/) com os arquivos de script(.js), html e demais resources(imagens, arquivos, etc...).
A flag `--configuration` representa a environment que o projeto será buildado. Caso queira buildar na environment default não é necessário adicionar a flag. Ex.:
```shell
ng build
```

### Deploying

Para deploy no ambiente de desenvolvimento é necessário abrir um PR para a branch develop

Segue comando para publicar sua branch
```shell
git push origin nome-da-sua-branch
```
Lembrando que para aprovação o PR precisa de ser revisado por outro desenvolvedor, além de você.


## Configuration
Para executar o projeto é necessário rodar o serviço node que irá prover os arquivos estáticos e um servidor proxy para acessar o backend da aplicação:
```shell
npm run start
```
Caso queira alguma configuração personalizada, editar o arquivo `src/environments/environment.myenv.js` e buildar o projeto novamente com a sua nova configuração. Ex.:
```shell
ng build --configuration=myenv
npm run start
```
## Links


- [Google Drive com as imagens](https://drive.google.com/drive/folders/1ZIdMqgmVlA9qp9NwXKfn-zlcXsMu-zup?usp=sharing)
