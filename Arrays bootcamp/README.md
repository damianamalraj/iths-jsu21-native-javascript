![](poster.png)
# Bootcamp - Arrayer
Lös uppgifterna utan hjälp av standardbiblioteket (förutom .length och .push(value) ).

Tips!
Många av funktionerna går att återanvända i senare uppgifter.

## containsElement
Skriv en funktion som tar en array och ett element som input
och ger true eller false som output beroende på om elementet finns i arrayen.

### Exempel
```javascript
let arr = [1,7,1,0,5]
let element = 1
containsElement(arr, element) // => true
containsElement(arr, -1) // => false
```

## indexOfElement
Skriv en funktion som tar en array och ett element som input
och ger index för elementet som output eller -1 om det inte finns.

### Exempel
```javascript
let arr = [1,7,1,0,5]
let element = 1
indexOfElement(arr, element) // => 0
containsElement(arr, 1337) // => -1
```

## min
Skriv en funktion som tar en array av siffror som input
och ger det minsta värdet i arrayen som output.

### Exempel
```javascript
let arr = [1,7,1,0,5]
min(arr) // => 0
```

## max
Skriv en funktion som tar en array av siffror som input
och ger det största värdet i arrayen som output.

### Exempel
```javascript
let arr = [1,7,1,0,5]
min(arr) // => 7
```

## sum
Skriv en funktion som tar en array av siffror som input
och ger summan av alla värden i arrayen som output.

### Exempel
```javascript
let arr = [1,7,2,0,5]
sum(arr) // => 15
```


## mean
Skriv en funktion som tar en array av siffror som input
och ger medelvärdet av alla värden i arrayen som output.

### Exempel
```javascript
let arr = [1,7,2,0,5]
mean(arr) // => 3
mean( [2, 0, 2, -4, 3, 0] ) // => 0.5
```

## reverse
Skriv en funktion som tar en array som input
och ger ny omvänd array som output.



### Exempel
```javascript
let arr = [1,7,1,0,5]
reverse(arr) // => [5,0,1,7,1]
reverse( ["olof", "arne", "bengt"] ) // => ["bengt", "arne", "olof"]
```

## filter
Skriv en funktion som tar en array och ett värde som input
och ger ny array med endast matchande värden kvar som output.

### Exempel
```javascript
let arr = [1,7,1,0,5]
let element = 1
filter(arr, element) // => [1,1]
filter(arr, 0) // => [0]
filter( [1,3,3,7], 0 ) // => []
```

## exclude
Skriv en funktion som tar en array och ett värde som input
och ger ny array utan matchande värden kvar som output.

### Exempel
```javascript
let arr = [1,7,1,0,5]
let element = 1
exclude(arr, element) // => [7,0,5]
exclude(arr, 0) // => [1,7,1,5]
exclude( [1,3,3,7], 0 ) // => [1,3,3,7]
```

## unique
Skriv en funktion som tar en array som input
och ger ny array med endast unika värden kvar som output.

### Exempel
```javascript
let arr = [1,7,1,0,5,0,5]
unique(arr) // => [1,7,0,5]
unique( [1,3,3,7], 0 ) // => [1, 3,7]
```

## reverseStrings
Skriv en funktion som tar en array av strängar som input och ger en ny array som output innehållande alla omvända strängar.

### Exempel
```javascript
let names = ["Kalle", "Olof", "Gösta"]

reverseStrings(names) // => ["ellaK", "folO", "atsöG"]
reverseStrings( ["lol","100" "omg", ""]) // => ["lol","001", "gmo", ""]
```

## split
Skriv en funktion som tar två strängar som input, en `text` och och en `delimiter`.
Funktionen ska dela upp strängen i olika strängar avgränsade med tecknet i `delimiter` och sedan ge som output en array med alla strängar.

### Exempel
```javascript
let str = "Kalle,Olof,Gösta"
split(str, ",") // => ["Kalle", "Olof", "Gösta"]
split( "1 6 10 9", " ") // => ["1", "6", "10", "9"] 
```

## join
Skriv en funktion som tar en array och en sträng(`delimiter`) som input. Funktionen ska göra som `split` fast omvänt, den tar arrayen och bygger upp *en* ny sträng avgränsade med `delimiter`.

### Exempel
```javascript
let arr = ["Kalle", "Olof", "Gösta"]
join(arr, ",") // => "Kalle,Olof,Gösta"
join( ["1", "6", "10", "9"] , " ") // => "1 6 10 9"
```

# Level ups!
## Sorteringsalgoritmer
Samtliga dessa övningar är sorteringsalgoritmer, de tar en array med siffror som input och ger en sorterad version av listan som output. Läs artikeln och skaffa en uppfattning om hur algoritmen går till, och försök implementera den i JavaScript.
Se även på den här filmen för en visuell beskrivning om alla algoritmer:
[https://www.youtube.com/watch?v=WaNLJf8xzC4](https://www.youtube.com/watch?v=WaNLJf8xzC4)

### Selection Sort
[https://en.wikipedia.org/wiki/Selection_sort](https://en.wikipedia.org/wiki/Selection_sort)

### Bubble Sort
[https://en.wikipedia.org/wiki/Bubble_sort](https://en.wikipedia.org/wiki/Bubble_sort)

### Insertion Sort
[https://en.wikipedia.org/wiki/Insertion_sort](https://en.wikipedia.org/wiki/Insertion_sort)

### Quick Sort
[https://en.wikipedia.org/wiki/Quick_sort](https://en.wikipedia.org/wiki/Quick_sort)