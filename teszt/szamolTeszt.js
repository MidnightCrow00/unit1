QUnit.module("szamolas", function () {
  // alapok
    QUnit.test("Létezik-e?", (assert) => {
    assert.ok(szamolas);
  });

  QUnit.test("Függvény-e?", (assert) => {
    assert.ok(typeof(szamolas == "function"));
  });

  //alap esetek
  QUnit.test("Pozitív egész számok", (assert) => {
    kapott = szamolas(3, 5);
    vart = 8;
    assert.equal(kapott, vart);
  });

  QUnit.test("Negatív egész számok", (assert) => {
    assert.equal(szamolas(-3, -5), -8);
  });

  QUnit.test("Vegyes előjelű egész számok", (assert) => {
    assert.equal(szamolas(-3, 5), 2);
  });

  QUnit.test("Tört számok", (assert) => {
    assert.equal(szamolas(3.2, 1.5), 4.7);
  });

  //speciális esetek
  QUnit.test("Szöveges", (assert) => {
    assert.equal(szamolas(3, "5"), 8);
  });

  QUnit.test("Szöveges paraméter", (assert) => {
    assert.equal(szamolas(3, "kutyus"), "Szám legyen mindkét paraméter!");
  });

  QUnit.test("Logikai paraméter", (assert) => {
    assert.equal(szamolas(3, false), 3);
  });

  QUnit.test("Speciális karakter paraméter", (assert) => {
    assert.equal(szamolas('!', false), "Szám legyen mindkét paraméter!" );
  });

  QUnit.test("Pi az egyik paraméter", (assert) => {
    assert.equal(szamolas(Math.PI, 2), Math.PI + 2 );
  });

  QUnit.test("Egy paraméter", (assert) => {
    assert.equal(szamolas(2), "Két paraméter legyen!" );
  });

  QUnit.test("0 paraméter", (assert) => {
    assert.equal(szamolas(), "Két paraméter legyen!" );
  });

  QUnit.test("Több paraméter", (assert) => {
    assert.equal(szamolas(2,3,4), "Két paraméter legyen!" );
  });

  /*QUnit.test("Túlcsordulás", (assert) => {
    assert.equal(szamolas(2), "Két paraméter legyen!" );
  });*/
});
