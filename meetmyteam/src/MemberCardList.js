import React from 'react'
import members from './members'
import MemberCard from './MemberCard'
import './MemberCardList.css'

export const MemberCardList = () =>{
    const MemberCardArray = members.map(member => <MemberCard user = {member}/>);
    return(
        
        <div className = 'tc shadow5'>
            <div id= 'meetourteam'>
                <h1 className = 'pa5'>Meet Our Team</h1>
            </div>
            <div>
                {MemberCardArray}
            </div>
            
        </div>

    );
}

export default MemberCardList;