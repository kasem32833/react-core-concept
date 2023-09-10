
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'

function App() {
  // Using normal function
  // function learnMoreHandler(){
  //   alert('learn more button clicked')
  // }

  // Using arrow function
  //  const learnMoreHandler = () =>{
  //   alert('learn more button clicked')
  // }

  // using parameter
   function learnMoreHandler(num){
    alert('learn more button clicked' + num)
  }


  function addClickHandler(){

  }

  
  return (
    <>
    <h2>Welcome to React</h2>
    <Friends></Friends>
    <Team></Team>
     <Counter></Counter>
    </>
  )
}

export default App
