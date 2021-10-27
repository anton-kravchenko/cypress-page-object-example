import { By, Selector } from 'cypress-selectors';
import { HomePage } from '.';

class LoginPageSelectors {
  @By.Attribute('email', { attribute: 'type' }) static emailInput: Selector;
  @By.Attribute('password', { attribute: 'type' }) static passwordInput: Selector;
  @By.Text.Exact('Sign in', { eq: 2 }) static signInButton: Selector;
}

class LoginPage {
  login(email: string = Cypress.env('CYPRESS_EMAIL'), password: string = Cypress.env('CYPRESS_PASSWORD')) {
    LoginPageSelectors.emailInput.type(email);
    LoginPageSelectors.passwordInput.type(password);
    LoginPageSelectors.signInButton.click();
    return new HomePage();
  }
}

export { LoginPage, LoginPageSelectors };
