class form{
    constructor(id, lastname, firstname, email, phonenumber, request){
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.request = request;

    }
}

const data = [];

exports.addForm = function(dat){
let id = data.length;
data.push(new Form(id, dat.lastname, dat.firstname, dat.email, dat.phonenumber, dat.request));
return true;
}
exports.allForm = data;