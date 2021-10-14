![](poster.png)

# Event Bootcamp

## Basics

### Button Event
Lägg till en knapp och se till att när man klickar på knappen så byts texten på knappen.

### Click Counter
Lägg till en knapp och se till att när man klickar på knappen så visas en räknare hur många gånger man har klickat på den.

### Input Duplication
Lägg till ett text-fält och se till att varje gång man skriver i fältet så visas samma innehåll i en annan paragraf.

### Countdown timer
Skapa en sekundräknare som tickar nedåt tills den nått noll och visar hur många sekunder det är kvar.
När den har räknat klart, visa ett meddelande.


## Color Picker
Skapa ett text-fält, när man skriver in en färg och trycker enter ska bodyn byta bakgrundsfärg till den färgen. Om färgen inte finns ska ett felmeddelande visas.

### Alla CSS-färger
```js
["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
```

### Level Up
Lägg till så när man skriver i input-fältet så dyker det upp en `suggestion`-lista på alla färger som matchar det du skriver. Lägg också till att om du klickar på en av dessa så byts det till den färgen och texten i input-fältet ändras.

## Game: Guess the number
Du ska skapa ett spel där spelaren ska gissa ett hemligt tal.

Spelet går till såhär:
1. Datorn slumpar ett hemligt heltal
1. Spelaren får skriva in sin gissning i ett input-fält
1. Om spelaren gissar för högt så ska ett meddelande visas "Too high!", sen få en ny gissning
1. Om spelaren gissar för lågt så ska ett meddelande visas "Too low!", sen få en ny gissning
1. Om spelaren gissar rätt så ska ett meddelande visas "Correct!" och sedan visa en knapp "Play again?"

### Level Up
Lägg till så man har ett max antal gissningar på sig.

### Extra Level Up
Skapa en funktion som spelar spelet automatiskt.


## Game: Rock paper scissor
Du skapa det klassiska spelet sten sax påse.
Sten, sax och påse har 2 spelare där båda väljer en av sten, sax eller påse samtidigt.
Sten vinner över sax men förlorar mot påse.
Sax vinner över påse men förlorar över sten.
Påse vinner över sten men förlorar över sax.

Låt datorn vara den ena spelaren och slumpa vilken den väljer.

Gå bananas med hur spelet ser ut, lägg till bilder, animationer, timing etc.

## Mini project
Skapa en klon av Game of Life