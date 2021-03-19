class course{
    constructor(id, name, coursecontent, price){
        this.id = id;
        this.name = name;
        this.coursecontent = coursecontent;
        this.price = price;
    }
}

const data = [   
    new course( 0, "Mongo","01/04/2021","random content","1 BTC"),
    new course( 1, "Mongoo","03/04/2021","random content","1 BTC"), 
    new course( 2, "Mongooo","04/04/2021","random content","1 BTC"),
    new course( 3, "Mongoooo","05/04/2021","random content","1 BTC"),
    new course( 4, "Mongooooo","06/04/2021","random content","1 BTC"),
    new course( 5, "Node","07/04/2021","random content","1 BTC"),
    new course( 6, "Noode","08/04/2021","random content","1 BTC"),
    new course( 7, "Nooode","09/04/2021","random content","1 BTC"),
    new course( 8, "Noooode","10/04/2021","random content","1 BTC"),
    new course( 9, "Nooooode","10/04/2021","random content","1 BTC"),
];

exports.getCourseById = function(id){
return data[id];
}
exports.allCourse = data;