import { useReducer } from "react";
import styled from "styled-components";
import { NoteInterface, NotesAction, NotesActionKind } from "../../models.d";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const reducer = (state: NoteInterface[], action: NotesAction) => {
  const { type, payload } = action;
  switch (type) {
    case NotesActionKind.ADD:
      if (payload.title !== "") {
        return [...state, payload];
      }
    default:
      return state;
  }
};

const Content = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Wrapper>
      <Sidebar notes={state} addNote={dispatch} />
      <MainContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export default Content;
