import React from 'react';
import { saveAs } from 'file-saver';

class SaveButton extends React.Component {
  handleSave = () => {
    const blob = new Blob([this.props.markdown], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "markdown.md");
  };

  render() {
    return (
      <button onClick={this.handleSave}>Save</button>
    );
  }
}

export default SaveButton;