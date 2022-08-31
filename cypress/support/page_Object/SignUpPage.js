export default class SignUpPage {
emailField = () => cy.get('input[data-testid="royal_email"]');
passwordField = () => cy.get('input[data-testid="royal_pass"]');
subBtn = () => cy.get('button[data-testid="royal_login_button"]');
header = () => cy.get('h2');
}

