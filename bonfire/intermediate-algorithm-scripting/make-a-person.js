/**
 @author Joffrey C. K.
 http://www.freecodecamp.com/Zoay

 */

var Person = function(firstAndLast) {
    var name = firstAndLast.split(' ');
    this.mFullName = firstAndLast;
    this.mFirstName = name[0];
    this.mLastName = name[1];

    this.getFirstName = function(){
        return this.mFirstName;
    };

    this.getLastName = function(){
        return this.mLastName;
    };

    this.getFullName = function(){
        return this.mFullName;
    }
};

Person.prototype.setFirstName = function(firstName){
    this.mFirstName = firstName
};

Person.prototype.setFullName = function(fullName){
    this.mFullName = fullName;
};

Person.prototype.setLastName = function(lastName){
    this.mLastName = lastName;
};

var bob = new Person('Bob Ross');
bob.getFullName();

