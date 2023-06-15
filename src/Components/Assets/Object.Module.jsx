/*
 *  Document    : Object.Module.js
 *  Author      : Ganapathy
 *  Description : ObjectModule for Common file
 */
import { useState } from "react";

// Import Components
import { useObjectStore } from "../Storage/Global.Storage";

const ObjectModule = (props) => {
  // Global Store
  const { setIsCurrentObject } = useObjectStore();

  // let geometry;
  const [position] = useState(props.position);

  return (
    <>
      <mesh
        {...props}
        position={position}
        onClick={(e) => {
          setIsCurrentObject(e.eventObject);
        }}
        geometry={props.geometry}
      >
        <meshStandardMaterial side={2} map={null} />
      </mesh>
    </>
  );
};

export default ObjectModule;
