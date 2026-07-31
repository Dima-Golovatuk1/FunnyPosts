import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Media } from "../types/media.type";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./mediaSlider.module.css";

interface MediaSliderProps {
  mediaList: Media[];
}

export function MediaSlider({ mediaList }: MediaSliderProps) {
  if (!mediaList || mediaList.length === 0) {
    return (
      <div
        style={{
          fontSize: '30px',
          padding: '20px',
          marginBottom: '50px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: '0px 5px 5px #000'
        }}
      >
        Media not found
      </div>
    );
  }

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {mediaList.map((media) => {
          return (
            <SwiperSlide
              className={styles.mediaSlider__slide}
              key={media.id}
            >
              {media.type.toUpperCase() === "VIDEO" ? (
                <video
                  className={styles.mediaSlider__video}
                  src={media.url}
                  controls
                />
              ) : (
                <img
                  className={styles.mediaSlider__image}
                  src={media.url}
                  alt="slide"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
