import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {LanguageService} from "../language.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects: any[''];
  currentLanguage: string = 'en';
  private languageSubscription: Subscription = new Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(language => {
      this.currentLanguage = language;
      this.languageService.getProjects().subscribe( projects => {
        this.projects = projects['projects'];
      })
    })
  }
}
