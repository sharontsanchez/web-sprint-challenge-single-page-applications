import toppings from '../../src/App';
// write tests here 

describe("Pizza Form Page", () =>{
    // start with fresh state !!!
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });
    // Helpers to centralize selectors 
    const nameInput = () => cy.get("input[name=,'name']");
    // sanity testing 
    it('sanity check to make sure tests work', () =>{
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })
})// end 