const apiUrl = 'https://gumball-api.herokuapp.com';

export const getFiles = (techId, setter) => {
  fetch(`${apiUrl}/uploads?technician-id=${techId}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      setter([].concat(data.files));
    });
};
