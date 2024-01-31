
import {
    ProfileWrapper,
    SideRail,
    WelcomeUser,
    ProfileMain,
    ProfileNav,
    Logout,
    ContactItem
} from '../styles/portalElements'

import { LoginButton2 } from '../styles/loginElements'
import UserInfo from '../components/utils/UserInfo'
function UserPortal({ currentUser, setCurrentUser }) {
    return (
        <ProfileWrapper>
            <SideRail />
            <ProfileMain>
                <ProfileNav>
                    <WelcomeUser>Welcome back, {currentUser.firstname}!</WelcomeUser>
                    <LoginButton2 onClick={() => { setCurrentUser(null) }}>logout</LoginButton2>
                </ProfileNav>
                <UserInfo currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </ProfileMain>
        </ProfileWrapper>
    )
}

export default UserPortal






