import styled from "styled-components";

const InputTextStyled = styled.input `
    font-family: fontBrandon, sans-serif;
    font-size: 14px;
    font-weight: lighter;
    width: 100%;
    height: 65px;
    outline: none;
    border:0;
    border-bottom: solid 2px #ccc;

    &:hover {
        border-bottom: solid 2px rgb(186, 218, 85);
    };

    &:focus {
        border-bottom: solid 2px #333c87;
    };
`;

const Input = {
    InputText: ({register, ...inputTextProps}) => {
        return (
            <InputTextStyled 
                type="text"
                {...inputTextProps}
                ref={register}
                autoComplete="off"
            />
        );
    },
    InputTextArea: ({register, ...inputTextProps}) => {
        return (
            <InputTextStyled
                type="text"
                {...inputTextProps}
                ref={register}
                autoComplete="off"
            />
        );
    }
};

export default Input;