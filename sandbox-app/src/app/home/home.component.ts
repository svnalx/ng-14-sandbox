import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doNav(): void {
    console.log('doNav 4');
    this.router.navigateByUrl('/cort').then((_) => {
      console.log('doNav 5');
    });
    console.log('doNav 6');
  }
}
