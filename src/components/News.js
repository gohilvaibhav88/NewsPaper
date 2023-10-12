import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {
  
  static defaultProps ={
    country:'in',
    pageSize : 9,
    category: 'General'
  }
  static propTypes ={
      country : PropTypes.string, 
      pageSize : PropTypes.number,
      category : PropTypes.string
  }

  constructor(){
    super();
   this.state = {
    articles:[], 
    loading : false,
    page:1,
   }
  }

  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1cb1215d5904a229ca111d3f2a33755&pageSize=9`;
    
    let data = await fetch(url);
    let parsedData =  await data.json();
    this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults});
  }

  handleNextClick= async ()=>{
    console.log("next");
    if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){

    }else{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1cb1215d5904a229ca111d3f2a33755&page=${this.state.page +1}&pageSize=9`;
      
      let data = await fetch(url);
      let parsedData =  await data.json();
  
  
      this.setState({
        page: this.state.page +1,
        articles : parsedData.articles
        
      })
    }

    
    
    
    
  }
  handlePrevClick=async()=>{
    console.log("Prev");

    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1cb1215d5904a229ca111d3f2a33755&page=${this.state.page -1}&pageSize=9`;
    
    let data = await fetch(url);
    let parsedData =  await data.json();


    this.setState({
      page: this.state.page -1,
      articles : parsedData.articles
      
    })
    
    
  }
  render() {
    return (
      <div>
        <div className="container my-4">
          <h1>NewsPaper - Get the headlines of Daily News here</h1>
          <div className="row my-3">
            
            {this.state.articles.map((element) => {
              
             return <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title?element.title.slice(0,90)+("  ..."):" "}
                  description={element.description?element.description.slice(0,150)+("..."):" "}
                  imgUrl={!element.urlToImage?"https://imgs.search.brave.com/MSjrzoSBKuU5fa_KbYWCG6CvalBP32DipOfJ_0Jd9ng/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTU2MDc2/OC82MTYyL2kvNjAw/L2RlcG9zaXRwaG90/b3NfNjE2MjEwNTct/c3RvY2stcGhvdG8t/bm8taW1hZ2UtYXZh/aWxhYmxlLmpwZw":element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
          <button  disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/9))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
  
}
export default News;
