const database = [];

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(database);
        },3000);
    });
};

const getCloth = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(database[0]);
        },3000);
    });
};

export default getProducts;

export {getCloth};