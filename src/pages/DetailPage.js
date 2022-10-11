import React from "react";
import PropTypes from "prop-types";
import NoteDetail from "../components/NoteDetail";
import NoteItemButton from "../components/NoteItemButton";
import PageNotFound from "./PageNotFound";
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

function DetailPageWrapper(){
    const navigate = useNavigate();
    const { id } = useParams();
    return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            note: getNote(props.id),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onUnArchivedHandler = this.onUnArchivedHandler.bind(this);
    }

    onDeleteHandler(){
        deleteNote(this.state.note.id);
        this.props.navigate('/');
    }

    onArchivedHandler(){
        archiveNote(this.state.note.id);
        this.props.navigate('/')
    }

    onUnArchivedHandler(){
        unarchiveNote(this.state.note.id);
        this.props.navigate('/');
    }

    render() {
        if(this.state.note){
            return (
                <section className="detail-page">
                    <NoteDetail {...this.state.note}/>
                    <div className="detail-page__action">
                        <NoteItemButton isArchive={this.state.note.archived} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler} onUnArchive={this.onUnArchivedHandler}/>
                    </div>
                </section>
            )
        } else {
            return <PageNotFound />
        }
    }
}
DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
}
export default DetailPageWrapper;