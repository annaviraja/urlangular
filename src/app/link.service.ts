import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http:HttpClient) { }
  postLink(data):Observable<any>{
    return this.http.post('https://url-shortner-annavi.herokuapp.com/',data)

  }
 
}
