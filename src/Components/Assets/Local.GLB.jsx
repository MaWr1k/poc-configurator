/*
 *  Document    : Local.GLB.js
 *  Author      : Ganapathy
 *  Description : Import Local GLB File's
 */
import { useGLTF } from "@react-three/drei";

// Import Components
import { useObjectStore } from "../Storage/Global.Storage";

const LocalGLB = () => {
  // Global Store
  const { IsLocalObjects, setIsCurrentObject } = useObjectStore();

  // Model Loader
  const { scene } = useGLTF(IsLocalObjects);

  return (
    <>
      <primitive
        object={scene}
        onClick={(e) => {
          setIsCurrentObject(e.eventObject);
        }}
      />
    </>
  );
};

export default LocalGLB;
