
type student = {
    id: number
    firstName: string
    lastname: string
    course: string
    email: string
    password: string
}

interface studentRepository {
    finndById(id: number): student
    findAll(): student
    insert({firstName, lastName, course, email, password}: any): student
    update(id: number, {firstName, lastName, course, email, password}: any): student
    remove(id: number): boolean
}


