import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: "Màu mắt em",
      thumbnailUrl:
        "https://channel.mediacdn.vn/2020/8/20/jack-1-15979140481901778569892.jpg",
    },
    {
      id: 2,
      name: "Being a boy",
      thumbnailUrl:
        "https://newsmd1fr.keeng.net/tiin/archive/images/20200314/173856_3.jpg",
    },
    {
      id: 3,
      name: "Hoa Hải Đường",
      thumbnailUrl:
        "https://cly.onecmscdn.com/2020/09/24/congly-vn_mv-hoa-hai-duong-cua-jack-vuot-rap-viet-dat-top-1-trending-youtube-sau-16-tieng-hinh-anh3769563504.jpg",
    },
  ];

  return (
    <div className="albumFeature">
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
