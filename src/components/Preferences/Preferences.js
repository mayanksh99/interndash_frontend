import React, {Component} from 'react';

class Preferences extends Component {
  render() {
    return (
      <div className="card source_card mt-4 p-4">
        <h5>Preferences</h5>
        <hr/>
        <form action="">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              Work from home
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              Machine Learning
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              MERN Stack
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              Django Developer
            </label>
          </div>

          <button className="mt-4 col-12 pt-1 pb-1 btn btn-outline-dark" style={{
              fontWeight: 700,
              border: '3px solid #666666'
            }}>
            Apply Filter
          </button>
        </form>
      </div>
    )
  }
}
export default Preferences;
