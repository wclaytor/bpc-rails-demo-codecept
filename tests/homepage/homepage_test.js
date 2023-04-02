Feature('Homepage');

Scenario('Verify page elements',  ({ I, homepagePage }) => {
    I.amOnPage('http://demo.billclaytor.com');
    I.see('Developer Bookshelf');
    homepagePage.verifyPageElements();
});
