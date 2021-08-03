
import './App.css';
import ImageItem from './ImageItem.js';
import ImageList from './ImageList.js';
import images from './data/data.js';
console.log(images);
function App() {
  return (
    <div className="App">
      <ImageList />
      <ImageItem />
    </div>
  );
}

export default App;
