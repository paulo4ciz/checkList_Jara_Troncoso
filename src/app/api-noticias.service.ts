import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiNoticiasService {
  //public apiKey:any='4ae70857eb4d47cca46890fb7b857e1c';
  public apiKey:any='4ae70857eb4d47cca46890fb7b857e1c';
                      
  constructor( public http:HttpClient) { }

  getNews(topic){
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2022-11-20&sortBy=publishedAt&apiKey='+this.apiKey)
  }                       
}
