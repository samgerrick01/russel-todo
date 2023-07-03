import React from "react";
import "./styles/homepage.scss";
import { Input } from "antd";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NO_TODOS = "NO TODOS YET";

function HomePage() {
  const navigate = useNavigate();
  const { todos } = useSelector((state) => state.todos);

  return (
    <div className="homepage">
      <div className="container">
        <Input
          style={{ height: "52px" }}
          placeholder="Search Todo"
          suffix={<HiMagnifyingGlassCircle />}
        />

        <div className="todo-table w-100">
          <label style={{ width: "60%" }}>Item</label>
          <label style={{ width: "40%" }}>Action</label>

          <div className="table-content">
            {!todos.length && NO_TODOS}
            {todos.length &&
              todos.map((todo) => (
                <div className="w-100 d-flex" key={todo.id}>
                  <label style={{ width: "60%" }}>{todo.name}</label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "40%" }}
                  >
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/update/${todo.id}`)}
                    >
                      Edit
                    </span>
                    <span style={{ cursor: "pointer" }}>Del</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Button onClick={() => navigate("/add")} variant="primary">
          Add Todo
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
