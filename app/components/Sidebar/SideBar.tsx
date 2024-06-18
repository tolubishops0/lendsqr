"use client";
import React, { useRef } from "react";
import { SideBarProps } from "@/app/types/type";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

const SideBar = ({
  viewportWidth,
  toggleSideBar,
  handleToggleSidebar,
}: SideBarProps) => {
  const refClickAway = useRef<HTMLDivElement>(null);
  useClickAway(refClickAway, () => {
    if (toggleSideBar) {
      handleToggleSidebar();
    }
  });

  console.log(viewportWidth);

  return (
    <aside className="sidebar">
      {viewportWidth && viewportWidth <= 900 ? (
        <div className="" ref={refClickAway}>
          <AnimatePresence mode="wait" initial={false}>
            {toggleSideBar && (
              <motion.div {...framerSidebarPanel} className="sidebar-sm">
                {/* SideBar */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className=""></div>
      )}
    </aside>
  );
};

export default SideBar;
const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const framerText = (delay: number) => {
  return {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.3 + delay / 30,
    },
  };
};
