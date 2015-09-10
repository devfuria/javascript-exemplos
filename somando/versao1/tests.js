QUnit.test( "Testando add()", function( assert ) {
  num = 0;
  add();
  assert.equal(num, 1, "add() 1 vez, num deve ser igual a 1");

  add();
  assert.equal(num, 2, "add() 2 vezes, num deve ser igual a 2");

  add();
  assert.equal(num, 3, "add() 3 vezes, num deve ser igual a 3");
});

QUnit.test( "Testando sub()", function( assert ) {
  num = 0;
  sub();
  assert.equal(num, -1, "sub() 1 vez, num deve ser igual a -1");

  sub();
  assert.equal(num, -2, "sub() 2 vez, num deve ser igual a -2");
});
