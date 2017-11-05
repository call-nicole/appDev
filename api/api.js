// Api Key cfaf5a037f8e81c516eb5dbc1c98908f
// Example Request https://api.themoviedb.org/3/movie/550?api_key=cfaf5a037f8e81c516eb5dbc1c98908f
// Read Access Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFmNWEwMzdmOGU4MWM1MTZlYjVkYmMxYzk4OTA4ZiIsInN1YiI6IjU5ZWJjMWNlOTI1MTQxMTA1ZDAwMjlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUlHTwIoDfs09ZJ27h6DeGBLZGDQHrCpxczTejYYuRk

//var myData = JSON.parse(birds);
//alert(mydata[0]);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var p = JSON.parse(this.responseText);
        var heroes = p.members;
        
        var s = "";
        
        for(var i = 0; i < heroes.length; i++){
            s += heroes[i].name;
        }
        
        document.getElementById("mem").innerHTML = "here are the members: " + p;
        
        document.getElementById("demo").innerHTML = "name: " + heroes[0].name; 
        
//        document.getElementById("demo").innerHTML ="Json parsed data is: " + JSON.stringify(myObj);
       }
    };
xmlhttp.open("GET", "api.json", true);
xmlhttp.send();
