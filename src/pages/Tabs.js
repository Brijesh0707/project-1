import React, { useEffect, useState } from 'react';
import './Tabs.css';
import Person from '../images/personfollow.png';
import pencil from '../images/Vector.png';
import Location from '../images/location.png';
import Profile from '../images/profile.png';
import View from '../images/view.jpg';
import Share from '../images/share.png';

const Tabs = () => {
  const [post, setPost] = useState(100);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All Post'); 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        if (jsonData.products && Array.isArray(jsonData.products)) {
          setData(jsonData.products);
        } else {
          setData([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setData([]);
      });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className='tabs-post'>
        <div className='tabs'>
          <ul>
            <li
              onClick={() => handleTabClick('All Post')}
              className={activeTab === 'All Post' ? 'active' : ''}
            >
              All Post({post})
            </li>
            <li
              onClick={() => handleTabClick('Article')}
              className={activeTab === 'Article' ? 'active' : ''}
            >
              Article
            </li>
            <li
              onClick={() => handleTabClick('Event')}
              className={activeTab === 'Event' ? 'active' : ''}
            >
              Event
            </li>
            <li
              onClick={() => handleTabClick('Education')}
              className={activeTab === 'Education' ? 'active' : ''}
            >
              Education
            </li>
            <li
              onClick={() => handleTabClick('Job')}
              className={activeTab === 'Job' ? 'active' : ''}
            >
              Job
            </li>
          </ul>
        </div>

        <div className='create-post'>
          <div className='button'>
            <h6>Write Post</h6>
            <select>
              <option></option>
            </select>
          </div>
          <div className='button-2'>
            <img src={Person} alt='Person' />
            <h6>Join Group</h6>
          </div>
        </div>
      </div>
       <div className='post-drop'>
          <div className='text'>
            <h5>Post(100)</h5>
          </div>
          <div className='drop'>
        <select>
        <option>Filter All</option>
          <option>All Post</option>
          <option>Article</option>
          <option>Event</option>
          <option>Education</option>
          <option>Job</option>
        

        </select>
      </div>
       </div>
      <hr />
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className='posts'>
          <div className='posts1'>
            {data.map((product) => (
              <div className='posting' key={product.id}>
                <img src={product.thumbnail} alt='Product Thumbnail' className='img-fluid' />
                <h6 className='cat'>{product.category}</h6>
                <br />
                <h6 className='desc'>{product.description}</h6><br></br>
                <div className='profiles'>
                  <div className='profile'>
                    <img src={Profile} alt='Profile' />
                    <p>{product.brand}</p>
                  </div>
                  <div className='views'>
                    <div className='view'>
                      <img src={View} className='viewlogo' alt='View' />
                      <h6>100k Views</h6>
                    </div>
                    <div className='share'>
                      <img src={Share} className='sharelogo' alt='Share' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='location'>
            <div className='locations'>
              <img src={Location} className='loc' alt='Location' />
              <h6>Ahmedabad</h6>
              <img src={pencil} className='pen' alt='Pencil' />
            </div>
            <br />
            <br />
            <p>Your location will help us serve better and extend a personalized experience.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
