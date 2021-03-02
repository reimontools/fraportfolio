import {useState, useEffect} from "react";
import sanityClient from "../../config/client.js";
import Loading from "../others/Loading.jsx";
import styled from "styled-components";
import { mediumScreenSizePx } from "../../helpers/ParamHelper.js";
import IconLink from "../others/IconLink";
import ImageTrans from "../others/ImageTrans.jsx";

const Container = styled.div `
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    top: 25px;
    div.txt-container {
        font-family: fontBrandon, sans-serif;
        font-size: 16px;
        font-weight: lighter;
        color: rgb(55, 55, 55); 
        width: 40%;
        /* border: 1px #a0138e solid; */
    };

    div.ico-container {
        display: flex;
        justify-content: space-between; /*Horizontal*/ 
        align-items: center; /*Vertical*/
        //flex-direction: row;
        font-size: 16px;
        color: #999999;
        width: 25%;
        padding-top: 10px;
        padding-bottom: 10px;
    };

    div.img-container {
        width: 40%;
    };

    p {
        white-space: pre-line;
    };

    @media screen and (max-width: ${mediumScreenSizePx}) {
        flex-direction: column;
        top: 85px;
        left: 7%;
        right: 7%;
        div.txt-container {
            width: 100%;
        };
        div.img-container {
            width: 100%;
        };
    };
`;

const About = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(fetchAbout, 500);
    }, []);

    const fetchAbout = async () => {
        await sanityClient
            .fetch(`
                *[_type == "about"] {
                    aboutName,
                    aboutBio,
                    aboutImage {
                        asset -> {_id, url},
                        alt
                    }
                }
            `)
            .then((data) => {
                setAboutData(data);
                // console.log(data[0].aboutName);
            })
            .catch(console.error);
        setLoading(false);
    };

    return (
        <>
            {loading 
                ? <Loading/>
                :<Container className="container">

                    <div className="txt-container">
                        <p>{aboutData[0].aboutBio}</p>
                        <div className="ico-container">
                            <IconLink.Twitter link={"https://twitter.com/cianytell_"}/>
                            <IconLink.Instagram link={"https://www.instagram.com/francesca.puxeddu/"}/>
                            <IconLink.Pinterest link={"https://www.pinterest.co.uk/frachan86/"}/>
                        </div>
                    </div>

                    <div className="img-container">
                        <ImageTrans.FadeIn src={aboutData[0].aboutImage.asset.url} alt={aboutData[0].aboutImage.alt}/>
                    </div>
                    
                </Container>
            }
        </>
    );
};

export default About;