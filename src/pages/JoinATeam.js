import React, { useState } from 'react';

const JoinATeam = () => {
  const [schoolEmail, setSchoolEmail] = useState('');
  const [graduatingClass, setGraduatingClass] = useState('');
  const [csCoursesTaken, setCsCoursesTaken] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [industriesOfInterest, setIndustriesOfInterest] = useState('');
  const [areasOfInterest, setAreasOfInterest] = useState('');
  const [matchingInformation, setMatchingInformation] = useState('');
  const [resume, setResume] = useState(null);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'schoolEmail':
        setSchoolEmail(event.target.value);
        break;
      case 'graduatingClass':
        setGraduatingClass(event.target.value);
        break;
      case 'csCoursesTaken':
        setCsCoursesTaken(event.target.value);
        break;
      case 'availableTime':
        setAvailableTime(event.target.value);
        break;
      case 'industriesOfInterest':
        setIndustriesOfInterest(event.target.value);
        break;
      case 'areasOfInterest':
        setAreasOfInterest(event.target.value);
        break;
      case 'matchingInformation':
        setMatchingInformation(event.target.value);
        break;
      case 'resume':
        setResume(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code here to handle the form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        School Email:
        <input type="email" name="schoolEmail" value={schoolEmail} onChange={handleChange} />
      </label>
      <br />
      <label>
        Graduating Class:
        <input type="text" name="graduatingClass" value={graduatingClass} onChange={handleChange} />
      </label>
      <br />
      <label>
        CS Courses Taken:
        <input type="text" name="csCoursesTaken" value={csCoursesTaken} onChange={handleChange} />
      </label>
      <br />
      <label>
        Available Time to Work per Week:
        <input type="text" name="availableTime" value={availableTime} onChange={handleChange} />
      </label>
      <br />
      <label>
        Industries of Interest:
        <input type="text" name="industriesOfInterest" value={industriesOfInterest} onChange={handleChange} />
      </label>
      <br />
      <label>
        Any Specific Areas of Interest:
        <input type="text" name="areasOfInterest" value={areasOfInterest} onChange={handleChange} />
      </label>
      <br />
      <label>
        Anything that Would Help Match you with a Startup:
        <input type="text" name="matchingInformation" value={matchingInformation} onChange={handleChange} />
      </label>
      <br />
      <label>
        Resume:
        <input type="file" name="resume" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JoinATeam;
