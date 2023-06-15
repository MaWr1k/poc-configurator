/*
 *  Document    : TransFormControl.Mode.js
 *  Author      : Ganapathy
 *  Description : Change Control Mode
 */
import React, { useContext } from "react";
import {
  TbNewSection,
  TbArrowsMove,
  TbRotate360,
  TbResize,
  TbFocus2,
  TbRulerMeasure,
} from "react-icons/tb";

// Import Components
import { useObjectStore } from "../Storage/Global.Storage";
import Buttons from "../Controls/Buttons";
import InputFields from "../Controls/InputFields";

const TransFormControlMode = () => {
  // Global Storage
  const {
    IsCurrentObject,
    IsObjectFocus,
    IsTransFormContMode,
    setIsTransFormContMode,
    setIsObjectFocus,
    setIsLocalObjects,
    IsMeasurement,
    setIsMeasurement,
  } = useObjectStore();

  return (
    <div className="absolute z-[100] inset-x-0 bottom-5">
      <div className="flex gap-2 justify-center p-2 rounded">
        <div className="flex border rounded bg-blue-300 text-center ">
          <div className="group relative flex justify-center">
            <label htmlFor="dropzone-file">
              <InputFields
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  let file = e.currentTarget.files[0];
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  setTimeout(() => {
                    setIsLocalObjects(reader.result);
                  }, 1000);
                }}
              />
              <TbNewSection size={30} />
            </label>
            <span className="absolute flex bottom-10 scale-0 transition-all p-2 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
              Import File
            </span>
          </div>
        </div>
        <div className="flex border rounded bg-blue-300 ">
          <div className="group relative flex justify-center">
            <Buttons
              className="rounded text-sm shadow-sm"
              onClick={() =>
                IsCurrentObject && setIsTransFormContMode("translate")
              }
            >
              <TbArrowsMove
                size={30}
                color={
                  IsCurrentObject && IsTransFormContMode == "translate"
                    ? "red"
                    : null
                }
              />
            </Buttons>
            <span className="absolute flex bottom-10 scale-0 transition-all p-2 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
              Translate
            </span>
          </div>
        </div>
        <div className="flex border rounded bg-blue-300   ">
          <div className="group relative flex justify-center">
            <Buttons
              className="rounded text-sm shadow-sm"
              onClick={() =>
                IsCurrentObject && setIsTransFormContMode("rotate")
              }
            >
              <TbRotate360
                size={30}
                color={
                  IsCurrentObject && IsTransFormContMode == "rotate"
                    ? "red"
                    : null
                }
              />
            </Buttons>
            <span className="absolute flex bottom-10 scale-0 transition-all p-2 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
              Rotate
            </span>
          </div>
        </div>
        <div className="flex border rounded bg-blue-300  ">
          <div className="group relative flex justify-center">
            <Buttons
              className="rounded text-sm shadow-sm"
              onClick={() => IsCurrentObject && setIsTransFormContMode("scale")}
            >
              <TbResize
                size={30}
                color={
                  IsCurrentObject && IsTransFormContMode == "scale"
                    ? "red"
                    : null
                }
              />
            </Buttons>
            <span className="absolute flex bottom-10 scale-0 transition-all p-2 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
              Scale
            </span>
          </div>
        </div>
        <div className="flex border rounded bg-blue-300">
          <div className="group relative flex justify-center">
            <Buttons
              className="rounded text-sm shadow-sm"
              onClick={() =>
                IsCurrentObject && setIsObjectFocus(!IsObjectFocus)
              }
            >
              <TbFocus2
                size={30}
                color={IsCurrentObject && IsObjectFocus ? "red" : null}
              />
            </Buttons>
            <span className="absolute flex bottom-10 scale-0 transition-all p-2 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
              {IsCurrentObject && IsObjectFocus ? "Focused" : "Focus"}
            </span>
          </div>
        </div>
        <div className="flex border rounded bg-blue-300">
          <div className="group relative flex justify-center">
            <Buttons
              className="rounded text-sm shadow-sm"
              onClick={() => setIsMeasurement(!IsMeasurement)}
            >
              <TbRulerMeasure size={30} color={IsMeasurement ? "red" : null} />
            </Buttons>
            <span className="absolute flex bottom-10 scale-0 transition-all p-2 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
              Measurement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransFormControlMode;
