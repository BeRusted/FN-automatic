import { Box, Button, InputBase, styled } from "@mui/material";
import { getCurrentWindow } from '@tauri-apps/api/window';
import logo from "../assets/logo.svg"
import remax from "../assets/remax.svg"
import "./Winmenu.css";
import { useState, useEffect } from "react";
import { Edit_submenu, Setting_submenu, Concerning_submenu } from "./Winsubmenu";

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
function Winmenu() {
    const [is_focused, set_is_focused] = useState(true);
    const [is_maximized, set_is_maximized] = useState(false);
    const [showEditMenu, setShowEditMenu] = useState(false);
    const [show_setting_menu, set_show_setting_menu] = useState(false);

    useEffect(() => {
        const listen_focus = getCurrentWindow().onFocusChanged(({ payload }) => {
            set_is_focused(payload);
        });

        return () => {
            listen_focus.then((f) => f());
        };
    }, []);

    useEffect(() => {
        const listen_maxsize = getCurrentWindow().listen('tauri://resize', async () => {
            const maximized = await getCurrentWindow().isMaximized();
            set_is_maximized(maximized);
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
        setShowEditMenu(true);
    }
    const button_about = () => {
        set_show_setting_menu(true);
    };
    const button_setting = () => {
        console.log("设置按钮被点击");
    }
    return (
        <>
        <Box className="custom-title-bar">
            <Box className="left" style={{ opacity: is_focused ? 1 : 0.5 }}>
                {/* 左侧按钮和 logo 区域 */}
                <img src={logo} className="logo" alt="Logo"/>
                <LeftButton onClick={button_edit}>编辑(E)</LeftButton>
                <LeftButton onClick={button_setting}>设置(S)</LeftButton>
                <LeftButton onClick={button_about}>关于(C)</LeftButton>
            </Box>
            <Box className="center" style={{ opacity: is_focused ? 1 : 0.5 }}>
                {/* 中间搜索框*/}
                <CenterSearch placeholder="Search" />
            </Box>
            <Box className="right" style={{ opacity: is_focused ? 1 : 0.5 }}>
                {/* 右侧窗口控制按钮 */}
                <MinimizeButton onClick={minimize_window}>—</MinimizeButton>
                {is_maximized && (<MaximizeButton onClick={maximize_window}><img src={remax} className="remax" alt="Remax"/></MaximizeButton>)}
                {!is_maximized && (<MaximizeButton onClick={maximize_window}>▢</MaximizeButton>)}
                <Exit onClick={close_window}>✕</Exit>
            </Box>
        </Box>
        {showEditMenu && <Edit_submenu open={showEditMenu} onClose={() => setShowEditMenu(false)} />}
        {show_setting_menu && <Setting_submenu onClose={() => set_show_setting_menu(false)}/>}
    </>
    )
}
export default Winmenu;