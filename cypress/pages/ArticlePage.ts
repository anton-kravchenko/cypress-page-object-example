import { By, Selector } from 'cypress-selectors';

class ArticlePageSelectors {
  @By.Type('h1', { eq: 0 }) static title: Selector;
  @By.Type('h2') static content: Selector;
  @By.Class('tag-list') static tags: Selector;
}

class ProfilePageSelectors {
  @By.Class('container') static container: Selector;
  @By.Class('article-preview', { parent: ProfilePageSelectors.container, eq: 0 }) static recentArticle: Selector;

  @By.Type('h1', { parent: ProfilePageSelectors.recentArticle }) static title: Selector;
  @By.Type('p', { parent: ProfilePageSelectors.recentArticle }) static description: Selector;
  @By.Type('ul', { parent: ProfilePageSelectors.recentArticle }) static tagList: Selector;
}

export { ArticlePageSelectors, ProfilePageSelectors };
