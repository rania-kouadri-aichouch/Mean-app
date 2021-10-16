import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composent',
  templateUrl: './composent.component.html',
  styleUrls: ['./composent.component.css']
})
export class ComposentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public person = {nom: "ali" ,prenom : "mohammed" ,age : 22};

    public monStyle={  color:"green",
       fontStyle:"italic",

   padding:"100px",
        backgroundColor:"#FFCCFF"}


        public mStyle={ color:"green",
          fontStyle:"italic" }
          maFonction(){alert("division cliquee") };


          public fruits=[{nom :"pomme" ,img :"assets/img/1.jpg"},{nom :"pomme" ,img :"assets/img/2.jpg"}];
   public valeur : boolean = false;
      public val : boolean = true;

      public fc(){
            if(this.valeur==true){this.valeur=false;}
            else if (this.valeur==false) {this.valeur=true;}
          }



public valeurInput="";

public mavar="";
public mavar2="";

}
