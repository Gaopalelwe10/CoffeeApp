import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  name:string;
  surname:string;
  constructor(private route: Router, private routeA: ActivatedRoute) { }

  ngOnInit() {
    this.routeA.queryParams
      .subscribe(params => {
        this.name = params.name;
        this.surname = params.surname;
      
      });
    
  }
  extras(){
    // console.log(this.name);
    // console.log(this.surname)
    this.route.navigate(['extras-cappuccino'], { queryParams: { 
      name:this.name, 
      surname:this.surname ,
      } 
    });
    // this.route.navigateByUrl('extras-cappuccino')
  }
  
  extras1(){
    this.route.navigate(['extras-espresso'], { queryParams: { 
      name:this.name, 
      surname:this.surname ,
      } 
    });
    // this.route.navigateByUrl('extras-espresso')
  }
  extras2(){
    this.route.navigate(['extras-latte'], { queryParams: { 
      name:this.name, 
      surname:this.surname ,
      } 
    });
    // this.route.navigateByUrl('extras-latte')
  }
  extras3(){
    this.route.navigate(['extraslongb'], { queryParams: { 
      name:this.name, 
      surname:this.surname ,
      } 
    });
    // this.route.navigateByUrl('extraslongb')
  }
}
