 function Person(name, age, fav) {
                this.name = name;
                this.age = age;
                this.fav = fav;
                this.greeting = function() {
                return "Hi! I\'m " + this.name + " I am " + this.age + " years old . I like " + this.fav ;
                };
            }
            
            var person1 = new Person('Bob',  '46', 'Reading Books');
            var person2 = new Person('Sarah', '19', 'Playing Sports');
            
            person1.name
            document.getElementById("demo").innerHTML = person1.greeting()
            person2.name
            document.getElementById("demo1").innerHTML = person2.greeting()
