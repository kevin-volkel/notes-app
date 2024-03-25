import NoteModel from './types'; // Import the 'Note' type from the appropriate file
import Link from 'next/link';

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30')
  const data = await res.json();
  return data?.items as NoteModel[];
}


export default async function NotesPage()  {
  const notes = await getNotes();


  return (
    <div>
      <h1>Notes</h1>
      {notes?.map( (note => (
        <Note key={note.id} {...note} />
      )))}
    </div>
  )
}

function Note(note : NoteModel) {
  const {id, created, title, description} = note;

  return (<Link href={`/notes/${id}`}>
    <h2>{title}</h2>
    <h5>{description}</h5>
    <p>{created}</p>
  </Link>)
}