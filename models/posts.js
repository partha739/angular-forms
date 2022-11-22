const db=require('../util/database');
module.exports=class Post{
    constructor(title,body,user){
    this.title=title;
    this.body=body;
    this.user=user;
    }
    static fetchAll(){
        return db.execute('select * from posts');
    }

   
    static save(post){
        db.execute('insert into posts (title,body,user) values(?,?,?)',[post.title,post.body,post.user])

    }
    static delete(id){
        return db.execute('delete from posts where id=?',[id]);
    }
}