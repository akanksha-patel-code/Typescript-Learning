//void
const doSomething = (): void => {
    console.log("doSomething");
}

//any
let foo: any = "foo"
console.log(foo.bar());

//never
const doSomethingNever = (): never => {
    throw 'never'
}

//unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
console.log(vAny.bar());

//let s2: string = vUnknown;
//console.log(vUnknown.bar());