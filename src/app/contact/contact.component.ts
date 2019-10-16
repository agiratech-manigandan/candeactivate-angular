import { Component, OnInit } from '@angular/core';
import { CanExit } from './../can-exit.guard';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, CanExit {

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): Promise<any> | boolean {
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
    if (confirmResult === true) {
      return true;
    } else {
      return false;
    }
  }

}
