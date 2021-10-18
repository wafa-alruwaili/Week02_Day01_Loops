//For loop//
for( var t=2;t<=10;t++)
{
    console.log(t)
}
console.log("_____________")
for(var u=10;u>0;u--)
{
console.log(u)
}
console.log("_____________")
for(var b=4;b>-16;b--)
{
console.log(b)
}
console.log("_____________")
for(var i=8;i<=41;i+=5)
{
    console.log(b)    
}
console.log("_____________")

// The classic Fizzbuzz program
console.log("____________ Fizzbuzz program___________")
for(var g=1;g<=100;g++)
{
    if (g%3==0 && g%5==0)
    {
        console.log(g + "- Fizzbuzz");
    }
        else if(g%3==0)
        {
            console.log(g +"- fizz");
        }
            else if(g%5==0)
            {
                console.log(g + "- Bizz");  
        }
    }
    // The even/odd reporter//

    for (var i = 0; i <= 20; i++) {
        if ( i % 2 == 0) {
       console.log(i + " is even");
        }
        else {
        console.log(i + " is odd");
        };
      };

      // The Multiplication table// 
for(let k=1; k<=5;k++){
    for(let p=1; p<=10;p++){
        
    }   
}
//Factorial//
let n=prompt("Factorial")
let fact =1;
for(tt=1;tt<=n;tt++)
{
    fact=fact*tt;


console.log("factorial"+n+"***"+fact);
}
// Fibonacci sequence//
let y=0;
let h=1;
let f;
for(let op=1;op<=20;op++)
{
console.log(y)
f=y+h;
y=h;
h=f;
}
 //Odd numbers//
let w=1;
let unmber=prompt("enter the number");

while(w <= unmber){
    if (w%2!=0)
    
    console.log(w);
    w+1;

}

