interface IAnimal{
    go: ()=>void,
    speak: ()=> void
}

abstract class Animal implements IAnimal{
    private name = "null"
    private legs = 4
    private head =  1

    constructor(){

    }

    public go(){
        console.log("go by")
    }

    public speak(){
        console.log("meo meo")
    }

    getName(){
        return this.name
    }
    setName(name:string){
        this.name = name
    }
    getLegs(){
        return this.legs
    }
    setLegs(quantity:number){
        this.legs = quantity
    }
    getHead(){
        return this.head
    }

    setHead(quantity:number){
        this.head = quantity
    }


}

class Cat extends Animal {
    constructor(name:string,legs:number,head:number){
        super()
        this.setName(name)
        this.setLegs(4),
            this.setHead(1)
        console.log("vào Cat")
    }
    public go(){
        super.go()
        console.log("go by cat")
    }

}

class Snake extends Animal {
    constructor(name:string, legs:number, head: number){
        super()
        this.setName(name)
        this.setLegs(legs),
            this.setHead(head)
        console.log("vào Snake")
    }

    public go(){
        super.go()
        console.log("go by snake")
    }
}
const cat = new Cat("My name's Meo",4,1)
// cat.name = "new cat's name "
// console.log("cat's name: ",cat.name)
cat.go()

const snake = new Snake("My name is Snake",0,2)
snake.go()
// interface MyObject {
//     name: string | null | undefined
//     getName: ()=> void
// }
// interface MyObject2 {
//     name: string | null | undefined
//     getName(): void
// }

// const obj1 : MyObject ={
//     name:"duminoi",
//     getName: ()=>{
//         return 123
//     }
// }

// console.log(obj1)





// interface Master{
//     id:number,
//     name: string| null | undefined
// }

// interface Subject extends Master{

// }

// interface Student extends Subject {
//     subject: Subject
// }

// const getName = (): string =>{
//     return "Duc Minh"
// }

// const _name: string = getName()
// console.log(_name)

// const students: Student[] = [
//     {
//         id: 1,
//         name: 'test',
//         subject: {
//             id: 1,
//             name: 'toan',

//         }
//     },
//     {
//         id: 2,
//         name:null,
//         subject: {
//             id: 1,
//             name:'Minh'
//         }
//     }
// ]

// console.log(students)