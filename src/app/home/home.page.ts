import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  info:FormGroup;

  constructor(private fb: FormBuilder, private route: Router) { 
    this.info=this.fb.group({
      name: ['' ,Validators.required],
      surname:['', Validators.required],
      // age: [0,Validators.required],
      // gender:['',Validators.required]
    });
  }
  name:string="";
  surname:string="";
  ngOnInit() {
  }
  submit({value,valid}:{value:person,valid:boolean}){

    // console.log(valid)
    this.name=value.name;
    this.surname=value.surname;
      //  console.log(value.name);
      // console.log(value.surname);

      // console.log(value.age);
      // console.log(value.gender);
      // console.log(info.name);
      // console.log(info.surname);
      // console.log(info.age);
      // console.log(info.gender);      

      // this.route.navigateByUrl('menu')
      this.route.navigate(['menu'], { queryParams: { 
        name:this.name, 
        surname:this.surname ,
      } 
    });
  }
  extras(){
    this.route.navigateByUrl('menu')
  }
}
