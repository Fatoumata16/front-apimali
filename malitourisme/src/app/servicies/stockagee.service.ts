import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaires, region } from '../modeles/log';

@Injectable({
  providedIn: 'root'
})
export class StockageeService {

  constructor( private http:HttpClient) { }
  svetoken(token:string):void{
    localStorage.removeItem(token)
    localStorage.setItem('token',token)

  }
  islogged():boolean{
    const token=localStorage.getItem('token')
    console.log(token)
    return !! token
  }
  gettoken(): string | null{
    return localStorage.getItem('token')
  }
  toutregion():Observable<region[]>{
    return this.http.get<region[]>('http://localhost:8080/regiontout')
  }
  trouverparid(id:number):Observable<region>{
    return this.http.get<region>(`http://localhost:8080/polu/${id}`)
  }
  toutcommentaire(id:number):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/populatio/${id}`)
  }
  ajoutcommentaire(id:string,u:string,com:Commentaires):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/creatione/${id}/${u}`,com)
  }
  ajoutregion(id:string,u:string,o:number,h:string,f:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/creationn/${id}/${u}${o}/${h}`,f)
  }
}
