export enum NotesActionKind {
  ADD = "ADD",
}

export interface NotesAction {
  type: NotesActionKind;
  payload: NoteInterface;
}

export interface NoteInterface {
  title: string;
  details: string;
}
