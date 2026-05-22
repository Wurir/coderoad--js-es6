console.log(1 + "2");      // "12"  -> Liczba 1 jest zamieniana na string i łączona z "2"
console.log("5" - 2);      // 3     -> Operator minus wymusza konwersję stringa "5" na liczbę
console.log(true + 1);     // 2     -> W operacjach matematycznych true jest traktowane jako 1
console.log(!!"" || 42);   // 42    -> Pusty string to "falsy", więc operator || zwraca drugą wartość
console.log([] == ![]);    // true  -> Skomplikowana koercja: ![] daje false, a [] po konwersji na liczbę to 0