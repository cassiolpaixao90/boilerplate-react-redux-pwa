import React from 'react';
import {Page} from 'react-onsenui';
import './Splash.css'

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
                    this
                        .props
                        .popPage();
                }
            });
        }, 400);
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
                    textAlign: 'center',
                    height: '100%'
                }}>
                    <span className="animation"
                        style={{
                        display: 'inline-block',
                        position: 'relative',
                        top: '50%',
                        fontSize: '26px',
                        transform: 'translate3d(0, -50%, 0)'
                    }}>
                        PWA<br/>
                    </span>
                </div>
            </Page>
        );
    }
}

export default Splash;
