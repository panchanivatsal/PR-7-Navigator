import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const getRecord = () => {
        let all = JSON.parse(localStorage.getItem('crud'));
        if (all === null) {
            return [];
        } else {
            return all;
        }
    }
    const [record, setRecord] = useState(getRecord);
    const [input, setInput] = useState({
        name: '',
        des: ''
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = () => {
        let name = input.name;
        let des = input.des;
        let ans = record.map((item) => {
            if (item.id == parseInt(id)) {
                return {
                    ...item,
                    name: name,
                    des: des
                }
            }
            return item
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
        alert("Record successfully update");
        navigate('/view')
        setInput({
            name: '',
            des: ''
        })
    }
    useEffect(() => {
        let ans = record.filter((item) => {
            return item.id == id;
        })
        setInput(ans[0]);
    }, [])



    return (
        <>
            <center className="mainbox">
                <h1>Update Page</h1>
                <table className="container">
                    <tr>
                        <td>Edit</td>
                        <td><input type="text" name="name" onChange={handleChange} value={input.name} /></td>
                        <td><input type="text" name="des" onChange={handleChange} value={input.des} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" variant="outline-primary" value="Update" onClick={() => handleSubmit()} ><Link to="/view" className="link">Update</Link></button></td>
                    </tr>
                </table>

            </center>
        </>
    )
}

export default Edit;