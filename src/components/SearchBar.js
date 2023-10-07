import React from "react";

class SearchBar extends React.Component {

  
    render () {
        return (
            <form onSubmit={(event) => event.preventDefault()}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searchMoviep} type="text" 
                        className="form-control" 
                        placeholder="Search a movie" />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;