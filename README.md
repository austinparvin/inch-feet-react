# Inch-Feet-React

This is a web app that allows you to convert measurements, created using React 

# Objectives

- Build on your knowledge of HTML, CSS, & Javascript
- Use React Components
- Learn to identify parts of a web site as Components
- Understand and use "props" in React

# Includes: 

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [REACT](https://reactjs.org/docs/getting-started.html)
- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)

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
 
