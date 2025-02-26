import "./Winsubmenu.css";
import { useEffect, useRef } from "react";
import { Button, Box } from "@mui/material";
import Draggable from 'react-draggable';

function Edit_submenu({ onClose }) {
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.menu_button')){
        return;
      }
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
      <Box ref={submenuRef} className="Edit_submenu">
        1
      </Box>
  );
}

function Setting_submenu({ onClose }) {
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.menu_button')){
        return;
      }
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
      <Box ref={submenuRef} className="Setting_submenu">
        2
      </Box>
  );
}
function About_submenu({ onClose }) {
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.menu_button')){
        return;
      }
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Draggable>
      <Box ref={submenuRef} className="Edit_submenu">
        3
      </Box>
    </Draggable>
  );
}

export { Edit_submenu, Setting_submenu, About_submenu };
