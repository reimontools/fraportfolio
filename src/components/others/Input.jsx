import styled from "styled-components";

const DivInputStyled = styled.div `
    input {
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
    };
    div {
        height: 22px;
        font-size: 13px;
        color: #bb3345;
        text-align: right;
    }
`;

const Input = {
    Text: ({register, error, ...inputTextProps}) => {
        return (
            <DivInputStyled>
                <input 
                    type="text"
                    autoComplete="off"
                    {...inputTextProps}
                    ref={register}
                />
                {error ? <div>{error.message}</div> : <div></div>}
            </DivInputStyled>
        );
    },
    TextArea: ({register, error, ...inputTextProps}) => {
        return (
            <DivInputStyled>
                <input 
                    type="text"
                    autoComplete="off"
                    {...inputTextProps}
                    ref={register}
                />
                {error && <div>{error.message}</div>}
            </DivInputStyled>
        );
    }
};

export default Input;