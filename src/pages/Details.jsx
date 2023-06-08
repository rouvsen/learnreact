import users from "../data";

const Details = () => {

    const funcRedirect = (id) => {
        window.location.assign(`/about-detail/${id}`);
    }

    return (
        <div>
            <h1>Details page</h1>
            {
                users.map((user, i) => (
                    <div onClick={() => funcRedirect(user.id)} style={{margin: "10px", padding: "5px",
                     border: "1px solid blue", cursor: "pointer"}}>
                        {user.name}
                    </div>
                ))
            }
        </div>
    );
}

export default Details;