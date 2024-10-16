import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { map, view, basemaps, layerList } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import { DropDownData } from './customClass';
import TreeCuttingChart from './components/TreeCuttingChart';
import TreeCompensationChart from './components/TreeCompensationChart';
import { treeCuttingLayer } from './layers';
import { dateUpdate } from './Query';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  //**** Set states */
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);
  const [tabList, setTabList] = useState<undefined | any | unknown>('TreeCutting');

  // For dropdown filter
  const [initContractPackage, setInitContractPackage] = useState();
  const [contractPackage, setContractPackage] = useState<null | any>(null);
  const [stationName, setStationName] = useState<null | any>(null);
  const [stationNameList, setStationNameList] = useState<null | undefined | any>([]);

  //
  const [treeCuttingLayerLoaded, setTreeCuttingLayerLoaded] = useState<any>();
  useEffect(() => {
    treeCuttingLayer.load().then(() => {
      setTreeCuttingLayerLoaded(treeCuttingLayer.loadStatus);
    });
  });

  //**** Create dropdonw list */
  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [treeCuttingLayer],
      fieldNames: ['Package', 'Station1'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitContractPackage(response);
    });

    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  // handle change event of the Municipality dropdown
  const handleContractPackageChange = (obj: any) => {
    setContractPackage(obj);
    setStationNameList(obj.field2);
    setStationName(null);
  };

  const handleStationChange = (obj: any) => {
    setStationName(obj);
  };

  // End of dropdown list
  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <div>
      <CalciteShell>
        <CalciteTabs slot="panel-end" layout="center" scale="l">
          <CalciteTabNav
            slot="title-group"
            onCalciteTabChange={(event) => setTabList(event.target.selectedTitle.className)}
          >
            <CalciteTabTitle class="TreeCutting">TreeCutting</CalciteTabTitle>
            <CalciteTabTitle class="Compensation">Compensation</CalciteTabTitle>
          </CalciteTabNav>
          {/* CalciteTab: Tree Cutting */}
          <CalciteTab>
            {tabList === 'TreeCutting' && treeCuttingLayerLoaded === 'loaded' && (
              <TreeCuttingChart
                contractp={contractPackage === null ? '' : contractPackage.field1}
                stationname={stationName === null ? '' : stationName.name}
              />
            )}
          </CalciteTab>
          {/* CalciteTab: Tree Compensation */}
          <CalciteTab>
            {tabList === 'Compensation' && (
              <TreeCompensationChart
                contractp={contractPackage === null ? '' : contractPackage.field1}
                stationname={stationName === null ? '' : stationName.name}
              />
            )}
          </CalciteTab>
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            padding: '0.5rem 0.2rem 0.5rem 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">MMSP TREES</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          {/* Dropdown filter */}
          <div className="dropdownFilterLayout">
            <Select
              placeholder="Select CP"
              value={contractPackage}
              options={initContractPackage}
              onChange={handleContractPackageChange}
              getOptionLabel={(x: any) => x.field1}
              styles={customstyles}
            />
            <br />
            <Select
              placeholder="Select Station"
              value={stationName}
              options={stationNameList}
              onChange={handleStationChange}
              getOptionLabel={(x: any) => x.name}
              styles={customstyles}
            />
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/MMSP.png"
            alt="MMSP Logo"
            height={'50px'}
            width={'75px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>

        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter the tree data</b> by contract package from the dropdown lists.
                  </li>
                  <li>
                    <b>Click series in pie charts</b> to view its corresponding progress on the map.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>
      </CalciteShell>
    </div>
  );
}

export default App;
