function displayData(name,age,city,...args)
{
 console.log(name);
 console.log(age);
 console.log(city);
 
 console.log(args.sort());
}
displayData("sathish",43,"salem","Tamilnadu","India","Asia");

function displayData1()
{
    console.log(arguments);
}
displayData1("Harsh",22,"Bangalore","Karnataka","India","Asia");