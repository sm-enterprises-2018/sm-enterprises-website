import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-job-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-category.component.html',
  styleUrl: './job-category.component.scss'
})
export class JobCategoryComponent {

selectedJobTitle: string | null = null;

  jobCategories = [
    { title: 'Security', description: 'Ensures site safety, monitors entry points, and maintains order.' },
    { title: 'Driver', description: 'Safely transports people or goods, maintaining schedules and vehicle upkeep.' },
    { title: 'Manpower Labour', description: 'Supports physical tasks at sites including lifting, shifting, and setup.' },
    { title: 'Data Operator', description: 'Manages data entry and documentation with accuracy and speed.' },
    { title: 'Attender', description: 'Assists staff and handles routine office or facility duties efficiently.' },
    { title: 'Office Staff', description: 'Performs administrative and clerical duties to support daily operations.' },
    { title: 'Civil Worker', description: 'Handles construction and maintenance tasks with hands-on technical skill.' }
  ];

  toggleDescription(title: string): void {
    this.selectedJobTitle = this.selectedJobTitle === title ? null : title;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.job-title-trigger');
    if (!clickedInside) {
      this.selectedJobTitle = null;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.selectedJobTitle = null;
  }
}
