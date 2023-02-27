import styled from "styled-components";

interface Props {
  title: string;
  onClick: () => void;
  onMouseEnter?: () => void;
  isActive?: boolean;
  isPermanent?: boolean;
  isInvisible?: boolean;
}

const Button = (props: Props) => {
  const { title, onClick, onMouseEnter, isActive, isPermanent, isInvisible } =
    props;

  return (
    <StyledButton
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      isActive={isActive === true}
      isPermanent={isPermanent === true}
      isInvisible={isInvisible === true}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  isActive: boolean;
  isPermanent: boolean;
  isInvisible: boolean;
}>`
  border: none;
  outline: none;
  padding: 10px 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => (props.isInvisible ? "transparent" : "white")};
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.buttonHover
      : props.isPermanent
      ? props.theme.colors.primary
      : "transparent"};
  font-weight: ${(props) => props.isActive && "900"};
  :hover {
    cursor: pointer;
    /* background-color: ${(props) =>
      !props.isPermanent && props.theme.colors.buttonHover}; */
    filter: brightness(108%);
  }
  z-index: 2;
`;

export { StyledButton };

export default Button;
