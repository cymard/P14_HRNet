import { useRef } from 'react';
import './modal.scss';

const Modal = ({isOpen, onClose, onExternalClick, children}) => {
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClose = () => {
        if (typeof onClose !== 'function') {
            console.error('onClose must be a function');
            return ;
        }

        onClose();
    }

    const handleExternalClick = e => {
        if(e.target === paragraphRef.current || e.target === buttonRef.current) {
            return;
        }

        if (typeof onExternalClick !== 'function') {
            console.error('onExternalClick must be a function');
            return ;
        }

        onExternalClick();
    }

    return (
        <>
            { isOpen &&
                <div onClick={e => handleExternalClick(e)} className="modalContent">
                    <p ref={paragraphRef}>{children}</p>
                    <button ref={buttonRef} onClick={handleClose}></button>
                </div>
            }
        </>
    );
};

export default Modal;
