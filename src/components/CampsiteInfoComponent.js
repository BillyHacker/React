import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {

    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>


                < div key={this.props.campsite.comment.id} >
                    <p>
                        "{this.props.campsite.comment.text}"
                        <br />
                        {this.props.campsite.comment.author} - {" "}
                        {this.props.campsite.comment.date}
                    </p>
                </div>


            </div>
        );
    }
    return <div></div>;
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={(props.campsite)} />
                    <RenderComments comments={(props.campsite.comments)} />
                </div>
            </div>
        );
    }
    return <div />;
}


export default CampsiteInfo;