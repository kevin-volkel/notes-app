class NoteModel{
  id: string;
  title: string;
  description: string;
  color: string;
  created: string;

  constructor(){
    this.id = "";
    this.title = "";
    this.description = "";
    this.color = "yellow";
    this.created = "";
  }
}

export default NoteModel;