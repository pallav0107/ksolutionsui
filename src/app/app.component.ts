import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ksolutions';

  activeFragment = this.activatedRoute.fragment.pipe(share());
  constructor(private activatedRoute:ActivatedRoute){}
  
  ngOnInit(){
    this.activatedRoute.fragment.subscribe((val)=>{
      // console.log(val);
      this.scrollToDiv(val);
    });
     
  }

  scrollToDiv(val: any = ""){
  if(val != null && val != undefined && val != ""){
   document.getElementById(val).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }
}
}
