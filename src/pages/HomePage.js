import React from "react";
import PropTypes from "prop-types";
import { useSearchParams,Link } from 'react-router-dom';
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes} from "../utils/local-data";
import { FiPlus } from "react-icons/fi";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return(
        <section className="homepage">
            <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList notes={notes}/>
            <div className="homepage__action">
                <Link to="/add"><button className="action" type="button" title="Tambah"><FiPlus/></button></Link>  
            </div>
        </section>
        );
    }
}

HomePage.propTypes ={
    defaultKeyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default HomePageWrapper;