import React from 'react';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import './ProfileCard.css';

var exampleIcon = "data:image/png;base64,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";

export default class ProfileCard extends React.Component {
    state = {
        scrolled: true
    }
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        /*  window.addEventListener('scroll', () => {
              if(window.scrollY < 100){
                  this.setState({scrolled: true})
              } else {
                  this.setState({scrolled: false})
              }
          })*/
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div className={this.props.highlight ? 'profileHeader big' : 'profileHeader small'}>
                <img className={this.state.scrolled ? 'imageBig' : 'imageSmall'} src={exampleIcon}></img>
                <div className="profileCardCard profileHeaderBody">
                    <h3>{this.props.user.name}</h3>
                    <p>{this.props.user.birth}</p>
                    <p>{this.props.user.city}</p>
                    <p>{this.props.user.email}</p>
                </div>
                <div className="smallBox">
                <div className="smallerProfileCardCard">
                    <h3>Liittynyt</h3>
                    <p>21.11.2019</p>
                    <h3>kirjautumiset</h3>
                    <p>15 kertaa</p>
                </div>
                <div className="smallerProfileCardCard">
                    <h3>Testejä tehty:</h3>
                    <p>45</p>
                    <h3>Tavaroit ostettu:</h3>
                    <p>3</p>
                </div>
                </div>
            </div>
        );
    }
}
