import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTravel, deleteTravel, updateTravel } from "../features/Users";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "./assets/styles/_index.scss";

const TravelForm = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState([null, null]); // State for date range
  const [startDate, endDate] = dateRange; // Destructure start and end dates from the date range
  const [desc, setDesc] = useState("");
  const [validated, setValidated] = useState(false);
  const [dateError, setDateError] = useState(false); // New state for date validation error

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Date validation
    if (!startDate || !endDate) {
      setDateError(true); // Show the error message for date validation
    } else {
      setDateError(false); // Reset the date error if date range is valid
    }

    // Check if form is valid including date range
    if (form.checkValidity() === false || !startDate || !endDate) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (isEditing) {
      // Dispatch updateTravel if we are in editing mode
      dispatch(
        updateTravel({
          id: currentId,
          title,
          destination,
          startDate,
          endDate,
          desc,
        })
      );
      setIsEditing(false); // Exit editing mode
      setCurrentId(null);  // Reset the currentId
    } else {
      // Dispatch addTravel if it's a new travel entry
      dispatch(
        addTravel({
          id: userList[userList.length - 1]?.id + 1 || 1,
          title,
          destination,
          startDate,
          endDate,
          desc,
        })
      );
    }

    // Reset the form fields after submission
    setTitle("");
    setDestination("");
    setDateRange([null, null]); // Clear date range
    setDesc("");
    setValidated(false); // Reset form validation
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentId(user.id);
    setTitle(user.title);
    setDestination(user.destination);
    setDateRange([new Date(user.startDate), new Date(user.endDate)]); // Prepopulate the date range for editing
    setDesc(user.desc);
  };

  return (
    <div className="travelForm-wrapper">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xl={4}>
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce offset={100}>
            <div className="form-div">
                <div className="section-title">Enter your Trip Details.</div>
                <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                action="javascript:void(0)"
                >
                <Form.Group
                    controlId="validationCustom01"
                    className="form-input-overall"
                >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    value={title}
                    placeholder="Enter the Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a title.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    controlId="validationCustom02"
                    className="form-input-overall"
                >
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    value={destination}
                    placeholder="Enter your destination"
                    onChange={(e) => setDestination(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a destination.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    controlId="validationCustom03"
                    className="form-input-overall"
                >
                    <Form.Label>Date Range</Form.Label>
                    <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => setDateRange(update)}
                    isClearable={true}
                    placeholderText="Select a date range"
                    className="form-control"
                    required
                    />
                    {dateError && (
                    <div className="text-danger">Please select a valid date range.</div>
                    )}
                </Form.Group>

                <Form.Group
                    controlId="validationCustom04"
                    className="form-input-overall"
                >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    value={desc}
                    placeholder="Enter your trip description"
                    onChange={(e) => setDesc(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a description.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="submit-button">
                    {isEditing ? "Update Trip" : "Submit Trip"}
                </Button>
                </Form>
            </div>
            </ScrollAnimation>
          </Col>

          <Col xl={1}></Col>

          <Col xl={7}>
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce offset={100}>
            <div className="table-div">
                <div className="section-title">Your Bookings.</div>
                <Table responsive className="table-section">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Destination</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Description</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList?.map((user, i) => (
                    <tr key={i}>
                        <td>{user.title}</td>
                        <td>{user.destination}</td>
                        <td>{new Date(user.startDate).toLocaleDateString()}</td>
                        <td>{new Date(user.endDate).toLocaleDateString()}</td>
                        <td>{user.desc}</td>
                        <td className="trip-detail-action">
                        <div className="d-flex justify-content-evenly align-items-center">
                            <div>
                            <button className="action-button" onClick={() => handleEdit(user)}>Edit</button>
                            </div>
                            <div className="slash">|</div>
                            <div>
                            <button className="action-button" onClick={() => dispatch(deleteTravel({ id: user.id }))}>Delete</button>
                            </div>
                        </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravelForm;
