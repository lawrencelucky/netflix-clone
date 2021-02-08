import React, { useState, useEffect } from 'react';

import './Banner.css';

import axios from './axios';
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };
    fetchData();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + '...' : str;

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
            )`,
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner--fadeBottom'></div>
    </header>
  );
};

export default Banner;
