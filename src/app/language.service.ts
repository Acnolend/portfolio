import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en';
  private messages: any;

  constructor(private http: HttpClient) {}

  setLanguage(language: string): void {
    this.currentLanguage = language;
    this.loadMessages(language).subscribe(messages => this.messages = messages);
  }

  getLanguage(): string {
    return this.currentLanguage;
  }

  getMessage(key: string): string {
    return this.messages[key] || '';
  }

  private loadMessages(language: string): Observable<any> {
    return this.http.get<any>(`assets/messages-${language}.json`);
  }

  getProjects(): Observable<any> {
    return this.http.get<any>('assets/list-projects.json');
  }
}
