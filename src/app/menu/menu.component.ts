import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit{
  @ViewChild('humburger') hamburgerval: ElementRef;
  @ViewChild('menus') menus: ElementRef;

  //@Input() anchorTg:ElementRef;
  //this.router.navigate([], { fragment: linkTarget });
  
  constructor(private route: ActivatedRoute) { }
  
  isDivVisible = false;

  @HostListener('document:click', ['$event'])
  onClick(event: Event){
    // Check if the click event occurred outside the div
    if (!(this.menus.nativeElement.contains(event.target))) {
      // Click occurred outside the div, so hide it
      this.isDivVisible = false;
    }
  }
  
  ngAfterViewInit() {
      const hambergurEl: HTMLElement = this.hamburgerval.nativeElement;

    hambergurEl.addEventListener('click', (e) => {
       e.stopPropagation();
        this.isDivVisible = !this.isDivVisible;
        //menusEl.style.display != "block" ? menusEl.style.display = "block": menusEl.style.display = "none";
      });
}
// @Output() tar:EventEmitter<string>
//        = new EventEmitter<string>();


  //@Output() emitter:EventEmitter<any> = new EventEmitter<any>();
  getClass(event:any){

    let el = event.target as HTMLElement;
    el.classList.add('active');

    let elements = document.querySelectorAll('.active');
    console.log(elements.length);

    if(elements.length > 1){

      elements.forEach(function (element) {
        console.log(element.innerHTML);
        element.classList.remove('active');
        el.classList.add('active');
       
      });      
    }
    this.isDivVisible = false;
    
    // else {
    //   el.classList.add('active');
    //     this.isDivVisible = false;
    // }
  
  
   

  //  let lis:HTMLCollection = el.parentElement.parentElement.children;
  //  const siblings = Array.from(lis);
  // console.log(lis);
  //  let homeLink = el.innerText == 'Ksolutions' ? true : false;

//console.log(el.innerText + homeLink);

    // Remove the class from all siblings
    // siblings.forEach((eachLi: HTMLElement) => {
    //   if(eachLi.classList.contains("active")){
    //     eachLi.classList.remove('active');
    //    }
    // });
    // Add the class to the clicked element (event.target)
    // if(homeLink){
    //   event.target.parentElement.classList.add('LogoActive');
    // }else{
    //   event.target.parentElement.classList.add('active');
    // this.isDivVisible = false;
    // }

   

  }

}