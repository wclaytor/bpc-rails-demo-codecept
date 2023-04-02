Feature('Homepage');

Scenario('Verify page elements',  ({ I }) => {
    I.amOnPage('http://demo.billclaytor.com');
    I.see('Developer Bookshelf');
});
