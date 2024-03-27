export  const getdata=async(date)=>{
    const response=await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`, 
    { method:'GET',
});
return await response.json();
};