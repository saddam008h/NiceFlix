import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, placeholder, type }) => {
  const [loading, setLoading] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const placeholderRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    // Reset image state whenever source changes (e.g. route param updates).
    setLoading(true);
    setImageURL("");
  }, [src]);

  useEffect(() => {
    if (!loading || !placeholderRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setImageURL(src);
      }
      // unobserve on intersection
      if (entries[0].isIntersecting) observer.unobserve(entries[0].target);
    });

    observer.observe(placeholderRef.current);

    return () => observer.disconnect();
  }, [src, loading]);

  return (
    <>
      {loading && 
        <img
          ref={placeholderRef}
          src={placeholder}
          alt=""
          className="fadeImage"
        />
      }
      <img
        ref={imageRef}
        src={imageURL}
        data-src={src}
        alt=""
        className={
          loading
            ? "h-0 w-0 hidden"
            : type === "card"
            ? "rounded-t-md h-full w-full object-cover fadeImage"
            : "h-full w-full object-cover fadeImage"
        }
        onLoad={() => setLoading(false)}
      />
    </>
  );
};
export default LazyImage;
