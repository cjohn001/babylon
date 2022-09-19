import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private router: RouterExtensions) {}
  //////////////////////////////////////////////////////////////////////////////////////////////////
  public buttonTapped() {
    this.router.navigate(["/canvas"], {
      transition: { name: "slideLeft" },
    });
  }
}
