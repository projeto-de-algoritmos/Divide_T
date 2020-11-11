import _ from 'lodash';
import React from 'react';
import './style.css';

const TOWERS_NUMBER = 3;

class Towers extends React.Component {
  constructor(props) {
    super(props);
    let startTower = _.range(1, this.props.discsNumber + 1);
    let discs = _.map(Array(TOWERS_NUMBER), (val, i) =>
      i === 0 ? startTower : []
    );
    this.state = { discs };
  }

  render() {
    return (
      <div>
        {this.state.discs.map((towerDiscs, i) =>
          <Tower
            key={i + 1}
            towerDiscs={towerDiscs}
            maxSize={this.props.discsNumber}
            startTopDiscDrag={() => this.startTopDiscDrag(i)}
            dropDisc={() => this.dropDisc(i)}
          />
        )}
      </div>
    );
  }
}

const App = () => (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: window.innerHeight, width: '100%', backgroundColor: 'darkblue'}}>
    <Towers discsNumber={7} />
  </div>
);

export default App;