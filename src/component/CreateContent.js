import { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_precess"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value)
          }.bind(this)}
        >
          <input type="text" name="title" placeholder="title"></input>
          <p>
            <textarea name="desc" placeholder="Description"></textarea>
          </p>
          <p>
            <input type="submit" value="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
export default CreateContent;
