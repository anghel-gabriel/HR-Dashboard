import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  prevUserSelected: number = -1;
  @Input() users: any;
  @Output() selectUserEvent = new EventEmitter<number>();

  handleUserClick(indexOfUserClicked: number) {
    if (this.prevUserSelected === indexOfUserClicked) {
      this.selectUserEvent.emit(-1);
      this.prevUserSelected = -1;
    } else {
      this.selectUserEvent.emit(indexOfUserClicked);
      this.prevUserSelected = indexOfUserClicked;
    }
  }
}
