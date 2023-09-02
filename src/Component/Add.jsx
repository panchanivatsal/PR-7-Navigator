import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Add = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        des: ''
    })
    const [alldata, setAlldata] = useState([]);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = () => {
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: input.name,
            des: input.des
        }
        let data = [...alldata, obj];
        localStorage.setItem('crud', JSON.stringify(data));
        setAlldata(data);
        setInput({
            name: '',
            des: ''
        })
        alert("Record successfully insert");
        navigate('/view')
    }
    useEffect(() => {
        let re = JSON.parse(localStorage.getItem('crud'));
        if (re === null) {
            setAlldata([]);
        } else {
            setAlldata(re);
        }
    }, []);

    return (
        <>
            <center className="mainbox">
                <h1>Add Record</h1>
                <table className="container">
                    <tbody>
                        <tr> <td>Enter the your Task</td>
                            <td><input type="text" name="des" onChange={handleChange} value={input.des} placeholder="To-Do Title" /></td>
                        </tr>
                        <tr><td>Enter the your Description</td>
                            <td><input type="text" name="name" onChange={handleChange} value={input.name} placeholder="Description" /></td>
                        </tr>
                        <td></td>

                        <button type="submit" className="bth-1" onClick={() => handleSubmit()}>
                            <Link to="/view" className="link" >
                                SUBMIT
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                                <span className="fourth"></span>
                            </Link>
                        </button>
                    </tbody>
                </table>

            </center>
        </>
    )
}

export default Add;