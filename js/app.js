var userName=prompt("Enter your name: ");
var gender=prompt("Enter your gender: ");
var age=prompt("Enter your age: ");

if(age<=0)
alert("your age should be more than zero");
var yn=[];
function Check(x){
    if (x.toUpperCase()=="YES" || x.toUpperCase()=="Y" || x.toUpperCase()=="NO" || x.toUpperCase()=="N")
    return true;
    else
    return false;
}
function Print(){
    for(var i=0 ; i<yn.length ; i++)
    console.log(yn[i]);
}

var first=prompt("Are you in a university? your answer should be (yes or y) or (no or n).");
var answer1=Check(first);
while(answer1==false){
    first=prompt("Are you in a university? your answer should be (yes or y) or (no or n).");
    answer1=Check(first);
}
yn.push(first);

var second=prompt("Are you married? your answer should be (yes or y) or (no or n).");
var answer2=Check(second);
while(answer2==false){
    second=prompt("Are you married? your answer should be (yes or y) or (no or n).");
    answer2=Check(second);
}
yn.push(second);

var third=prompt("Do you have any Hobby? your answer should be (yes or y) or (no or n).");
var answer3=Check(third);
while(answer3==false){
    third=prompt("Do you have any Hobby? your answer should be (yes or y) or (no or n).");
    answer3=Check(third);
}
yn.push(third);

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

Print();