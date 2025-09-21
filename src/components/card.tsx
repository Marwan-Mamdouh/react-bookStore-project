import type { IUserData } from "./interfaces";
import Card from "react-bootstrap/Card";

const TextCard = (data: IUserData) => {
  return (
    <div className="p-3 justify-content-center text-align-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.email}
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TextCard;
