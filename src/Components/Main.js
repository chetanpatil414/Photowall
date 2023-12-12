import React from "react";
import Tittle from "./Tittle";
import "/Users/chetanpatil/eclipse-workspace/ReactProject/photowall/src/styles/TittleStylesheet.css";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: "1",
          description: "Aliens???",
          imageLink:
            "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
        },
        {
          id: "2",
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
    };

    this.RemovePhoto = this.RemovePhoto.bind(this);
  }

  RemovePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Tittle tittle={"Photowall"} />
              <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.RemovePhoto}
                onNavigate={this.navigate}
              />
            </div>
          )}
        />
        <Route path="/AddPhoto" component={AddPhoto} />
      </div>
    );
  }
}

export default Main;
