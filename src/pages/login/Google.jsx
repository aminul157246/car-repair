
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import axios from "axios";

const Google = () => {

    const {signInWithGoogle} = useContext(AuthContext)
const navigate = useNavigate()
 
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {

            // const userInfo = {
            //     name : res.user?.displayName,
            //     email : res.user?.email,
            //     photo : res.user?.photoURL
                
            // }

            // axios.post('/users', {userInfo})
            // .then(res => {
            //     console.log(res.data);
                navigate('/')
            // })

            console.log(res.user);
            swal("Good job!", "Sign in with Google done!", "success");
        })
        .catch(err => {
            console.log(err.message);
        })
    } 


    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">Google log in </button>
        </div>
    );
};

export default Google;