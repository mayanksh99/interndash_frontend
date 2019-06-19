import React, {Component} from 'react';
import logo from '../../assets/logo.png';

class Filter extends Component {
  render() {
    return (<div className="col-lg-3 col-md-4 mb-4">
      <div className="card source_card p-4">
        <h5>Source<img src={logo} width="15%" style={{position: 'absolute', right: 20, top: 16}} alt=""></img></h5>
        <hr/>
        <form>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              Internshala
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              AngelList
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label">
              Linkedin
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

    </div>);
  }
}

export default Filter;
