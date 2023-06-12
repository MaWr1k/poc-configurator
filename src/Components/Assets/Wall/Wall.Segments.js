import * as THREE from "three";

export class WallSegments {
    constructor(start, end, material, height) {
      this.start = start;
      this.end = end;
      this.height = height; // height of the segment's 3D
      this.material = material;
      this.mesh3D = null;
      this.create3D();
    }
    create3D() {
      if (this.start && this.end) {
        //create the shape geometry
        var distStartToEnd = this.start.distanceTo(this.end);
  
        var vec2s = [
          new THREE.Vector2(),
          new THREE.Vector2(0, this.height),
          new THREE.Vector2(distStartToEnd, this.height),
          new THREE.Vector2(distStartToEnd, 0),
        ];
        var shape = new THREE.Shape(vec2s);
        var geo = new THREE.ExtrudeGeometry(shape,{ 
          depth: 4, 
          bevelEnabled: true, 
          bevelSegments: 1, 
          steps: 4, 
          bevelSize: 0, 
          bevelOffset:0,
          bevelThickness: 0 
        });
        geo.applyMatrix4(
          new THREE.Matrix4().makeRotationX(-THREE.MathUtils.degToRad(90))
        );
        this.mesh3D = new THREE.Mesh(geo, this.material);
        this.alignRotation();
        this.alignPosition();
        // the mesh3D should be added to the scene outside of this class
      }
    }
    alignRotation() {
      var p1 = this.start.clone();
      var p2 = this.end.clone();
      var direction = new THREE.Vector3();
      direction.subVectors(p2, p1);
      direction.normalize();
  
      this.mesh3D.quaternion.setFromUnitVectors(
        new THREE.Vector3(1, 0, 0),
        direction
      );
    }
    alignPosition() {
      if (this.mesh3D) {
        this.mesh3D.position.copy(this.start);
      } else {
        throw new Error("mesh3D null");
      }
    }
  }
  