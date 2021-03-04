import styled from "styled-components";
// import { MEDIUM_SCREEN_SIZE_PX } from "../../helpers/ParamHelper";

const StyledOne = styled.input `
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

const InputText = {
    StyleOne: function StyleOne(props) {
        return ( 
            <StyledOne {...props} type="text"/>
        );
    },
    StyleTwo: function StyleTwo(props) {
        return ( 
            <StyledOne {...props} type="text"/>
        );
    }
};

export default InputText;