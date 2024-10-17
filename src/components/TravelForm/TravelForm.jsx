import React,{useState} from "react";
import { Container,Row,Col,Button,Form,InputGroup,Table } from "react-bootstrap";
import { Link } from "gatsby";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/styles/_index.scss";


const TravelForm = () => {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return(
        <div className="travelForm-wrapper">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xl={4}>
                        <div className="section-title">Enter your Trip Details</div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="validationCustom01" className="form-input-overall">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter the Title"                             
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        {/* <DateRangePicker initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}>
                            <button type="button">Click Me To Open Picker!</button>
                        </DateRangePicker>                         */}

                        <Form.Group controlId="validationCustom02" className="form-input-overall">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter your destination"                            
                        />                        
                        </Form.Group>

                            <Form.Label>Pick a Date</Form.Label>
                            <DatePicker
                                required 
                                type="date" 
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                                className="date-class"
                                placeholderText="Start and End Date"                                
                                />                                                     

                        <Form.Group controlId="validationCustom02" className="form-input-overall">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter your trip description"                            
                        />                        
                        </Form.Group>

                        {/* <Form.Group controlId="validationCustom03" className="form-input-overall">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom04" className="form-input-overall">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom05" className="form-input-overall">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                        </Form.Group> */}

                        {/* <Form.Group className="mb-3">
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                        </Form.Group> */}
                        <Button type="submit">Submit form</Button>
                      </Form>
                    </Col>

                    <Col xl={1}></Col>

                    <Col xl={7}>
                        <div className="section-title">Your Bookings</div>

                        <Table responsive className="table-section">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Destination</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="trip-detail-title">Summer</td>
                                <td className="trip-detail-destination">Bali</td>
                                <td className="trip-detail-date">
                                    <div>01-01-25</div>
                                    <div>05-01-25</div>
                                </td>
                                <td className="trip-detail-description">We are going for trip dsfsf sdfsdvfasevef bfjsbhubfshd fh fbha sbhsf ahgs sfagh </td>
                                <td className="trip-detail-action ">
                                    <div className="d-flex justify-content-evenly align-items-center">
                                        <div><Link to="">Edit</Link></div>
                                        <div className="slash">|</div>
                                        <div><Link to="">Delete</Link></div>
                                    </div>
                                    
                                </td>                                
                                </tr>

                                <tr>
                                <td>2</td>
                                
                                </tr>

                                <tr>
                                <td>3</td>
                                
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
             
        </div>
    )
}

export default TravelForm