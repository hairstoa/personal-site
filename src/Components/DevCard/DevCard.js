import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import "./DevCard.css";

const DevCard = (props) => {
    // export default class DevCard extends Component {
    return (
        <Card bg="transparent">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <ListGroup horizontal >
                    {props.languages.map(function (lang, idx) {
                        return (<ListGroup.Item  variant="warning" key={idx}>{lang}</ListGroup.Item>)
                    })}
                </ListGroup>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <Button >View Repo</Button>
                </a>

            </Card.Body>
        </Card>
    );
}

export default DevCard;