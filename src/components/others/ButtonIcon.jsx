import styled from "styled-components";
import { BsChevronLeft, BsChevronRight, BsX, BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

const DivButtonIconStyled = styled.div `
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    color: rgba(0, 0, 0, .7);
    z-index: 1000;
    &:hover {
        transform: scale(1.3);
        transition: all .2s ease;
    };
    &.expand {
        top: -50px;
        left: 10px;
    };
    &.left {
        left: 10px;
        top: 50%;
    };
    &.right {
        right: 10px;
        top: 50%;
    };
    &.close {
        top: -50px;
        right: 10px;
    };
`;

const ButtonIcon = {
    Left: function Left({action}) {
        return ( 
            <DivButtonIconStyled onClick={action} className="left">
                <BsChevronLeft/>
            </DivButtonIconStyled>
        );
    },
    Right: function Right({action}) {
        return ( 
            <DivButtonIconStyled onClick={action} className="right">
                <BsChevronRight/>
            </DivButtonIconStyled>
        );
    },
    Expand: function Expand({action}) {
        return ( 
            <DivButtonIconStyled onClick={action} className="expand">
                <BsArrowsAngleExpand/>
            </DivButtonIconStyled>
        );
    },
    Contract: function Contract({action}) {
        return ( 
            <DivButtonIconStyled onClick={action} className="expand">
                <BsArrowsAngleContract/>
            </DivButtonIconStyled>
        );
    },
    Close: function Close({action}) {
        return ( 
            <DivButtonIconStyled onClick={action} className="close">
                <BsX/>
            </DivButtonIconStyled>
        );
    }
};

export default ButtonIcon;