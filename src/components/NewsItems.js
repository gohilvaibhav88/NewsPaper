import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imgUrl, newsUrl,date, author } = this.props
    return (
      <div>
       <div className="card my-4" >
  <img src= {imgUrl} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date}</small></p>
    <a href={newsUrl} target="blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
