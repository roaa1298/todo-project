var userName=prompt("Enter your name: ");
var gender=prompt("Enter your gender: ");
var age=prompt("Enter your age: ");

if(age<=0)
alert("your age should be more than zero");

var wel=confirm("Do you want to show the welcomeing message? If you want to skip it click on cancel.");
if (wel==true)
{
    if(gender.toUpperCase()=="MALE")
    {
        alert("Welcome Mr "+userName+" To our page, Have a good day :)");
    }
    else if(gender.toUpperCase()=="FEMALE")
    {
        alert("Welcome Ms "+userName+" To our page, Have a good day :)");
    }
    else
    {
        alert(`Welcome ${userName} To our page, Have a good day :)`);
    }
}