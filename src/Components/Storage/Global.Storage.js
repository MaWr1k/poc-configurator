/*
 *  Document    : Global.Storage.js
 *  Author      : Ganapathy
 *  Description : Global Storage for using zustand npm
 */
import { create } from "zustand";

export const useObjectStore = create((set) => ({
  IsObjects: [],
  setIsObjects: (x) => set(() => ({ IsObjects: x })),
  IsCurrentObject: null,
  setIsCurrentObject: (x) => set(() => ({ IsCurrentObject: x })),
  IsObjectFocus: false,
  setIsObjectFocus: (x) => set(() => ({ IsObjectFocus: x })),
  IsBackGroundHdri: "sunset",
  setIsBackGroundHdri: (x) => set(() => ({ IsBackGroundHdri: x })),
  IsHdriLight: false,
  setIsHdriLight: (x) => set(() => ({ IsHdriLight: x })),
  IsGridHelper: true,
  setIsGridHelper: (x) => set(() => ({ IsGridHelper: x })),
  IsTransFormContMode: "translate",
  setIsTransFormContMode: (x) => set(() => ({ IsTransFormContMode: x })),
  IsLocalObjects: null,
  setIsLocalObjects: (x) => set(() => ({ IsLocalObjects: x })),
  IsMeasurement: false,
  setIsMeasurement: (x) => set(() => ({ IsMeasurement: x })),
}));
