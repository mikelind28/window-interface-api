import Button from "../Elements/Button";

export default function ScrollToTop() {
  return (
    <div className='my-4'>
      <Button
        handleClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        Scroll to top
      </Button>
    </div>
  );
}
