import React from "react"
import { Page, Toolbar, Button, Card } from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick() {
    alert('Ok');
  }

  renderToolbar() {
    return (
      <Toolbar>
      <div className='center'>Toolbar</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar} contentStyle={{padding: 8}}>
        Teste
        <Button className='right' onClick={this.handleClick}>Click me!</Button>
        <Card>
          Demo....
        </Card>
      </Page>
    )
  }
}
