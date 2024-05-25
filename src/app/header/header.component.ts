import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  welcomeMessage: string = '';

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
    console.log(language);
  }
}
