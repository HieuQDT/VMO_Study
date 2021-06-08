import { addStudent} from './Services/student_services.js';

//import * as fs from 'fs'

const HieuQDT = addStudent('Hieu', 'Quach Duong Trong', '13/12/1998', 'Ha Noi', "7f56affa-9330-45d0-b56c-bd17fd096570", 'Good');


//Input class
import { addClass } from './Services/class_services.js';
const F8 = addClass('F8', new Date(Date.UTC(2021,4-1,30,12,0,0)), new Date(Date.UTC(2021,9-1,30,12,0,0)));
const F7 = addClass('F7', new Date(Date.UTC(2021,4-1,30,12,0,0)), undefined);
const F6 = addClass('F6', new Date(Date.UTC(2021,4-1,30,12,0,0)), undefined);


