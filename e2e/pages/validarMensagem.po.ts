//import { element, ExpectedConditions } from 'protractor';
const {browser, element, by, ExpectedConditions} = require('protractor');

let botao_run = element(by.id("loader"));
let mensagem = element(by.xpath("//div[@class='blockUI blockMsg blockPage']"));
let modal = element(by.xpath("//div[@id='myModal']//div[@class='modal-content']//button[@class='close']"));
let EC= ExpectedConditions;


export class ValidaMensagemPage{
    acessarPagina(){
        browser.waitForAngularEnabled(false);
        return browser.get("Loader.html");
    }

    clicarBotao(){
        botao_run.click();

    }

    validarModal(){
        let visivel = EC.elementToBeClickable(modal);
        console.log("entrou no validamodal");
        return browser.wait(visivel, 15000, "Deu erro aqui");
        
    }

  
}
