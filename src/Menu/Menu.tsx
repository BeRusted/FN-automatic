import { Box, Button, InputBase, styled } from "@mui/material";
import { getCurrentWindow } from '@tauri-apps/api/window';
import logo from "../assets/logo.svg"
import remax from "../assets/remax.svg"
import "./Menu.css";
import { useState, useEffect } from "react";
import { Edit_submenu, Setting_submenu, Concerning_submenu } from "./Submenu";
const LeftButton = styled(Button)(({ }) => ({
    fontSize: "13px",
    fontWeight: 100,
    color: "rgb(172, 172, 172)",
    background: "none",
    border: "none",
    padding: "3px",
    right: "-10px",
    width: "55px",
    minWidth: "20px",
    height: "25px",
    cursor: "default",
    "-webkit-app-region": "no-drag",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },

}));
const CenterSearch = styled(InputBase)(({ }) => ({
    backgroundColor: "rgba(45, 42, 46 , 0)",
    border: "1px solid rgb(61, 61, 61)",
    borderRadius: "4px",
    padding: "0px 10px",
    width: "50%",
    minWidth: "0px",
    color: "#fff",
    right: "35px",
    "-webkit-app-region": "no-drag",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    "& .MuiInputBase-input": {
        padding: 0,
        textAlign: "center",
        fontSize: "16px",
        transition: "text-align 0.2s",
        "&:focus": {
            textAlign: "left",
        }
    },
    "& .MuiInputBase-input::placeholder": {
        textAlign: "center",
        fontSize: "16px",
        fontWeight: 100,
        transition: "opacity 0.2s",
    },
    "& .MuiInputBase-input:focus::placeholder": {
        opacity: 0,
    },
}));
const MinimizeButton = styled(Button)(({ }) => ({
    fontSize: "16px",
    fontWeight: 400,
    color: "rgb(187, 186, 186)",
    borderRadius: "0px",
    background: "none",
    border: "none",
    right: "12px",
    width: "44px",
    minWidth: "20px",
    height: "35px",
    cursor: "default",
    "-webkit-app-region": "no-drag",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    }
}))
const MaximizeButton = styled(Button)(({ }) => ({
    fontSize: "14px",
    fontWeight: 400,
    color: "rgb(187, 186, 186)",
    borderRadius: "0px",
    background: "none",
    border: "none",
    right: "11px",
    width: "45px",
    minWidth: "20px",
    height: "35px",
    cursor: "default",
    "-webkit-app-region": "no-drag",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    }
}))
const Exit = styled(Button)(({ }) => ({
    fontSize: "16px",
    fontWeight: 400,
    color: "rgb(187, 186, 186)",
    borderRadius: "0px",
    background: "none",
    border: "none",
    right: "10px",
    width: "45px",
    minWidth: "20px",
    height: "35px",
    cursor: "default",
    "-webkit-app-region": "no-drag",
    "&:hover": {
        backgroundColor: "rgb(232, 17, 35)",
    }
}));
function Menu() {
    const [isFocused, setIsFocused] = useState(true);
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
        const listen_focus = getCurrentWindow().onFocusChanged(({ payload }) => {
            setIsFocused(payload);
        });

        return () => {
            listen_focus.then((f) => f());
        };
    }, []);

    useEffect(() => {
        const listen_maxsize = getCurrentWindow().listen('tauri://resize', async () => {
            const maximized = await getCurrentWindow().isMaximized();
            setIsMaximized(maximized);
        });
    
        return () => {
            listen_maxsize.then((f) => f());
        };
    }, []);

    const minimize_window = async () => {
        getCurrentWindow().minimize();
    };
    const maximize_window = async () => {
        getCurrentWindow().toggleMaximize();
    };
    const close_window = async () => {
        getCurrentWindow().close();
    };
    const button_edit = () => {
        console.log("编辑按钮被点击");
    }
    const button_about = () => {
        console.log("关于按钮被点击");
    };
    const button_setting = () => {
        console.log("设置按钮被点击");
    }
    return (
        <Box className="custom-title-bar">
            <Box className="left" style={{ opacity: isFocused ? 1 : 0.5 }}>
                {/* 左侧按钮和 logo 区域 */}
                <img src={logo} className="logo" alt="Logo"/>
                <LeftButton onClick={button_edit}>编辑(E)</LeftButton>
                <LeftButton onClick={button_setting}>设置(S)</LeftButton>
                <LeftButton onClick={button_about}>关于(C)</LeftButton>
            </Box>
            <Box className="center" style={{ opacity: isFocused ? 1 : 0.5 }}>
                {/* 中间搜索框*/}
                <CenterSearch placeholder="Search" />
            </Box>
            <Box className="right" style={{ opacity: isFocused ? 1 : 0.5 }}>
                {/* 右侧窗口控制按钮 */}
                <MinimizeButton onClick={minimize_window}>—</MinimizeButton>
                {isMaximized && (<MaximizeButton onClick={maximize_window}><img src={remax} className="remax" alt="Remax"/></MaximizeButton>)}
                {!isMaximized && (<MaximizeButton onClick={maximize_window}>▢</MaximizeButton>)}
                <Exit onClick={close_window}>✕</Exit>
            </Box>
        </Box>
    )
}
export default Menu;