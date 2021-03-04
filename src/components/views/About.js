import {useState, useEffect} from "react";
import sanityClient from "../../config/client.js";
import styled from "styled-components";
import { MEDIUM_SCREEN_SIZE_PX, URL_TWITTER, URL_INSTAGRAM, URL_PINTERES } from "../../helpers/ParamHelper.js";
import { IconLink, ImageTrans, CustomForm, InputText, CustomLoading } from "../components";

const Container = styled.div `
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    top: 25px;
    font-family: fontBrandon, sans-serif;

    div.txt-container {
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

    @media screen and (max-width: ${MEDIUM_SCREEN_SIZE_PX}) {
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
                ? <CustomLoading/>
                :<Container className="container">

                    <div className="txt-container">
                        <p>{aboutData[0].aboutBio}</p>
                        <div className="ico-container">
                            <IconLink.Twitter url={URL_TWITTER}/>
                            <IconLink.Instagram url={URL_INSTAGRAM}/>
                            <IconLink.Pinterest url={URL_PINTERES}/>
                        </div>

                        <form onSubmit="handleSubmit">
                            <CustomForm.StyleOne title="Contact">
                                <InputText.StyleOne placeholder="Name" required/>
                                <InputText.StyleOne placeholder="Surname" required/>
                                <InputText.StyleOne placeholder="Email" required/>
                                <InputText.StyleOne placeholder="Write you message..." required/>
                            </CustomForm.StyleOne>
                        </form>
                        

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