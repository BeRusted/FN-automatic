import "./Winsubmenu.css";
import { useEffect, useRef } from "react";
import { Button, Box, styled, } from "@mui/material";
import Draggable from 'react-draggable';

const SubmenuButton = styled(Button)(({ }) => ({/* 不包含设置(S)的子菜单 */
  fontSize: "13px",
  fontWeight: 100,
  color: "rgb(255, 255, 255)",
  background: "none",
  border: "none",
  padding: "3px 13px",
  width: "100%",
  height: "25px",
  cursor: "default",
  display: "flex",
  justifyContent: "space-between", 
  alignItems: "center",
  textTransform:"capitalize" ,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "rgb(255, 216, 102)",
  },
}));

const SettingSubmenuButton = styled(Button)(({ }) => ({/* 设置(S)的子菜单独做,和其他子菜单的样式不同 */
  fontSize: "13px",
  fontWeight: 100,
  color: "rgb(255, 255, 255)",
  background: "none",
  border: "none",
  padding: "3px 13px",
  width: "10%",
  minWidth: "0",
  height: "25%",
  cursor: "default",
  position: "relative",
  zIndex: 1,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));   
function File_submenu({ onClose }) {
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

      <Box ref={submenuRef} className="File_submenu">
        <SubmenuButton disableRipple>
          <span>新建文件</span>
          <span>Ctrl+N</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>导入</span>
          <span>Ctrl+I</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>保存</span>
          <span>Ctrl+S</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>另存为</span>
          <span>Ctrl+Shift+S</span>
        </SubmenuButton>
      </Box>
  );
}
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
        <SubmenuButton disableRipple>
          <span>撤销</span>
          <span>Ctrl+Z</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>恢复</span>
          <span>Ctrl+Y</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>添加触发节点</span>
          <span>Ctrl+Q</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>添加执行节点</span>
          <span>Ctrl+W</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>添加脚本节点</span>
          <span>Ctrl+E</span>
        </SubmenuButton>
        <SubmenuButton disableRipple>
          <span>添加循环节点</span>
          <span>Ctrl+R</span>
        </SubmenuButton>

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


  /* 设置子菜单的初始位置 - 居中 */
  const initial_X = (window.innerWidth / 4);
  const initial_Y = (window.innerHeight / 4);
  return (
    <Draggable defaultPosition={{ x: initial_X, y: initial_Y }} bounds={{left: 0, top: 35, right: window.innerWidth*0.5, bottom: window.innerHeight*0.5}} cancel=".Setting_button">
      <Box ref={submenuRef} className="Setting_submenu">
        <SettingSubmenuButton disableRipple className="Setting_button">功能</SettingSubmenuButton>
        <SettingSubmenuButton disableRipple className="Setting_button">语言</SettingSubmenuButton>
        <SettingSubmenuButton disableRipple className="Setting_button">主题</SettingSubmenuButton>
        <SettingSubmenuButton disableRipple className="Setting_button">教程</SettingSubmenuButton>
        <SettingSubmenuButton disableRipple className="Setting_button">关于</SettingSubmenuButton>
      </Box>
    </Draggable>
  );
}


export { Edit_submenu, Setting_submenu, File_submenu };
