/// <reference types="cypress" />


it('Equality', () => {
    const a = 1;

    expect(a, 'O valor deve ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal(2);
});

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
});

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).to.be.deep.equal({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ a: 1 }) //tipo um contains;
    expect(obj).to.have.property('b')
});

it('Arrays', () => {
    const arr = [1, 2, 3]

    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
});

it('Types', () => {
    const num = 1;
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('String')
    expect(str).to.have.length(6)
    expect(str).to.match(/Stri/)
})