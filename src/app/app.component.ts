import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeUser: number = -1;

  users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      imageSrc: '../../assets/JohnDoe.jpg',
      job: 'JavaScript Developer',
    },
    {
      firstName: 'Anghel',
      lastName: 'Doe',
      imageSrc: '../../assets/JohnDoe.jpg',
      job: 'JavaScript Developer',
    },
  ];

  selectActiveUser(indexOfActiveUser: number) {
    this.activeUser = indexOfActiveUser;
  }
}
