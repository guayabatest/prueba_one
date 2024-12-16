/// <reference types="Cypress" />
//para que funcionen los comnados


require('cypress-xpath')
//require('cypress-plugin-tab')
//require('cypress-file-upload')


// Manejar excepciones no capturadas para evitar fallos debido a errores de origen cruzado
Cypress.on('uncaught:exception', (err, runnable) => {
    // Esto devuelve false para evitar que Cypress falle el test
    return false;
  });

describe("Valida titulo de la pagina",()=>{
    it("Valida titulo",()=>{
        cy.visit("https://www.google.com")
        //vallida titulo de la pagina
        cy.title().should('eq','Ofrecido por Google')
        cy.log("Valido correctamente")
    })
})