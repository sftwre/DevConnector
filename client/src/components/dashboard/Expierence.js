import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";

const Expierence = ({ experience }) => {
  const expierences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm"> {exp.title}</td>
      <td>
        <Moment format="MM/DD/YYYY">{moment.utc(exp.from)}</Moment> -
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="MM/DD/YYYY"> {moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger"> Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2"> Expierences</h2>
      <table className="table">
        <thead>
          <tr>
            <th> Company </th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{expierences}</tbody>
      </table>
    </Fragment>
  );
};

Expierence.propTypes = {
  experience: PropTypes.array.isRequired
};

export default Expierence;
