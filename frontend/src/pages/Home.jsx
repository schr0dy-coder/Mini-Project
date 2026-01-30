import { useState, useEffect } from "react";
import Notes from "../components/Notes.jsx";
import api from "../api";
import './Home.css';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const getNote = async () => {
    api
      .get("/api/notes/")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setNotes(data);
      })
      .catch((error) => {
        alert("Error fetching notes: " + error.message);
      });
  };
  useEffect(() => {
    getNote();
  }, []);

  const deleteNote = async (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        alert("Note deleted successfully");
        getNote();
      })
      .catch((error) => {
        alert("Error deleting note: " + error.message);
      });
  };

  const createNote = async (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", {
        title: title,
        content: content,
      })
      .then((res) => {
        alert("Note created successfully");
        getNote();
      })
      .catch((error) => {
        alert("Error creating note: " + error.message);
      });
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Notes key={note.id} notes={note} onDelete={deleteNote} />
        ))}
      </div>
      <h2>Create a new note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title: </label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content: </label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Home;
