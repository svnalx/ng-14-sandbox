import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cort',
  templateUrl: './cort.component.html',
  styleUrls: ['./cort.component.scss'],
})
export class CortComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goHome(): void {
    console.log('goHome 1');
    this.router.navigateByUrl('/').then((_) => {
      console.log('goHome 2');
    });
    console.log('goHome 3');
  }
}
