import { addStudent as create_student } from './Services/student_services.js';
import { addClass as create_class } from './Services/class_services.js';

const HieuQDT = create_student('Hieu', 'Quach Duong Trong', '13/12/1998', 'Ha Noi', 'Good');
const F8 = create_class('F8', '31/05/2021', '31/06/2021');
console.log(HieuQDT)
console.log(F8)

