import {useState, useEffect} from "react";
import sanityClient from "../../config/client.js";
import Loading from "../others/Loading.jsx";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { mediumScreenSizePx } from "../../helpers/ParamHelper.js";

const Container = styled.div `
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    /* align-items: flex-start; */
    //flex-direction: row;
    div.txt-container {
        font-family: fontBrandon, sans-serif;
        font-size: 16px;
        font-weight: lighter;
        color: rgb(55, 55, 55); 
        /* border: 1px #a0138e solid; */
        width: 45%;
    };
    div.img-container {
        width: 45%;
    };
    img {
        width: 100%;
    };
    @media screen and (max-width: ${mediumScreenSizePx}) {
        flex-direction: column;
        top: 100px;
        left: 3%;
        right: 3%;
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
                    aboutImage {
                        asset -> {_id, url},
                        alt
                    },
                    aboutPara1,
                    aboutPara2,
                    aboutPara3,
                    aboutPara4
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
                        <BlockContent blocks={aboutData[0].aboutPara1} projectId="psj52sns" dataset="production" /><br/>
                        <BlockContent blocks={aboutData[0].aboutPara2} projectId="psj52sns" dataset="production" /><br/>
                        <BlockContent blocks={aboutData[0].aboutPara3} projectId="psj52sns" dataset="production" /><br/>
                        <BlockContent blocks={aboutData[0].aboutPara4} projectId="psj52sns" dataset="production" /><br/>
                    </div>
                    <div className="img-container">
                        <img src={aboutData[0].aboutImage.asset.url} alt={aboutData[0].aboutImage.alt} />
                    </div>
                </Container>
            }
        </>
    );
};

export default About;