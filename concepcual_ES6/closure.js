const outer = () =>{
     let count = 0;
     return () =>{
        count++;
        console.log("counter" , count)
     }
}
 const x1= outer()
 const x2= outer()
 x1()
 x1()
 x1()
 x1()
 x2()
 x2()