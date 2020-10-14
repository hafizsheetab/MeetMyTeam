import React from 'react'
import './MemberCard.css'
import facebooklogo from './facebook.png'
import linkedinlogo from './linkedin.png'
import githublogo from './githublogo.png'

export const MemberCard = ({user}) =>{
    const{name, email, img_Link, github_Link, facebook_Link, linkedin_Link, description} = user;
    // console.log(name, email, img_Link, github_Link, facebook_Link, linkedin_Link, description)
    return (
        <div className = 'bg-washed-blue dib br3 pa3 mt5 ml3 mr3 grow items-center tc shadow-5' id = 'cards'>
            <h3 className = 'sans-serif'>{name}</h3>
            <div>
                <img src = {img_Link} alt = 'Sorry' height = {200} width = {200}  />
            </div>
            <div id = 'references'>
                <a href = {facebook_Link} class ='h2 w2 dim'><img src = {facebooklogo}/></a>
                <a href = {github_Link} class = 'h2 w2 dim'><img src = {githublogo}/></a>
                <a href = {linkedin_Link} class = 'h2 w2 dim'><img src = {linkedinlogo}/></a>
            </div>
        </div>
    );
}

export default MemberCard;