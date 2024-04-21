import React from 'react';
import marked from 'marked';

class MarkdownEditor extends React.Component {
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
    );
  }
}

export default MarkdownEditor;