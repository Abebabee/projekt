import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with abe, coff and nike
          we learn lots of stuff yaesss
          Hi my name is nike this is me :)
        </a>
      </header>
    </div>
  );
}
window.addEventListener('load',function(){
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              let count =0;
              Object.keys(data).forEach(elements=>{
                count++;
                //console.log(count);
                return <img src={data.count.image} alt="en bild"></img>
              });
            });
});

export default App;
