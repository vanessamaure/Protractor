/*import {Login} from '../pages/login.po';
import {ExpectedConditions} from 'protractor';
import { Before } from 'cucumber';

// declarações necessárias para utilização do expect do chai
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

//timeout



let EC = ExpectedConditions;

let loginPage = new Login();

export = function(){
              
    this.Given(/^que estou na página de login$/, async () => {
    await  loginPage.acessarPagina(); 
   
});

   this.When(/^submeto o "([^"]*)" e "([^"]*)"$/, (arg1, arg2) => {
        loginPage.fazerLogin(arg1, arg2);
 });

   this.Then(/^o login é realizado com sucesso$/, function() {
      let mensagem_esperada = loginPage.getMensagem();

    return  expect(mensagem_esperada).to.eventually.eql("Login com Sucesso");
      
 });

    this.Then(/^vejo mensagem "([^"]*)"$/,  function (arg1) {
       let mensagem = loginPage.getMensagem();
      
       return expect(mensagem).to.eventually.eql(arg1);
       
 });
}



*/