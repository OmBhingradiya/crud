import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState({
    name: "",
    rollNumber: "",
  });

  const [editCheck, setEditCheck] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (elem) => {
    const { name, value } = elem.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const addTodo = () => {
    if (editCheck) {
      const updatedTodos = todo.map((item, index) =>
        index === editIndex ? value : item
      );
      setTodo(updatedTodos);
      setEditCheck(false);
      setEditIndex(null);
    } else {
      setTodo([...todo, value]);
    }
    setValue({ name: "", rollNumber: "" });
  };

  const removeAll = () => {
    setTodo([]);
  };
  const remove = (index) => {
    setTodo(todo.filter((item, todoIndex) => todoIndex !== index));
  };
  const edit = (index) => {
    setValue(todo[index]);
    // todo.map((item, todoIndex) =>
    //   todoIndex == index ? setValue(item) : value
    // );
    setEditCheck(true);
    setEditIndex(index);
  };

  return (
    <div>
      <input name="name" value={value.name} onChange={handleChange} />
      <input
        name="rollNumber"
        value={value.rollNumber}
        onChange={handleChange}
      />
      <button onClick={addTodo}>{editCheck ? "Update" : "Add"}</button>
      <button onClick={removeAll}>Remove All</button>
      <div>
        {todo.length > 0 &&
          todo?.map((item, index) => {
            return (
              <div>
                <div>
                  Name:{item.name} | Roll Number:{item.rollNumber}
                  <button onClick={() => remove(index)}>delete</button>
                  <button onClick={() => edit(index)}>edit</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
