import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description }
}) => (
  <div>
    <h3 className="text-dark"> {school}</h3>
    <p>
      {` ${moment(from).format("MM/DD/YYYY")}`} -
      {!to ? "Now" : ` ${moment(to).format("MM/DD/YYYY")}`}
    </p>
    <p>
      <strong> Degree: </strong> {degree}
    </p>
    <p>
      <strong> Description: </strong> {description}
    </p>
    <p>
      <strong> Field Of Study: </strong> {fieldofstudy}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
