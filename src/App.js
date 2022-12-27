import "./App.css";
import { YoutubeData } from "./YotubeData";

function App() {
  console.log(YoutubeData);
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
       let newClass = '';
       if (index === 1) newClass = "huy2";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            image2={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className = {newClass}
          ></YoutubeItem>
          );
      })}

    </div>
  );
}


// Props - > Properties
function YoutubeItem(props) {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div
        className="youtube-image"
        style={{
          height: "250px",
        }}
      >
        <img src={props.image} alt="" />
      </div>

      <div className="youtube-footer">
        <img src={props.image2} alt="" className="youtube-avatar" />

        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title ||
              " Well look likes there is nothing title at here !!"}
          </h3>
          <h4 className="youtube-author"> {props.author}</h4>
        </div>
      </div>

    </div>
  );
}

export default App;
