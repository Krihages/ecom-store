"use client";

import { ReactNode, useEffect, useRef } from "react";

type DropdownProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Dropdown({
  children,
  isOpen,
  setIsOpen,
}: DropdownProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed w-screen h-screen bg-black bg-opacity-20 left-0 z-10 top-0 cursor-default ">
      <div className="max-w-5xl mx-auto flex justify-end">
        <div className=" cursor-default relative top-10" ref={dropDownRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
