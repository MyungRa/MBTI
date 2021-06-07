/*
시작화면, 사용자에게 시작을 유도하고
퀴즈에 대해 소개하는 화면
*/

import React from 'react'
import { Button, Title} from '../styles/styledComponents'

const homeContainer = {
  textAlign: "center"
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div style={homeContainer}>
      <img style={{width: 500, height: 300}} src="images/school.jpg"></img>
      <Title><h1>MBTI 유형별 나에게 맞는 학과는?!</h1></Title>
      <Button onClick={this.props.goTest}>시작하기</Button>
      <p>MADE BY 송명수</p>
    </div>
  }
}

export default Home;