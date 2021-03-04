import styled from "styled-components";
import { MEDIUM_SCREEN_SIZE_PX } from "../../helpers/ParamHelper";
import { SiTwitter, SiInstagram } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";

const AIconLinkStyled = styled.a `
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    cursor: pointer;
    color:#999999;
    &:visited {
        color:#999999
    };
    &:active {
        color:#999999
    };
    &:hover {
        color:rgb(186, 218, 85)
    };
    @media screen and (max-width: ${MEDIUM_SCREEN_SIZE_PX}) {
        &:hover {
            color:#999999;
        };
    };
`;

const IconLink = {
    Twitter: function Twitter({url}) {
        return ( 
            <AIconLinkStyled target="_blank" rel="noopener noreferrer" href={url}>
                <SiTwitter/>
            </AIconLinkStyled>
        );
    },
    Instagram: function Instagram({url}) {
        return ( 
            <AIconLinkStyled target="_blank" rel="noopener noreferrer" href={url}>
                <SiInstagram/>
            </AIconLinkStyled>
        );
    },
    Pinterest: function Pinterest({url}) {
        return ( 
            <AIconLinkStyled target="_blank" rel="noopener noreferrer" href={url}>
                <FaPinterestP/>
            </AIconLinkStyled>
        );
    }
};

export default IconLink;