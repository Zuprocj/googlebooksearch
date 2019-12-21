import React from "react";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.books.length === 0 ) ? (
        <div className="card">
            <div Classname="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div> 
        </div>
    ) : (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                    {props.books.map(book => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={book._id}>
                                    <Col size="2" className="bookImage">
                                        <img src={book.image} alt={book.title} />
                                    </Col>
                                    <col size="1" className="emptyCol" />
                                    <col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{book.title}</h2>
                                        </Row>
                                        <Row>
                                            <h2 className="bookAuthor">{book.authors}</h2>
                                        </Row>
                                        <Row>
                                            <h2 className="bookDescription">{book.description}</h2>
                                        </Row>
                                    </col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv">
                                    <button className="saveBook btn btn-primary" id={book._id} onClick={() => props.handleSavedButton(event)}>
                                        Save a Book
                                    </button>
                                    <a href={book.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View Book
                                        </button>
                                    </a>                                
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SearchResult