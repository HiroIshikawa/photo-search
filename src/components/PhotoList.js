import React, { Component, PropTypes } from 'react';

export default class PhotoList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    photos: PropTypes.array,
    status: PropTypes.string,
  };

  state = {
    index: 0,
    photos: this.props.photos,
  }

  componentDidMount() {
    this.props.actions.searchPhotoAction();
  }

  render() {
    return (
      <div>
        <div className="row text-center">
          {
            
              this.props.photos.map((item, index) => {
                if (this.props.photos.length > 0) {
                  return (
                    <div className="col-md-3" key={`Photo_${index}`}>
                      <div className="card-box" key={`Photo_${index}`}>
                        <p>{item.title}</p>
                        <img src={`${item.media.m}`}/>
                      </div>
                    </div>
                  );
                }
                else {
                  return (
                    <p>Not found</p>
                  )
                }
              })
          }
          <div className="clearfix" />
         </div> 
      </div>
    );
  }
}



