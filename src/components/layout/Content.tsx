import { useReducer } from "react";
import { NoteInterface, NotesAction, NotesActionKind } from "../../models.d";
import Sidebar from "./Sidebar";

const reducer = (state: NoteInterface[], action: NotesAction) => {
  const { type, payload } = action;
  switch (type) {
    case NotesActionKind.ADD:
      return [...state, payload];
    default:
      return state;
  }
};

const Content = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return <Sidebar notes={state} addNote={dispatch} />;
};

export default Content;
