function add(val) 
{
    document.getElementById("result").value+=val;
}
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function sinf() 
{
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.sin(x)   
}
function cosf() 
{
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.cos(x)   
}
function tangent() 
{
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.tan(x)   
}
function expo() 
{
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.exp(x)   
}
function squareroot() 
{
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.sqrt(x)   
}
function logarithm() 
{
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.log(x)   
}
function factorial()
{
    let n = document.getElementById("result").value
     fact = 1;
    if (n == 0 || n == 1)
    {
        document.getElementById("result").value=fact;
    }
    else
    {
      for(var i = n; i >= 1; i--)
      {
        fact = fact * i;
      }
      document.getElementById("result").value=fact;
    }  
}