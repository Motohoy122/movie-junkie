import {useState} from 'react';
import MovieForm from './MovieForm';
import styles from './Dashboard.module.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    
    return (
        <div className={styles.container}>
            <Modal
                open={open}
                onClose={handleModalClose}
            >
                <Box className={styles.modal}>
                    <MovieForm />
                </Box>
            </Modal>
            <div className={styles.startSurvey}>
            
                <Button onClick={handleModalOpen}  variant="contained">Take the Survey!</Button>
            </div>
        </div>
    )
}

export default Dashboard