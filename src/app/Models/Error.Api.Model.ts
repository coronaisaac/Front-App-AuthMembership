export class ErrorApiPettition{
    type: string;
    title: string;
    status: number;
    instance: string;
    
     constructor(type:string, title:string, status:number, instance: string) {
         this.type = type;
         this.title = title;
         this.status = status;
         this.instance = instance;
     }
}