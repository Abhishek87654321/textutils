import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'

//  let sum = (a, b) => {
//   return a + b;
// }
function App() {
  return (
    <>
    
   <Navbar title= 'Navbar' nativePlace = 'Home' main = 'Link'/>
   {/* <div> the sum of  5 and 9 is : {sum(5,9)}</div> */}
   <div className="container"><TextForm title = 'Conversion Form'/>
   </div>
    </>
  );
}

export default App;
