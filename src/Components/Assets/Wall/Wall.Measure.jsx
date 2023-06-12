import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Scene } from "three";
import { WallSegments } from "./Wall.Segments";

let MAX_POINTS = 500;
function Wall(props) {
  let positions = new Float32Array(MAX_POINTS * 3);
  let textRef = useRef();
  var count = 0;
  var mesh3D;
  var mouse = new THREE.Vector3();
  var point3ds = [];
  //   let line = useRef();
  let line;
  var maxPoint = 1000;
  const { camera, raycaster, scene } = useThree();
  let plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [measurement, setMeasurement] = useState("0");

  let someMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    // opacity: 0.3,
  });

  function create3D() {
    if (!mesh3D && point3ds && point3ds.length) {
      mesh3D = new THREE.Mesh(); // metpy mesh but is the root mesh for all 3D
      scene.add(mesh3D);
      // prepare create segments from point3ds - every two points create a segement
      var index = 1;
      var segmentHeight = 0.2;
      point3ds.forEach((point3d) => {
        if (index < point3ds.length) {
          var seg = new WallSegments(
            point3d,
            point3ds[index],
            someMaterial,
            segmentHeight
          );
          mesh3D.add(seg.mesh3D);
          index++;
        }
      });
    }
  }

  function updateLine() {
    positions[count * 3 - 3] = mouse.x;
    positions[count * 3 - 2] = mouse.y;
    positions[count * 3 - 1] = mouse.z;
    line.geometry.attributes.position.needsUpdate = true;
  }
  function onMouseMove(e) {
    // var rect = renderer.domElement.getBoundingClientRect();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    mouse = raycaster.ray.intersectPlane(plane, mouse);

    if (count !== 0 && count < maxPoint) {
      updateLine();
      let v1 = point3ds[count - 1].clone();
      let v2 = new THREE.Vector3(mouse.x, mouse.y, mouse.z);
      let distance = v1?.distanceTo(v2);
      let tPos = v1.add(v2).multiplyScalar(0.5);

      let rot = point3ds[count - 1].angleTo(v2);
      //

      textRef.current.position.set(tPos.x + 0.2, 0, tPos.z + 0.2);

      setMeasurement(distance?.toFixed(2));
    }
  }
  function onMouseDown(e) {
    if (e.which === 1) {
      if (count === 0) {
        addPoint();
      }

      if (count <= maxPoint) {
        addPoint();
      }
    }
  }
  function addPoint(event) {
    if (count < maxPoint) {
      //
      positions[count * 3 + 0] = mouse.x;
      positions[count * 3 + 1] = mouse.y;
      positions[count * 3 + 2] = mouse.z;
      count++;
      line.geometry.setDrawRange(0, count);
      line.geometry.computeBoundingSphere();
      updateLine();
      point3ds.push(new THREE.Vector3(mouse.x, mouse.y, mouse.z));
    } else {
    }
  }

  function onKeyPress(e) {
    e.preventDefault();
    if (e.key === "d" || e.key === "D") {
      create3D();
      scene.remove(line);
      props.setDraw(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("mousedown", onMouseDown, false);
    document.addEventListener("keypress", onKeyPress, false);

    return () => {
      document.removeEventListener("mousemove", onMouseMove, false);
      document.removeEventListener("mousedown", onMouseDown, false);
      document.removeEventListener("keypress", onKeyPress, false);
    };
  }, []);

  const geometry = new THREE.BufferGeometry().setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  line = new THREE.Line(geometry, material);
  line.name = "line";
  line.frustumCulled = false;
  scene.add(line);
  return (
    <>
      {/* <line material= {material}>
        <bufferGeometry  />
    </line> */}
      {/* <line ref={line} geometry={geometry} material={material}/> */}
      <Text
        ref={textRef}
        scale={[0.7, 0.7, 0.7]}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {`${measurement}mm`}
      </Text>
    </>
  );
}

export default Wall;
