/* eslint-disable react/prop-types */

export default function DisplayGif({gifs}) {

  return (
    <div className="gifContainer">
      <img src={gifs.images.fixed_height.url} alt=""      />
    </div>
  );
}
