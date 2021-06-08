import { v4 as uuid } from 'uuid';
import { readClassDB } from '../Services/index.js'

const studentValidate = (firstName, lastName, dob, address, classId) => {
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
    if (!classId) {
        return Error('classID is missing');
    } else {
        const class_database = readClassDB()
        const classID_array = class_database.map(element => {
            return element.classId;
        })
        console.log(classID_array);
        if (!classID_array.includes(classId)){
            return Error('classID does not exist in database');
        }
    }
    return true;
}

export const addStudent = (firstName, lastName, dob, address, classId, conduct) => {
    try {
        const check_validate = studentValidate(firstName, lastName, dob, address, classId);
        if (!check_validate) {
            return Error
        }
        let empty_array = [];
        let obj = { id: uuid(), firstName, lastName, classId, dob, address, conduct };
        empty_array.push(obj);
        return empty_array;
    } catch (error) {
        return error;
    }

}


