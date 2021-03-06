import { useEffect, useState, useCallback, useRef } from 'react';
// make API calls and pass the returned data via dispatch
// export const useFetch = (data, dispatch) => {
//   useEffect(() => {
//     dispatch({ type: 'FETCHING_IMAGES', fetching: true });
//     fetch(`https://picsum.photos/v2/list?page=${data.page}&limit=10`)
//       .then(data => data.json())
//       .then(images => {
//         dispatch({ type: 'STACK_IMAGES', images });
//         dispatch({ type: 'FETCHING_IMAGES', fetching: false });
//       })
//       .catch(e => {
//         dispatch({ type: 'FETCHING_IMAGES', fetching: false });
//         return e;
//       })
//   }, [dispatch, data.page])
// }


export function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.keyCode === key) action()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}




// infinite scrolling with intersection observer



export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}

// lazy load images with intersection observer
export const useLazyLoading = (imgSelector, items) => {
  const imgObserver = useCallback(node => {
  const intObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.intersectionRatio > 0) {
        const currentImg = en.target;
        const newImgSrc = currentImg.dataset.src;
        // only swap out the image source if the new url exists
        if (!newImgSrc) {
          console.error('Image source is invalid');
        } else {
          currentImg.src = newImgSrc;
        }
        intObs.unobserve(node); // detach the observer when done
      }
    });
  })
  intObs.observe(node);
  }, []);
  const imagesRef = useRef(null);
  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector);
    if (imagesRef.current) {
      imagesRef.current.forEach(img => imgObserver(img));
    }
  }, [imgObserver, imagesRef, imgSelector, items])
}


const h = 360 * Math.random();
const s = "70%";
const l = "70%";
export const hsla = (opacity) => `hsla(${h},${s},${l}, ${opacity})`; // Collect all to a css color






const isWindowAvailable = typeof window !== "undefined"

const getPosition = () => isWindowAvailable ? window.pageYOffset : undefined

export const useWindowScrollPosition = () => {

  const [scrollPosition, setScrollPosition] = useState(getPosition())

  useEffect(() => {
    if (!isWindowAvailable) {
      return false
    }

    const handleScroll = () => {
      setScrollPosition(getPosition())
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}

