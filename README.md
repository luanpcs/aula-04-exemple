# SIMPLES CALCULADORA COM NODE.js
> Repositório criado para os exercícios do laboratório de Engenharia de Software - C214 do INATEL

## Instalação

Para realizar a instalação do Node.js, siga os passos:

MacOS & Linux:

```sh
sudo apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Windows:

Realizar o download no link
https://nodejs.org/en/download
e depois realizar a instalação

Para confimar que a instalação ocorreu com sucesso, basta executar o comando
```sh
node --version
```
caso retorne erro ou retorne uma versão diferente da instalada no passo anterior, repita o processo.

## Exemplo de uso

Para utilizar o projeto, basta executar o comando
```sh
node index.js
```
e, após isso, seguir as instruções que aparecem no console.

## Configuração do ambiente de desenvolvimento

Após a instalação do Node.js, no arquivo packge.json adicione as depências necessárias, sendo elas:
```sh
"dependencies": 
{
  "prompt-sync": "^4.2.0",
  "validate.js": "^0.13.1"
},
```

Na chave de _scripts_ adicione a chave que _start_ que configura o comando de execução do projeto.

```sh
"scripts": 
{
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Histórico de versões
* 2.1.0
    * Atualização do README.md
* 2.0.0
    * Nova operação de resto de divisão
* 1.1.0
    * Atualização do README.md
* 1.0.0
    * Adicionada o script básico da calculadora
* 0.0.1
    * Gerenciamento de dependências

## Contributing
1. Fork it (<https://github.com/luanpcs/aula-04-exemple/fork>)
2. Create your feature branch (`git checkout -b main`)
3. Commit your changes (`git commit -am 'Add some changes'`)
4. Push to the branch (`git push origin feature/branch_criada`)
5. Create a new Pull Request