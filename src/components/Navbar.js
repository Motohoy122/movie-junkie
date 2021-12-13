import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice'
import { auth, provider} from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import styles from './Navbar.module.css';
import logo from '../images/logo.png'
import Button from '@mui/material/Button';


const Navbar = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const photo = useSelector(selectPhoto);

    
    
    const routeChangeHome = () => {
        if(userName){
            history('/dashboard');
        } else {
            history('/');
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history("/dashboard");
            }
        })
    }, [userName]);

    const handleGoogleAuth = () => {
        if(!userName) {
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                setUser(user);
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                alert(errorMessage);
            });
        } else if(userName) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                history('/');
              }).catch((error) => {
                alert(error.message);
              });
        }
    }

    

    return (
        <div >
            {
            !userName ? 
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt='Movie Junkie Logo' onClick={routeChangeHome} />
                </div>
                <div className={styles.links}>
                    <Button onClick={handleGoogleAuth} variant="outlined">Sign In</Button>
                </div>
            </div>
            : 
            <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt='Movie Junkie Logo' onClick={routeChangeHome} />
                </div>
                <div className={styles.links}>
                    <Button onClick={handleGoogleAuth} variant="outlined">Sign Out</Button>
                </div>
            </div>
            </>
            }

        </div>
    );
}

export default Navbar;