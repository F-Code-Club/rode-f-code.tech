import { useEffect, useState } from 'react';

import { Stack, Toast } from 'react-bootstrap';

import ButtonStyled from '../../components/Button/';
import roomAPI from '../../utils/api/roomAPI';
import CreateBEQuestions from './components/CreateBEQuestions';
import CreateFEQuestions from './components/CreateFEQuestions';
import CreateRoomInfo from './components/CreateRoomInfo';
import { FEInitQuestion, BEInitQuestion } from './initialQuestion';
import * as St from './styles';

const CreateRoom = () => {
    // Create question
    const [roomInfo, setRoomInfo] = useState({
        code: '',
        openTime: '',
        type: '',
        isPrivate: '',
    });
    const [questions, setQuestions] = useState(BEInitQuestion);

    // Toast
    const [toast, setToast] = useState({
        show: false,
        message: '',
    });
    const toggleShow = () =>
        setToast({
            show: false,
            message: '',
        });

    // Submit
    const handleSubmit = () => {
        console.log('Payload', { ...roomInfo, questions });
        roomAPI
            .createOne({ ...roomInfo, questions })
            .then((res) => {
                console.log('Error: ', res.data.err);
                setToast({
                    show: true,
                    message: `${res.data.message}: Open tab Console for more details`,
                });
            })
            .catch((err) => {
                console.log('Error: ', err);
                setToast({ show: true, message: 'Error! Open tab Console for more details' });
            });
    };

    // Re-render when room type change
    useEffect(() => {
        if (roomInfo.type === 'FE') {
            console.log('FE');
            setQuestions(FEInitQuestion);
        } else if (roomInfo.type === 'BE') {
            console.log('BE');
            setQuestions(BEInitQuestion);
        }
    }, [roomInfo.type]);

    return (
        <St.Wrapper>
            <St.Title>Create Room</St.Title>
            <CreateRoomInfo setRoomInfo={setRoomInfo} />
            {roomInfo.type === 'FE' ? (
                <CreateFEQuestions questions={questions} setQuestions={setQuestions} />
            ) : (
                <CreateBEQuestions questions={questions} setQuestions={setQuestions} />
            )}

            <Stack direction="horizontal" gap={3} className="justify-content-end mb-4">
                <ButtonStyled buttonType="secondary">Cancel</ButtonStyled>
                <ButtonStyled buttonType="solid" onClick={handleSubmit}>
                    Create
                </ButtonStyled>
            </Stack>

            <Toast show={toast.show} onClose={toggleShow} delay={5000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Create Room</strong>
                    <small>Recently</small>
                </Toast.Header>
                <Toast.Body>{toast.message}</Toast.Body>
            </Toast>
        </St.Wrapper>
    );
};

export default CreateRoom;
