import React from 'react'
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser } from '../../../../redux/actions/userAction';

Profile.propTypes = {
    isOpen: PropTypes.bool, // Change the type accordingly
};

export default function Profile(props) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state?.user?.user)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(addCurrentUser(null))
        localStorage.removeItem(import.meta.env.VITE_APP_AUTH_LOCAL_STORAGE_KEY)
    }
    console.log(currentUser);
    return (
        <div className={`absolute duration-300 ${props.isOpen ? `right-0 sm:right-72` : `right-0 sm:right-24`}`}>
            {/* < div className={"hidden sm:ml-6 sm:block"}> */}
            <img className={" w-14 h-14 md:w-20 md:h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer hover:scale-110"} onClick={handleClick} src={currentUser?.employee_image} alt="Bordered avatar" />
            {/* </div> */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuList dense>
                    <MenuItem>
                        <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Add space before paragraph</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText>Add space after paragraph</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={logout}>
                        <ListItemText >Logout</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}
