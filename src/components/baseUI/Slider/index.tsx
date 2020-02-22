import React, { useState, useRef, useEffect, SelectHTMLAttributes } from 'react'
import Swiper, { SelectableElement, SwiperOptions } from "swiper";
import './slider.scss'
import "swiper/css/swiper.css";

interface SliderProps {
  data: any
  openPagination?: boolean
  swiperOption?: SwiperOptions
  renderProp: (item: any) => any
}

const Slider: React.FC<SliderProps> = (props) => {
  const { data, openPagination = false, swiperOption } = props
  const { renderProp } = props
  const [sliderSwiper, setSliderSwiper] = useState<Swiper | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderSwiper || sliderSwiper.hasOwnProperty('destroyed')) {
      let csliderSwiper = new Swiper(sliderRef.current as SelectableElement, swiperOption)
      setSliderSwiper(csliderSwiper)
    }
    
    return () => {
      if (sliderSwiper && !sliderSwiper.hasOwnProperty('destroyed')) {
        sliderSwiper.destroy(true, true)
      }
    }
  }, [data, sliderSwiper])

  return (
    <div className="swiper-container" ref={sliderRef}>
      <div className="swiper-wrapper">
        {
          Object.keys(data).map((key: string) => {
            let temp = data[key]
            return (
              <div className="swiper-slide" key={key}>
                {renderProp(temp)}
              </div>
            )
          })
        }
      </div>
      {
        openPagination
          ? <div className="swiper-pagination"></div>
          : null
      }
    </div>
  )
}

export default React.memo(Slider)
