Array=names_of_peapole
var GuestName = document.getElementById("names").value;
names_of_peapole.push(GuestName)
var sort = names_of_peapole.sort();
function searching()
{
    var s= document.getElementById("search name").value
    var found=0;
    var j;
    for(j=0; j<names_of_peapole.length; j++)
    {
        if(s==names_of_peapole[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="search name"+found+" time/s";
    console.log("search name"+found+" time/s");
}