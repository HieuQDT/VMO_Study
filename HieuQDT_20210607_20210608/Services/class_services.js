import { v4 as uuid } from 'uuid';
import { readClassDB } from '../Services/index.js'
import { writeClassDB } from '../Services/index.js'
import { pushClassDB } from '../Services/index.js'



//************VALIDATE DATA**************//
const classValidate = (className, startDate, endDate) => {
    if (!className) {
        return false;
    }
    if (!startDate) {
        return false;
    }
    if (endDate && endDate < startDate) {
        return false;
    }
    return true;
}

//************ADD CLASS**************//
const array = [];
export const addClass = (className, startDate, endDate) => {
    const classId = uuid();
    const check_validate = classValidate(className, startDate);
    let obj = { classId, className, startDate };
    if (!check_validate) {
        return Error
    }
    if (endDate) {                                                            //if endDate exist
        obj.end_date = endDate
    }
    const read_class = readClassDB()
    if (read_class) {
        read_class.push(obj)
        writeClassDB(JSON.stringify(read_class));
    }
    else {
        array.push(obj)
        pushClassDB(JSON.stringify(array));
    }
}
