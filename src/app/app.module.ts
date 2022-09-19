import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, registerElement } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CanvasComponent } from "./pages/canvas.component";
import { MenuComponent } from "./pages/menu.component";

registerElement("Canvas", () => require("@nativescript/canvas").Canvas);

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, CanvasComponent, MenuComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
