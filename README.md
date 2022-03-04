# SynecoToolsAutomation

Automações E2E 

---
Projeto desenvolvido para efetuar testes "End 2 End".

## :hammer_and_wrench: Como fazer todas instalações necessárias e suas Tecnologias Utilizadas
### [Python](https://www.python.org/downloads/)
- Acesse o link acima e faça o download do Python
- Quando feito o Download do Python, execute-o.
- Clique em Add "Python (Versão atual)" to path
- Em seguida clique em installar.
- Após ser feita a instalação do Python iremos verificar a versão do mesmo
- Abra seu CMD como administrador e execute os seguintes códigos:
```bash
# Comando para ver a versão do Python
$ pyhton --version
# Comando para ver a versão do Pip e a do Python
$ pip --version 
```
<br>

### [RobotFramework](https://robotframework.org/)
```bash
- Instalar o node.js por exemplo, a partir deste link "https://nodejs.org/en/download/"

# Atualize o pip
$ pip install -U pip
# Instalar uma library Browser
$ pip install robotframework-browser
# Instalar uma library SeleniumWebdriver
$ pip install robotframework-seleniumlibrary
# Dependências do Node.js
$ rfbrowser init 
```


### [Visual Studio Code](https://code.visualstudio.com/download)
- Abra o Visual Studio Code
- Vá até as opções de "Extenção"
- Baixe as seguintes Extenções:
    - Portuguese (Brazil) Language // Caso queira o visual studio em Português 
    - Material Icon Theme 
    - Robot Framework Intellisense
- Para abrir o seu terminal precione: (Ctrl+Shift+')
<br>

## :checkered_flag: Como Executar o Projeto

- Após abrir o terminal, digite os seguintes comandos:
```bash
# Clonar repositório
$ git clone "https://gitlab.com/synecotoolsautomation/synecotoolsautomation.git" 
```
A execução pode ser feita através do próprio framework.

- Através do framework (terminal):

```bash
# Na pasta "C:\SKA\SynecoTools", execute:

robot -d ./results -v browser:chromium -v headless:False TestSuite\SynecoTools.robot
```
