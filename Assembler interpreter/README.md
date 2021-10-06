# Simple Assembler Interpreter
We want to create a simple interpreter of assembler which will support the following instructions:

## Registers and Constants
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, so you don't need to worry about uninitialized registers.

## Implementation
The interpreter is a function that takes an input list of Strings with the sequence of the program instructions and will execute them. The program ends when there are no more instructions to execute, then it returns a dictionary with the contents of the registers.

## Level One - Basic Instructions

### Assembler Instructions
`mov x y` - copies y (either a constant value or the content of a register) into register x

`inc x` - increases the content of the register x by one

`dec x` - decreases the content of the register x by one

`jnz x y` - jumps to an instruction y steps away (positive means forward, negative means backward, y can be a register or a constant), but only if x (a constant or a register) is not zero

```
Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.
```

### Example
Given this program
```
mov a 5
inc a
inc a
```

It should be represented as an array of Strings
```js
let program = ["mov a 5", "inc a", "inc a"]
```

This array could be the input to the function

```js
let result = interpret( program )
```

The function should output a dictionary with the corresponding registers and constants.

```js
result; // => {a: 7}
```


### More Examples
```js
interpret(["mov a 1"]) // => {a: 1}

interpret(["mov a 2", "inc a"]) // => {a: 3}

interpret(["mov a 1", "mov b a", "dec b"]) // => {a:1, b:0}

interpret( ["mov a 5","inc a","dec a","dec a","jnz a -1","inc a"] ) // => {a: 1}

interpret( ["mov a 5","mov b a","dec b","dec b"] ) // => {a: 5, b: 3}

interpret( ["mov a 1", "jnz 5 2", "mov b 3", "inc a"] ) // => {a: 2}
```


## Level Two - Arithmetic Support
Add support for the following instructions.

`add x y` - add the content of the register x with y (either an integer or the value of a register) and stores the result in x (i.e. register[x] += y).

`sub x y` - subtract y (either an integer or the value of a register) from the register x and stores the result in x (i.e. register[x] -= y).

`mul x y` - same with multiply 

`div x y` - same with integer division

`# Comment` - If an instructions starts with a `#`-sign, ignore this instruction


### Examples
```js
interpret(["mov a 2", "add a 10",]) // => {a:12}
interpret(["mov a 2", "mov b 3", "add a b"]) // => {a:5, b:3}
interpret(["mov a 20", "sub a 5",]) // => {a:15}
interpret(["mov a 7", "mov b 2", "sub a b"]) // => {a:5, b:2}
interpret(["mov a 20", "mul a 5",]) // => {a:100}
interpret(["mov a 10", "mov b 5", "mul a b"]) // => {a:50, b:5}
interpret(["mov a 20", "div a 5",]) // => {a:4}
interpret(["mov a 6", "mov b 3", "div a b"]) // => {a:2, b:3}

```


## Level Three - Error Handling
If the function should receive invalid instructions, it should return a dictionary containing which line the error occured, and an error message.

If an instruction is correctly formed but the operation is impossible (e.g ["mov a 1", "inc b"]), it should return an object containing which line the error occured, and an error message.

If the function is stuck in an infinite loop, it should return an object containing which line the error occured, and an error message.