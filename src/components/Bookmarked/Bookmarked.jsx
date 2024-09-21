import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarked = ({bookmarked,readingTime}) => {
      return (
            <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4" >
                  <div>
                        <h3 className="text-4xl" > Reading Time : {readingTime} </h3>
                  </div>
            <h2 className="text-3xl text-center " >Bookmarked Blogs: {bookmarked.length} </h2>
            {
                  bookmarked.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }  
        </div>
      );
};

Bookmarked.propTypes = {
      bookmarked:PropTypes.array,
      readingTime:PropTypes.number
}

export default Bookmarked;