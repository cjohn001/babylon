import { Canvas } from "@nativescript/canvas";
import "babylonjs-loaders";
import * as BABYLON from "babylonjs";
import { SceneLoader } from "babylonjs";
import { knownFolders, File } from "@nativescript/core";

export class BasicScene {
  private _scene: BABYLON.Scene;
  private _engine: BABYLON.Engine;
  //////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private _canvas: Canvas) {
    const gl: WebGLRenderingContext = (<unknown>(
      this._canvas.getContext("webgl2", { antialias: false })
    )) as WebGLRenderingContext;

    this._engine = new BABYLON.Engine(gl, true, {
      preserveDrawingBuffer: false,
      stencil: true,
      antialias: true,
    });

    this.createScene();
    this.createCharacter();

    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  private createScene(): void {
    this._scene = new BABYLON.Scene(this._engine);
    this._scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    const camera = new BABYLON.UniversalCamera(
      "camera",
      new BABYLON.Vector3(10, 10, -10),
      this._scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this._canvas, true);

    const hemiLight = new BABYLON.HemisphericLight(
      "hemiLight",
      new BABYLON.Vector3(-1, 1, 0),
      this._scene
    );
    hemiLight.intensity = 0.95;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  private createCharacter(): void {
    const path = knownFolders.currentApp().path + "/Babylon/assets/";
    const exists = File.exists(path + "box.glb");
    console.log(`Does ${path} exist: ${exists}`);

    BABYLON.MeshBuilder.CreateGround(
      "plane",
      { width: 5, height: 5 },
      this._scene
    );
    // await SceneLoader.ImportMeshAsync("", "~/3DModelRepo/", "character.glb");
    // const box = BABYLON.BoxBuilder.CreateBox("box", { size: 1 }, this._scene);
    // box.position.y = 0.5;

    SceneLoader.ImportMesh(
      "",
      path,
      "box.glb",
      this._scene,
      (meshes) => {
        console.log("meshes:" + meshes);
      },
      null,
      (error) => {
        console.log("error:" + error);
      }
    );
  }
}
