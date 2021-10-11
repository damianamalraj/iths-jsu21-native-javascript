function simple_assembler(program) {
    let reg = {};
    let i = 0;
    
    while(i < program.length){
        let s = program[i].split(" ");
      if(s[0] == "inc"){
        reg.s[1] += 1;
      } else if(s[0] == "dec"){
        reg.s[1] -= 1;
       } else if (s[0] == "mov"){
         reg.s[1] == Number(s[2])
       } else if (s[0] == "jnz"){
         i += Number(s[2]) - 1;
       }
      i++
     }
      /* return a dictionary with the registers */
      return reg;
      console.log(reg)
  }

  const main = ()=>{
    const p = [
        "mov a",
        "inc a",
        "inc a",
        "inc a",
        "dec a",
        "dec a",
        "jnz a -1"
        
    ]

    let result = simple_assembler(p);
}
main()