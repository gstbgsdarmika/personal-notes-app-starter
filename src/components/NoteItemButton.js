import React from "react";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";
import {BiArchiveIn, BiArchiveOut} from "react-icons/bi";

function NoteItemButton({ isArchive, onArchive, onUnArchive,onDelete}){
    return (
        <div className="detail-page__action">
            {
                isArchive 
                ? <button className="action" type="button" title="Aktifkan" onClick={onUnArchive}><BiArchiveOut/></button>
                : <button className="action" type="button" title="Arsipkan" onClick={onArchive}><BiArchiveIn /></button>
            }
            <button className="action" type="button" title="Hapus" onClick={onDelete}><FiTrash2/></button>
        </div>
    );
}

NoteItemButton.propTypes = {
    onUnArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    isArchive: PropTypes.bool.isRequired,
}
export default NoteItemButton;