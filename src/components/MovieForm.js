import {useState} from 'react';
import Modal from '@mui/material/Modal';

const MovieForm = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(props.value)
    const hanleModalOpen = () => {
        if (props.value === true ) {
            setOpen(props.value);
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <h1>test</h1>
        </Modal>
    )
}

export default MovieForm;