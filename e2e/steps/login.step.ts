const  { Given, When, Then } = require ('cucumber');
const {ExpectedConditions} = require('protractor');
import {Login} from '../pages/login.po'


// declarações necessárias para utilização do expect do chai
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let EC = ExpectedConditions;

let loginPage = new Login();


    Given('que estou na página de login', async () => {
        await loginPage.acessarPagina(); 
        
    });

    When('submeto o {string} e {string}', async (string, string2) => {
        await loginPage.fazerLogin(string, string2);
    });

    Then('o login é realizado com sucesso', async ()=> {
        let mensagem_esperada = loginPage.getMensagem();
        return  expect(mensagem_esperada).to.eventually.eql("Login com Sucesso");
    });

    Then('vejo mensagem {string}', (string)=> {
        let mensagem = loginPage.getMensagem();
      
       return expect(mensagem).to.eventually.eql(string);
    });






