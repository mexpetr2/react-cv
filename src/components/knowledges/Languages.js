import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1 },
      { id: 2, value: "Css", xp: 1.5 },
      { id: 3, value: "PHP", xp: 0.5 },
      { id: 4, value: "Python", xp: 1.8 },
    ],
    frameworks: [
      { id: 1, value: "React.js", xp: 0.7 },
      { id: 2, value: "boostrap", xp: 0.9 },
      { id: 3, value: "sass", xp: 0.5 },
      { id: 4, value: "Vue.js", xp: 0.6 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="LanguagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
