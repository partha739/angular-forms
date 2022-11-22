const db=require('../util/database');
module.exports=class User{
    constructor(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
    }

    static find(email){
        return db.execute('select * from user where email=?',[email]);
    }
    static save(user){
        db.execute('insert into user (name,email,password) values(?,?,?)',[user.name,user.email,user.password])

    }
}