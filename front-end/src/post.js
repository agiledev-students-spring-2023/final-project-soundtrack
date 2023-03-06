import React from "react";
import './post.css'
import SearchBar from "./Component/SearchBar";
import BookData from "./Data.json";

const Post = () => {
  console.log("Rendering Post");
  return (
    <header>
    <div className="Title">
        <h1>
      Start Posting, Choose a Song
      </h1>
    </div>
    

    <SearchBar placeholder={"Search Song"} data={BookData} />
    
    
    
    <div className ="Button">
              <button>
          Go to Camera
        </button>
    </div>
    </header>
  )
};

export default Post;