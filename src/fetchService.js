let apiUrl;

if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://localhost:5000';
} else {
  apiUrl = 'https://gumball-api.herokuapp.com';
}

export const getFiles = (techId, setter) => {
  fetch(`${apiUrl}/uploads?technician-id=${techId}`)
    .then((res) => res.json())
    .then((data) => {
      setter([].concat(data.files));
    });
};

export const uploadFile = (file, techId, machineId) => {
  const data = new FormData();
  data.append('file', file);
  data.append('technician-id', techId)
  data.append('machine-id', machineId)
  console.log('in upload file')
  fetch(`${apiUrl}/upload`, {
    method: 'POST',
    body: data
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    });
};
