var myJSON = new XMLHttpRequest();
        var address = "http://api.open-notify.org/astros.json";
        
        myJSON.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                numPeople = data.number;
                var text="";
                document.getElementById("output").innerHTML = numPeople;
for (var i = 0; i < numPeople; i++) {
    text = text + data.people[i].name + "<br>";
}
                document.getElementById("output2").innerHTML = text;
                
            }
        }
        myJSON.open("GET", address, true);
        myJSON.send();