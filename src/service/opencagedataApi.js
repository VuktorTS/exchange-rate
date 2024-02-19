import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = '096c22af6e544eb39377a5bfbe7173cc';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });
  return data;
};
