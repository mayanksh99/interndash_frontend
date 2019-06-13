import React, { Component } from 'react';

class Filter extends Component {
  render(){
    return (
      <div className="col-lg-3 mb-4">
        <div className="card source_card p-4">
            <h5>Source</h5>

            <form action="">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                        Internshala
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                        Angel.co
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                        Linkedin
                    </label>
                </div>

                <button className="mt-4 col-12 pt-1 pb-1 btn btn-outline-dark" style={{ fontWeight: 700, border: '3px solid #666666' }}>
                    Apply Filter
                </button>
            </form>
        </div>
      </div>
    );
  }
}

export default Filter;
