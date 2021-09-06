//interface
interface DataInterface {
    name: string, // mandatory property
    age?:number // optional property
    getMessage() : string // function in interface
}

const data: DataInterface = {
    name: 'Akanksha',
    age: 26,
    getMessage(){
        return "hello";
    }
}

const data1: DataInterface = {
    name: "jack",
    getMessage(){
        return "bye";
    }
}