import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import './Project.css';

const Publication = () => {
  const [pubs, setPubs] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 4;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = pubs
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => (
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden m-6 p-6 " key={post.id}>
        <div className="w-1/2 float-left">
          <h1 className="text-4xl font-bold ">{post.title}</h1>
          <p className="text-gray-700 text-base mt-10 p-5 ">{post.description}</p>
        </div>
        <div className="w-1/2 float-right">
          <AliceCarousel autoPlay autoPlayInterval="3000">
            {post.photo_post.map((img) => (
              <img src={'http://127.0.0.1:8000' + img.photo} id="img" className="w-2/3  mx-auto" alt="" />
            ))}
          </AliceCarousel>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(pubs.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const fetchData = async () => {
    const result = await axios('http://127.0.0.1:8000/api/posts-all');
    setPubs(result.data);
    console.log(setPubs);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold text-center m-5 mh-50">Publications </h1>
      {displayPosts}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'previous_page'}
        nextLinkClassName={'next_page'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Publication;
