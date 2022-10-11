import React from "react";
import PropTypes from "prop-types";
import {showFormattedDate } from "../utils/index";

function NoteArchived ({title, body, createdAt}){
    <>
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{body}</div>
    </>
}

NoteArchived.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteArchived;