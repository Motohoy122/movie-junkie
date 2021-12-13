
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import Button from '@mui/material/Button';

const LandingPage = () => {
    const history = useNavigate();

    

    return (
        <div>
            <div className={styles.hero}>
                
                
                <div className={styles.content}>
                    <h1>Don't know what movie to watch?</h1>
                    <Button onClick='' variant="contained">Get Started</Button>
                    <p>Sign up today, to avoid wasting countless hours scanning through streaming services, only to eventually compromise on a movie that may be enjoyable to watch.</p>
                </div>
                <div className={styles.background}>
                    <img src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='Movie collage for the login page background'/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;