import { ImEqualizer } from 'react-icons/im'
import { IoDownloadOutline } from 'react-icons/io5'
import { AiOutlinePrinter, AiOutlineQuestionCircle, AiOutlineLogout } from 'react-icons/ai'
import { NavbarArea, Title, Menu, MenuItem, Log } from './styles'

const menuIcons = [ImEqualizer, IoDownloadOutline, AiOutlinePrinter, AiOutlineQuestionCircle, AiOutlineLogout]

const Navbar = () => {
    return (
        <NavbarArea>
            <Title> Diagnostic Tool </Title>
            <Log>Logged in as General User </Log>
            <Menu>
                {menuIcons.map(Icon => <MenuItem><Icon /></MenuItem>)}
            </Menu>
        </NavbarArea>
    )
}
export default Navbar