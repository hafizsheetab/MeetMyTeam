import React from 'react'
import members from './members'
import MemberCard from './MemberCard'
import './MemberCardList.css'
import Scroll from './Scroll'

export const MemberCardList = () =>{
    const MemberCardArray = members.map(member => <MemberCard user = {member}/>);
    return(
        
        <div className = 'tc shadow5'>
            <div id= 'meetourteam'>
                <h1 className = 'pa5'>Meet Our Team</h1>
            </div>
            <div>
                {/* <Scroll> */}
                    {MemberCardArray}
                {/* </Scroll> */}
            </div>
            
        </div>

    );
}

export default MemberCardList;