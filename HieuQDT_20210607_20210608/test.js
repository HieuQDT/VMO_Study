// STUDENT TESTING

// Add student
// import { addStudent } from './Services/student_services.js';
// const HieuQDT = addStudent('Hieu', 'Quach Duong Trong', '13/12/1998', 'Ha Noi', "a74906ce-1cdc-4d09-b710-701385de6154", 'Good');
// const CuongND = addStudent('Cuong', 'Nguyen Dac', '16/05/2000', 'Ha Noi', "a74906ce-1cdc-4d09-b710-701385de6154", 'Good');
// const HieuPT = addStudent('Hieu', 'Pham Trung', '16/11/1998', 'Ha Noi', "a74906ce-1cdc-4d09-b710-701385de6154", 'Good');

// Update student
// import { updateStudent } from './Services/student_services.js';
// const update = updateStudent('4dda71f8-261c-4a74-95f0-c3f42aefaed2', {firstName: "Hieu"})
// const update = updateStudent('4dda71f8-261c-4a74-95f0-c3f42aefaed2', {studentId: "abc"})
// const update = updateStudent('4dda71f8-261c-4a74-95f0-c3f42aefaed2', {classId: "abc"})
// const update = updateStudent('4dda71f8-261c-4a74-95f0-c3f42aefaed2', {classId: "a74906ce-1cdc-4d09-b710-701385de6154"})

// Delete student
// import { deleteStudent } from './Services/student_services.js';
// const delete_HieuPT = deleteStudent('ed7ca225-c37a-43fa-aaa8-ac03af9735a7')

// Get list student
import { listStudent} from './Services/student_services.js';
// const get_HieuQDT = listStudent('Quach Duong Trong','F8')
const get_HieuQDT = listStudent('Quach Duong Trong',undefined)
// const get_HieuQDT = listStudent(undefined,'F8')
// const get_HieuQDT = listStudent(undefined,undefined)
console.log(get_HieuQDT)

// Get Student by ID
// import { getStudentID} from './Services/student_services.js';
// const HieuQDT = getStudentID('4dda71f8-261c-4a74-95f0-c3f42aefaed2');
// console.log(HieuQDT)



// CLASS TESTING

// Add class
// import { addClass } from './Services/class_services.js';
// const F8 = addClass('F8', new Date(Date.UTC(2021,4-1,30,12,0,0)), new Date(Date.UTC(2021,9-1,30,12,0,0)));
// const F7 = addClass('F7', new Date(Date.UTC(2021,4-1,30,12,0,0)), undefined);
// const F6 = addClass('F6', new Date(Date.UTC(2021,4-1,30,12,0,0)), undefined);

// Update class
// import { updateClass } from './Services/class_services.js';
// const update = updateClass('a74906ce-1cdc-4d09-b710-701385de6154',{className: "F10"})

// Delete class
// import { deleteClass } from './Services/class_services.js';
// const delete_F6 = deleteClass('631fc9e9-92a4-4ad9-8146-f05dfe736092')

//Get class file
// import { listClass } from './Services/class_services.js';
// const F8 = listClass('F8')
// console.log(F8)

