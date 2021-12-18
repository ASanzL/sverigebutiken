import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products = products;
  breakpoint: number = 3;

  public constructor(private titleService: Title) {
    this.setTitle('SverigeButiken');
  }

  ngOnInit() {
    this.breakpoint = this.getColSize(window.innerWidth);
  }

  onResize(event: any) {
    this.breakpoint = this.getColSize(event.target.innerWidth);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  private getColSize(windowWidth: number) {
    if (windowWidth < 480) {
      return 1;
    } else if (windowWidth < 720) {
      return 2;
    } else if (windowWidth < 1000) {
      return 3;
    } else if (windowWidth < 1400) {
      return 4;
    } else {
      return 5;
    }
  }
}
