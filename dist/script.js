const drumButtons = [
{
  key: "Q",
  sound: "Heater 1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  key: "W",
  sound: "Heater 2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  key: "E",
  sound: "Heater 3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  key: "A",
  sound: "Heater 4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  key: "S",
  sound: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  key: "D",
  sound: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  key: "Z",
  sound: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  key: "X",
  sound: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  key: "C",
  sound: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



const keys = drumButtons.map(({ key }) => key);
const sounds = drumButtons.map(({ sound }) => sound);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSound: 'Press any key' };

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }



  handleKeyPress(event) {
    let pressed = event.key.toUpperCase();
    if (keys.includes(pressed)) {
      let sound = sounds[keys.indexOf(pressed)];
      this.playAudio(pressed, sound);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }


  playAudio(key, sound) {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();

    this.setState({
      lastSound: sound });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container", id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-center" }, "Drum Machine"), /*#__PURE__*/
      React.createElement("h3", { className: "text-center", id: "display" }, this.state.lastSound), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col text-center" },
      drumButtons.map((btn, index) => /*#__PURE__*/
      React.createElement("button", { className: "btn drum-pad btn-primary", onClick: () => this.playAudio(btn.key, btn.sound), id: btn.sound },
      btn.key, /*#__PURE__*/
      React.createElement("audio", { className: "clip", src: btn.url, id: btn.key })))))));






  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));