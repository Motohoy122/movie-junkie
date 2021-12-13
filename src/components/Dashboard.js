import {useState} from 'react';
import styles from './Dashboard.module.css';
import Button from '@mui/material/Button';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    const handleModalOpen = () => {
        setOpen(!open);
    }
    return (
        <div className={styles.container}>
            
            <div className={styles.startSurvey}>
                <Button onClick={handleModalOpen} value={open} variant="contained">Take the Survey!</Button>
            </div>
        </div>
    )
}

export default Dashboard