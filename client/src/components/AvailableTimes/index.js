import React from 'react'
import { Form, Button } from "react-bootstrap";
function AvailableTimes({ availableTimesList, handleInputChange, datepickerDisabled }) {


    return (
        <>

            <Form.Group controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                {datepickerDisabled ? 
                <Form.Control type="date" name="date" placeholder="Enter date" onChange={handleInputChange} readOnly/> : 
                <Form.Control type="date" name="date" placeholder="Enter date" onChange={handleInputChange} />}
                <Form.Text className="text-muted">
                    <h6>Available Time(s):</h6>
                    {availableTimesList.map((key, i) => {
                        return (                            
                                <Button className="mt-1 mr-1" key={i} value={key} name="time" onClick={handleInputChange}>{key}</Button>
                        )
                    })
                    }
                </Form.Text>
            </Form.Group>

        </>
    )
}

export default AvailableTimes
