import React, { Component } from "react";
import Subject from "./component/subject";
import TOC from "./component/TOC";
import Content from "./component/content";
import Control from "./component/Control";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "WEB", sub: "World wide web!" },
      welcome: { title: "Welcome", desc: "Hello, React" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is ..." },
        { id: 2, title: "CSS", desc: "CSS is ..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is ..." },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0
      while (i < this.state.contents.length) {
        var data = this.state.contents[i]
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
        }
        i++
      }

    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {function() {
            this.setState({ mode: 'welcome' })
          }.bind(this)}
        ></Subject>
        <TOC onChangePage={function(id) {
          this.setState({ 
            mode: 'read',
            selected_content_id: +id,
        })
        }.bind(this)}data={this.state.contents}></TOC>
        <Control></Control>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
