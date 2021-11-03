import { useEffect } from 'react';
import { useAttribution } from './attribution';
import { useLeafletContext } from './context';
import { useEventHandlers } from './events';
import { withPane } from './pane';
export function useLayerLifecycle(element, context) {
  useEffect(function addLayer() {
    var _context$layerContain;

    const container = (_context$layerContain = context.layerContainer) != null ? _context$layerContain : context.map;
    container.addLayer(element.instance);
    return function removeLayer() {
      var _context$layerContain2;

      (_context$layerContain2 = context.layerContainer) == null ? void 0 : _context$layerContain2.removeLayer(element.instance);
      context.map.removeLayer(element.instance);
    };
  }, [context, element]);
}
export function createLayerHook(useElement) {
  return function useLayer(props) {
    const context = useLeafletContext();
    const elementRef = useElement(withPane(props, context), context);
    useAttribution(context.map, props.attribution);
    useEventHandlers(elementRef.current, props.eventHandlers);
    useLayerLifecycle(elementRef.current, context);
    return elementRef;
  };
}