import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

function NoteList({notes}) {
    if (notes.length){
        return (
            <section className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem key={note.id} id={note.id} {...note}/>
                    ))
                }
            </section>
        );
    } else {
        return <div className="notes-list__empty-message">Tidak ada catatan</div>
    }
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;