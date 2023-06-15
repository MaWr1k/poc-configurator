/*
 *  Document    : index.js
 *  Author      : Novac
 *  Description : Home Page
 */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { useEffect, useState } from "react";

// import Component's

import ObjectMenuList from "../Components/Layouts/Object.Menu.List";
import { useObjectStore } from "../Components/Storage/Global.Storage";
import ObjectModule from "../Components/Assets/Object.Module";
import PropertiesMenuList from "../Components/Layouts/Properties.Menu.List";
import HeaderMenu from "../Components/Layouts/Header.Menu";
import TransFormControlMode from "../Components/Layouts/TransForm.Control.Mode";
import KeyBoardControl from "../Components/Controls/KeyBoard.Control";
import LocalGLB from "../Components/Assets/Local.GLB";
import Wall from "../Components/Assets/Wall/Wall.Measure";

export default function Home() {
  // Global Storage
  const {
    IsLocalObjects,
    IsObjects,
    IsCurrentObject,
    IsObjectFocus,
    IsBackGroundHdri,
    IsHdriLight,
    IsGridHelper,
    IsTransFormContMode,
    IsMeasurement,
    setIsCurrentObject,
    setIsObjectFocus,
    setIsMeasurement,
  } = useObjectStore();

  //Local Storage
  let plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [IsScene, setIsScene] = useState();
  const [IsCamera, setIsCamera] = useState();
  const [IsRaycaster, setIsRaycaster] = useState();
  const [IsObject, setIsObject] = useState([]);
  const [IsActive, setIsActive] = useState(true);
  const [IsPrimitivePos, setIsPrimitivePos] = useState([]);

  // Properties
  const [values, setValues] = useState({
    position: [],
    rotation: [],
    scale: [],
  });

  useEffect(() => {
    IsCurrentObject &&
      setValues({
        position: [
          IsCurrentObject.position.x,
          IsCurrentObject.position.y,
          IsCurrentObject.position.z,
        ],
        rotation: [
          IsCurrentObject.rotation.x,
          IsCurrentObject.rotation.y,
          IsCurrentObject.rotation.z,
        ],
        scale: [
          IsCurrentObject.scale.x,
          IsCurrentObject.scale.y,
          IsCurrentObject.scale.z,
        ],
      });
  }, [IsCurrentObject]);

  // Delete Object
  const Delete = (props) => {
    setIsObject((IsObject) => IsObject.filter((obj) => obj.key !== props));
    setIsCurrentObject(null);
  };

  return (
    <div
      style={{ height: "100vh", backgroundColor: "black" }}
      className="relative min-h-screen"
      onDragEnter={(e) => {
        if (IsActive) {
          let vec3 = new THREE.Vector3();
          let mouse = new THREE.Vector2();
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          IsRaycaster.setFromCamera(mouse, IsCamera);
          IsRaycaster.ray.intersectPlane(plane, vec3);
          setIsPrimitivePos([vec3.x, 0, vec3.z]);
          // Condition
          if (IsObjects === "cube") {
            setIsObject([
              ...IsObject,
              {
                key: IsObject.length + 1,
                obj: "cube",
                geometry: new THREE.BoxGeometry(),
              },
            ]);
          } else if (IsObjects === "cylinder") {
            setIsObject([
              ...IsObject,
              {
                key: IsObject.length + 1,
                obj: "cylinder",
                geometry: new THREE.CylinderGeometry(),
              },
            ]);
          } else if (IsObjects === "cone") {
            setIsObject([
              ...IsObject,
              {
                key: IsObject.length + 1,
                obj: "cone",
                geometry: new THREE.ConeGeometry(),
              },
            ]);
          }
        }
      }}
      onDragOver={(e) => {
        setIsActive(false);
        let vec3 = new THREE.Vector3();
        let mouse = new THREE.Vector2();
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        IsRaycaster.setFromCamera(mouse, IsCamera);
        IsRaycaster.ray.intersectPlane(plane, vec3);
        setTimeout(() => {
          IsScene.children[IsScene.children.length - 1].position.set(
            vec3.x,
            0,
            vec3.z
          );
        }, 10);
      }}
      onDragEnd={() => {
        setIsActive(true);
      }}
    >
      {/* Header Menu */}
      <HeaderMenu />

      {/* Object Menu List */}
      <ObjectMenuList />

      {/* Object Properties */}
      <PropertiesMenuList values={values} />

      {/* TransformControls Mode Selection */}
      <TransFormControlMode />

      {/* KeyBoard Control */}
      <KeyBoardControl />

      {/* 3D Window  */}
      <Canvas
        camera={{ fov: 55 }}
        onCreated={({ scene, camera, raycaster }) => {
          setIsScene(scene);
          setIsCamera(camera);
          setIsRaycaster(raycaster);
        }}
        onPointerMissed={() => {
          setIsCurrentObject(null);
          setIsObjectFocus(false);
        }}
      >
        {/* Local GLB file Loader */}
        {IsLocalObjects && <LocalGLB />}

        {/* Measurement */}
        {IsMeasurement && <Wall setDraw={setIsMeasurement} />}

        {/* Grid Helper */}
        <Grid
          visible={IsGridHelper ? true : false}
          infiniteGrid
          fadeDistance={100}
          fadeStrength={5}
          sectionColor={new THREE.Color(0xff0000)}
        />

        {/* OrbitController */}
        <OrbitControls
          makeDefault
          target={
            IsCurrentObject && IsObjectFocus ? IsCurrentObject.position : null
          }
        />

        {/* View Object's Form Array  */}
        {IsObject &&
          IsObject.map((val, index) => (
            <ObjectModule
              obj={val.obj}
              position={IsPrimitivePos}
              geometry={val.geometry}
              key={index}
              onContextMenu={() => Delete(index + 1)}
            />
          ))}

        {/* Use Transform Control */}
        {IsCurrentObject && (
          <TransformControls
            object={IsCurrentObject}
            mode={IsTransFormContMode}
            onObjectChange={(e) => {
              let obj = e.target.object;
              {
                IsCurrentObject &&
                  setValues({
                    position: [obj.position.x, obj.position.y, obj.position.z],
                    rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z],
                    scale: [obj.scale.x, obj.scale.y, obj.scale.z],
                  });
              }
            }}
          />
        )}
        {/* Environment HDRI */}
        {IsBackGroundHdri != "none" && (
          <Environment background={IsHdriLight} preset={IsBackGroundHdri} />
        )}

        {/* Gismo Control */}
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="white"
          />
        </GizmoHelper>
      </Canvas>
    </div>
  );
}
