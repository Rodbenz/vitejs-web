/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { checkIsActive } from './helpers/RouterHelpers';
import { useLocation } from "react-router";

SideberMenuItem.propTypes = {
    isOpen: PropTypes.bool, // Change the type accordingly
};


export default function SideberMenuItem(props) {
    const [openSubmenu, setOpenSubmenu] = React.useState(false);
    const menu = useSelector((state) => state?.user_menu?.user_menu)
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [menuItems, setMenuItems] = React.useState([]);
    const [checkMenu, setCheckMenu] = React.useState(null);

    const handleClick = (el) => {
        navigate(`/${el.menu_url}`)
    };

    const handleClickMenu = (data) => {
        setCheckMenu(data == checkMenu ? null : data)
        setOpenSubmenu(data == checkMenu ? false : true)
    };

    const setSubMenu = () => {
        const data = menu;
        const newData = [];
        const newDataSub = [];
        Array.isArray(data) &&
            data.forEach((el) => {
                if (el.menu_sub == 0) {
                    newData.push(el);
                }
                if (el.menu_sub != 0) {
                    newDataSub.push(el);
                }
            });
        const newMenu = [];
        Array.isArray(newData) &&
            newData.forEach((menu) => {
                const newSubMenu = [];
                Array.isArray(newDataSub) &&
                    newDataSub.forEach((submenu) => {
                        if (menu.menu_id == submenu.menu_sub) {
                            newSubMenu.push(submenu);
                        }
                    });
                newMenu.push({ ...menu, ...{ submenu: newSubMenu } });
            });
        setMenuItems(newMenu);
    };

    React.useEffect(() => {
        setSubMenu();
    }, [menu]);

    return (
        <div className=''>
            <ul className='ml-[-10px]'>
                {menuItems.map((el, index) => (
                    <div key={index} >
                        {el?.submenu.length == 0 ? (
                            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 mt-2 ${pathname == `/${el.menu_url}` && `bg-blue-200`}`} onClick={() => handleClick(el)}>
                                <Stack direction={'row'} spacing={1}>
                                    <span className='text-2xl block float-left'>
                                        {/* {el.icon} */}
                                        <i className={`${el.menu_icon} fs-3`}></i>
                                    </span>
                                    <div>
                                        <label className={`w-40 text-base font-medium flex-1 absolute pt-1  ${props.isOpen ? `visible` : `invisible`}`}>
                                            {el.menu_name}
                                        </label>
                                    </div>
                                </Stack>
                            </li>
                        ) : (
                            <>
                                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 mt-2`} onClick={() => handleClickMenu(el)}>
                                    <Stack direction={'row'} spacing={18}>
                                        <div>
                                            <Stack direction={'row'} spacing={1}>
                                                <span className='text-2xl block float-left'>
                                                    {/* {el.icon} */}
                                                    <i className={`${el.menu_icon} fs-3`}></i>
                                                </span>
                                                <div>
                                                    <label className={`w-40 text-base font-medium flex-1 absolute pt-1  ${props.isOpen ? `visible` : `invisible`}`}>
                                                        {el.menu_name}
                                                    </label>
                                                </div>
                                            </Stack>
                                        </div>
                                        <div className={`${props.isOpen ? `visible` : `invisible`}`}>
                                            {openSubmenu && checkMenu.menu_id == el.menu_id ? (
                                                <ExpandLessIcon />
                                            ) : (
                                                <ExpandMoreIcon />
                                            )}
                                        </div>
                                    </Stack>
                                </li>
                                <div className={`${!props.isOpen && `hidden`}`}>
                                    {openSubmenu && checkMenu.menu_id == el.menu_id ? (
                                        <>
                                            {el?.submenu.map((subMenu, index) => (
                                                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-1 px-10 hover:bg-gray-200 rounded-md mr-5 mt-2 ${pathname == `/${subMenu.menu_url}` && `bg-blue-200`}`} onClick={() => handleClick(subMenu)}>
                                                    <Stack direction={'row'} spacing={1}>
                                                        <span className='text-2xl block float-left'>
                                                            {/* {el.icon} */}
                                                            <i className={`${subMenu.menu_icon} fs-3`}></i>
                                                        </span>
                                                        <div>
                                                            <label className={`w-40 text-base font-medium flex-1 absolute pt-1`}>
                                                                {subMenu.menu_name}
                                                            </label>
                                                        </div>
                                                    </Stack>
                                                </li>
                                            ))}
                                        </>
                                    ) : (<></>)}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}