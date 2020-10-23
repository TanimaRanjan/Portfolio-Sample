import { animateScroll } from "react-scroll";

const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 200,
      delay: 0,
      smooth: "linear"
    });   
}

export default scrollToTop;