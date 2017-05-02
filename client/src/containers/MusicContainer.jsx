import React from 'react'
import ChartTable from '../components/ChartTable.jsx';

class MusicContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      songs: []
    }
  }

  getData(url){
    const request = new XMLHttpRequest();
    request.open("GET", url)

    request.onload = () => {
      if(request.status ===200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString)
        this.setState({songs: data.feed.entry})
      }
    }
    request.send()
  }


  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    this.getData(url)
  }

  render(){
    return(
      <div className="music-container">
      <h1>Top 20 UK Singles</h1>
      <ChartTable songs={this.state.songs}/>
      </div>
      )
  }

}


export default MusicContainer