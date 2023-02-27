import { useState } from "react";
import styled from "styled-components";
import { NoteInterface, NotesAction, NotesActionKind } from "../../models.d";
import Button, { StyledButton } from "../Button";

interface Props {
  notes: NoteInterface[];
  addNote: React.Dispatch<NotesAction>;
}

const Sidebar = (props: Props) => {
  const { notes, addNote } = props;
  const [activeButton, setActiveButton] = useState<number>(-1);
  const [hoveredButton, setHoveredButton] = useState<number>(-1);

  return (
    <Wrapper>
      <Button
        title="Add Note"
        isPermanent={true}
        onClick={() => {
          addNote({
            type: NotesActionKind.ADD,
            payload: { title: "hello", details: "world" },
          });
        }}
      />

      <NotesTitles onMouseLeave={() => setHoveredButton(-1)}>
        <ButtonHover
          hoveredButton={hoveredButton}
          isActive={true}
          isInvisible={true}
          isPermanent={false}
        >
          hover
        </ButtonHover>
        {notes.map((note, key) => (
          <Button
            key={key}
            title={note.title}
            onClick={() => setActiveButton(key)}
            onMouseEnter={() => setHoveredButton(key)}
            isActive={activeButton === key}
          />
        ))}
      </NotesTitles>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const NotesTitles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  margin: 2px 0px;
  button {
    margin: 2px 0px;
  }
`;

const ButtonHover = styled(StyledButton)<{ hoveredButton: number }>`
  position: absolute;
  width: 100%;
  pointer-events: none;
  z-index: 1;
  transform: translate(0, calc(110.5% * ${(props) => props.hoveredButton}));
  transition: transform 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
`;

export default Sidebar;
