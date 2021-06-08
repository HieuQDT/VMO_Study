import * as fs from 'fs';
export{writeClassDB,pushClassDB,readClassDB}

//************DELETE ALL WRITE NEW**************//
const writeClassDB = (data) => {
    try {
        const writefile = fs.writeFileSync('./Record/Class_DB.json', data)
    } catch (err) {
        console.error(err)
    }
}

//************DOESN'T DELETE, CONTINUE WRITE**************//
const pushClassDB = (data) => {
    fs.writeFile('./Record/Class_DB.json', data, err => {
        if (err) {
            console.error(err);
            return
        }
    })
}

//************READ DATA**************//
const readClassDB = (data) => {
    try {
        const data = fs.readFileSync('./Record/Class_DB.json', 'utf8');
        if (data) {
            return JSON.parse(data);
        } else return null;
    } catch (err) {
        console.error(err);
    }
}
