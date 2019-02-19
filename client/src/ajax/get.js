import $ from 'jquery'; 

const fetchPropertyData = (callback) => {
  $.get('http://localhost:3001/api/properties', (data) => {
    callback(null, data);
  });
};

export default fetchPropertyData;