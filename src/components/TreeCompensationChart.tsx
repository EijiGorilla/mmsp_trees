import { useEffect, useRef, useState } from 'react';
import {
  compenStatusChart,
  cuttingStatusChart,
  treeCompensationLayer,
  treeCuttingLayer,
} from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateTreeCompensationData,
  generateTreesNumber,
  thousands_separators,
  zoomToLayer,
} from '../Query';
import '../App.css';
import * as clusterLabelCreator from '@arcgis/core/smartMapping/labels/clusters';
import * as clusterPopupCreator from '@arcgis/core/smartMapping/popup/clusters';
import { CalciteButton, CalciteLabel } from '@esri/calcite-components-react';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const TreeCompensationChart = ({ contractp, stationname }: any) => {
  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [treesData, setTreesData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  const chartID = 'pie-compen';
  const [treesNumber, setTreesNumber] = useState([]);

  // Turn of other layers
  treeCuttingLayer.visible = false;
  treeCompensationLayer.visible = true;

  const queryCpExpression = "Package = '" + contractp + "'";
  const queryStationExpression = "Station1 = '" + stationname + "'";
  const queryCpStationExpression = queryCpExpression + ' AND ' + queryStationExpression;

  if (!contractp) {
    treeCompensationLayer.definitionExpression = '1=1';
  } else if (contractp && !stationname) {
    treeCompensationLayer.definitionExpression = queryCpExpression;
  } else {
    treeCompensationLayer.definitionExpression = queryCpStationExpression;
  }

  useEffect(() => {
    generateTreeCompensationData().then((result: any) => {
      setTreesData(result);
    });

    generateTreesNumber().then((response: any) => {
      setTreesNumber(response);
    });

    zoomToLayer(treeCompensationLayer);
  }, [contractp, stationname]);

  useEffect(() => {
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        scale: 2,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 1,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = compenStatusChart.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = treeCompensationLayer.createQuery();

      view.when(function () {
        view.whenLayerView(treeCompensationLayer).then((layerView): any => {
          //chartLayerView = layerView;

          treeCompensationLayer.queryFeatures(query).then((results: any) => {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            treeCompensationLayer.queryExtent(queryExt).then((result: any) => {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: 'Tree_Compe = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(treesData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 190; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      scale: 0.85,
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      scale: 0.85,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 3,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, treesData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(treesData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  useEffect(() => {
    // Clustering
    treeCompensationLayer
      .when()
      .then(generateClusterConfig)
      .then((featureReduction: any) => {
        treeCompensationLayer.featureReduction = featureReduction;

        const toggleButton = document.getElementById('toggle-cluster') as HTMLElement;
        toggleButton.addEventListener('click', toggleClustering);

        // To turn off clustering on a layer, set the
        // featureReduction property to null
        function toggleClustering() {
          if (isWithinScaleThreshold()) {
            let fr = treeCompensationLayer.featureReduction;
            treeCompensationLayer.featureReduction =
              fr && fr.type === 'cluster' ? null : featureReduction;
          }
          toggleButton.innerText =
            toggleButton.innerText === 'Enable Clustering'
              ? 'Disable Clustering'
              : 'Enable Clustering';
        }

        view.watch('scale', (scale) => {
          if (toggleButton.innerText === 'Disable Clustering') {
            treeCompensationLayer.featureReduction = isWithinScaleThreshold()
              ? featureReduction
              : null;
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });

    function isWithinScaleThreshold() {
      return view.scale > 5000;
    }

    async function generateClusterConfig(layer: any) {
      // generates default popupTemplate
      const popupTemplate = await clusterPopupCreator
        .getTemplates({ layer })
        .then((popupTemplateResponse: any) => popupTemplateResponse.primaryTemplate.value);

      // generates default labelingInfo
      const { labelingInfo, clusterMinSize } = await clusterLabelCreator
        .getLabelSchemes({ layer, view })
        .then((labelSchemes: any) => labelSchemes.primaryScheme);

      return {
        type: 'cluster',
        popupTemplate,
        labelingInfo,
        clusterMinSize,
      };
    }
  });

  return (
    <>
      <CalciteLabel>TOTAL TREES</CalciteLabel>
      <CalciteLabel layout="inline">
        <b className="totalTreesNumber">
          {thousands_separators(treesNumber[1])}
          <img
            src="https://EijiGorilla.github.io/Symbols/Tree_Cutting_Logo.svg"
            alt="Land Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginLeft: '175%', display: 'flex', marginTop: '-40%' }}
          />
        </b>
      </CalciteLabel>
      <div
        id={chartID}
        style={{
          height: '55vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '-1.5vh',
        }}
      ></div>
      <CalciteButton id="toggle-cluster" className="esri-button">
        Disable Clustering
      </CalciteButton>
    </>
  );
}; // End of lotChartgs

export default TreeCompensationChart;
