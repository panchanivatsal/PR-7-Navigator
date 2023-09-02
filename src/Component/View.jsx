import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const View = () => {

    const [alldata, setAlldata] = useState([]);

    const deleteData = (id) => {
        let ans = alldata.filter((item) => {
            return item.id !== id;
        })
        setAlldata(ans);
        alert("Record successfully delete");
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('crud'));
        if (data === null) {
            setAlldata([])
        } else {
            setAlldata(data);
        }
    }, []);
    return (
        <>
            <center className="mainbox-2">
                <h1>View Page</h1>
                <table className="container">
                    <thead>
                        <tr>
                            <td className="col-1">Id</td>
                            <td className="col-2">Name</td>
                            <td className="col-2">Description</td>
                            <td className="col-3"><Link to="/" className="link" >Add</Link></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alldata.map((val) => {
                                const { id, name, des } = val;
                                return (

                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{des}</td>
                                        <td><button onClick={() => deleteData(id)}>Delete
                                            <span className="first"></span>
                                            <span className="second"></span>
                                            <span className="third"></span>
                                            <span className="fourth"></span>
                                        </button>
                                            <Link to={`/edit/${id}`}>
                                                <button>
                                                    Edit
                                                    <span className="first"></span>
                                                    <span className="second"></span>
                                                    <span className="third"></span>
                                                    <span className="fourth"></span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>

            </center>
        </>
    )
}

export default View;