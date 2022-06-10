import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
userModel = new User(' ',' ',' ',' ', 99, ' ');
 

  constructor() {
  
   }

  ngOnInit(): void {
  }
  onnSubmit(){
    console.log(this.userModel);
  }
}
