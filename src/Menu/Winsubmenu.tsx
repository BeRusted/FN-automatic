import "./Winsubmenu.css";
import React, { useEffect, useRef } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from "@mui/material";
import Draggable from 'react-draggable';

function Edit_submenu({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>编辑</DialogTitle>
      <DialogContent>
        {/* 在这里添加你想要显示的内容 */}
        <p>这里是编辑菜单的内容。</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
}

function Setting_submenu({ onClose }) {
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
      <Box ref={submenuRef} className="Setting_submenu">
        拖拽我
      </Box>
    </Draggable>
  );
}
function Concerning_submenu({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>关于</DialogTitle>
      <DialogContent>
        {/* 在这里添加你想要显示的内容 */}
        <p>这里是编辑菜单的内容。</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
}

export { Edit_submenu, Setting_submenu, Concerning_submenu };
