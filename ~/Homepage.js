const assert = require('assert');

const I = actor();

const navbar = locate("nav[id='navbar']");

module.exports = {

    verifyPageElements() {
        I.seeElement(navbar)
    },

    refresh() {
        I.refreshPage()
    },

    seeNavbar() {
        I.seeElement(navbar)
    },
    
    seeEmptyTodoInput() {
        I.seeInField('.new-todo', '')
    },

    seeFooter() {
        I.seeElement('footer.info')
    }
}