import Blogs from "./components/Blogs/Blogs"
import Bookmarked from "./components/Bookmarked/Bookmarked"
import Header from "./components/Header/Header"

function App() {
  

  return (
    <>
     
    
      
     <Header></Header> 
     <div className='md:flex max-w-7xl mx-auto' ><Blogs></Blogs>
     <Bookmarked></Bookmarked>
     
     </div>
    </>
  )
}

export default App
