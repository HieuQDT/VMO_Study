import { v4 as uuid } from 'uuid'
import { readStudentDB } from '../Services/index.js'
import { writeStudentDB } from '../Services/index.js'
import { pushStudentDB } from '../Services/index.js'
import { ClassID_Validate } from '../Services/class_services.js'

//************VALIDATE DATA**************//
const studentValidate = (firstName, lastName, dob, address) => {
    if (!firstName) {
        return Error('firstName is missing');
    }
    if (!lastName) {
        return Error('lastName is missing');
    }
    if (!dob) {
        return Error('dob is missing');
    }
    if (!address) {
        return Error('address is missing');
    }
    return true;
}

const studentID_Validate = (studentId) => {
    if (!studentId) {
        return Error('studentID is missing');
    } else {
        const student_database = readStudentDB()
        const studentID_array = student_database.map(element => {
            return element.studentId;
        })
        if (!studentID_array.includes(studentId)) {
            return Error('studentID does not exist in database');
        }
    }
    return true;
}
//************ADD STUDENT**************//
const array = [];
export const addStudent = (firstName, lastName, dob, address, classId, conduct) => {
    const studentId = uuid();
    const check_validate = studentValidate(firstName, lastName, dob, address);
    if (!check_validate) {
        return Error
    }

    const check_validate_class = ClassID_Validate(classId);
    if (!check_validate_class) {
        return Error
    }

    let obj = { studentId, firstName, lastName, dob, address, classId, conduct };
    const read_student = readStudentDB()
    if (read_student) {
        read_student.push(obj)
        writeStudentDB(JSON.stringify(read_student));
    }
    else {
        array.push(obj)
        pushStudentDB(JSON.stringify(array));
    }
}


// //************UPDATE STUDENT**************//
export const updateStudent = (studentID, data) => {
    const check_validate = studentID_Validate(studentID);
    if (!check_validate) {
        return Error
    }
    const read_student = readStudentDB();
    const ObjIndex = read_student.findIndex((obj) => obj.studentId == studentID);
    read_student[ObjIndex] = { ...read_student[ObjIndex], ...data };
    pushStudentDB(JSON.stringify(read_student))
}

//************DELETE STUDENT**************//
export const deleteStudent = (studentID) => {
    const check_validate = studentID_Validate(studentID);
    if (!check_validate) {
        return Error
    }
    const read_student = readStudentDB();
    const update = read_student.filter((obj) => obj.studentId !== studentID);
    pushStudentDB(JSON.stringify(update))
}