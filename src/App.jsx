import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarked from "./components/Bookmarked/Bookmarked"
import Header from "./components/Header/Header"

function App() {
  const [bookmarked,setBookmarked] = useState([]);

  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarked,blog]
    setBookmarked(newBookmarks)
  }

  const handleMarkAsRead = time =>{
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime)

  }

  return (
    <>
     
    
      
     <Header></Header> 
     <div className='md:flex max-w-7xl mx-auto' ><Blogs 
     
     handleAddToBookmark={handleAddToBookmark} 
     handleMarkAsRead={handleMarkAsRead}
     
     ></Blogs>
     <Bookmarked bookmarked={bookmarked} readingTime={readingTime}></Bookmarked>
     
     </div>
    </>
  )
}

export default App
