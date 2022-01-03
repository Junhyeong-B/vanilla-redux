import React from "react";
import { connect } from "react-redux";

const Detail = ({ todos }) => {
  return (
    <>
      <h1>{todos?.text}</h1>
      <h3>Created At: {todos?.id}</h3>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { todos: state.find((todo) => +todo.id === +id) };
};

export default connect(mapStateToProps)(Detail);
