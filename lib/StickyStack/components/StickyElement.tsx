import { useContext, useEffect, useMemo } from "react";
import { useMeasure } from "react-use";
import { StickyElementProps, stickyStackContext } from "../StickyStack";

export const StickyElement = ({
  id,
  content,
  sticky,
}: StickyElementProps): JSX.Element => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const { updateHeight, stack, getOffset } = useContext(stickyStackContext);

  const offset = useMemo(() => getOffset(id), [getOffset, id]);

  const entry = useMemo(() => stack.find((e) => e.id === id), [id, stack]);

  useEffect(() => {
    if (sticky && height !== entry?.height) {
      updateHeight(id, height);
    }
  }, [entry, height, id, sticky, updateHeight]);

  if (!sticky) {
    return content;
  }
  return (
    <div ref={ref} id={id} style={{ position: "sticky", top: offset }}>
      {content}
    </div>
  );
};
