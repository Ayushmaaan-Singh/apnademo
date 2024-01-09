function dropdownMenu()
{
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav-left")
    {
        x.className += " responsive";
    }
   
    else 
    {
        x.className = "topnav-left";
    }
}
