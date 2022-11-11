import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function TalkPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="js-close talkpage">
      <div className="container">
        <div className="talkpage-boxtitle">
          <p>
            <a href="/">
              <span>Home</span>
            </a>
            <span>
              <i className="fa-solid fa-solid-icon fa-angle-right"></i>
            </span>
            <span>Let's talk </span>
          </p>
          <h1>Let's Talk</h1>
        </div>
        <div className="wrapper-form">
          <div className="talkpage-boxform">
            <div className="box-formcontact">
              <p>
                <strong> ST United </strong> is always glad to hear your
                comments regarding our services. Whether you have any questions,
                or wish to get a quote for your project, or require further
                information about what we can offer you, please do not hesitate
                to contact us
              </p>
              <div className="formcontact">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required type="text" placeholder="Join" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {" "}
                      The field is required.{" "}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationCustom02">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="join@gmail.com"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {" "}
                      The field is required.{" "}
                    </Form.Control.Feedback>{" "}
                  </Form.Group>
                  <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Your Phone</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="0989-898-989"
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {" "}
                        The field is required.{" "}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="ReactJs" required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {" "}
                      The field is required.{" "}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder=""
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {" "}
                      The field is required.{" "}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button className="form-button" type="submit">
                    Send
                  </Button>
                </Form>
              </div>
            </div>

            <div className="box-office">
              <h4>Office</h4>
              <p>Address: Nomad Space, No.14 An Thuong 18, Danang, Vietnam</p>
              <p>Hotline: (+84) 777 463 183</p>
              <p>Email: hello(at)stunited.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
