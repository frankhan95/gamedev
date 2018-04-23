import React, { Component } from 'react';
import './App.css';
import GameCard from './GameCard'
import Slideshow from './Slideshow'
import Thumbnail from './Thumbnail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSlide: false,
      slideTitle:"Game Title",
      slideTagline:"",
      slideDescript:"",
      thumbnails:[],
      currentImage:""
    }
  }

  handleThumbnailClick(nextImage){
    this.setState({
      currentImage: nextImage
    })
  }

  handleClick(cardProps) {
    this.setState({
      showSlide: true,
      slideTitle: cardProps.name
    })
    var self = this;
    let url = "./img/images.xml";
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(self.state.slideTitle);
          let imageList = this.responseXML.getElementById(self.state.slideTitle).getElementsByTagName("image");
          let tagline =  this.responseXML.getElementById(self.state.slideTitle).getElementsByTagName("tagline");
          let descript =  this.responseXML.getElementById(self.state.slideTitle).getElementsByTagName("description");
          let thumbnails = [];
          for (var i = 0, len = imageList.length; i < len; i++) {
            let thumbnail = thumbnails.push(
              <Thumbnail name = "hi" src = {imageList[i].innerHTML} key = {i} onClick = {self.handleThumbnailClick.bind(self)}/>
            );
          }
          self.setState({
            thumbnails: thumbnails,
            currentImage: imageList[0].innerHTML,
            slideTagline: tagline[0].innerHTML,
            slideDescript: descript[0].innerHTML
          })
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  hideSlideshow(){
    this.setState({
      showSlide: false
    })
  }

  render() {

    return (
      <div id ="main">
        <div id = "logo">Games by <br/> Frank Han <div><i class="arrow down"></i></div></div>
        <div id = "banner">Developer's Catalog</div>
        <div id = "card_container">
          <GameCard name = "SnakeyBus" image = "./img/snakeybus/snakeybus_1.png"  onClick = {this.handleClick.bind(this)} />
          <GameCard name = "Orbital Defense" image = "./img/orbital/orbital_1.gif"  onClick = {this.handleClick.bind(this)} />
          <GameCard name = "SeaCraft" image = "./img/seacraft/seacraft_1.png"  onClick = {this.handleClick.bind(this)} />
          <GameCard name = "Unamed Prototype 1" image = "./img/spaceship/spaceship_1.jpg"  onClick = {this.handleClick.bind(this)} />
          <GameCard name = "Nightfall" image = "./img/nightfall/nightfall_1.png"  onClick = {this.handleClick.bind(this)}  />
          <GameCard name = "Microwave" image = "./img/microwave/microwave_1.jpg" onClick = {this.handleClick.bind(this)}  />
          <GameCard name = "Alarm Clock" image ="./img/alarm/alarm_1.png"  onClick = {this.handleClick.bind(this)} />
          <GameCard name = "Zen Bird" image = "./img/bird/bird_1.jpg" onClick = {this.handleClick.bind(this)}  />
          <GameCard name = "Ritual" image = "./img/rituals/rituals_1.png" onClick = {this.handleClick.bind(this)}  / >
          <GameCard name = "Base Wars" image ="./img/base/base_1.png"  onClick = {this.handleClick.bind(this)} / >
        </div>
         <Slideshow 
          title = {this.state.slideTitle} 
          showMe = {this.state.showSlide} 
          hideMe = {this.hideSlideshow.bind(this)}
          thumbnails = {this.state.thumbnails}
          currentImage = {this.state.currentImage}
          tagline = {this.state.slideTagline}
          descript = {this.state.slideDescript}
        />

        <div id = "about"><h1>About</h1>I'm a hobby game developer who enjoys working in teams. My role is a programmer so <b>I was not the artist</b> for any of the games you see above. I got involved with game development by helping revive the UW's GameDev club 3 years ago. Through the club, I was exposed to the game dev industry and taught myself how to code projects. Since, I have been developing in Unity3D and working in small teams (usually 2 ~ 3). Feel free to visit my personal site: <a href = "http://www.franktc.com">www.franktc.com</a>.
<br/><br/>
I made this site using ReactJS, within the create-react-app environment. Check out the repo: <a href = "https://www.github.com/frankhan95/gamedev">github.com/frankhan95/gamedev</a></div>     
      </div>
    );
  }
}

export default App;
