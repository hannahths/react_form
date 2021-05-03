import React, { Component } from 'react';

import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

export default class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '', 
            adress:'',
            showSuccessAlter: false , 
            showErrorAlter:false};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(event) {
        if(this.state.name.trim()=="" || this.state.email.trim()=="" || this.state.adress.trim()=="" ){
            this.setState({
                [this.state.showSuccessAlter]: false
            });
            this.state.showSuccessAlter=false;
            this.setState({
                [this.state.showErrorAlter]: true
            });
            this.state.showErrorAlter=true;
        }else{
            this.setState({
                [this.state.showErrorAlter]: false
            });
            this.state.showErrorAlter=false;
            this.setState({
                [this.state.showSuccessAlter]: true
            });
            this.state.showSuccessAlter=true;
            event.preventDefault();
        }
        
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Card className="bg-dark text-white bigCard">
                        <Card.Body><Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter E-Mail" value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Adress</Form.Label>
                                <Form.Control name="adress" placeholder="Enter Adress" value={this.state.adress} onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="outline-primary"  size="lg" block  onClick={this.handleClick}>
                                Submit
                    </Button>
                            <Alert variant="primary mt-3" show={this.state.showSuccessAlter}>
                                <p> You successfully submittted the user.</p>
                                <hr />
                                <p className="mb-1">
                                    Name: {this.state.name}, E-Mail: {this.state.email}, Adress: {this.state.adress}
                                </p>
                            </Alert>
                            <Alert variant="danger mt-3" show={this.state.showErrorAlter}>
                                <p class="mb-1">Please fill in all information.</p>
                            </Alert>
                        </Form></Card.Body>
                    </Card>

                </header>
            </div>
        );
    }
}




