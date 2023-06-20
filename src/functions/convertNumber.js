const covertNumber = (number)=>{
var numberWithCommos = number.toLocaleString();
var num = numberWithCommos.split(",");

//Trillion 1,000,000,000,000 4 commas and length is 5 when split 12 digit remove and add T
// Billion  1,000,000,000 3 commas and length is 4 when split 9 digit remove and add B
// Million   1,000,000
// thousand  100,000

if(num.length == 5)
{
    // for eg: num =[]
    return num[0] + "." + num[1].slice(0,2) +"T"
}
if(num.length == 4)
{
    // for eg: num =[]
    return num[0] + "." + num[1].slice(0,2) +"B"
}
if(num.length == 3)
{
    // for eg: num =[1,000,000]
    return num[0] + "." + num[1].slice(0,2) +"M"
}
if(num.length == 2)
{
    // for eg: num =[1,000]
    return num[0] + "." + num[1].slice(0,2) +"k"
}
else
{
    // for eg: num =[100] hundred 
    return num[0] 
}

}
export default covertNumber ;