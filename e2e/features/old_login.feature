#language: pt

Funcionalidade: primeiro teste

Cenário: login com sucesso
    Dado que estou na página de login
    Quando submeto o "vanessa@gmail.com.br" e "Senha123"
    Então o login é realizado com sucesso

Cenário: usuário não existe
    Dado que estou na página de login
    Quando submeto o "vanessa@gmail.com.br" e "Senha123"
    Então vejo mensagem "Invalid User Name or PassWord"

