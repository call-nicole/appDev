var salva = person('Salva');
salva.name;
salva.greeting();



function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}