import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {NgOptimizedImage} from "@angular/common";
import {ProjectsComponent} from "./projects/projects.component";
import {HeaderComponent} from "./header/header.component";
import {Subscription} from "rxjs";
import {LanguageService} from "./language.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NgOptimizedImage, ProjectsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

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
