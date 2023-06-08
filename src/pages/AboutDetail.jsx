import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data";

//1.41.21
const AboutDetail = () => {

    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(users);
    }, [id]);

    console.log("id", id);

    const funcRedirect = () => {
        window.location.assign('/details')
    }

    return (
        <>
            {
                data.filter(user => user.id == id)
                .map((u, i) => (
                    <h1 key={i}>Hmm, you wanna see {u.name}</h1>
                ))
            }
            <button onClick={funcRedirect}>redirect to Details page.</button>
        </>
    );
}

export default AboutDetail;