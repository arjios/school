import Student from '../models/studentModel'

let students: Student[] = []

export const findAllStudents = (): Student[] => {
    return students
}

export const findById = (id: number): Student | undefined => {
    const index = students.findIndex(idx => idx.id === id)
    if(index === -1) {
        return undefined
    }
    return students[index]
}

export const insert = (student: Student): void => {
    students.push(student)
}

export const update = (id: number, {firstName, lastName, course, email, password}: any): Student | undefined => {
    const index = students.findIndex(idx => idx.id === id)
    if(index !== -1) {
        students[index] = {
            id,
            firstName,
            lastName,
            course,
            email,
            password
        }
        return students[index]
    }
    return undefined
}

export const remove = (id: number): boolean => {
    let boo = false
    const initLength = students.length
    students = students.filter(student => student.id !== id)
    if(initLength > students.length) {
        boo = true
    }
    return boo
}