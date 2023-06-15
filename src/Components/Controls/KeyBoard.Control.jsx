/*
 *  Document    : KeyBoard.Control.js
 *  Author      : Ganapathy
 *  Description : Common KeyBoard Control
 */

import { useEffect, useCallback } from "react";

// Components
import { useObjectStore } from "../Storage/Global.Storage";

const KeyBoardControl = () => {
  // Global Storage
  const { IsObjectFocus, setIsTransFormContMode, setIsObjectFocus } =
    useObjectStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Onkeypress = useCallback((e) => {
    if (e.key === "t" || e.key === "T") {
      setIsTransFormContMode("translate");
    }
    if (e.key === "r" || e.key === "R") {
      setIsTransFormContMode("rotate");
    }
    if (e.key === "e" || e.key === "E") {
      setIsTransFormContMode("scale");
    }
    if (e.key === "f" || e.key === "F") {
      setIsObjectFocus(!IsObjectFocus);
    }
  });

  // Keypress Event
  useEffect(() => {
    document.addEventListener("keypress", Onkeypress, false);

    return () => {
      document.removeEventListener("keypress", Onkeypress, false);
    };
  }, [Onkeypress]);

  return (
    <>
      <Onkeypress />
    </>
  );
};

export default KeyBoardControl;
