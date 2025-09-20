import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { JobCategoryComponent } from "./job-category/job-category.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { CommunicateUsComponent } from "./communicate-us/communicate-us.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, JobCategoryComponent, HomeComponent, AboutusComponent, CommunicateUsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sm-enterprises-web';
}
