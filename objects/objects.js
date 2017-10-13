 function Person(name, age, fav, movie) {
                this.name = name;
                this.age = age;
                this.fav = fav;
                this.movie = movie
                this.greeting = function() {
                    return "Hi! I\'m " + this.name + " I am " + this.age + " years old . I like " + this.fav ;
                };
                this.shareMovie = function() {
                    return "Oh, I almost forgot, my favorite movie is " + this.movie + "!";
                };
            }
            
            var person1 = new Person('Bob',  '46', 'Reading Books', 'Casa Blanca');
            var person2 = new Person('Sarah', '19', 'Playing Sports', 'Casa Blanca');
            
           
            document.getElementById("demo").innerHTML = person1.greeting();
            document.getElementById("movie").innerHTML = person1.shareMovie();

            document.getElementById("demo1").innerHTML = person2.greeting();
            document.getElementById("movie2").innerHTML = person2.shareMovie();
            
