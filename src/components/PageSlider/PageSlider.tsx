import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cls from './PageSlider.module.scss'

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className={cls.Slider}>
      <div className={cls.Slider__element}>
        <img className={cls.Slider__element__img} src="src/img/ExampleOblojka1.webp" alt=""  />
        <h3 className={cls.Slider__element__text}>
            harum nihil quaerat nesciunt quis molestiae ratione officia nemo autem accusamus libero, consectetur ipsa delectus distinctio.
        </h3>
      </div>
      <div className={cls.Slider__element}>
        <img className={cls.Slider__element__img} src="src/img/ExampleOblojka2.webp" alt=""  />
        <h3 className={cls.Slider__element__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque saepe tempora eum qui harum nihil quaerat nesciunt quis molestiae ratione officia nemo autem accusamus libero, consectetur ipsa delectus distinctio.
        </h3>
      </div>
      <div className={cls.Slider__element}>
        <img className={cls.Slider__element__img} src="src/img/ExampleOblojka3.webp" alt=""  />
        <h3 className={cls.Slider__element__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque saepe tempora eum qui harum nihil quaerat nesciunt quis molestiae ratione officia nemo autem accusamus libero, consectetur ipsa delectus distinctio.
        </h3>
      </div>
      <div className={cls.Slider__element}>
        <img className={cls.Slider__element__img} src="src/img/ExampleOblojka4.webp" alt=""  />
        <h3 className={cls.Slider__element__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque saepe tempora eum qui harum nihil quaerat nesciunt quis molestiae ratione officia nemo autem accusamus libero, consectetur ipsa delectus distinctio.
        </h3>
      </div>
      <div className={cls.Slider__element}>
        <img className={cls.Slider__element__img} src="src/img/ExampleOblojka5.webp" alt=""  />
        <h3 className={cls.Slider__element__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque saepe tempora eum qui harum nihil quaerat nesciunt quis molestiae ratione officia nemo autem accusamus libero, consectetur ipsa delectus distinctio.
        </h3>
      </div>
      <div className={cls.Slider__element}>
        <div>

        </div>
        <img className={cls.Slider__element__img} src="src/img/ExampleOblojka6.webp" alt=""  />
        <h3 className={cls.Slider__element__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque saepe tempora eum qui harum nihil quaerat nesciunt quis molestiae ratione officia nemo autem accusamus libero, consectetur ipsa delectus distinctio.
        </h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;