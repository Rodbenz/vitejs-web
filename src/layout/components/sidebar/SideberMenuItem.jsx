/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

SideberMenuItem.propTypes = {
    isOpen: PropTypes.bool, // Change the type accordingly
};


export default function SideberMenuItem(props) {
    const [openSubmenu, setOpenSubmenu] = React.useState(true);
    const menu = useSelector((state) => state?.user_menu?.user_menu)
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = React.useState([]);

    const handleClick = (path) => {
        navigate(`/${path}`)
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
                            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 mt-2`} onClick={() => handleClick(el.menu_url)}>
                                <Stack direction={'row'} spacing={1}>
                                    <span className='text-2xl block float-left'>
                                        {/* {el.icon} */}
                                        <i className={`${el.menu_icon} fs-3`}></i>
                                    </span>
                                    <div>
                                        <label className={`text-base font-medium flex-1 absolute pt-1  ${props.isOpen ? `visible` : `invisible`}`}>
                                            {el.menu_name}
                                        </label>
                                    </div>
                                </Stack>
                            </li>
                        ) : (
                            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 mt-2`} >
                                <Stack direction={'row'} spacing={18}>
                                    <div>
                                        <Stack direction={'row'} spacing={1}>
                                            <span className='text-2xl block float-left'>
                                                {/* {el.icon} */}
                                                <i className={`${el.menu_icon} fs-3`}></i>
                                            </span>
                                            <div>
                                                <label className={`text-base font-medium flex-1 absolute pt-1  ${props.isOpen ? `visible` : `invisible`}`}>
                                                    {el.menu_name}
                                                </label>
                                            </div>
                                        </Stack>
                                    </div>
                                    <div className={`${props.isOpen ? `visible` : `invisible`}`}>
                                        <ExpandMoreIcon />
                                    </div>
                                </Stack>
                            </li>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}