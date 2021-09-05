import { By, Selector } from 'cypress-selectors';

class NewArticlePageSelectors {
  @By.Attribute('Article Title', { attribute: 'placeholder' }) static title: Selector;
  @By.Attribute("What's this article about?", { attribute: 'placeholder' }) static description: Selector;
  @By.Type('textarea') static articleBodyInput: Selector;
  @By.Attribute('Enter tags', { attribute: 'placeholder' }) static tags: Selector;
  @By.Text.Partial('Publish') static publishButton: Selector;
}

class NewArticlePage {
  enterTitle(title: string) {
    NewArticlePageSelectors.title.type(title);
    return this;
  }

  enterDescription(desc: string) {
    NewArticlePageSelectors.description.type(desc);
    return this;
  }

  enterContent(body: string) {
    NewArticlePageSelectors.articleBodyInput.type(body);
    cy.get;
    return this;
  }

  enterTags(tags: Array<string>) {
    for (const tag of tags) NewArticlePageSelectors.tags.type(`${tag}{enter}`);
    return this;
  }

  publish() {
    NewArticlePageSelectors.publishButton.click();
  }
}

export { NewArticlePage, NewArticlePageSelectors };
