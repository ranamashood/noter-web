import { useState } from "react";
import TextInput from "../TextInput";

const MainContent = () => {
  const [title, setTitle] = useState<string>("");

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  return (
    <div>
      <TextInput label={"Title"} value={title} onChange={titleHandler} />
      <div>Note details</div>
    </div>
  );
};

export default MainContent;
