import PropTypes from "prop-types";
import { useState} from "react";


const AddEmployeeForm = ({ onClose}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        onClose();

        //database
        const New_employee = { name, email, phone };
        console.log(New_employee);
        fetch("http://localhost:8090/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(New_employee),
        }).then(() => console.log("New Employee Added"));


    };

    //Edit//

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Employee Details</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

AddEmployeeForm.propTypes = {
    employee: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default AddEmployeeForm;
