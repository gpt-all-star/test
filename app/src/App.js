import React from 'react';
import marked from 'marked';
import SaveButton from './SaveButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
  }

  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>Markdown Editor</h1>
        </header>
        <div className="container">
          <textarea
            className="text-input"
            value={this.state.markdown}
            onChange={this.handleChange}
          />
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          />
        </div>
        <SaveButton />
      </div>
    );
  }
}

export default App;