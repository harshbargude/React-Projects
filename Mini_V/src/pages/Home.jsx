
import '../pagesCss/HomeCSS.css'
import PmI from '../Icons/UserB.svg';

export function Home () {
  return (
    <div className='myClass'>
      <h1 >Patient Details</h1>
      <div className='patientBox_h'>
        <div className="P_img">
          <img src={PmI} alt="Patient Photo" />
        </div>
        <div className="P_name">
          <h3>Harsh Bargude</h3>
          <h2 className='illnessH2'>Name</h2>
        </div>
        <div className="P_age">
          <h3>19 Years Old</h3>
          <h2 className='illnessH2'>Age</h2>
        </div>
        <div className="Gender">
          <h3>Male</h3>
          <h2 className='illnessH2'>Gender</h2>
        </div>
        <div className="CurrentIllness">
          <h3>Illness</h3>
          <h2 className='illnessH2'>Current Illness</h2>
        </div>
        <div className="EditProfile">
          <button className='EditButton'>Edit Details</button>
        </div>
      </div>
    </div>
  )
}


