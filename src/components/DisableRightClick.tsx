"use client";

import { useEffect } from "react";

export default function DisableRightClick() {
  useEffect(() => {
    // Disable right-click context menu globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable text selection drag globally (except in inputs and textareas)
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("selectstart", handleSelectStart, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("selectstart", handleSelectStart, { capture: true });
    };
  }, []);

  return null;
}

