import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Cour} from '../cour';
import {S1Service} from '../s1.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  public courId="";
  public t;
  public m;
  public d;
  public h;
  public du;
  public des;

  constructor(private route:ActivatedRoute , private router:Router ,private s:S1Service) { }

  ngOnInit() {
   var id=this.route.snapshot.paramMap.get('id');
    this.courId=id;
    this.s.getCourById(id)
    .subscribe(res=> {this.t=res.titre;this.m=res.module;this.d=res.date;this.h=res.heur;this.du=res.duree;this.des=res.description;})
  }

   OnUpdate(cour : any){
     cour._id=this.courId;
     console.log("id :"+cour._id)
     console.log("id :"+cour.titre)
     console.log("id :"+cour.module)
     console.log("id :"+cour.date)
     console.log("id :"+cour.heur)
     console.log("id :"+cour.duree)
     console.log("id :"+cour.description)
      this.s.UpdateCour(cour).subscribe(res =>{
        console.log("updated"+res);
        cour=res;
        this.router.navigate(['/page1'])
      });

   }
}
