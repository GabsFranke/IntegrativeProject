import ImageGallery from "react-image-gallery";
import React, { useState } from "react";
import "./imageGallery.css";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const styleBox = {    
    width: 500,
    height: 500,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
}
const styleModal = {
    // position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const ImageGallerry = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="image_gallery">
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal sx={styleModal} open={open} onClose={() => setOpen(false)}>
        <Box sx={styleBox}>
            <ImageGallery items={images} />
        </Box>
      </Modal>
    </div>
  );
};

export default ImageGallerry;