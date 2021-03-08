import { useState, useEffect } from "react";
import sanityClient from "../../config/client.js";
import styled from "styled-components";
import { IconLink, ImageTransition, CustomForm, Loading, Input } from "../../component";
import { MEDIUM_SCREEN_SIZE_PX, URL_TWITTER, URL_INSTAGRAM, URL_PINTERES } from "../../helpers/ParamHelper.js";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

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
        width: 40%; /* border: 1px #a0138e solid; */
    };
    div.ico-container {
        display: flex; //flex-direction: row;
        justify-content: space-between; /*Horizontal*/ 
        align-items: center; /*Vertical*/
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
    useEffect(() => {fetchAbout()}, []);

    const schema = Yup.object().shape({
        name: Yup.string().matches(/^([^0-9]*)$/,'Name should not containt numbers').required('Required'),
        surname: Yup.string().required('Required'),
        email: Yup.string().email("Invalid format").required('Required')
    });

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {console.log(data)};
    
    const fetchAbout = async () => {
        await sanityClient
            .fetch(`*[_type == "about"] {aboutName, aboutBio, aboutImage {asset -> {_id, url}, alt}}`)
            .then((data) => {setAboutData(data)})
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
                            <IconLink.Twitter url={URL_TWITTER}/>
                            <IconLink.Instagram url={URL_INSTAGRAM}/>
                            <IconLink.Pinterest url={URL_PINTERES}/>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CustomForm.StyleOne title="Contact">
                                <Input.Text name="name" placeholder="Name" register={register} error={errors.name} />
                                <Input.Text name="surname" placeholder="Surname" register={register} error={errors.surname} />
                                <Input.Text name="email" type="email" placeholder="Email" register={register} error={errors.email}/>
                                <Input.Text name="message" placeholder="Write you message..." type="textarea" register={register} />
                                <button type="submit">Submit</button>    
                            </CustomForm.StyleOne>
                        </form>
                    </div>
                    <div className="img-container">
                        <ImageTransition.FadeIn src={aboutData[0].aboutImage.asset.url} alt={aboutData[0].aboutImage.alt}/>
                    </div>
                </Container>
            }
        </>
    );
};

export default About;