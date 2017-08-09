navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(
  ()=>{
    console.log("registered!")
  },
  (err)=>{
    console.error(err)
  }
);