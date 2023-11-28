class App extends React.Component {
  state = {
    btn: "Sprawdź",
  };
  state1 = {
    pelnoletnosc: false,
  };

  handleClick = () => {
    <>{this.state1.pelnoletnosc && (
      <h1>Możesz kupić napój</h1> 
     )} :  (
       <h1>Niestety nie możesz kupić napoju, nie masz skończonych 18 lat</h1>
     )</>
  };

  handleCheck = () => {
    this.setState({
      pelnoletnosc: true,
    });
    console.log(pelnoletnosc);
  }

  render() {
    const btnName = "stwórz liczbę";
    return (
      <React.Fragment>
        <h1>Czy chcesz kupić energetyka?</h1>

        <p><input type="checkbox" onChange={this.handleCheck}/> Mam ukończone 18 lat</p>

        <button onClick={this.handleClick}>{this.state.btn}</button>

        
      </React.Fragment>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(
  <App btnTitle="Check" />,
  document.getElementById("root")
);