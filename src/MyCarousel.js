import React, {Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';


class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
      return {
        position: "relative",
        height: "80vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle"
      };
    }
  
    static get CARD_STYLE() {
      return {
        height: "700px",
        width: "300px",
        paddingTop: "80px",
        textAlign: "center",
        background: "#C0C0C0",
        color: "#FFF",
        fontFamily: "'Recursive', sans-serif",
        fontSize: "16px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
      };
    }
  
    render() {
      return (
        <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            <div style={MyCarousel.CARD_STYLE}>DONALD TRUMP
            <img className="fea" src="https://bookstore.gpo.gov/sites/default/files/covers/potus2_0.jpg" alt="Donald Trump" height="60%" width="100%"/>
            Slogan: Make America Great Again
            Vice President: Mike Pence <br></br>
            Party: Republican
           </div>
    
            <div style={MyCarousel.CARD_STYLE}>Joe Biden 
            <img src="https://www.wemu.org/sites/wemu/files/202003/Official_portrait_of_Vice_President_Joe_Biden.jpg" alt="Donald Trump" height="60%" width="100%"/>
            Key Points: Restore The Soul of America. Our best days still lie ahead. This is America We are America, second to none. Anything is possible. No Malarkey! Build Back Better. Unite for a Better America
            Vice President:Kamala Harris <br></br>
            Party: Democratic
            </div>
            <div style={MyCarousel.CARD_STYLE}>Jo Jorgensen
            <img className="fea" src="https://jo20.com/wp-content/uploads/2020/07/received_2854621051481952-smaller.png" alt="Donald Trump" height="60%" width="100%"/>
            Slogan: Break Free From Big Government The First Ones Free Real Change for Real People
            Vice President: Spike Cohen <br></br>
            Party: Libertarian
           </div>
           <div style={MyCarousel.CARD_STYLE}>Howie Hawkins
            <img className="fea" src="https://d3n8a8pro7vhmx.cloudfront.net/gpus/pages/9833/attachments/original/1548798877/Howie-Hawkins-on-steps-400.jpg?1548798877" alt="Donald Trump" height="60%" width="100%"/>
            Slogan: For an Ecosocialist Green New Deal
            Vice President: Angela Nicole Walker <br></br>
            Party: Green
           </div>
            <div style={MyCarousel.CARD_STYLE}>???
            <img src="https://i.pinimg.com/originals/a7/17/5a/a7175a6a2a1e5b709a660a62b2e00491.jpg" alt="Donald Trump" height="60%" width="100%"/>
            Slogan:???<br></br>
            Vice President: ??? <br></br>
            Party: Independent</div>
            {/* <div style={MyCarousel.CARD_STYLE}>Fourth Card</div>
            <div style={MyCarousel.CARD_STYLE}>Fifth Card</div> */}
          </ReactCardCarousel>
        </div>
      );
    }
  }

  export default MyCarousel;