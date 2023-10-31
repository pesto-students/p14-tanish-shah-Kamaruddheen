const Person = {
    _name: "Max",
    _age: undefined,
    _email: "max@abc.com",

    getName: function () {
        return this._name
    },

    getEmail: function () {
        return this._email
    },

    getAge: function () {
        return this._age
    },

    setAge: function (newAge) {
        this._age = newAge
    },
}

var person_obj = Object.create(Person)

// Name & Email - readonly
console.log(person_obj.getName()) 
console.log(person_obj.getEmail()) 

// Age - writeonly
person_obj.setAge(25)
console.log(person_obj.getAge()) 
  