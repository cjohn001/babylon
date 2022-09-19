import { Component } from "@angular/core";
import { Canvas } from "@nativescript/canvas";
import { EventData } from "@nativescript/core";
import { BasicScene } from "../Babylon/BasicScene";

@Component({
  selector: "ns-canvas",
  templateUrl: "./canvas.component.html",
})
export class CanvasComponent {
  private _scene: BasicScene;
  //////////////////////////////////////////////////////////////////////////////////////////////////
  public onCanvasLoaded(args: EventData) {
    this._scene = new BasicScene(args.object as Canvas);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  public onTap() {
    console.log("Button tapped");
  }
}
