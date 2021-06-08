import { v4 as uuid } from 'uuid';
import { classId as classID_services } from './class_services.js'

export const addStudent = (firstName, lastName, dob, address, conduct) => {
    let empty_array = [];
    let obj = { id: uuid(), firstName, lastName, classID_services, dob, address, conduct };
    if (obj.firstName == undefined || obj.lastName == undefined || obj.dob == undefined || obj.address == undefined) {
        return Error('Mandatory field is missing!');
    } else empty_array.push(obj);
    return empty_array;
}


