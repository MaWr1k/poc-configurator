/*
 *  Document    : Properties.Menu.List.js
 *  Author      : Ganapathy
 *  Description : PropertiesMenuList for all
 */
import { useState, useContext } from "react";
import * as THREE from "three";

// Import Components
import InputFields from "../Controls/InputFields";
import { useObjectStore } from "../Storage/Global.Storage";
import Buttons from "../Controls/Buttons";
import TextureListModel from "../Assets/Texture.List.Model";

const PropertiesMenuList = ({ values }) => {
  // Global Storage
  const {
    IsCurrentObject,
    IsBackGroundHdri,
    IsHdriLight,
    IsGridHelper,
    setIsBackGroundHdri,
    setIsHdriLight,
    setIsGridHelper,
  } = useObjectStore();

  // Texture List
  //usestate
  const [IsTextureModelOpen, setIsTextureModelOpen] = useState(false);
  const [reload, setreload] = useState(false);
  const IsTextureModelClose = () => {
    setIsTextureModelOpen(false);
  };
  const TextureModel = () => {
    setIsTextureModelOpen(true);
  };

  return (
    <div className="absolute z-[10] inset-y-0 h-[10%]  right-3 top-12">
      <div className="grid gap-2 bg-blue-300 w-64 p-2 border rounded">
        {/* Display Propertie's */}
        <div className="text-center font-bold text-md underline">{`Display Propertie's`}</div>
        <div className="flex gap-2">
          <label className="font-semibold">HDRI</label>
          <div className="flex flex-row-3 gap-2 ml-12  text-sm justify-center">
            <select
              name="hdri"
              className="flex rounded w-36"
              defaultValue={IsBackGroundHdri}
              onChange={(e) => {
                setIsBackGroundHdri(e.target.value);
              }}
            >
              <option name="hdri" value="sunset">
                Sunset
              </option>
              <option name="hdri" value="dawn">
                Dawn
              </option>
              <option name="hdri" value="night">
                Night
              </option>
              <option name="hdri" value="warehouse">
                Warehouse
              </option>
              <option name="hdri" value="forest">
                Forest
              </option>
              <option name="hdri" value="studio">
                Studio
              </option>
              <option name="hdri" value="city">
                City
              </option>
              <option name="hdri" value="park">
                Park
              </option>
              <option name="hdri" value="apartment">
                Apartment
              </option>
              <option name="hdri" value="lobby">
                Lobby
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold">Grid Helper</label>
          <div className="flex flex-row-3 gap-2 text-sm  ml-12 justify-center">
            <InputFields
              type="checkbox"
              checked={IsGridHelper ? true : false}
              onChange={() => setIsGridHelper(!IsGridHelper)}
              className="flex flex-row-1 rounded"
            />
            {IsGridHelper ? "true" : "false"}
          </div>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold">HDRI Background</label>
          <div className="flex flex-row-3 gap-2 text-sm ml-1  justify-center">
            <InputFields
              type="checkbox"
              checked={IsHdriLight ? true : false}
              onChange={() => setIsHdriLight(!IsHdriLight)}
              className="flex flex-row-1 rounded"
            />
            {IsHdriLight ? "true" : "false"}
          </div>
        </div>

        {/* Object Propertie's */}

        {IsCurrentObject && (
          <>
            <div className="text-center font-bold text-md underline">{`Object Propertie's`}</div>
            <div className="flex gap-2">
              <label className="font-semibold">Name</label>
              <div className="flex flex-row-3 gap-2  ml-8 justify-center">
                <InputFields
                  name="Object_Name"
                  key={IsCurrentObject.name}
                  defaultValue={IsCurrentObject && IsCurrentObject.name}
                  onChange={(e) => (IsCurrentObject.name = e.target.value)}
                  className="flex flex-row-1 text-sm rounded w-40"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Position</label>
              <div className="flex flex-row-3 gap-2  ml-4 justify-center ">
                <InputFields
                  type="number"
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.position[0]}-keyP0`}
                  defaultValue={values.position[0]?.toFixed(3)}
                  onChange={(e) =>
                    (IsCurrentObject.position.x = e.target.value)
                  }
                />
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.position[1]}-keyP1`}
                  defaultValue={values.position[1]?.toFixed(3)}
                  onChange={(e) =>
                    (IsCurrentObject.position.y = e.target.value)
                  }
                />
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.position[2]}-keyP2`}
                  defaultValue={values.position[2]?.toFixed(3)}
                  onChange={(e) =>
                    (IsCurrentObject.position.z = e.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">rotation</label>
              <div className="flex flex-row-3 gap-2  ml-4 justify-center ">
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.rotation[0]}-keyR0`}
                  defaultValue={values.rotation[0]?.toFixed(3)}
                  onChange={(e) =>
                    (IsCurrentObject.rotation.x = e.target.value)
                  }
                />
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.rotation[1]}-keyR1`}
                  defaultValue={values.rotation[1]?.toFixed(3)}
                  onChange={(e) =>
                    (IsCurrentObject.rotation.y = e.target.value)
                  }
                />
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.rotation[2]}-keyR2`}
                  defaultValue={values.rotation[2]?.toFixed(3)}
                  onChange={(e) =>
                    (IsCurrentObject.rotation.z = e.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Scale</label>
              <div className="flex flex-row-3 gap-2 ml-9 justify-center">
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.scale[0]}-keyS0`}
                  defaultValue={values.scale[0]?.toFixed(3)}
                  onChange={(e) => (IsCurrentObject.scale.x = e.target.value)}
                />
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.scale[1]}-keyS1`}
                  defaultValue={values.scale[1]?.toFixed(3)}
                  onChange={(e) => (IsCurrentObject.scale.y = e.target.value)}
                />
                <InputFields
                  className="flex flex-row-1 text-sm rounded w-12"
                  key={`${values.scale[2]}-keyS2`}
                  defaultValue={values.scale[2]?.toFixed(3)}
                  onChange={(e) => (IsCurrentObject.scale.z = e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Shadow</label>
              <div className="flex flex-row-3 gap-2 text-sm  ml-4 justify-center">
                <InputFields
                  type="checkbox"
                  className="flex flex-row-1 rounded"
                  key={"castShadow"}
                  defaultChecked={IsCurrentObject.castShadow ? true : false}
                  onChange={(e) =>
                    (IsCurrentObject.castShadow = e.target.checked)
                  }
                />
                Cast
                <InputFields
                  type="checkbox"
                  className="flex flex-row-1 rounded"
                  key={"receiveShadow"}
                  defaultChecked={IsCurrentObject.receiveShadow ? true : false}
                  onChange={(e) =>
                    (IsCurrentObject.receiveShadow = e.target.checked)
                  }
                />
                Receive
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Visible</label>
              <div className="flex flex-row-3 gap-2 text-sm  ml-6 justify-center">
                <InputFields
                  type="checkbox"
                  className="flex flex-row-1 rounded"
                  key={"visible"}
                  defaultChecked={IsCurrentObject.visible ? true : false}
                  onChange={(e) => (IsCurrentObject.visible = e.target.checked)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Color</label>
              <div className="flex flex-row-3 gap-2 text-sm  ml-8 justify-center">
                <InputFields
                  type="color"
                  className="flex flex-row-1 rounded"
                  key={IsCurrentObject?.material?.color}
                  value={`0x${new THREE.Color(
                    IsCurrentObject?.material?.color
                  ).getHexString()}`}
                  onChange={(e) =>
                    (IsCurrentObject.material.color = new THREE.Color(
                      e.target.value
                    ))
                  }
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Texture</label>
              <div className="flex flex-row-3 gap-2 text-sm  ml-5 justify-center">
                {/* <Image
                  src={
                    IsCurrentObject.material.map !== null
                      ? IsCurrentObject.material.map?.source?.data
                          ?.attributes[1].value
                      : "/Blank.png"
                  }
                  alt={"dummy"}
                  width={25}
                  height={5}
                  className="flex w-12 h-6 flex-row-1 rounded"
                /> */}
                <Buttons
                  onClick={() => TextureModel()}
                  className="bg-white flex text-sm font-semibold  h-6 rounded p-1"
                >
                  Choose Texture
                </Buttons>
              </div>
            </div>
            <div className="flex gap-2">
              <label className="font-semibold">Wireframe</label>
              <div className="flex flex-row-3 gap-2 text-sm  ml-16 justify-center">
                <InputFields
                  type="checkbox"
                  className="flex flex-row-1 rounded"
                  key={"wireframe"}
                  defaultChecked={
                    IsCurrentObject?.material?.wireframe ? true : false
                  }
                  onChange={(e) =>
                    (IsCurrentObject.material.wireframe = e.target.checked)
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>
      {IsTextureModelOpen && (
        <TextureListModel
          IsModelopen={IsTextureModelOpen}
          IsModelClose={IsTextureModelClose}
          setreload={setreload}
          reload={reload}
        />
      )}
    </div>
  );
};

export default PropertiesMenuList;
