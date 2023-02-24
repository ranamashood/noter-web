import styled from "styled-components";

interface Props {
  label: string;
}

const TextInput = (props: Props) => {
  const { label } = props;

  return (
    <Wrapper>
      <Input type="text" />
      <Span>{label}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Input = styled.input``;

const Span = styled.span``;

export default TextInput;
