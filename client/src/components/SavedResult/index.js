import React from "react":
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0 ) ? (
        <div className="card">
            <div Classname="card-body player">
                <div className="article">
                    <h3>Books that you saved</h3>
                </div>
            </div> 
        </div>
    ) : (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that you saved</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedBooks._id}>
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <col size="1" className="emptyCol" />
                                    <col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedbook.title}</h2>
                                        </Row>
                                        <Row>
                                            <h2 className="bookAuthor">{savedbook.authors}</h2>
                                        </Row>
                                        <Row>
                                            <h2 className="bookDescription">{savedbook.description}</h2>
                                        </Row>
                                    </col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv">
                                    <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete book
                                    </button>
                                    <a href={savedbook.link} target="_blank">
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
export default SavedResult