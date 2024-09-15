import "./Meeting.css"

const Meeting = () => {
    const design = (
        <>
            <div className="video-box">
                <video width="100%"  autoPlay muted loop>
                    <source src="meeting.mp4" width="100%" ></source>
                </video>
                <div className="box-shadow text-white d-flex justify-content-center align-items-center">
                    <div>
                        <h2>Introducing</h2>
                        <h1>AN NEW REACTJS BATCH</h1>
                        <h2>By just for code</h2>
                        <button className="btn btn-primary fw-bold mt-3 py-2 px-5">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </>

    );
    return design
}
export default Meeting