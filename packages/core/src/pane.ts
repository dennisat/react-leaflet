import { LayerOptions } from 'leaflet'

import { LeafletContextInterface } from './context'

export function withPane<P extends LayerOptions>(
  props: P,
  context: LeafletContextInterface,
): P {
  // const pane = props.pane ?? context.pane
  // Fix: replaced with:
  const pane =
    props.pane === null || props.pane === undefined
      ? context.pane
      : props.pane
  return pane ? { ...props, pane } : props
}
