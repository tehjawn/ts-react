import * as React from "react";

// Interface : HelloProps --> Needs { compiler, framework }
export 
interface HelloProps { }

// export const Hello = (props: HelloProps) => 
// <h1>Hello from {props.compiler} and {props.framework}!</h1>;

let bool : boolean = false;

let dec : number = 6;
let hex : number = 0xf00d;
let bin : number = 0b1010;
let oct : number = 0o744;

let str : string = "This is a string";
str = "2";

let fullName : string = "John Nguyen"
let age : number = 21
let sentence : string = `Hi, I'm ${fullName} and I am ${age} yrs old.`

let numArr : number[] = [1,2,3]

let numArryGen : Array<number> = [2, 3, 4]

let x : [string, number] = ["foo", 1]
let y = x[0].substr(1)

enum Color {Red = 1, Green, Blue}
let colorName: Color = Color.Green;

let notSure: any = 4;
notSure = "string"
notSure = false

// class Person {
// 	constructor(
// 		public name: string, 
// 		public age: number, 
// 		public id: number
// 	) {}
// }

interface PersonInfo {
  name: string
  age: number
  id: number
}

class PersonFactory {
  peopleList:Array<Person> = []

  constructor(){}

  generatePerson(personInfo:PersonInfo){
    let newPerson = new Person(personInfo)
    this.peopleList.push(newPerson)
    return newPerson
  }
}

class Person {
  _name: string
  _age: number
  _id: number

  constructor({ name, age, id }:PersonInfo) {
    this._name = name
    this._age = age
    this._id = id
  }
  
  get name() { return this._name }
}

let PF = new PersonFactory()
let John = PF.generatePerson({ name: 'John', age: 21, id: 1 })

console.log(John)

// let people: Array<Person> = []
// people.push(new Person(
//   "John",
//   21,
//   1
// ))

// people.push({
//   age: 22,
//   name: "Sup",
//   id: 2
// })

// people.push({
//   name: "Doge",
//   age: 17,
//   id: 3
// })

// console.log(people)

// Class : Hello --> Returns Hello H1 with HelloProps
export 
class Hello extends React.Component<HelloProps, undefined> {
  render() {
  	// let peopleNames: any[] = people.filter(person => {
		// 	return person.age >= 21
		// }).map(person => {
		// 	return <li key={person.id}>Hello {person.name}!</li>
		// })

		// let peopleAges: number = people.map(person => {
    //   return person.age
    // }).reduce((arr, val) => {
    //   return arr + val
    // }, 0)

    return (
      <div>
        {/*{peopleAges}*/}
        <ol>
          {/*{peopleNames}*/}test
        </ol>
      </div>
  	);
  }
}