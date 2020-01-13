import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  getAll(url) {
    return this.http.get<any>(url);
  }
  getOne(url, id) {
    return this.http.get<any>(url + '/' + id);
  }
  post(url, body) {
    return this.http.post<any>(url, body);
  }
  update(url, id, body) {
    return this.http.put<any>(url + '/' + id, body);
  }
  delete(url, id) {
    return this.http.delete<any>(url + '/' + id);
  }
  put(url, body) {
    return this.http.put<any>(url, body);
  }
}