import { v4 as uuid } from 'uuid';

export const classId = uuid()

export const addClass = (className, startDate, endDate) => {
    const empty_array = [];
    let result
    if (className == undefined || startDate == undefined) {
        return Error('Mandatory field is missing!');
    }
    const startDate_array = startDate.split('/');
    const startDate_Value = new Date(Date.UTC(startDate_array[2], startDate_array[1] - 1, startDate_array[0]));
    let obj = { classId, className, startDate_Value };

    if (endDate != undefined) {
        const endDate_array = endDate.split('/');
        const endDate_Value = new Date(Date.UTC(endDate_array[2], endDate_array[1] - 1, endDate_array[0]));
        if (startDate_Value > endDate_Value) {
            return Error('EndDate must be later than StartDate')
        }
        else obj.end_date = endDate_Value
        empty_array.push(obj);
        return empty_array
    } 
    else empty_array.push(obj);
    return empty_array
}

