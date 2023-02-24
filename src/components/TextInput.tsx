import { useState } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  label: string;
}

const TextInput = (props: Props) => {
  const { value, label } = props;
  const [isFocused, setIsFocused] = useState<boolean>(value !== "");

  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => value && setIsFocused(false)}
      />
      <Span isFocused={isFocused}>{label}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 100px;
`;

const Input = styled.input``;

const Span = styled.span<{ isFocused: boolean }>`
  position: absolute;
  left: ${(props) => (props.isFocused ? "3%" : "0")};
  top: ${(props) => (props.isFocused ? "0" : "50%")};
  transform: ${(props) =>
    props.isFocused ? "translate(0, -20%)" : "translate(0, -50%)"};
  transition: all 300ms;
  font-size: ${(props) => (props.isFocused ? "0.6rem" : "1rem")};
  pointer-events: none;
  background-color: ${(props) => (props.isFocused ? "white" : "transparent")};
  line-height: 100%;
  padding: 0 5px;
  border-right: 1px solid
    ${(props) => (props.isFocused ? "black" : "transparent")};
  border-left: 1px solid
    ${(props) => (props.isFocused ? "black" : "transparent")};
`;

export default TextInput;
