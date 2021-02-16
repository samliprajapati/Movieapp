import { Card } from "antd";
import React from "react";
function MovieListPoster(props) {
  return (
    <>
      {props.movieList &&
        props.movieList.map((item) => {
          return (
            <div style={{ display: "flex" }}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.Poster} />}
              ></Card>
            </div>
          );
        })}
    </>
  );
}
export default MovieListPoster;
