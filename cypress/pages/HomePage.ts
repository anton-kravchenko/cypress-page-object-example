import { By, Selector } from 'cypress-selectors';
import { LoginPage, NewArticlePage } from '.';

class HomePageSelectors {
  @By.Text.Exact('Sign in') static loginPageLink: Selector;
  @By.Class('nav-item', { eq: 3 }) static userInfoNavItem: Selector;
  @By.Type('a', { parent: HomePageSelectors.userInfoNavItem }) static userInfoLink: Selector;
  @By.Text.Partial('New Article') static newArticleButton: Selector;
}

class HomePage {
  open() {
    cy.visit('/');
    return this;
  }

  goToLoginPage(): LoginPage {
    HomePageSelectors.loginPageLink.click();
    return new LoginPage();
  }

  goToNewArticlePage(): NewArticlePage {
    HomePageSelectors.newArticleButton.click();
    return new NewArticlePage();
  }

  goToProfilePage() {
    HomePageSelectors.userInfoLink.click();
  }
}

export { HomePage, HomePageSelectors };
