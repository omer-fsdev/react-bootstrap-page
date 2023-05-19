import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CourseCard = ({ data }) => {
  return (
    <Container className="text-center mt-4 mb-5 p-4">
      <Row className="gap-4">
        {data.map(({ img, name, text, id }) => {
            // const{img, name, text} = item
          return (
            <Col sm={12} md={6} lg={4} key={id}>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="warning">Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
