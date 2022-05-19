/// <reference types="cypress" />


it('Equality', () => {
  const a =1;

  expect(a, 'O valor deve ser 1').equal(1);
  expect(a).to.be.equal(1);
  expect(a).not.to.be.equal(2);
});

it('Truthy', () => {
    const a = true;

    expect(a).to.be.true;
})