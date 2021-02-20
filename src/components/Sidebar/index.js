import React from 'react'
import { AiOutlinePushpin } from 'react-icons/ai'
import { IoStatsChartSharp } from 'react-icons/io5'
import { FaShapes } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { IoMdRefresh } from 'react-icons/io'

import { SidebarArea, List, ListItem } from './styles'

const listIcons = [AiOutlinePushpin, IoStatsChartSharp, FaShapes, HiMailOpen, IoMdRefresh]
const Sidebar = () => {
    return (
        <SidebarArea>
            <List>
                {listIcons.map(Icon => <ListItem><Icon /></ListItem>)}
            </List>
        </SidebarArea>
    )
}
export default Sidebar