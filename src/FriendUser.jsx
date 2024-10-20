export default function FriendUser({ userData }) {
    const { id, name, email } = userData;

    return (
        <div className="friendStyle">
            <h3>Friends Details:</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}