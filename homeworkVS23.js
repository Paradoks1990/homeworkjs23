// 1
console.log('number' + 3 + 3); 
// "number" + 3 -> строка, конкатенация -> "number3"
// "number3" + 3 -> строка, конкатенация -> "number33"
// Результат: "number33"

// 2
console.log(null + 3);
// null -> преобразуется в 0
// 0 + 3 = 3
// Результат: 3

// 3
console.log(5 && "qwerty");
// && возвращает первое ложное значение или последнее, если все истинные
// 5 -> truthy, значит результат -> "qwerty"
// Результат: "qwerty"

// 4
console.log(+'40' + +'2' + "hillel");
// +'40' -> число 40
// +'2' -> число 2
// 40 + 2 = 42
// 42 + "hillel" -> строка "42hillel"
// Результат: "42hillel"

// 5
console.log('10' - 5 === 6);
// '10' -> число 10
// 10 - 5 = 5
// 5 === 6 -> false
// Результат: false

// 6
console.log(true + false);
// true -> 1, false -> 0
// 1 + 0 = 1
// Результат: 1

// 7
console.log('4px' - 3);
// '4px' -> попытка в число -> NaN
// NaN - 3 = NaN
// Результат: NaN

// 8
console.log('4' - 3);
// '4' -> число 4
// 4 - 3 = 1
// Результат: 1

// 9
console.log('6' + 3 ** 0);
// 3 ** 0 = 1
// '6' + 1 = "61"
// Результат: "61"

// 10
console.log(12 / '6');
// '6' -> число 6
// 12 / 6 = 2
// Результат: 2

// 11
console.log('10' + (5 === 6));
// 5 === 6 -> false
// "10" + false -> строка "10false"
// Результат: "10false"

// 12) null == ""
// null при нестрогом сравнении (==) приводится к undefined, а не к строке
// "" приводится к числу 0, null — к 0 только при арифм. операциях, но не в ==
// Результат: false
console.log("1)", null == "");

// 13) 3 ** (9 / 3);
// 9 / 3 = 3 => 3 ** 3 = 27
console.log("2)", 3 ** (9 / 3));

// 14) !!'false' == !!'true'
// !!"false" => true (любая непустая строка = true)
// !!"true"  => true
// true == true → true
console.log("3)", !!'false' == !!'true');

// 15) 0 || '0' && 1
// '0' && 1 → 1 (т.к. "0" truthy)
// 0 || 1 → 1
console.log("4)", 0 || '0' && 1);

// 16) (+null == false) < 1
// +null → 0
// 0 == false → true (1)
// 1 < 1 → false
console.log("5)", (+null == false) < 1);

// 17) false && true || true
// false && true → false
// false || true → true
console.log("6)", false && true || true);

// 18) false && (false || true)
// false || true → true
// false && true → false
console.log("7)", false && (false || true));

// 19) (+null == false) < 1 ** 5
// +null → 0
// 0 == false → true (1)
// 1 ** 5 = 1
// 1 < 1 → false
console.log("8)", (+null == false) < 1 ** 5);
