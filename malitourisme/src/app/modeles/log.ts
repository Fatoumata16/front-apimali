export class logi{
    username!:String;
    password!:String;
    
    constructor(username:String,password:String){
        this.username=username;
        this.password=password;
    }
    
    
}
export class region{
    codeRegion!:number
    nomn!: string;
    domaineact!: string;
    superficie!: number;
    languemaj!: string;
    imag!: string;
    constructor(nom:string,domaine:string,superficie:number,langue:string,ima:string,id:number){
        this.codeRegion=id;
        this.nomn=nom;
        this.domaineact=domaine;
        this.superficie=superficie;
        this.languemaj=langue;
        this.imag=ima;
    }
}
export class Commentaires{
    contenuecomm!:string;
    constructor(contenuecomm:string){
            this.contenuecomm= contenuecomm

    }
}