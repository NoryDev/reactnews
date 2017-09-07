import React, { Component } from 'react';

class SourceSelection extends Component {

  constructor(props) {
    super(props);
    this.state = { sources: [] }
  }

  sourceChanged(e) {
    this.state.sources.forEach(source => {
      if (source.id === e.target.value) {
        this.setState({ source: source })
      }
    })
    this.props.sourceChanged(e.target.value)
  }

  componentDidMount() {
    fetch('https://newsapi.org/v1/sources?language=en')
      .then((response) => {
        response.json().then(data =>
          this.setState({ sources: data.sources })
        )
      })
  }

  render() {
    return (
      <div className="sourceselection">
        <div>
          <div className="jumbotron">
            <h2><span className="glyphicon glyphicon-list-alt"></span>&nbsp;News List</h2>
            <h4>Select News Source</h4>
            <select className="form-control" onChange={event => this.sourceChanged(event)}>
              <option value="">Please select news source ...</option>
              { this.state.sources.map(source => {
                  return <option key={source.id} value={source.id}>{source.name}</option>
                })
              }
            </select>
            { this.state.source &&
                <div>
                  <h6>{this.state.source.description}</h6>
                  <a href={this.state.source.url} className="btn btn-primary" target="_blank">Go To {this.state.source.name} Website</a>
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SourceSelection;
