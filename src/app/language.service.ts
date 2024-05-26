import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage = this.currentLanguageSubject.asObservable();

  constructor(private http: HttpClient) {}

  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
  }

  loadMessages(language: string): Observable<string[]> {
    return this.http.get<any>(`assets/messages-${language}.json`);
  }

  getProjects(): Observable<any> {
    return this.http.get<any>('assets/list-projects.json');
  }
}
