import React, { Component } from 'react';
import NewsItem from "./NewsItem"

class NewsFrance extends Component {
    state = { newsFrance: [] }
    componentDidMount = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=fr&pageSize=100&apiKey=6a5b19f7e370417e8c5973890cab1909')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ newsFrance: data.articles })
            });
    }
    render() {
        return (
            <div className="NeuerGrid">
                {this.state.newsFrance.map((news, i) => {
                    return (
                        <NewsItem
                            urlToImage={news.urlToImage}
                            title={news.title}
                            description={news.description}
                            author={news.author}
                            publishedAt={news.publishedAt}
                            url={news.url}
                            key={i}
                        />
                    )
                }
                )}
            </div>);
    }
}

export default NewsFrance;




