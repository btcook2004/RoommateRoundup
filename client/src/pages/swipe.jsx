function Swipe()
{
  return (
    <div>
      <div>
        <h1>Swipe</h1>
        
          <button id ="right" variant="contained"
          onClick={() => {
            alert('right');
          }}> Swipe Right</button> 

        <button id ="left" variant="contained" onClick={() => {
        alert('left');
        }}> 
        Swipe Left</button>
        
      </div>
    </div>
  );
}

export default Swipe;
