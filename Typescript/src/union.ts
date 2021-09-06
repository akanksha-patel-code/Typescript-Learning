//union
interface EmployeeInterface {
    name: string;
    surname: string;
}
let empName: string = "Alex";
let count:  string | number = 1;
let errorMessage : string | null = null; 
let employee: EmployeeInterface | null = null;