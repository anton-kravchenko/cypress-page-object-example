import * as faker from 'faker';
import { HomePage, HomePageSelectors, NewArticlePage } from '../pages/';
import { ArticlePageSelectors } from '../pages/ArticlePage';
import { ProfilePageSelectors } from '../pages/ProfilePage';

context('General flows', () => {
  const [title, description, content] = [faker.lorem.word(), faker.lorem.lines(1), `## ${faker.lorem.lines(1)}`];
  const tags = ['test tag 1', 'test tag 2'];

  it('should login to the application', () => {
    new HomePage()
      .open()
      .goToLoginPage()
      .login();

    HomePageSelectors.userInfoLink.should('have.text', 'cypress-test-user');
  });

  it('should post a new article', () => {
    const newArticlePage = new HomePage()
      .open()
      .goToLoginPage()
      .login()
      .goToNewArticlePage();

    newArticlePage
      .enterTitle(title)
      .enterDescription(description)
      .enterContent(content)
      .enterTags(tags)
      .publish();

    ArticlePageSelectors.title.should('have.text', title);
    ArticlePageSelectors.content.should('have.text', content.replace('## ', ''));
    ArticlePageSelectors.tags.should('have.text', tags.join(''));
  });

  it('should render the recent article in the list of all articles', () => {
    new HomePage()
      .open()
      .goToLoginPage()
      .login()
      .goToProfilePage();

    ProfilePageSelectors.title.should('have.text', title);
    ProfilePageSelectors.description.should('have.text', description);
    ProfilePageSelectors.tagList.should('have.text', tags.join(''));
  });
});
