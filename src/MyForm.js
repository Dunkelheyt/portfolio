import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/dalmadxx@gmail.com"
        method="POST"
      >

        <div class="form-group">
        <label>Full Name:</label>
        <input type="name" class="form-control" name="name" />
        </div>

        <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" placeholder="name@example.com"/>
        </div>

        <div class="form-group">
        <label for="exampleFormControlSelect1">Select subject:</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Translation/Localization</option>
          <option>Linguistic Quality Assurance</option>
          <option>Copywriting</option>
        </select>
        </div>

        <div class="form-group">
        <label>Message:</label>
        <textarea class="form-control" rows="3"></textarea>
        <br/>
        {status === "SUCCESS" ? <p>Thanks! I'll get you as soon as possible!</p> : <button class="btn btn-primary mb-2">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
