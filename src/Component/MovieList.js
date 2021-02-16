import { List, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
function MovieList(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentimdbID, setCurrentimdbID] = useState("");
  const [movieFullInfo, setMovieFullInfo] = useState({});
  function handleShowModal(data) {
    setIsModalVisible(data);
  }
  function handlcurrentimdbID(data) {
    setCurrentimdbID(data);
  }
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?i=${currentimdbID}&plot=full&apikey=5f5cdbb5`
    )
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
        setMovieFullInfo(resData.Search);
      });
  }, [currentimdbID]);
  console.log(movieFullInfo);
  const columns = [
    { title: "Movie Name", dataIndex: "Title" },
    { title: "Release Year", dataIndex: "Year" },
    {
      title: "",
      dataIndex: "Year",
      render: (name, item, i) => {
        return (
          <p
            onClick={() => {
              handlcurrentimdbID(item.imdbID);
              handleShowModal(true);
            }}
            style={{ cursor: "pointer" }}
          >
            Content
          </p>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.movieList}
        scroll={{ y: 360 }}
        pagination={{
          defaultPageSize: 15,
          showSizeChanger: true,
          pageSizeOptions: ["15", "25", "40", "50"],
        }}
      />
      <Modal
        title="Movie InFo"
        visible={isModalVisible}
        destroyOnClose
        maskClosable
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        footer={null}
      >
        {movieFullInfo && movieFullInfo.imdbRating > 7 ? (
          <>
            <p>boxoffice: hit</p>
          </>
        ) : (
          <>
            <p>boxoffice: flop</p>
          </>
        )}
      </Modal>
    </div>
  );
}
export default MovieList;
