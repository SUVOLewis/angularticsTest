import { Component, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  imports: [
    Angulartics2Module,
  ]
})

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  test = 'Test';

  constructor(private angulartics2: Angulartics2) {
    this.test = 'Test2';

    this.angulartics2.eventTrack.next({
      action: 'aboutClicked',
      properties: { category: 'testCategory'}
    });
   }

  btnClicked() {
    debugger;
    this.angulartics2.eventTrack.next({
      action: 'buttonClicked',
      properties: { category: 'testCategory'}
    });

    console.log('event fired');
 }

  ngOnInit() {

  }

}
