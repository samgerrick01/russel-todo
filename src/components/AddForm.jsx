import React, { useState } from "react";
import "./styles/addpage.scss";
import { Input } from "antd";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./redux/todoSlice";

function AddForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const addHandle = () => {
    if (!text) {
      toast.warning("Todo is Required!");
    } else {
      dispatch(
        addTodo({
          id: nanoid(),
          name: text,
          status: false,
        })
      );
      navigate("/");
    }
  };
  return (
    <div className="addpage">
      <div className="container">
        <label>Add Todo</label>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Todo Here"
          className="mb-2"
        />

        <Row>
          <Col>
            <Button className="w-100" variant="primary" onClick={addHandle}>
              Add
            </Button>
          </Col>

          <Col>
            <Button
              className="w-100"
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Col>
        </Row>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

export default AddForm;
