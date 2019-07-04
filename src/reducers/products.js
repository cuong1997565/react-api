var initialState = [
    {
        id : 1,
        name : "Iphone 6 Plus",
        price : 400,
        status : true
    },
    {
        id : 2,
        name : "Samsung glaxy S7 Edge",
        price : 700,
        status : false
    },
    {
        id : 3,
        name : "Oppo",
        price : 400,
        status : true
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;