class Main extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {grid: []};
    this.newGrid = this.newGrid.bind(this);
  }
  
  newGrid() {
    let g = []
    let g_a = []
    for (let i;i<10;i++) {
      for (let h;i<10;h++) {
        g_a = g_a + {id: i + h - 1,
                     selected: false,
                     bomb: false,
                     flagged: false,
                    };
      }
      g = g + g_a
    }
    this.setState({ grid: g })
    console.log(this.state.grid)
  }
  
  render() {
    return (
      <div id="container">
        <button onClick={ this.newGrid }>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
