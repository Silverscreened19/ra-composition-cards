import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="card-container">
      <Card img="https://img.freepik.com/free-photo/pink-and-white-background-with-a-watercolor-background_10126-1946.jpg?w=1380&t=st=1706267448~exp=1706268048~hmac=4adf085a07439ea30f56ac296b18a80e6816fdc2fbc56e709fb62d1d20671e77">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  );
}

export default App;
