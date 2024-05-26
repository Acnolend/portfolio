import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../language.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  languageSubscription: Subscription = new Subscription();
  messages: any = {};


  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageSubscription = this.languageService.currentLanguage.subscribe( language => {
      this.languageService.loadMessages(language).subscribe(data => {
        this.messages = data;
      })
    })
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
}
