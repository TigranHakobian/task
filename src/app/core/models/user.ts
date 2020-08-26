export class User{
    constructor(
         id: number,
         name: string,
         login: string,
         password:string, 
         phone :number,  
    ){
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
        this.phone =phone;
        }
  public id: number;
    public name: string;
    public login: string;
    public password:string;    
    public phone :number;    
}