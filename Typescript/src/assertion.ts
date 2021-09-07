//assertiom
let vAny1: any = 10;
let vUnknown1: unknown = 10;

let s3: string = vAny;
let s4: string = vUnknown as string;

let pageNumber: string = "1"
let numericPageNumber: number = (pageNumber as unknown) as number