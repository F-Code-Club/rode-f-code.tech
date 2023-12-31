import { Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';

const ButtonCustom = ({ props, ...rest }) => {
    return (
        <>
            <Button {...rest} className={props.className} variant="outline">
                <div className="px-1">
                    <AiOutlinePlus />
                </div>
                <div>{props.text}</div>
            </Button>
        </>
    );
};
export default ButtonCustom;
