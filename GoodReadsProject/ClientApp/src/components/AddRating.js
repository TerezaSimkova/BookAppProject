import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const PopupRatingForm = ({ onSubmit }) => {

    const history = useHistory();
    const [data, setData] = useState({
        title: "",
        description: "",
        countStars: 0,
    });

    const { title, description, countStars } = data;
    const changeHandler = e => {

        setData({ ...data, [e.target.name]: [e.target.value] });

    }
    const onSubmitAdd = async () => {
        let ratingInfo = {
            title: title[0],
            description: description[0],
            countStars: countStars[0],
            ratingId: onSubmit
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(ratingInfo)
        }

        let response = await fetch('/api/rating', requestOptions);
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
                    <h3>Add New Review</h3>
                    <form onSubmit={onSubmitAdd}>
                        <div className="edit_form_row">
                            <div className="inner_row">
                                <label>Review Title</label>
                                <input type="text"
                                    value={title}
                                    onChange={changeHandler}
                                    name="title" required
                                />
                            </div>
                            <div className="inner_row">
                                <label>Description</label>
                                <input className="description"
                                    type="text"
                                    value={description}
                                    onChange={changeHandler}
                                    name="description" required
                                />
                            </div>
                            <div className="inner_row_stars">
                                <label>How many stars? </label>
                                <div className="row_stars">
                                    <input min="0" max="5" className="stars"
                                        type="number"
                                        value={countStars}
                                        onChange={changeHandler}
                                        name="countStars" required
                                    />
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupRatingForm;