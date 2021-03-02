import styled from "styled-components";
import { mediumScreenSizePx } from "../../helpers/ParamHelper";
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
    @media screen and (max-width: ${mediumScreenSizePx}) {
        &:hover {
            color:#999999;
        };
    };
`;

const IconLink = {
    Twitter: function Twitter({link}) {
        return ( 
            <AIconLinkStyled target="_blank" rel="noopener noreferrer" href={link}>
                <SiTwitter/>
            </AIconLinkStyled>
        );
    },
    Instagram: function Instagram({link}) {
        return ( 
            <AIconLinkStyled target="_blank" rel="noopener noreferrer" href={link}>
                <SiInstagram/>
            </AIconLinkStyled>
        );
    },
    Pinterest: function Pinterest({link}) {
        return ( 
            <AIconLinkStyled target="_blank" rel="noopener noreferrer" href={link}>
                <FaPinterestP/>
            </AIconLinkStyled>
        );
    }
};

export default IconLink;