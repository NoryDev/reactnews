import React, { Component } from 'react';
import './Newslist.css';

class Newslist extends Component {

  constructor(props) {
    super(props);
    this.state = { articles: [] }
  }

  updateSource(source) {
    fetch('https://newsapi.org/v1/articles?source=' + source + '&apiKey=f9a6546e64064d70a9c6813d07c9b91e')
     .then(response => {
        response.json().then(data => {
          this.setState({articles: data.articles})
        })
     })
  }

  componentDidMount() {
    this.updateSource(this.props.source)
  }

  componentWillReceiveProps(newProps) {
    this.updateSource(newProps.source)
  }

  render() {
    return (
      <div className="newslist">
        <div className="container">

          <ul className="media-list">
            { this.state.articles && this.state.articles.map((article, index) => {
                return(
                  <li key={index} className="media">
                    <div className="media-left">
                      <a href={article.url} target="_blank">
                        <img className="media-object" src={article.urlToImage} alt={article.title}/>
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading"><a href={article.url} target="_blank">{article.title}</a></h4>
                      <h5><i>by {article.author}</i></h5>
                      <p>{article.description}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Newslist;
