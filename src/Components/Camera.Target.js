import { useBounds } from "@react-three/drei";
import React, { useContext } from "react";
import { Context } from "./Storage/Global.Storage";

const CameraTarget = ({ children }) => {
  // Global Storage
  const {
    IsCurrentObject,
    IsBackGroundHdri,
    IsGridHelper,
    setIsBackGroundHdri,
    setIsGridHelper,
  } = useContext(Context);

  const api = useBounds();
  return (
    <>
      <group
        onClick={(e) => (
          IsCurrentObject && e.stopPropagation(),
          e.delta <= 1 && api.refresh(e.eventObject).fit()
        )}
        onPointerMissed={(e) =>
          IsCurrentObject && e.button === 0 && api.refresh().fit()
        }
      >
        {children}
      </group>
    </>
  );
};

export default CameraTarget;

// import { useMemo } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import CameraControls from "camera-controls";
// import * as THREE from "three";

// CameraControls.install({ THREE });

// const CameraTarget = ({
//   zoom,
//   focus,
//   pos = new THREE.Vector3(),
//   look = new THREE.Vector3(),
// }) => {
//   const camera = useThree((state) => state.camera);
//   const gl = useThree((state) => state.gl);
//   const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
//   return useFrame((state, delta) => {
//     zoom ? pos.set(focus.x, focus.y+2, focus.z + 6) : pos.set(0, 5, 5);
//     zoom ? look.set(focus.x, focus.y, focus.z - 3) : look.set(0, 0, 4);

//     state.camera.position.lerp(pos, 0.5);
//     state.camera.updateProjectionMatrix();

//     controls.setLookAt(
//       state.camera.position.x,
//       state.camera.position.y,
//       state.camera.position.z,
//       look.x,
//       look.y,
//       look.z,
//       true
//     );
//     return controls.update(delta);
//   });
// };

// export default CameraTarget;
