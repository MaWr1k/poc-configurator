/*
 *  Document    : Object.Menu.List.js
 *  Author      : Ganapathy
 *  Description : List out the all object
 */

// Import Components
import { useObjectStore } from "../Storage/Global.Storage";

const ObjectMenuList = () => {
  // Global Storage
  const { setIsObjects, setIsCurrentObject } = useObjectStore();
  return (
    <div className="absolute z-[10] inset-y-0 h-[10%] left-3 top-12">
      <div className="grid gap-2 justify-center items-center w-24 p-2 border rounded">
        <div className="flex text-white text-xl underline bold ">{`Object's`}</div>
        <div
          className="grid gap-2 text-white"
          onDragStart={() => {
            setIsCurrentObject(null);
            setIsObjects("cube");
          }}
        >
          <img src={"/cube.png"} alt="cube" width={75} height={15} />
          <p>Cube</p>
        </div>
        <div
          className="grid gap-2 text-white"
          onDragStart={() => {
            setIsCurrentObject(null);
            setIsObjects("cylinder");
          }}
        >
          <img src={"/cylinder.png"} alt="cylinder" width={75} height={15} />
          <p>Cylinder</p>
        </div>
        <div
          className="grid gap-2 text-white"
          onDragStart={() => {
            setIsCurrentObject(null);
            setIsObjects("cone");
          }}
        >
          <img src={"/cone.png"} alt="cone" width={75} height={15} />
          <p>Cone</p>
        </div>
        {/* <div className="flex text-white text-xl underline bold ">{`Light's`}</div>
        <div
          className="grid gap-2 text-white"
          onDragStart={() => {
            setIsCurrentObject(null);
            setIsObjects("cone");
          }}
        >
          <Image src={"/light.png"} alt="cone" width={75} height={15} />
          <p>Ambient</p>
        </div>
        <div
          className="grid gap-2 text-white"
          onDragStart={() => {
            setIsCurrentObject(null);
            setIsObjects("cone");
          }}
        >
          <Image src={"/d-light.png"} alt="cone" width={75} height={15} />
          <p>Directional</p>
        </div> */}
      </div>
    </div>
  );
};

export default ObjectMenuList;
