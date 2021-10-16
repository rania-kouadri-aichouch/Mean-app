import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Cour} from '../cour';
import {S1Service} from '../s1.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private router:Router,private l:S1Service) { }
    cours=[];
  ngOnInit(){
  }
    OnSubmitAddCour(cour: Cour){
      this.l.addCours(cour)
     .subscribe(resNextCour =>this.cours.push(resNextCour));
     this.router.navigate(['/page1']);
     //console.log(cour);
   }
}
