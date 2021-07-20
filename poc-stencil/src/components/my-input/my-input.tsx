import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
})
export class MyInput {

  @Prop() label: string;

  @Prop() placeholder: string;

  @State() value: string;

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class="container">

        <label htmlFor="my-input">{this.label}
          <input 
            type="text"
            name="my-input"
            autocomplete="off"
            placeholder={this.placeholder}
            value={this.value} onInput={(event) => this.handleChange(event)}
          />
        </label>

        {this.value && !this.value.includes(" ") ? 
        <span>You should write your full name!</span>
        : null}

        <div>
          <h4>Your name is:</h4>  
          <p>{this.value}</p>
        </div>

      </div>
    )
  }
}