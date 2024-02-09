import React from 'react'
import styled from "styled-components";

import { Link, NavLink } from 'react-router-dom';

const Module = (curElem) => {
    const {id, name, image, price, category} = curElem;
    const data = {
        ids: "fi",
        title: "What is your name? ",
        url: "https://www.google.com",
        description: "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello",
    };
    return (
        <Wrapper>
        <div className="news-cards-container">
            <div className="news-card">
            {/* <img
                src={data.urlToImage ? data.urlToImage : images.navbarlogo}
                alt="News-Image"
                className="news-card-header-img"
            /> */}
            <div className="news-card-content">
                <h4 className="news-card-title">{data.title}</h4>
                <p className="news-card-description">{data.description}</p>
                <NavLink to = {`/SingleModule/${data.ids}`}>
                    <button className="news-read-more-button">
                        Read more...
                    </button>
                </NavLink>
            </div>
            </div>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@500&display=swap");


.content{
    margin-top: 5rem;
    left: 0;
    /* background-color: rgb(73, 255, 106); */
    width: 100%;
    height:100%;
}   

.news-cards-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-auto-rows: auto; 
    max-width: fit-content;
    text-align: center;
    overflow-wrap: break-word;
}


news-button{
    background-color: #028c6300;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    /* display: none; */
}

.news-card:hover {
    box-shadow: 1px 1px 3px #d4ecff;
    /* background-color: #f9fdff; */
    transform: translateY(-2px);
}


.news-card {
    margin: 2em;
    min-height: auto;
    border-radius: 4px;
    cursor: pointer;
    overflow:hidden;
    max-width: 35rem;
    /* width:fit-content; */
    transition: all 0.3s ease;
    box-shadow: 1px 1px 3px gray;
  /* background-color: red;  */
  }

  .news-card:hover {
    box-shadow: 1px 1px 3px rgb(171, 247, 170);
    transform: translateY(-2px);
  }

  .news-card-header-img {
    width: 100%;
    height: 10em;
    object-fit: cover;
  }

  .news-card-content {
    padding: 2rem;
  }

  .news-card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .news-card-description {
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.8;
  }

  .news-read-more-button {
    background-color: #028c6300;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 768px){
    .news-cards-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto; 
    }    
  }

  @media (max-width: 576px){
    .news-cards-container{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto; 
    }    

    .til h1{
      font-size: 2rem;
    }

    .til h3{
      font-size: 1.5rem;
    }
  }
`;

export default Module
