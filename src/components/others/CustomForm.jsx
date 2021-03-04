import styled from "styled-components";
import { MEDIUM_SCREEN_SIZE_PX } from "../../helpers/ParamHelper";

const FormStyled = styled.div `
    width: 100%;
    div.head-container {
        font-size: 40px;
        font-weight: bolder;
        color: #999999;
    };
`;

const CustomForm = {
    StyleOne: function StyleOne({children, ...props}) {
        return ( 
            <FormStyled>
                <div className="head-container">{props.title}</div>
                <div className="body-container">
                    {children}
                </div>
            </FormStyled>
        );
    }
};

export default CustomForm;