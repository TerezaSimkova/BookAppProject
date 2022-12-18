import React from 'react';
import DeletePopup from './DeletePopUp';
import FocusTrap from 'focus-trap-react';
export const ModalDelete = ({
    onClickOutsideDelete,
    onKeyDown,
    modalRef,
    buttonRef,
    closeDeleteModal,
    onSubmitDelete
}) => {
    return (
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onClick={onClickOutsideDelete}
                onKeyDown={onKeyDown}
            >
                <div className="modal-area" ref={modalRef}>
                    <button
                        ref={buttonRef}
                        aria-label="Close Modal"
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeDeleteModal}
                    >
                        <span id="close-modal" className="_hide-visual">
                            Close
                        </span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className="modal-body">
                        <DeletePopup onSubmitDelete={onSubmitDelete} />
                    </div>
                </div>
            </aside>
        </FocusTrap>
    );
};

export default ModalDelete;
