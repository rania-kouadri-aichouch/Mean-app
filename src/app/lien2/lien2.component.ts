import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lien2',
  templateUrl: './lien2.component.html',
  styleUrls: ['./lien2.component.css']
})
export class Lien2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public valeurInput="";

  public mavar="";
  public mavar2="";
  public mavar3="";

  public form={

    padding:"20px",


  }

  public input={

  width:"60%",
  height:"35px",
  margin:"25px"


  }

  public in={

  width:"60%",
  height:"35px",
  margin:"25px"


  }
}
