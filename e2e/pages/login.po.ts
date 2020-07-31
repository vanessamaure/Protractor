const {browser, element, by} = require('protractor');

//import {browser, element, by} from 'protractor';

    
    let campo_email = element(by.model("Email"));
    let campo_senha = element(by.model("Password"));
    let botao_enter = element(by.id("enterbtn"));
    
    

export class Login{
    
     acessarPagina(){
         return browser.get("SignIn.html");        
    }

     async fazerLogin(arg1, arg2){
        await campo_email.sendKeys(arg1);
         await campo_senha.sendKeys(arg2);
         await botao_enter.click();
        
    }

    async getMensagem(){
       var msg = (element(by.id("errormsg")).getText());
        return msg;
    }



}