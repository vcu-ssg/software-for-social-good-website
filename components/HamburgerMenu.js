import styles from '../styles/HamburgerMenu.module.css';
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';
import HamburgerIcon from './HamburgerIcon';
import Link from 'next/link';

const HamburgerMenu = () => {
    return(
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon/>}
            />
            <MenuList>
                <MenuItem as='a' href='about'>Our Team</MenuItem>
                <MenuItem as='a' href="/ourwork">Our Work</MenuItem>
                <MenuItem as='a' href="/forstudents">For Students</MenuItem>
                <MenuItem as='a' href="/contactus">Contact Us</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default HamburgerMenu;