//Have an array contain 5000 objects. The goal is to sort them upon sites. 
//Received in sites number and the amount of object return on one site. 

const ten = [
    {
        username: '1',
        password: 'AAA',
    },
    {
        username: '2',
        password: 'BBB',
    },
    {
        username: '3',
        password: 'CCC',
    },
    {
        username: '4',
        password: 'DDD',
    },
    {
        username: '5',
        password: 'EEE',
    },
    {
        username: '6',
        password: 'FFF',
    },
    {
        username: '7',
        password: 'GGG',
    },
    {
        username: '8',
        password: 'HHH',
    },
    {
        username: '9',
        password: 'III',
    },
    {
        username: '10',
        password: 'KKK',
    },
];

const forReal = (pageNumber, pageSize) => {
    if (pageNumber <= 0 || pageSize <= 0) return false;
    const pageCount = Math.ceil(ten.length / pageSize);
    if (pageNumber > pageCount) return false;
    const result = ten.slice(pageSize * (pageNumber - 1), pageSize * pageNumber);
    let empty_obj = {
        data: result,
        page: pageNumber,
        pageSize: pageSize,
        totalPage: pageCount,
        totalItem: ten.length,
    };

    return empty_obj;
};

const a = forReal(1, 3);