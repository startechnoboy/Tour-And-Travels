/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import tourImage1 from "../assets/tour1.jpg";
import tourImage2 from "../assets/tour2.jpg";
import tourImage3 from "../assets/tour3.jpg";
import { useNavigate } from "react-router-dom";

function Tour() {
  const Navigate = useNavigate();
  const tours = [
    {
      title: "Explore the Mountains",
      description:
        "Join us for a breathtaking adventure through the mountains. Experience the beauty of nature and challenge yourself.",
      image: tourImage1,
    },
    {
      title: "City Lights",
      description:
        "Discover the vibrant life of the city. Enjoy the nightlife, culture, and exquisite cuisine in an unforgettable tour.",
      image: tourImage2,
    },
    {
      title: "Beach Getaway",
      description:
        "Relax and unwind on the most beautiful beaches. Perfect for a weekend escape or a long holiday with family and friends.",
      image: tourImage3,
    }
  ];
  const handleViewDetails = () => {
    Navigate('/ViewDetails');
  };

  return (
    <div className="cardItem container-fluid ">
      <h1 className="text-center mb-5" style={{ color: "black" }}>
        Our Tours
      </h1>
      <Row>
        {tours.map((tour, index) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            key={index}
            className="mb-4 d-flex align-items-stretch"
          >
            <Card className="shadow-sm h-100 ">
              <Card.Img variant="top" src={tour.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{tour.title}</Card.Title>
                <Card.Text className="text-muted mb-3">
                  {tour.description}  
                </Card.Text>
                <div className=" mt-auto">
                  <Button variant="primary" className="w-100" onClick={handleViewDetails}>
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Tour;
