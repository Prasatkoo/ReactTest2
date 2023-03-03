import React, {ChangeEvent, SyntheticEvent} from "react";
import {string} from "prop-types";

interface Props {


}

export const Form: React.FC<Props> = (props) => {
    const [team,setTeam] = React.useState("");
    const [points,setPoints] = React.useState("");
    const [teamData,setTeamData] = React.useState([{team: "", points: 0}]);
   const handleSubmit = (event: SyntheticEvent) => {
        setTeamData([...teamData, {team: team, points: parseInt(points)}]);
        event.preventDefault();
   }
    const handePass  = (event: ChangeEvent<HTMLInputElement>) => {
        setTeam(event.target.value)
    };
    const handePass2  = (event: ChangeEvent<HTMLInputElement>) => {
        setPoints(event.target.value)
    };





    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>TeamName</label>
                    <input type="text" name="TeamName"  required onChange={handePass}/>
                </div>
                <div className="input-container">
                    <label>Points</label>
                    <input type="text" name="points"  required onChange={handePass2}/>
                </div>
                <button type="submit">Submit</button>
            </form>
               <div>
                   {teamData.map((data) => {
                          return <div>{data.team} {data.points}</div>
                     })
                   }
               </div>

        </>
    )
}

export default Form;