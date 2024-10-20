export default function Buttons() {
    // ----------HandleClick Function-01----------
    function handleClick1() {
        alert("Click Success-01");
    }
    // ----------HandleClick Function-02----------
    const handleClick2 = () => {
        alert("Click Success-02");
    };
    // ----------HandleClick Function-04----------
    const handleClick4 = (num) => {
        alert(num + 5);
    };

    // --------Style-CSS--------
    const teamStyle = {
        border: '2px solid red',
        padding: '2rem',
        borderRadius: '1rem',
        marginTop: '1rem'
    }
    // ---------Return---------
    return (
        <div style={teamStyle}>
            {/* Button-01 */}
            <button onClick={handleClick1}>Click me-1</button>
            {/* Button-02 */}
            <button onClick={handleClick2}>Click me-2</button>
            {/* Button-03 */}
            <button onClick={() => { alert("Click Success-03") }}>Click me-3</button>
            {/* Button-04 */}
            <button onClick={() => { handleClick4(10) }}>Click me-4</button>
        </div>
    )
}