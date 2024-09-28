import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import "./pagesCss/ClinicList.scss";
// import { Clinic } from './pages/Clinic'
import { ClinicList } from './pages/ClinicList'
import { ProfileManagement } from './pages/profileManagement'
import MyAppointment from './pages/MyAppointment'
import NewIllness from './pages/NewIllness'
import { ClinicDetails } from './pages/ClinicDetails'
import HomeI from './Icons/Home.svg';
import ClinicI from './Icons/Key.svg';
import PmI from './Icons/User.svg';
import AppointmentI from './Icons/File text.svg';
import IllnessRegI from './Icons/Plus circle.svg';


function App() {

  return (
    // fragment , to instead of href
    <>
      <section>
        <div className='topSection'>

        </div>
      </section>
      <section className='SectionContent-h'>
        <div className="SectionDivContent-h">

          <div className="OneLeft">
            <nav>
              <ul>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><img src={HomeI} alt="Home Icon" style={{ width: '24px', height: '24px' }} /><Link to='/'>Dashboard</Link></span>
                  <div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'> <span><img src={ClinicI} alt="Clinic Icon" style={{ width: '24px', height: '24px' }} /><Link to='/clinic'>Clinic</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'> <span><img src={PmI} alt="Profile Icon" style={{ width: '24px', height: '24px' }} /><Link to='/profileManagement'>Profile Management</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><img src={AppointmentI} alt="Appointment Icon" style={{ width: '24px', height: '24px' }} /><Link to='/myAppointment'>My Appointment</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><img src={IllnessRegI} alt="IllnessRegI Icon" style={{ width: '24px', height: '24px' }} /><Link to='/newIllness'>Illness Registration</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
              </ul>
            </nav>
          </div>
          <div className="OneRight">
            <div className="Container_Right">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clinic" element={<ClinicList />} />
                {/* <Route path="/clinic/:id" element={<Clinic />} /> */}
                <Route path="/clinic/:clinicId" element={<ClinicDetails />} />
                <Route path="/profileManagement" element={<ProfileManagement />} />
                <Route path="/myAppointment" element={<MyAppointment />} />
                <Route path="/newIllness" element={<NewIllness />} />
              </Routes>
            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default App
