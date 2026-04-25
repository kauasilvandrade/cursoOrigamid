import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
};

export function Head(props: Props) {
  useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", props.description);
  }, [props]);

  return <></>;
}
