import { v4 as uuid } from 'uuid'
import { readClassDB, readStudentDB } from '../Services/index.js'
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

    if (data.studentId) {                                                       //disallow update id
        return Error('studentId cannot be change')
    }
    if (data.classId) {                                                         //update classId, check classId is existed or not
        const check_validate_class = ClassID_Validate(data.classId);
        if (check_validate_class == true) {
            pushStudentDB(JSON.stringify(read_student))
        } else return Error('classID does not exist in database')
    } else pushStudentDB(JSON.stringify(read_student))
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


//************GET LIST STUDENT**************//
export const listStudent = (last_name, class_name) => {
    const read_student = readStudentDB();
    const read_class = readClassDB();
    if (!last_name && !class_name) {
        read_student.map(element => {
            element.fullName = element.firstName + ' ' + element.lastName;
            return element
        })
        return read_student
    }
    else if (last_name && !class_name) {
        let find = read_student.filter((obj) => obj.lastName === last_name);
        find.map(element => {
            element.fullName = element.firstName + ' ' + element.lastName;
            return element
        })
        return find;
    }
    else if (!last_name && class_name) {
        let find_class = read_class.find((obj) => obj.className === class_name);
        let find_student = read_student.filter((obj) => obj.classId === find_class.classId);
        find_student.map(element => {
            element.fullName = element.firstName + ' ' + element.lastName;
            return element
        })
        return find_student;
    }
    else {
        const empty_array = [];
        let find_class = read_class.find((obj) => obj.className === class_name);
        let find_student = read_student.filter((obj) => obj.classId === find_class.classId);
        let find = read_student.find((obj) => obj.lastName === last_name);
        empty_array.push(find)
        if (find_student.includes(find)) {
            empty_array.map(element => {
                element.fullName = element.firstName + ' ' + element.lastName;
                return element
            })
            return empty_array
        } return Error
    }
}


//************GET STUDENT BY ID**************//
export const getStudentID = (studentID) => {
    const check_validate = studentID_Validate(studentID);
    if (!check_validate) {
        return Error
    }
    const student_database = readStudentDB();
    let find = student_database.find((obj) => obj.studentId === studentID);
    return find;
}