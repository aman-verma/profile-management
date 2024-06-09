import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1').then((res) => {
      setProfileData(res.data.data);
      console.log(profileData);
    });
  }, []);

  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#myModal'
      >
        Add New Profile
      </button>

      <div className='responsive-table'>
        <div className='header'>Name</div>
        <div className='header'>Email</div>
        <div className='header'>Age</div>
        <div className='header'>Action</div>
        {profileData.map((item, i) => {
          return (
            <>
              <div>
                {' '}
                <span
                  className='glyphicon glyphicon-eye-open'
                  aria-hidden='true'
                ></span>{' '}
                {item.name}
              </div>
              <div>{item.email}</div>
              <div>{item.age}</div>
              <div>
                <button className='btn btn-primary'>
                  <span
                    className='glyphicon glyphicon-pencil'
                    aria-hidden='true'
                  ></span>
                </button>
                <button className='btn btn-danger'>
                  <span
                    className='glyphicon glyphicon-trash'
                    aria-hidden='true'
                  ></span>
                </button>
              </div>
            </>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Home;
