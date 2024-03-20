import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import {
  stationLayer,
  treeCuttingLayer,
  treeCompensationLayer,
  lotLayer,
  constructionBoundaryLayer,
  commemorativeTreeLayer,
} from './layers';
import { highlightTrees, zoomToLayer } from './Query';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

/* Group Layer */
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [constructionBoundaryLayer, stationLayer],
});

const treeGroupLayer = new GroupLayer({
  title: 'Trees',
  visible: true,
  visibilityMode: 'exclusive',
  layers: [treeCompensationLayer, treeCuttingLayer, commemorativeTreeLayer],
});

// Change the layer order by using index numbers in map.add
map.add(lotLayer);
map.add(treeGroupLayer);
map.add(alignmentGroupLayer);

export const view = new MapView({
  container: undefined,
  map,
  center: [121.0194387, 14.6972616],
  zoom: 14,
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    if (item.title === 'Commemorative Trees') {
      highlightTrees(commemorativeTreeLayer);
    }

    item.title === 'Land Acquisition' ||
    item.title === 'Status of Tree Cutting' ||
    item.title === 'Status of Tree Compensation'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: treeCuttingLayer,
    searchFields: ['ID'],
    displayField: 'ID',
    exactMatch: false,
    outFields: ['*'],
    name: 'Tree ID',
    placeholder: 'example: DP-T-1',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'TreeID',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIconClass: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});
