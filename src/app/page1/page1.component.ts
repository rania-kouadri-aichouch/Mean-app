import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cour} from '../cour';
import {S1Service} from '../s1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  cours: Array<Cour>;

  constructor(private router:Router,private l:S1Service) { }

  ngOnInit() {
    this.l.getCours()
    .subscribe(resCours => this.cours=resCours);
  }

  OnUpdateFunction(u){
    console.log(u._id);
    this.router.navigate(['/cours',u._id])
  };

 OnDeleteFunction(u){
   console.log(u._id);
   this.router.navigate(['/page1'])
  }



OnDeleteCour(u){
  this.l.DeleteCour(u)
  .subscribe(date=>this.cours.splice(u._id,1));
  this.router.navigate(['/page1'])
}
}
