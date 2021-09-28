![](poster.png)

# Bootcamp - Numbers

## minimumOfTwo
Skriv en funktion som tar två numbers som input
och det mindre av talen som output.

### Exempel
```javascript
let num1 = 10
let num2 = 1
minimumOfTwo(num1, num2) // => 1
minimumOfTwo(1337, -1) // => -1
```

## minimumOfThree
Skriv en funktion som tar tre numbers som input
och det mindre av talen som output.

### Exempel
```javascript
let num1 = 10
let num2 = 1
let num3 = 0
minimumOfThree(num1, num2, num3) // => 0
minimumOfThree(1337, -1, 100) // => -1
```

## maximumOfFour
Skriv en funktion som tar fyra numbers som input
och det större av talen som output.

### Exempel
```javascript
let num1 = 12
let num2 = 900
let num3 = 1337
let num4 = 0
maximumOfFour(num1, num2, num3, num4) // => 0
maximumOfFour(12, 16, 100, 2) // => 2
```

## Ticket Machine
Skriv en funktion som tar en ålder som input och ger ett biljettpris som output.

|age|price|
|---|---|
| 17 och mindre | 10 |
| mellan 18 och 64 | 20 |
| 65 och mer | 15 |

## sumTo
Skriv en funktion som tar ett number som input
och ger summan av alla tal upp till inputtalet som output.

### Exempel
```javascript
let num = 5
sumTo(num) // => 15
sumTo(3) // => 6
```

## factorial
Skriv en funktion som tar ett number som input
och ger produkten av alla tal upp till inputtalet som output.

### Exempel
```javascript
let num = 5
factorial(num) // => 120
factorial(3) // => 6
```

### Bonusbana
Lös den utan multiplikations-tecknet.

## Fibonacci
Skriv en funktion som tar ett number som input
och ger det fibonacci tal som finns på den platsen.

Fibonaccis talföljd börjar med två ettor och ska du beräkna nästa tal så summerar du de två senaste.

### Exempel
```js
// 1 1 2 3 5 8 13 21 ...
fibonacci(1) // => 1
fibonacci(3) // => 2
fibonacci(8) // => 21
```

## Collatz Conjecture
Starta med ett heltal (n),
om talet är ett jämnt tal; halvera det (n / 2)
om talet är ojämnt; trippla det och lägg till ett (3n + 1)
Fortsätt sedan samma process tills du når 1.

Skriv en funktion som tar start talet som input och ger hur många iterationer den krävdes för att nå ett som output.
