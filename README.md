# Inch-Feet-React

This is a web app that allows you to convert measurements, created using React 

# Objectives

- Build on your knowledge of HTML, CSS, & Javascript
- Use React Components
- Learn to identify parts of a web site as Components
- Understand and use "props" in React

# Includes: 

- [REACT](https://reactjs.org/docs/getting-started.html)

## Live Site

[LIVE SITE](https://inch-feet-react-austinparvin.netlify.app/)

![Inch-Feet](http://g.recordit.co/ENWWgCnunt.gif)

## Featured Code

### Render Function

```JSX
render() {
    return (
      <main>
        <select onChange={this.setFrom} id="length">
          <option value="">From</option>
          <option value="63360">Miles</option>
          <option value="36">Yard</option>
          <option value="12">Feet</option>
          <option value="1">Inches</option>
        </select>
        <select onChange={this.setTo} id="length">
          <option value="">To</option>
          <option value="1">Inches</option>
          <option value="12">Feet</option>
          <option value="36">Yard</option>
          <option value="63360">Miles</option>
        </select>
        <input
          placeholder="Put number here"
          onChange={this.convert}
          type="text"
        />
        <p>Result: {this.state.answer}</p>
      </main>
    )
  }
 ```
 
