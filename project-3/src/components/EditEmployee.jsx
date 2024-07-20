import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../style/AddEmployeeForm.css";

const EditEmployee = ({ employee, onClose, onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setEmail(employee.email);
            setPhone(employee.phone);
        } else {
            setName("");
            setEmail("");
            setPhone("");
        }
    }, [employee]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const updatedEmployee = { id: employee.id, name, email, phone };
        onSubmit(updatedEmployee);
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Employee Details</h2>
                <div className="formDiv">
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                required
                                value={name}
                                placeholder="Employee Name..."
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
        </div>
    );
};

EditEmployee.propTypes = {
    employee: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default EditEmployee;
