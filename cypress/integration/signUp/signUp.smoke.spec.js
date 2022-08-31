import SignUpPage from "../../support/page_Object/SignUpPage";

const signUpPage = new SignUpPage();

describe('SignUp- SMOKE test negative Main suite',() => {
    describe('Preconditions - Visit Main page', () => {
        it('Visit main page', () => {
            cy.visit('/')
        })
        it('Checking the page was loaded successfully', () => {
            cy.location('pathname')
                .should('eq', '/')
        })
    })
    describe('Email field', () => {
        it('should exist', () => {
            signUpPage.emailField()
        })
        it('should be visible', () => {
            signUpPage.emailField()
                .should('be.visible')
        })
        it('should have a placeholder', () => {
            signUpPage.emailField()
                .should('have.attr', 'placeholder', 'Email or phone number')
        })
        it('Enter email', () => {
            signUpPage.emailField()
                .type('iva.ko@gmail.com')
                .should('have.value', 'iva.ko@gmail.com')
        })
    })
    describe('Password field', () => {
        it('should exist', () => {
            signUpPage.passwordField()
        })
        it('should be visible', () => {
            signUpPage.passwordField()
                .should('be.visible')
        })
        it('should have a placeholder', () => {
            signUpPage.passwordField()
                .should('have.attr', 'placeholder', 'Password')
        })
        it('Enter password', () => {
            signUpPage.passwordField()
                .type('1234')
                .should('have.value', '1234')
        })
    })
    describe('Submit button', () => {
        it('should exist', () => {
            signUpPage.subBtn()
        })
        it('should have text', () => {
            signUpPage.subBtn()
                .should('have.text', 'Log In')
        })
        it('submit btn', () => {
            signUpPage.subBtn()
                .click()
        })
        it('User was redirected', () => {
           signUpPage.header()
               .contains("Your Request Couldn't be Processed")
        })
    })
})

