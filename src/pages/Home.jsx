
const Home = () => {

    const funcRedirect = () => {
        window.location.assign('/details')
    }

    return (
        <div>
            <h1>Home page</h1>
            <br></br>
            <button onClick={funcRedirect}>See All Users</button>
        </div>
    );
}

export default Home;