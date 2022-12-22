import React, { useState } from "react";

const BuildYourTeam = () => {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [associatedSchool, setAssociatedSchool] = useState("");
  const [roles, setRoles] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [pastExperiences, setPastExperiences] = useState("");
  const [futurePlans, setFuturePlans] = useState("");
  const [pitchDeck, setPitchDeck] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "companyName":
        setCompanyName(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "teamMembers":
        setTeamMembers(event.target.value);
        break;
      case "associatedSchool":
        setAssociatedSchool(event.target.value);
        break;
      case "roles":
        setRoles(event.target.value);
        break;
      case "timeCommitment":
        setTimeCommitment(event.target.value);
        break;
      case "pastExperiences":
        setPastExperiences(event.target.value);
        break;
      case "futurePlans":
        setFuturePlans(event.target.value);
        break;
      case "pitchDeck":
        setPitchDeck(event.target.files[0]);
        break;
      case "logo":
        setLogo(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code here to handle the form submission

    // create an object to hold the form data
    const formData = {
      companyName,
      description,
      teamMembers,
      associatedSchool,
      roles,
      timeCommitment,
      pastExperiences,
      futurePlans,
      pitchDeck,
      logo,
    };

    // add code here to send the form data to the server or store it in the database

    // reset the form fields after the submission
    setCompanyName("");
    setDescription("");
    setTeamMembers("");
    setAssociatedSchool("");
    setRoles("");
    setTimeCommitment("");
    setPastExperiences("");
    setFuturePlans("");
    setPitchDeck(null);
    setLogo(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description of Company:
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Team members and contact information:
        <input
          type="text"
          name="teamMembers"
          value={teamMembers}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Associated school:
        <input
          type="text"
          name="associatedSchool"
          value={associatedSchool}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Roles you are looking for, as well as expected time commitment for these
        roles:
        <input type="text" name="roles" value={roles} onChange={handleChange} />
      </label>
      <br />
      <label>
        Past experiences:
        <input
          type="text"
          name="pastExperiences"
          value={pastExperiences}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Looking to apply to anything in the future:
        <input
          type="text"
          name="futurePlans"
          value={futurePlans}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Pitch Deck:
        <input type="file" name="pitchDeck" onChange={handleChange} />
      </label>
      <br />
      <label>
        Logo:
        <input type="file" name="logo" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BuildYourTeam;
