//void
var doSomething = function () {
    console.log("doSomething");
};
//any
var foo = "foo";
console.log(foo.bar());
//never
var doSomethingNever = function () {
    throw 'never';
};
//unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
console.log(vAny.bar());
//let s2: string = vUnknown;
//console.log(vUnknown.bar());
