import React, { Component } from "react";
import styles from '../styles.module.css';
export default class Searchbar extends Component {
  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  
  render() {
    const { inputValue } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className= {styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.form}>
            <span className={styles.label}>Search</span>
          </button>

          <input
          onChange = {this.handleChange}
            className={styles.seaIntut}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}