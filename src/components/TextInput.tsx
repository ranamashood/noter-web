import styled, { css } from "styled-components";

interface Props {
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => {
  const { value, label, onChange } = props;

  return (
    <Wrapper>
      <Input type="text" value={value} onChange={onChange} />
      <Span value={value}>{label}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input<{ value: string }>`
  /* border: none; */
  /* outline: none; */
  padding: 5px 0;
  &:not(:focus) + span {
    ${(props) =>
      !props.value
        ? css`
            left: 0;
            top: 50%;
            font-size: 1rem;
            background-color: transparent;
            border-color: transparent;
          `
        : css`
            border-color: #8f8f9d;
          `}
  }
`;

const Span = styled.span<{ value: string }>`
  position: absolute;
  left: 3%;
  top: 0;
  transform: translate(0, -50%);
  transition: all 150ms;
  font-size: 0.6rem;
  pointer-events: none;
  background-color: white;
  line-height: 100%;
  /* line-height: 120%; */
  padding: 0 5px;
  border-right: 2px solid #3584e4;
  border-left: 2px solid #3584e4;
`;

export default TextInput;
