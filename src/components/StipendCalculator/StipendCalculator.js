import React, {Component} from 'react';

class StipendCalculator extends Component {
  render() {
    return (
      <div className="card p-4 mt-4 source_card">
        <h5>Stipend Calculator</h5>
        <hr/>
        <form action="">
          <div className="form-group">
            <label className="form-check-label">
              Enter Keywords
            </label>
            <input className="form-control mt-2" aria-label="Username" aria-describedby="basic-addon1" type="text"/>

            <button className="mt-3 col-12 pt-1 pb-1 btn btn-outline-dark" style={{
                fontWeight: 700,
                border: '3px solid #666666'
              }}>
              Calculate
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default StipendCalculator;
