
import {
    ProfileWrapper,
    SideRail,
    WelcomeUser,
    ProfileMain,
    ProfileNav,
    Logout,
    ContactItem
} from '../styles/portalElements'
import { useNavigate } from "react-router-dom"
import { LoginButton2 } from '../styles/loginElements'
import UserInfo from '../components/UserInfo'
function UserPortal({ currentUser, setCurrentUser }) {
    const navigate = useNavigate()
    return (
        <ProfileWrapper>
            <SideRail />
            <ProfileMain>
                <ProfileNav>
                    <WelcomeUser>Welcome back, {currentUser.firstname}!</WelcomeUser>
                    <LoginButton2 onClick={() => { 
                        setCurrentUser(null)  
                        navigate(`/`)
                        }}>logout</LoginButton2>
                </ProfileNav>
                <UserInfo currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </ProfileMain>
        </ProfileWrapper>
    )
}

export default UserPortal






