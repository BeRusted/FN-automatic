import "./SubMenu.css";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function Edit_submenu() {
  return (
    <Menu menuButton={<MenuButton className="menu-button">编辑(E)</MenuButton>}>
      <MenuItem onClick={() => console.log("还原 clicked")}>撤销</MenuItem>
      <MenuItem onClick={() => console.log("重做 clicked")}>恢复</MenuItem>
      <MenuItem onClick={() => console.log("剪切 clicked")}>添加启动键</MenuItem>
      <MenuItem onClick={() => console.log("复制 clicked")}>添加执行键</MenuItem>
      <MenuItem onClick={() => console.log("粘贴 clicked")}>添加执行键(执行脚本)</MenuItem>
    </Menu>
  );
}

function Concerning_submenu() {
  return (
    <Menu menuButton={<MenuButton className="menu-button">关于(C)</MenuButton>}>
      <MenuItem onClick={() => console.log("关于 1 clicked")}>作者</MenuItem>
      <MenuItem onClick={() => console.log("关于 2 clicked")}>关于 2</MenuItem>
    </Menu>
  );
}

export { Edit_submenu, Concerning_submenu };
