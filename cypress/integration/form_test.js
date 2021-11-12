// write tests here 
describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const specialInput = () => cy.get('input[name=special]')
    const submitBtn = () => cy.get('button[id="order-button"]')

    it('Sanity check', () => {
        expect(1 + 2).to.equal(3)
    })

    it('Add text', () => {
        nameInput()
            .should('have.value', '')
            .type('Name')
            .should('have.value', 'Name')
    })

    it('Multiple toppings', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('Submit form', () => {
        nameInput().type('Name')
        cy.get('select').select('small').should('have.value','small')
        cy.get('[type="checkbox"]').check()
        specialInput().type('No mushrooms')
        submitBtn().click()
    })
})