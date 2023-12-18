"use client";
import React from "react";
import useDarkMode from "@/app/hooks/useDarkMode";

import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const DarkMode = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="flex justify-center items-center  box-border absolute top-0 right-0 w-10 h-10 z-50  mt-4 ">
      {colorTheme === "dark" ? (
        <BsFillMoonStarsFill
          size={20}
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BsFillSunFill
          size={20}
          className="text-yellow-400  cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default DarkMode;
