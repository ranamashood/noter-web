import styled from "styled-components";
import { NoteInterface, NotesAction, NotesActionKind } from "../../models.d";

interface Props {
  notes: NoteInterface[];
  addNote: React.Dispatch<NotesAction>;
}

const Sidebar = (props: Props) => {
  const { notes, addNote } = props;

  const addNoteHandler = () => {
    addNote({
      type: NotesActionKind.ADD,
      payload: { title: "hello", details: "world" },
    });
  };

  return (
    <Wrapper>
      <button onClick={addNoteHandler}>Add Note</button>
      <div>
        {notes.map((note) => (
          <div>
            {note.title} - {note.details}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
  width: 200px;
`;

export default Sidebar;
