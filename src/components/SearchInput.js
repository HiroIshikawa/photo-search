import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

export default class SearchInput extends Component {
  static propTypes = {
    actions: PropTypes.object,
    status: PropTypes.string,
  };

  searchEnter(e) {
    if (e.keyCode === 13) {
      const val = ReactDom.findDOMNode(this.refs.tag).value;
      this.props.actions.searchPhotoAction(val);
    }
  }

  searchClick() {
    const val = ReactDom.findDOMNode(this.refs.tag).value;
    this.props.actions.searchPhotoAction(val);
  }

  render() {
    return (
      <div>
        <div className="search-space">
          <input onKeyDown={this.searchEnter.bind(this)} type="text" ref="tag" className="form-control input-lg search-bar" placeholder="Search by tag" />
          <button onClick={this.searchClick.bind(this)} type="button" className="btn btn-default search-button">Search</button>
        </div>
      </div>
    );
  }
}
