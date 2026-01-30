import Reac from "react";
import "./Note.css";
const Notes = ({ notes, onDelete }) => {
    const formatDate = new Date(notes.created_at).toLocaleString();
    return <div>
        <p className="note-title">{notes.title}</p>
        <p className="note-content">{notes.content}</p>
        <p className="note-date">{formatDate}</p>
        <button className="delete-button" onClick={() => onDelete(notes.id)}>Delete</button>
    </div>
};
export default Notes;