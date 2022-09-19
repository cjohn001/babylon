import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { CanvasComponent } from "./pages/canvas.component";
import { MenuComponent } from "./pages/menu.component";

const routes: Routes = [
  { path: "", redirectTo: "/menu", pathMatch: "full" },
  { path: "menu", component: MenuComponent },
  { path: "canvas", component: CanvasComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
