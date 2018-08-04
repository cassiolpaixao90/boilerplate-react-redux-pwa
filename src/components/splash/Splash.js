import React from 'react';
import {Page} from 'react-onsenui';
import Login from '../login/Login'
import './Splash.css'
import pwa from '../../components/splash/pwa.png';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 5
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                counter: this.state.counter - 1
            }, () => {
                if (this.state.counter === 0) {
                    clearInterval(this.interval);
                    this.login()
                }
            });
        }, 400);
    }

    login() {
        this
            .props
            .navigator
            .pushPage({
                comp: Login,
                props: {
                    key: 'login-page'
                }
            });
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <Page>
                <div
                    style={{
                    backgroundColor: '#FFF',
                    textAlign: 'center',
                    height: '100%'
                }}>
                <span
                    className="animation"
                    style={{
                    display: 'inline-block',
                    position: 'relative',
                    top: '50%',
                    fontSize: '26px',
                    transform: 'translate3d(0, -50%, 0)'}}>
                  <img src={pwa} alt="splash"/>
                </span>
                </div>
            </Page>
        );
    }
}

export default Splash;
