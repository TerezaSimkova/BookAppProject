import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const popupDeleteForm = ({ onSubmitDelete }) => {

    const history = useHistory();
    const [data, setData] = useState({
        ratingId: 0,
    });

    const onSumbDelete = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
        }

        let response = await fetch('/api/rating/' + onSubmitDelete , requestOptions);
        if (response.ok) {
            history.go(0);
        }
        else {
            console.log(response.status, "Chiamata non é andata buon fine.")
        }
    }

    return (
        <div className="dark_background">
            <div className="dark_container_content">
                <div className="dark_inner_box">
                    <div className="delete_text_container">
                        <h4 className="delete_main_text">Are you sure you want to delete this review ?</h4>
                        <p className="delete_text">* This action is irreversible</p>
                    </div>
                    <form onSubmit={onSumbDelete}>
                        <div className="delete_form_row">
                            <div className="inner_row">
                                <button className="ok" type="submit">Yes</button>
                                <button className="delete" type="submit">No, go back.</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default popupDeleteForm;