import { useParams, Link } from "react-router-dom";
import { clinics } from "../JSON/Clinic"; // Importing the clinic data
import "../pagesCss/ClinicDetails.css";

export function ClinicDetails() {
    const { clinicId } = useParams(); // Get clinicId from URL
    const clinic = clinics.find(c => c.clinicId === parseInt(clinicId));

    if (!clinic) {
        return <div>Clinic not found!</div>;
    }

    return (
        <div>
            <h2>{clinic.clinicName}</h2>
            <h3>Doctors</h3>
            <ul className="doctor-list">
                {clinic.doctors.map(doctor => (
                    <li key={doctor.doctorId} className="doctor-item">
                        <p><strong>{doctor.doctorName}</strong> - {doctor.specialization}</p>
                        <p>Contact: {doctor.contactNumber}</p>
                        <p>Email: {doctor.email}</p>
                        <Link to={`/book-appointment/${doctor.doctorId}`} className="link">Book Appointment</Link>
                    </li>
                ))}
            </ul>
            <h3 className="DetailsH3">Details of Clinic</h3>
            <p><strong>Address:</strong> {clinic.address}</p>
            <p><strong>Contact Number:</strong> {clinic.contactNumber}</p>
            <p><strong>Email:</strong> {clinic.email}</p>
            <p><strong>Specialization:</strong> {clinic.specialization}</p>
            <p><strong>Opening Hours:</strong> {clinic.openingHours}</p>
            <Link to="/clinic">Back to Clinic List</Link>

        </div>


    );
}
