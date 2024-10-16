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
map.add(alignmentGroupLayer);
map.add(lotLayer);
map.add(treeGroupLayer);

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
async function defineActions(event: any) {
  const { item } = event;

  await item.layer.when();

  if (item.title === 'Commemorative Trees') {
    item.open = true;
    item.actionsSections = [
      [
        {
          title: 'Zoom to points',
          className: 'esri-icon-zoom-to-object',
          id: 'full-extent',
        },
      ],
      [
        {
          title: 'Highlight points',
          className: 'esri-icon-lightbulb',
          id: 'highlight-layer',
        },
      ],
    ];
  }

  if (item.layer.type !== 'group') {
    item.panel = {
      content: 'legend',
      open: true,
    };
  }

  item.title === 'Land Acquisition' ? (item.visible = false) : (item.visible = true);
}

export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  listItemCreatedFunction: defineActions,
});

layerList.on('trigger-action', (event) => {
  // capture the action id
  const id = event.action.id;

  if (id === 'full-extent') {
    zoomToLayer(commemorativeTreeLayer);
  } else if (id === 'highlight-layer') {
    highlightTrees(commemorativeTreeLayer);
  }
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
  expandIcon: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});
