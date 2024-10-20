import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)

    const handleClickPlayer1 = () => {
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const handleClickPlayer2 = () => {
        // const newTeam = team - 1
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid red',
        padding: '2rem',
        borderRadius: '1rem',
        marginTop: '1rem'
    }

    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <div>
                <button onClick={handleClickPlayer1}>Add Player</button>
                <button onClick={handleClickPlayer2}>Remove Player</button>
            </div>
        </div>
    )
}