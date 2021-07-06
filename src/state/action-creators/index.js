export const fetch_images = () => dispatch => {
    fetch('https://images-api.nasa.gov/asset/as11-40-5874')
      .then(res => res.json())
      .then(images =>
        dispatch({
          type: fetch_images,
          payload: images
        })
      );
  };