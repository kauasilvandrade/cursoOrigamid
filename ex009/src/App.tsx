import { Slider } from "./components/Slider";

export function App() {
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    },
  ];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
}
