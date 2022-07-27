// works but visibly scrolls up
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function PageTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// not working - i thought this would move position before render
// import { useLayoutEffect } from "react";
// import { useLocation } from "react-router-dom";
// export default function PageTop() {
//   const { pathname } = useLocation();

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }
