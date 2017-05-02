import React from 'react'
import ChartTable from '../components/ChartTable.jsx';

class MusicContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      songs: [],
      h2Title: "Top 20 UK Singles"
    }
  }

  getData(url){
    const request = new XMLHttpRequest();
    request.open("GET", url)

    request.onload = () => {
      if(request.status ===200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString)
        console.log("all data", data)
        console.log('data.feed.entry', data.feed.entry)
        console.log('data.feed.entry[0].im:artist.label', data.feed.entry[0]['im:artist'].label)
        this.setState({songs: data.feed.entry})
        console.log("this.state.songs", this.state.songs)
      }
    }
    request.send()
  }

  //   this.setState((prevState) => {return {songs: prevState.songs.concat(data.feed.entry)}
  // })

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    this.getData(url)
  }

  render(){
    return(
      <div className="music-container">
      <h1>{this.state.h2Title} </h1>
      <ChartTable songs={this.state.songs}/>
      </div>
      )
  }

}


export default MusicContainer