import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faCloud,
  faAirFreshener,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('Kolkata');
  const [data, setData] = useState();
  const [error, setError] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
        const res = await fetch(url);
        console.log('3333333333333', res);
        const resJson = await res.json();
        setData(resJson);
        console.log('2222222222222', resJson);
      } catch (err) {
        console.log('KKKKKKKKKKKKKKKK', err);
        setError(err);
      }
    };
    getData();
  }, [search]);
  console.log('5555555555555', data);
  return (
    <div className="weather">
      <input
        type="search"
        placeholder="enter city name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="searchBox">
        <h4>{search}</h4>
      </div>
      {data && data.cod == '200' && (
        <div className="weatherBox">
          <div className="container">
            <div className="cloud">
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <div>{data.weather[0].description}</div>
          </div>
          <div>{data.main.temp}°F</div>
          <div className="windBox">
            <div>humidity : {data.main.humidity}</div>
            <div>pressure : {data.main.pressure}</div>
            <div>wind-speed : {data.wind.speed}</div>
          </div>
        </div>
      )}
      {data && data.cod == '200' && (
        <div className="rotates">
          <div>
            <div>SAT</div>
            <div className="sun">
              {' '}
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div>{data.main.feels_like}°F</div>
          </div>
          <div>
            <div>SUN</div>
            <div className="sun">
              {' '}
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div>{data.main.feels_like}°F</div>
          </div>
          <div>
            <div>MON</div>
            <div className="sun">
              {' '}
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div>{data.main.feels_like}°F</div>
          </div>
          <div>
            <div>TUE</div>
            <div className="sun">
              {' '}
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div>{data.main.feels_like}°F</div>
          </div>
          <div>
            <div>WED</div>
            <div className="sun">
              {' '}
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div>{data.main.feels_like}°F</div>
          </div>
        </div>
      )}
    </div>
  );
}
