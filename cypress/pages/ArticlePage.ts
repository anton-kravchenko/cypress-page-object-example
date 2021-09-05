import { By, Selector } from 'cypress-selectors';

class ArticlePageSelectors {
  @By.Type('h1', { eq: 0 }) static title: Selector;
  @By.Type('h2') static content: Selector;
  @By.Class('tag-list') static tags: Selector;
}

export { ArticlePageSelectors };
