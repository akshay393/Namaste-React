import { Outlet } from "react-router-dom";
import ProfileFunction from "./ProfileFunctional";
import ProfileClass from "./ProfileClassBased";

const About = () => {
    return (
        <>
            <h1>About Us Page</h1>
            <p>This page contains the information about the project.</p>
            {/* <Outlet /> */}
            <ProfileFunction name="Akshay" id={1} />
            <ProfileClass name="Akshay" id={2} />
        </>
    )
}

export default About;