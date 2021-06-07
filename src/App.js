/*
  App.js

  루트 컴포넌트로써, 시작화면, 질문화면, 결과화면을 모두
  품어주는 역할!

*/
import React from 'react'
import Home from './components/Home'
import Game from './components/Game'
import Fade from 'react-reveal/Fade'

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

class App extends React.Component{
  constructor(props){
    super(props)
    // 사용자가 시작했는지 여부를 나타태는 상태
    this.state = {
      begin: false,
      Fade: false
    }
  }

  // 이 컴포넌트의 상태 begin을 바꿀 수 있는 메소드
  goTest = () => { this.setState({ begin: true }) }
  goFirst = () => { this.setState({ begin: false }) }

  render(){
    return <div style={container}>
      <Fade bottm>
      {
        this.state.begin ? <Game goFirst={this.goFirst} /> :
        <Home goTest={this.goTest} />
      }
      </Fade>
    </div>
  }
}

export default App;