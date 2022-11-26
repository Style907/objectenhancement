const createInstructor = (firstname, lastname) => { return {firstname, lastname}}

const favoriteNum = 42
const instructor = { firstName: 'colt'}
instructor[favoriteNum] = 'thats my favorite'

const instructor = {firstName: "Colt",
    sayHi(){return "Hi!";},
    sayBye(){return this.firstName + " says bye!";}
  }

const createAnimal = (species, says, noise) => {const animal = {species, says, noise}; return animal}