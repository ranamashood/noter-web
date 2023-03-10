import "styled-components";

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

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      buttonHover: string;
    };
    borderRadius: string;
  }
}
