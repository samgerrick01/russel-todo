import React, { useState, useEffect } from "react";
import "./styles/addpage.scss";
import { Input } from "antd";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../components/redux/todoSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getID = useParams();

  const { todos } = useSelector((state) => state.todos);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    status: null,
  });
  console.log(formData);
  useEffect(() => {
    if (getID) {
      const getTodo = todos.find((todo) => todo.id === getID.id);
      setFormData({
        id: getTodo.id,
        name: getTodo.name,
        status: getTodo.status,
      });
    }
  }, []);

  const updateHandle = () => {
    if (!formData.name) {
      toast.warning("Todo is Required!");
    } else {
      dispatch(updateTodo(formData));
      navigate("/");
    }
  };

  return (
    <div className="addpage">
      <div className="container">
        <label>Update Todo</label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Add Todo Here"
          className="mb-2"
        />

        <Row>
          <Col>
            <Button className="w-100" variant="primary" onClick={updateHandle}>
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

export default UpdateForm;
