import React, {Component} from 'react';
import Controls from '../Controls/Controls.js';
import './Aside.css';

class Aside extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <aside className="aside">
        <Controls />
        {/* <AsideBody /> */}
      </aside>
    );
  }
}

export default Aside;