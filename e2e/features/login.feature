#language: pt

Funcionalidade: primeiro teste
Contexto: Estar na página da aplicação
    Dado que estou na página de login
    
    
Cenário: Login realizado com sucesso
    Quando submeto o "teste@teste.com.br" e "senha123"
    Então o login é realizado com sucesso

Cenário: usuário não existe
    Quando submeto o "vanessa@teste.com.br" e "senha123"
    Então vejo mensagem "Invalid User Name or PassWord"

