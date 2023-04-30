import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Masonry from "@mui/lab/Masonry";

function App() {
  var [notes, setNotes] = useState([{ title: "hey", content: "Hi" }]);
  function updateNotes(note) {
    if (note.title && note.content) setNotes((prevalue) => [...prevalue, note]);
  }
  function deleteNote(id) {
    setNotes((prevalue) => prevalue.filter((note, i) => id !== i));
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={updateNotes} />

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={2}
        defaultHeight={450}
        defaultColumns={4}
        defaultSpacing={1}
      >
        {notes.map((note, i) => (
          <Note
            key={i}
            id={i}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </Masonry>

      <Footer />
    </div>
  );
}

export default App;
