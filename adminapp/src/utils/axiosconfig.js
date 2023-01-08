const gettokenfromlocalstorage=localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null;
// console.log(gettokenfromlocalstorage.user.token)

const  headerconfig={
    headers:{
      Authorization:"Bearer "+gettokenfromlocalstorage.user.token,
      Accept:'application/json'
    }
  }

  export default headerconfig;
