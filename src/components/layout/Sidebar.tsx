import styled from "styled-components";
import { NoteInterface, NotesAction, NotesActionKind } from "../../models.d";

interface Props {
  notes: NoteInterface[];
  addNote: React.Dispatch<NotesAction>;
}

const Sidebar = (props: Props) => {
  const { notes, addNote } = props;

  return (
    <Wrapper>
      <button
        onClick={() => {
          addNote({
            type: NotesActionKind.ADD,
            payload: { title: "hello", details: "world" },
          });
        }}
      >
        Add Note
      </button>
      <div>
        {notes.map((note, key) => (
          <div key={key}>
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
