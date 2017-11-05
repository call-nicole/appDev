
    

    var jsonTest = { "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
     
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
     
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
    }
  ]
    };
    var send = JSON.stringify(jsonTest);
    localStorage.setItem("storedJSON", send);

    

    var get = localStorage.getItem("storedJSON");
    var p = JSON.parse(get); 
    var heroes = p.members;
    document.getElementById("demo").innerHTML = "name: " + heroes[0].name;   
       



function loadDocJSON() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //var temp = JSON.parse(this.responseText);
      document.getElementById("xml").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "parse.txt", true);
  xhttp.send();
}


//    function loadDocJSON(){
//        var xhttp = new XMLHttpRequest();
//        
//        xhttp.onreadystatechange = function() {
//            if (this.readyState == 4 && this.status == 200){
//                var temp = JSON.parse(this.responseText);
//                document.getElementById("xml")innerHTML = "name: " + temp;
//            }
//        };
//        xhttp.open("GET", "parse.txt", true);
//        xhttp.send();
//    }