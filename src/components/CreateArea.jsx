import React, { useState } from "react";
import uuidv1 from "uuid/v1";

function CreateArea(props) {
  function handlleAdd(event) {
    // console.log(event.target);
    props.setItems(prevItems => {
      return [
        ...prevItems,
        { key: uuidv1(), title: props.text.title, content: props.text.content }
      ];
    });
    // console.log(props.items);
    props.setText({ title: "", content: "" });
    event.preventDefault();
  }

  function handleTextChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    props.setText(prevValue => {
      return name === "title"
        ? { title: value, content: prevValue.content }
        : { title: prevValue.title, content: value };
    });
  }

  // function formSubmitted(event) {
  //   handlleAdd();
  //   event.preventDefault();
  // }

  return (
    <div>
      <form onSubmit={handlleAdd}>
        <input
          name="title"
          placeholder="Title"
          value={props.text.title}
          onChange={handleTextChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.text.content}
          onChange={handleTextChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
