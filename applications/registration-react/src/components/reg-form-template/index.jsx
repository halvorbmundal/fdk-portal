import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Collapse } from 'reactstrap';

export default class FormTemplate extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { title, values } = this.props;
    const collapseClass = cx(
      'fdk-reg_collapse',
      {
        'fdk-reg_collapse_open': this.state.collapse
      }
    )
    const collapseIconClass = cx(
      'fa',
      'fa-2x',
      'mr-2',
      {
        "fa-angle-down": !this.state.collapse,
        "fa-angle-up": this.state.collapse,
      }
    );
    return (
      <div className={collapseClass}>
        <button className="d-flex flex-column align-items-start text-left no-padding w-100" onClick={this.toggle}>
          <div className="d-flex">
            <i className={collapseIconClass} />
            <h2 className="mb-0">{ title }</h2>
          </div>
          {!this.state.collapse && values && values.replace(" ", "").length > 0 &&
          <div className="d-flex">
            <i className="fa fa-2x fa-angle-down mr-2 visibilityHidden" />
            {values}
          </div>
          }
        </button>
        <Collapse
          className="mt-3"
          isOpen={this.state.collapse}
        >
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}

FormTemplate.defaultProps = {
  values: null
};

FormTemplate.propTypes = {
  values: PropTypes.string
};
