import { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { clsxm } from "../../lib/clsxm";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./parts/embla-arrow-buttons";

import type { ProjectSlideType } from "../../lib/types/project.type";

type PropType = {
  slides: ProjectSlideType[];
  options?: EmblaOptionsType;
  className?: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, className = "" } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={clsxm("embla", className)}>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={slide.image}
                alt={slide.title}
                className="embla__slide__img rounded-lg "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls w-full mt-2">
        <div className="embla__buttons w-full flex justify-between items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
