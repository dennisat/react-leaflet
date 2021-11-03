export function withPane(props, context) {
  // const pane = props.pane ?? context.pane
  // Fix: replaced with:
  const pane = props.pane === null || props.pane === undefined ? context.pane : props.pane;
  return pane ? { ...props,
    pane
  } : props;
}