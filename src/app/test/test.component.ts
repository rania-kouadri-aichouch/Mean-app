import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public monStyle={

       padding:"20px",
      backgroundColor:"	#1E90FF"
    };

    public nav={
      backgroundColor:"	#1E90FF",
      padding:"5px",


      listStyleType: "none",
      display: "flex",
               flexDirection:"row",
               justifyContent:"space-between"




    }
    public list={

      padding:"7px",
      color:"white",
      display: "flex",
      flexDirection: "row",
      justifyContent:"flex-end",



    }

    public logo={

      width:"80px",
      height:"50px",
      paddingLeft:"10px",
      display: "flex",

      justifyContent:"flex-start",

    }

    public cont={
      borderStyle: "dotted",
      borderColor:"red"
    }

}
