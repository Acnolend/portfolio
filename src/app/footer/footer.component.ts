import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

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

}
