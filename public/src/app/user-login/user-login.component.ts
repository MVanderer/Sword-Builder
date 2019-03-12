import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  logingIn=true;

  constructor() { }

  ngOnInit() {
  }

  // MR: this.flip() could be reduced to one line, something like -- this.logingIn = !this.logingIn

  flip(){
    if (this.logingIn) {
      this.logingIn=false;
    }
    else{
      this.logingIn=true;
    }
  }

}
