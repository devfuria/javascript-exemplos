QUnit.test( "Testando add()", function( assert ) {
  app.add();
  assert.equal(app.num, 1, "add() 1 vez, num deve ser igual a 1");

  app.add();
  assert.equal(app.num, 2, "add() 2 vezes, num deve ser igual a 2");

  app.add();
  assert.equal(app.num, 3, "add() 3 vezes, num deve ser igual a 3");
});

QUnit.test( "Testando sub()", function( assert ) {
  app.num = 0;
  app.sub();
  assert.equal(app.num, -1, "sub() 1 vez, num deve ser igual a -1");

  app.sub();
  assert.equal(app.num, -2, "sub() 2 vez, num deve ser igual a -2");
});
