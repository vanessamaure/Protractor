const  { Given, When, Then } = require ('cucumber');
import {ValidaMensagemPage} from '../pages/validarMensagem.po'
import { callbackify } from 'util';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let validarPage = new ValidaMensagemPage();

Given('que estou na página da aplicação', {timeout: 3 * 5000}, async () =>{
    
     await validarPage.acessarPagina();

  });

 When('clico no botão run', async () => {
    await validarPage.clicarBotao();
    
  });

  Then('devo ver o modal',{timeout: 20000}, function (){
    console.log("passou no then");  
      //let ret = validarPage.validarModal();
      
      console.log("passou no setTimeout");
      return expect(validarPage.validarModal()).to.eventually.eql(true);
    
    
  })