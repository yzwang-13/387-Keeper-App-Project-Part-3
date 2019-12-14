import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  function deletion(deleteKey) {
    console.log(deleteKey);
    setItems(prevItems => {
      console.log(prevItems);
      return prevItems.filter(item => {
        return item.key !== deleteKey;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        items={items}
        setItems={setItems}
        text={text}
        setText={setText}
      />
      {items.map(item => {
        return (
          <Note
            key={item.key}
            id={item.key}
            title={item.title}
            content={item.content}
            deletion={deletion}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
