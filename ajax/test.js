
    

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
    var heroes = p['members']
    document.getElementById("demo").innerHTML = p;   
       