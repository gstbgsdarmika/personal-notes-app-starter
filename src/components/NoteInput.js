import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";

class NoteInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body : '',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState({title:event.target.value});
    }

    onBodyChangeEventHandler(event) {
        this.setState({body:event.target.value});
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return (
            <>
                <div className='add-new-page__input' onSubmit={this.onSubmitEventHandler}>
                    <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                </div>
                <div className="add-new-page__action">
                    <button className="action" type="submit" title="Simpan" onClick={this.onSubmitEventHandler}><FiCheck/></button>
                </div>
            </>
        )
    }
}


NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;



