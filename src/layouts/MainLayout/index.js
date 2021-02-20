import { Wrapper, MainContent } from './styles'
import Sidebar from '@components/Sidebar'
import Navbar from '@components/Navbar'
const MainLayout = ({ children }) => {
    return (
        <Wrapper>
            <Sidebar />
            <MainContent>
                <Navbar />
                {children}
            </MainContent>
        </Wrapper>
    )
}
export default MainLayout