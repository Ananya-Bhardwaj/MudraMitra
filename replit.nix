{ pkgs }: {
  deps = [
    pkgs.import './SliderCardExample.css'; // Import your CSS file here
    pkgs.import Swiper from 'swiper';
  ];
}