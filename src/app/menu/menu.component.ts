import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit{
  @ViewChild('humburger') hamburgerval: ElementRef;
  @ViewChild('menus') menus: ElementRef;
  

  isDivVisible = false;

  @HostListener('document:click', ['$event'])
  onClick(event: Event){
    // Check if the click event occurred outside the div
    if (!(this.menus.nativeElement.contains(event.target))) {
      // Click occurred outside the div, so hide it
      this.isDivVisible = false;
    }
  }
  
  // constructor(private El:ElementRef, private rendar:Renderer2){ }
  
  ngAfterViewInit() {
      const hambergurEl: HTMLElement = this.hamburgerval.nativeElement;

    hambergurEl.addEventListener('click', (e) => {
       e.stopPropagation();
        this.isDivVisible = !this.isDivVisible;
        //menusEl.style.display != "block" ? menusEl.style.display = "block": menusEl.style.display = "none";
      });
}
}