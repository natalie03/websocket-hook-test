import PropTypes from 'prop-types';
import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);
  }

  render() {
    let { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


NameForm.propTypes = {
  button_text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default NameForm;
