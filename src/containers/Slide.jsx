import Slider from "../components/Slider/index";

export default function IndexPage() {
  const images = [
    "https://intphcm.com/data/upload/banner-la-gi.jpg",
    "https://img.lovepik.com/desgin_photo/45000/4091_detail.jpg!odetail650",
    "https://img.lovepik.com/desgin_photo/45000/4082_list.jpg",
    "https://img.lovepik.com/desgin_photo/45000/4094_list.jpg"
  ];

  return (
    <div>
      <Slider
        slides={images}
        size="medium"
        slideInterval={6}
        inContainer
        className="mt-20 mb-20"
      />
      <Slider slides={images} size="large" slideInterval={6} />
    </div>
  );
}
