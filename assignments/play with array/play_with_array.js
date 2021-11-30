function getEven(arr) 
{
    function isdiv(n)
    {
        return n % 2==0
    }
    var result = arr.filter(isdiv)
    return result
}
function multiplyByN(arr, n) {
    function muln(num)
    {
       return num * n
    }
    arr = arr.map(muln)
    return arr
}

function removeNthElement(arr, n) 
{
   let a=[]
   let i =0
   for(x of arr)
    {
       if (i!=n)
       {
        a.push(x)
       }
       i++
   }
   return a
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}