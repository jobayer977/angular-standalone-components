import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
