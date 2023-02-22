import { useState, memo, Fragment } from "react";

// React-boostrap
import { Row, Col, Image } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

// Components
import Card from "../../../components/bootstrap/card";
import FsLightbox from "fslightbox-react";

//Img
import img1 from "/src/assets/images/plugins/img6.jpeg";
import img2 from "/src/assets/images/plugins/img1.jpeg";
import img3 from "/src/assets/images/plugins/img2.jpg";
import img4 from "/src/assets/images/plugins/img3.jpeg";
import img5 from "/src/assets/images/plugins/img4.jpeg";
import img6 from "/src/assets/images/plugins/img5.jpeg";
import img7 from "/src/assets/images/plugins/img7.jpg";
import img8 from "/src/assets/images/plugins/img8.jpg";
import img9 from "/src/assets/images/plugins/img9.jpg";
import img10 from "/src/assets/images/plugins/img10.jpg";
import img11 from "/src/assets/images/plugins/img11.jpg";
import img12 from "/src/assets/images/plugins/img12.jpg";

//Video
import video1 from "/src/assets/images/plugins/video-1.mp4";
import video2 from "/src/assets/images/plugins/video-2.mp4";
import video3 from "/src/assets/images/plugins/video-3.mp4";

const Fslightbox = memo(() => {
  const [imageController, setImageController] = useState({
    toggler: false,
    slide: 1,
  });

  function imageOnSlide(number) {
    setImageController({
      toggler: !imageController.toggler,
      slide: number,
    });
  }

  const [videoController, setvideoController] = useState({
    toggler: false,
    slide: 1,
  });

  function videoOnSlide(number) {
    setvideoController({
      toggler: !videoController.toggler,
      slide: number,
    });
  }
  const [youtubevideoController, setyoutubevideoController] = useState({
    toggler: false,
    slide: 1,
  });

  function youtubevideoOnSlide(number) {
    setyoutubevideoController({
      toggler: !youtubevideoController.toggler,
      slide: number,
    });
  }

  return (
    <Fragment>
      <FsLightbox
        toggler={imageController.toggler}
        sources={[img1, img2, img3, img4, img5, img6, video1]}
        slide={imageController.slide}
      />
      <FsLightbox
        toggler={videoController.toggler}
        sources={[video1, video2, video3]}
        slide={videoController.slide}
      />
      <FsLightbox
        toggler={youtubevideoController.toggler}
        sources={[
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://www.youtube.com/watch?v=TW9d8vYrVFQ",
          "https://www.youtube.com/watch?v=zyXmsVwZqX4",
        ]}
        slide={youtubevideoController.slide}
      />

      <FsLightbox
        toggler={imageController.toggler}
        sources={[img1, img2, img3, img4, img5, img6, video1]}
        slide={imageController.slide}
      />
      <FsLightbox
        toggler={videoController.toggler}
        sources={[video1, video2, video3]}
        slide={videoController.slide}
      />
      <FsLightbox
        toggler={youtubevideoController.toggler}
        sources={[
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://www.youtube.com/watch?v=TW9d8vYrVFQ",
          "https://www.youtube.com/watch?v=zyXmsVwZqX4",
        ]}
        slide={youtubevideoController.slide}
      />

      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Fslightbox</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Fslightbox Plugin refer
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4 className="card-title">Gallery</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="d-grid gap-card grid-cols-3 iq-fslightbox-img">
                <Link onClick={() => imageOnSlide(1)} to="#">
                  <Image
                    src={img1}
                    className="img-fluid bg-soft-info rounded"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => imageOnSlide(2)} to="#">
                  <Image
                    src={img2}
                    className="img-fluid bg-soft-info rounded"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => imageOnSlide(3)} to="#">
                  <Image
                    src={img3}
                    className="img-fluid bg-soft-info rounded"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => imageOnSlide(4)} to="#">
                  <Image
                    src={img4}
                    className="img-fluid bg-soft-info rounded"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => imageOnSlide(5)} to="#">
                  <Image
                    src={img5}
                    className="img-fluid bg-soft-info rounded"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => imageOnSlide(6)} to="#">
                  <Image
                    src={img6}
                    className="img-fluid bg-soft-info rounded"
                    alt="profile-image"
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4 className="card-title">HTML5 Videos</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="d-grid gap-card grid-cols-3 iq-fslightbox-img">
                <Link onClick={() => videoOnSlide(1)} to="#">
                  <Image
                    src={img7}
                    className="img-fluid bg-soft-info rounded"
                    alt="Milk Bottle Beside a Tree"
                  />
                </Link>
                <Link onClick={() => videoOnSlide(2)} to="#">
                  <Image
                    src={img8}
                    className="img-fluid bg-soft-info rounded"
                    alt="Close-Up of Plant With Green Leaves"
                  />
                </Link>
                <Link onClick={() => videoOnSlide(3)} to="#">
                  <Image
                    src={img9}
                    className="img-fluid bg-soft-info rounded"
                    alt="Seagulls Flying Against Blue Sky"
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4 className="card-title">Youtube Videos</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="d-grid gap-card grid-cols-3 iq-fslightbox-img">
                <Link onClick={() => youtubevideoOnSlide(1)} to="#">
                  <Image
                    src={img10}
                    className="img-fluid bg-soft-info rounded"
                    alt="Heroes Tonight - Fullscreen Lightbox"
                  />
                </Link>
                <Link onClick={() => youtubevideoOnSlide(2)} to="#">
                  <Image
                    src={img11}
                    className="img-fluid bg-soft-info rounded"
                    alt="Sky High - Fullscreen Lightbox"
                  />
                </Link>
                <Link onClick={() => youtubevideoOnSlide(3)} to="#">
                  <Image
                    src={img12}
                    className="img-fluid bg-soft-info rounded"
                    alt="Why we lose - Fullscreen Lightbox"
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Fslightbox.displayName = "Fslightbox";
export default Fslightbox;
