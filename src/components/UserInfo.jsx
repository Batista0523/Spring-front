import {
    ContactWrapper,
    ContactSection,
    ContactDescription,
    ContactItem,
    ContactItem2,
    Divider,
    InfoWrapper,
    AboutWrapper,
    AboutHeader,
    AboutContent,
    ProfileNavBottom,
} from '../styles/portalElements'
import {
    LoginButton2
} from '../styles/loginElements'
import profile from "../assets/profile.svg"
import "../assets/testBack1.jpeg"
import { useNavigate, Link } from "react-router-dom"
import "./UserInfo.css"
import "animate.css"
const API = import.meta.env.VITE_API_URL

const UserInfo = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate()

    const handleDelete = () => {
        const httpOptions = { method: "DELETE" }
        fetch(`${API}/users/${currentUser.user_id}`, httpOptions)
            .then((res) => res.json())
            .then(data => {
                if (data.error)
                    throw new Error(data.error)
                else if (data.err)
                    throw new Error(data.err)
                else {
                    setCurrentUser(null)
                    navigate("/login")
                }
            })
            .catch((error) => console.error(error))
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <InfoWrapper>
                <ContactWrapper>
                    <ContactItem2>
                        {
                            currentUser.profile_img === "profile image" ?
                                <img src={profile} style={{ height: "90px" }} /> :
                                <img className="pic" src={currentUser.profile_img} />
                        }
                    </ContactItem2>
                    <ContactSection>
                        <ContactItem>
                            <ContactDescription>
                                Full Name:
                            </ContactDescription>
                            {currentUser.firstname} {currentUser.lastname}
                        </ContactItem>
                        <br></br>
                        <ContactItem>
                            <ContactDescription>
                                Email:
                            </ContactDescription>
                            {currentUser.email}
                        </ContactItem>
                        <br></br>
                        <ContactItem>
                            <ContactDescription>
                                Username:
                            </ContactDescription>
                            {currentUser.username}
                        </ContactItem>
                        <br></br>
                        <ContactItem>
                            <ContactDescription>
                                DOB:
                            </ContactDescription>
                            {currentUser.dob}
                        </ContactItem>
                        <br></br>
                        <ContactItem>
                            <ContactDescription>
                                Member Since:
                            </ContactDescription>
                            {currentUser.registration_date.split("T")[0]}
                        </ContactItem>

                    </ContactSection>
                </ContactWrapper>
                <Divider />
                <AboutWrapper>
                    <AboutHeader>
                        About Me:
                    </AboutHeader>
                    <AboutContent>
                        {currentUser.about}
                    </AboutContent>
                </AboutWrapper>

                <ProfileNavBottom>
                    <LoginButton2 onClick={() => { navigate(`/users/${currentUser.user_id}/profile/edit`) }}>  edit </LoginButton2>
                    <LoginButton2 onClick={handleDelete}>delete account</LoginButton2>

                </ProfileNavBottom>
            </InfoWrapper>
        </div>
    )
}
export default UserInfo