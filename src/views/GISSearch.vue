<template>
  <header class="p-3 navbar navbar-expand-lg navbar-light bg-hubbar text-white">
    <div class="container-fluid title-up">
      <a
        href="/"
        class="navbar-brand offset-lg-2 font-exo fw-bold brand text-white"
        >HRC.</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div class="ti col-lg-8 container">
          <div class="d-flex flex-wrap">
            <ul
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            >
              <li>
                <router-link
                  to="/findHRC/providence"
                  class="nav-link px-2 text-white"
                  >Find HRC</router-link
                >
              </li>
              <li>
                <router-link to="/resource" class="nav-link px-2 text-white"
                  >Resources</router-link
                >
              </li>
              <li>
                <router-link to="/about" class="nav-link px-2 text-white"
                  >About</router-link
                >
              </li>
              <li></li>
            </ul>

            <div class="text-end">
              <router-link to="/HRCProvider">
              <button class="btn btn-light dash">Dashboard</button></router-link>
              <router-link to="/HRCProvider/searchHistory">
              <img
                class="icon"
                src="../../public/userIcon/Project Weber Renew.png"
                alt=""
              /></router-link>
              
              <router-link
                to="/"
                type="button"
                class="btn btn-outline-primary left text-white"
                ><strong>Sign out </strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div id="viewDiv"></div>

  <div id="infoDiv">
    <div id="legendDiv">
      <h1>Data Maps</h1>
      <!-- label layers -->

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Toggle Layers
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
            <label for="indexAll">Combined_index:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="indexAll"
            />
          </li>
                    <li>
            <label for="indexAccesibility">Accesibility_inedx:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="indexAccesibility"
            />
          </li>
                    <li>
            <label for="indexEmergency">Emergency_response_index:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="indexEmergency"
            />
          </li>
                    <li>
            <label for="indexHotzone">Hotzone_index:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="indexHotzone"
            />
          </li>
                    <li>
            <label for="indexProximity">HRC_Provier_Proximity_index:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="indexProximity"
            />
          </li>
                    <li>
            <label for="indexPopulation">Population_index:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="indexPopulation"
            />
          </li>
          <li>
            <label for="checkboxEmergency">Emergency Call Locations:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxEmergency"
            />
          </li>
          <li>
            <label for="checkboxWalkability">WalkabilityIndex:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxWalkability"
            />
          </li>
          <li>
            <label for="checkboxOTP">Opiod Treatment Provider:</label>
            <input class="dropdown-item" type="checkbox" id="checkboxOTP" />
          </li>
          <li>
            <label for="checkboxCommercial">Commercial:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxCommercial"
            />
          </li>
          <li>
            <label for="checkboxBusStops">Bus Stops:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxBusStops"
            />
          </li>
          <li>
            <label for="checkboxDrugCrime">Drug Crime:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxDrugCrime"
            />
          </li>
          <li>
            <label for="checkboxPopulation">Population:</label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxPopulation"
            />
          </li>
          <li>
            <label for="checkboxSDH">Social Determinants of Health:</label>
            <input class="dropdown-item" type="checkbox" id="checkboxSDH" />
          </li>
          <li>
            <label for="checkboxHospital">Hospital: </label>
            <input
              class="dropdown-item"
              type="checkbox"
              id="checkboxHospital"
            />
          </li>
        </ul>
      </div>

      <select class="esri-select" id="filter">
        <option value="1=1">All</option>
        <option value="Colleges, Universities, and Professional Schools">
          Universities/ Professional Schools
        </option>
        <option value="Elementary and Secondary Schools">
          Elementary/Secondary Schools
        </option>
        <option value="Technical and Trade Schools">
          Technical/Trade Schools
        </option>
        <option value="Other Schools and Instruction">Other Schools</option>
        <option value="Grocery Stores">Grocery Stores</option>
        <option value="Museums, Historical Sites, and Similar Institutions">
          Park/Museum
        </option>
        <option value="Employment Services">Employment Services</option>
      </select>
    </div>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import esriId from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import Credential from "@arcgis/core/identity/Credential";
import Widget from "@arcgis/core/widgets/Widget";
import Legend from "@arcgis/core/widgets/Legend";
import Expand from "@arcgis/core/widgets/Expand";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import $ from "jquery";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
function checkChecked(ev, layer) {
  if ($("#" + ev)[0].checked === false) {
    //console.log("turned false");
    layer.visible = false;
  } else {
    //console.log("turned true");
    layer.visible = true;
  }
}
export default {
  name: "ARCGIS",
  props: {},
  methods: {},
  mounted() {
    var apiKey =
      "AAPKb3eecaeb91ed45628a682756d20ac048lUNLwpchYPEGEPnbeLe5FAg-AgPBsF4b4Vk0j-B3i04OSiYxgCgQVLFBQjDuGreB";
    esriConfig.apiKey = apiKey;

    var token =
      "x7xvJtQAHDoEdEeGZJP2DZKTGfEQY0VoCbW61bkFisdXBjLQGEIS4RgVNVcCdWzVJIdZkB-tkCXSBinw2sslbMr_1--OktmO3flLue-c6y24-sKf_IwlSlHkg8vJOUtiFlVrAOnW9EOZQvhmD5N89g..";

    // Add Layers Section

    // Add Emergency Call Layers
    const indexTemplate = {
      title:
        "Facility setup inside this  Hexagon has <em>Combined Index</em>  score of <strong class = 'numbers'>{a00_Full_I}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "a0_index_A",
              label: " Accesibility Index",
            },
            {
              fieldName: "a0_index_E ",
              label: " Emergency Index",
            },
            {
              fieldName: "a0_index_p ",
              label: " Population Index",
            },
            {
              fieldName: "a0_index_1 ",
              label: " Hotzone Index",
            },
            {
              fieldName: "a0_index_2 ",
              label: " Provider Proximity Index",
            },
            {
              fieldName: "Routes",
              label: " Unique Bus Routes with stop inside the Hexagon",
            },
            {
              fieldName: "NAME",
              label: " Closest Hospital for Emergency Response",
            },
            {
              fieldName: "travel_tim",
              label: "Average Traveltime for Emergency Response(minutes)",
            },
            {
              fieldName: "Walk_full_",
              label: "Naitonal Walkability Index(scaled to 100)",
            },
            {
              fieldName: "F__of_Crim",
              label: "Number of Drug Related Crime Within Hexagon",
            },
          ],
        },
      ],
    };
    let indexRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: { type: "simple-fill" },
      visualVariables: [
        {
          type: "color",
          field: "a00_Full_I",
          // features with 30 ppl/sq km or below are assigned the first color
          stops: [
            { value: 0, color: "#F7FBFF" },
            { value: 100, color: "#08306B" },
          ],
        },
      ],
    };
    const indexLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/finalinedx/FeatureServer/0",
      popupTemplate: indexTemplate,
      renderer: indexRenderer,
      visible: true,
    });

    //population
    let PopulationindexRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: { type: "simple-fill" },
      visualVariables: [
        {
          type: "color",
          field: "a0_index_p",
          // features with 30 ppl/sq km or below are assigned the first color
          stops: [
            { value: 0, color: "#F7FBFF" },
            { value: 100, color: "#08306B" },
          ],
        },
      ],
    };

    const PopulationindexTemplate = {
      title:
        "Facility setup inside this Hexagon has <em>Population Index</em> score of <strong class = 'numbers'>{a0_index_p}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "TotPop",
              label: " Total Population",
            },
          ],
        },
      ],
    };

    const PopulationindexLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/finalinedx/FeatureServer/0",
      popupTemplate: PopulationindexTemplate,
      renderer: PopulationindexRenderer,
      visible: false,
    });
    //Proximity
    let ProximityindexRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: { type: "simple-fill" },
      visualVariables: [
        {
          type: "color",
          field: "a0_index_2",
          // features with 30 ppl/sq km or below are assigned the first color
          stops: [
            { value: 0, color: "#F7FBFF" },
            { value: 100, color: "#08306B" },
          ],
        },
      ],
    };
    const ProximityindexTemplate = {
      title:
        "Facility setup inside this Hexagon has <em>Avoiding Other HRC Provider Index</em> score of <strong class = 'numbers'>{a0_index_2}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "F5_min",
              label:
                "within 5 minutes walking distance from a HRC Service Provider",
            },
            {
              fieldName: "F10_min",
              label:
                "within 10 minutes walking distance from a HRC Service Provider",
            },
            {
              fieldName: "F15_min",
              label:
                "within 15 minutes walking distance from a HRC Service Provider",
            },
            {
              fieldName: "F20_min",
              label:
                "within 20 minutes walking distance from a HRC Service Provider",
            },
            {
              fieldName: "F25_min",
              label:
                "within 25 minutes walking distance from a HRC Service Provider",
            },
          ],
        },
      ],
    };

    const ProximityindexLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/finalinedx/FeatureServer/0",
      popupTemplate: ProximityindexTemplate,
      renderer: ProximityindexRenderer,
      visible: false,
    });

    // hotzone

    let HotzoneindexRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: { type: "simple-fill" },
      visualVariables: [
        {
          type: "color",
          field: "a0_index_1",
          // features with 30 ppl/sq km or below are assigned the first color
          stops: [
            { value: 0, color: "#F7FBFF" },
            { value: 100, color: "#08306B" },
          ],
        },
      ],
    };
    const HotzoneindexTemplate = {
      title:
        "Facility setup inside this Hexagon has <em>Hotzone Index</em> score of <strong class = 'numbers'>{a0_index_1}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "F__of_EMS",
              label: " # of Emergency Service Called",
            },
            {
              fieldName: "F__of_Crim",
              label: "Number of Drug Related Crime Within Hexagon",
            },
          ],
        },
      ],
    };

    const HotzoneindexLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/finalinedx/FeatureServer/0",
      popupTemplate: HotzoneindexTemplate,
      renderer: HotzoneindexRenderer,
      visible: false,
    });

    //Emergency

    let EmergencyindexRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: { type: "simple-fill" },
      visualVariables: [
        {
          type: "color",
          field: "a0_index_E",
          // features with 30 ppl/sq km or below are assigned the first color
          stops: [
            { value: 0, color: "#F7FBFF" },
            { value: 100, color: "#08306B" },
          ],
        },
      ],
    };

    const EmergencyindexTemplate = {
      title:
        "Facility setup inside this Hexagon has <em>Emergency Response Index</em> score of <strong class = 'numbers'>{a0_index_E}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "NAME",
              label: " Closest Hospital for Emergency Response",
            },
            {
              fieldName: "travel_tim",
              label: "Average Traveltime for Emergency Response(minutes)",
            },
          ],
        },
      ],
    };

    const EmergencyindexLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/finalinedx/FeatureServer/0",
      popupTemplate: EmergencyindexTemplate,
      renderer: EmergencyindexRenderer,
      visible: false,
    });

    //Accesibility
    let AccesibilityindexRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: { type: "simple-fill" },
      visualVariables: [
        {
          type: "color",
          field: "a0_index_A",
          // features with 30 ppl/sq km or below are assigned the first color
          stops: [
            { value: 0, color: "#F7FBFF" },
            { value: 100, color: "#08306B" },
          ],
        },
      ],
    };

    const AccesibilityindexTemplate = {
      title:
        "Facility setup inside this Hexagon has <em>Accesibility Index</em> score of <strong class = 'numbers'>{a0_index_A}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "Walk_full_",
              label: "Naitonal Walkability Index(scaled to 100)",
            },
            {
              fieldName: "Routes",
              label: " Unique Bus Routes with stop inside the Hexagon",
            },
          ],
        },
      ],
    };

    const AccesibilityindexLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/finalinedx/FeatureServer/0",
      popupTemplate: AccesibilityindexTemplate,
      renderer: AccesibilityindexRenderer,
      visible: false,
    });

    // Add Emergency Call Layers
    const emergencyTemplate = {
      title: "Block <strong class = 'numbers'>{GEOID}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "CountCat",
              label: " Count of OD EMS Runs (Range)",
            },
            {
              fieldName: "Count_ ",
              label: " Count of OD EMS Run",
            },
          ],
        },
      ],
    };

    const emergencyLayer = new FeatureLayer({
      url: "https://services1.arcgis.com/dkWT1XL4nglP5MLP/ArcGIS/rest/services/Opioid_Overdose_Related_EMS_Runs_by_Census_Block_Group_08092020_to_08082021/FeatureServer/7",
      popupTemplate: emergencyTemplate,
      visible: false,
    });
    // Add Smart Location Layers
    const walkabilityTemplate = {
      title:
        "Block <strong class = 'numbers'>{GEOID20 }</strong> has WalkabilityIndex of <strong class = 'numbers'>{NatWalkInd}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "TotPop",
              label: " Population, 2018 ",
            },
            {
              fieldName: "TotEmp",
              label: " Total employment, 2017",
            },
            {
              fieldName: "CountHU",
              label: " Housing units",
            },
          ],
        },
      ],
    };

    const walkabilityLayer = new FeatureLayer({
      url: "https://geodata.epa.gov/arcgis/rest/services/OA/WalkabilityIndex/MapServer/0",
      popupTemplate: walkabilityTemplate,
      visible: false,
    });

    // Add Population Layer

    const populationTemplate = {
      title:
        "Block <strong class = 'numbers'>{BLOCKCE20}</strong> has a population of <strong class = 'numbers'>{Total_Pop }</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "Population",
              label: "Population Density",
            },
            {
              fieldName: "ALAND20",
              label: "Land Area",
            },
          ],
        },
      ],
    };

    const populationLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/population_shapes/FeatureServer/0",
      popupTemplate: populationTemplate,
      visible: false,
    });

    // Add Crimemap Layer

    const crimeTemplate = {
      title:
        "<strong class = 'numbers'>{Counts}</strong> Case of Type1&2 Drug Related Crime Reported at <strong class = 'numbers'>{Location}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "Month",
              label: "Month",
            },
            {
              fieldName: "Year",
              label: "Year",
            },
            {
              fieldName: "Statute_Desc",
              label: "Statute_Desccription",
            },
          ],
        },
      ],
    };

    const crimeLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/cleaned_drugcrime/FeatureServer/0",
      popupTemplate: crimeTemplate,
      visible: false,
    });

    // Add Busstop map Layer

    const busStopTemplate = {
      title:
        "Route <strong class = 'numbers'>{stops_csv_ROUTE}</strong> in <strong class = 'numbers'>{stops_csv_DIRECTION}</strong> Direction",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "routes_csv_RT_NAME",
              label: "ROUTE NAME",
            },
            {
              fieldName: "stops_csv_ROUTE",
              label: "DIRECTION",
            },
            {
              fieldName: "stops_csv_RXST_ADD",
              label: "STOP NAME",
            },
            {
              fieldName: "stops_csv_RROUTES_SER",
              label: "CORSSING OTHER ROUTES",
            },
            {
              fieldName: "routes_csv_runs_on_weekdays",
              label: "Runs on Weekdays?",
            },
            {
              fieldName: "routes_csv_runs_on_saturday",
              label: "Runs on Saturdays?",
            },
            {
              fieldName: "routes_csv_runs_on_sunday",
              label: "Runs on Sundays?",
            },
          ],
        },
      ],
    };

    const busStopRender = {
      type: "unique-value",
      legendOptions: {
        title: "Bus Stops",
      },
      field: "stops_csv_ROUTE",
      defaultSymbol: {
        type: "simple-marker",
        color: "#1D5C63",
        size: "6px",
      },
    };

    const busStops = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/buslayer/FeatureServer/0",
      popupTemplate: busStopTemplate,
      renderer: busStopRender,
      visible: false,
    });

    // Add Opiod Provider Layer

    const OTPTemplate = {
      title: "<strong class = 'numbers'>{PROVIDER_NAME}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "ADDRESS_LINE_1",
              label: "address",
            },
            {
              fieldName: "PHONE",
              label: "PHONE NUMBER",
            },
          ],
        },
      ],
    };
    const opioidTreatmentProvider = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/opiod_provider/FeatureServer/0",
      popupTemplate: OTPTemplate,
      visible: false,
      renderer: {
        type: "unique-value",
        legendOptions: {
          title: "Opiod treamtment Providers",
        },
        field: "ADDRESS_LINE_1",
        defaultSymbol: {
          type: "simple-marker",
          color: "#B4E197",
          size: "6px",
        },
      },
    });

    // Add Commercial Building Layer

    const commercialTemplate = {
      title:
        "<strong class = 'numbers'>{address}</strong> is Owned by <strong class = 'numbers'>{owner}</strong> and <strong class = 'numbers'>{co_owner}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "land_use_description",
              label: "Usage Description",
            },
            {
              fieldName: "price",
              label: "Price of Property",
            },
            {
              fieldName: "price_per_sqft",
              label: "Price per Square Footage",
            },
          ],
        },
      ],
    };

    const commercialLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/clean_commercial_condo/FeatureServer/0",
      popupTemplate: commercialTemplate,
      visible: false,
      renderer: {
        type: "unique-value",
        legendOptions: {
          title: "Commercial Buildings",
        },
        field: "address ",
        defaultSymbol: {
          type: "simple-marker",
          color: "#b2b2b2",
          size: "3px",
        },
      },
    });

    // Add Hospital Building Layer

    const hospitalTemplate = {
      title: "<strong class = 'numbers'>{NAME}</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "ADDRESS",
              label: "Address",
            },
            {
              fieldName: "TELEPHONE",
              label: "Phone Number",
            },
            {
              fieldName: "WEBSITE",
              label: "Website",
            },
          ],
        },
      ],
    };

    const hospitalLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/clean_hospital/FeatureServer/0",
      popupTemplate: hospitalTemplate,
      visible: false,
      renderer: {
        type: "unique-value",
        legendOptions: {
          title: "Hospital Buildings",
        },
        field: "OBJECTID",
        defaultSymbol: {
          type: "simple-marker",
          color: "#005555",
          size: "6px",
        },
      },
    });

    //Adding Social Determinant of Health Layers

    const SDHTemplate = {
      title:
        "<strong class = 'numbers'>{location_name}</strong> is a <strong class = 'numbers'>{top_category }</strong>",
      lastEditInfoEnabled: true,
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "top_category",
              label: "Top Category",
            },
            {
              fieldName: "street_address",
              label: "Street Address",
            },
            {
              fieldName: "phone_number",
              label: "Phone Number",
            },
          ],
        },
      ],
    };

    const SDHLabelSize = "5px";
    const SDHOutline = {
      width: "0.1px",
    };
    const SDHLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/RMDVoZh3ZWsYjLnV/arcgis/rest/services/social_determinants_of_health/FeatureServer/0",
      popupTemplate: SDHTemplate,
      visible: false,
      renderer: {
        type: "unique-value",
        legendOptions: {
          title: "Social Determinants of Health",
        },
        field: "top_category",
        uniqueValueInfos: [
          {
            value: "Colleges, Universities, and Professional Schools",
            label: "Colleges, Universities, and Professional Schools",
            symbol: {
              type: "simple-marker",
              color: "#1D5C63",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
          {
            value: "Other Schools and Instruction",
            label: "Other Schools and Instruction",
            symbol: {
              type: "simple-marker",
              color: "#1D5C63",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
          {
            value: "Elementary and Secondary Schools",
            label: "Elementary and Secondary Schools",
            symbol: {
              type: "simple-marker",
              color: "#417D7A",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
          {
            value: "Technical and Trade Schools",
            label: "Technical and Trade Schools",
            symbol: {
              type: "simple-marker",
              color: "#EDE6DB",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
          {
            value: "Grocery Stores",
            label: "Grocery Stores",
            symbol: {
              type: "simple-marker",
              color: "#E6BA95",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
          {
            value: "Museums, Historical Sites, and Similar Institutions",
            label:
              "Natural Parks, Museums, Historical Sites, and Similar Institutions",
            symbol: {
              type: "simple-marker",
              color: "#A2B38B",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
          {
            value: "Employment Services",
            label: "Employment Services",
            symbol: {
              type: "simple-marker",
              color: "#AC7D88",
              size: SDHLabelSize,
              outline: SDHOutline,
            },
          },
        ],
        defaultSymbol: {
          type: "simple-marker",
          color: "#1D5C63",
          size: SDHLabelSize,
        },
      },
    });
    //Toggle Layers
    $("#indexAll").on("click", function (e) {
      checkChecked(e.target.id, indexLayer);
    });
    $("#indexPopulation").on("click", function (e) {
      checkChecked(e.target.id, PopulationindexLayer);
    });
    $("#indexProximity").on("click", function (e) {
      checkChecked(e.target.id, ProximityindexLayer);
    });
    $("#indexHotzone").on("click", function (e) {
      checkChecked(e.target.id, HotzoneindexLayer);
    });
    $("#indexEmergency").on("click", function (e) {
      checkChecked(e.target.id, EmergencyindexLayer);
    });
    $("#checkboxWalkability").on("click", function (e) {
      checkChecked(e.target.id, walkabilityLayer);
    });

    $("#indexAccesibility").on("click", function (e) {
      checkChecked(e.target.id, AccesibilityindexLayer);
    });
    $("#checkboxEmergency").on("click", function (e) {
      checkChecked(e.target.id, emergencyLayer);
    });
    $("#checkboxCommercial").on("click", function (e) {
      checkChecked(e.target.id, commercialLayer);
    });
    $("#checkboxOTP").on("click", function (e) {
      checkChecked(e.target.id, opioidTreatmentProvider);
    });
    $("#checkboxBusStops").on("click", function (e) {
      checkChecked(e.target.id, busStops);
    });
    $("#checkboxDrugCrime").on("click", function (e) {
      checkChecked(e.target.id, crimeLayer);
    });
    $("#checkboxPopulation").on("click", function (e) {
      checkChecked(e.target.id, populationLayer);
    });
    $("#checkboxSDH").on("click", function (e) {
      checkChecked(e.target.id, SDHLayer);
    });

    $("#checkboxHospital").on("click", function (e) {
      checkChecked(e.target.id, hospitalLayer);
    });
    //map section
    const map = new Map({
      basemap: "arcgis-light-gray", // Basemap layer service
      layers: [
        
        PopulationindexLayer,
        ProximityindexLayer,
        HotzoneindexLayer,
        EmergencyindexLayer,
        AccesibilityindexLayer,
        indexLayer,
        emergencyLayer,
        walkabilityLayer,
        populationLayer,
        crimeLayer,
        busStops,
        opioidTreatmentProvider,
        hospitalLayer,
        commercialLayer,
        SDHLayer,
      ],
    });
    const view = new MapView({
      map: map,
      center: [-71.41067701451892, 41.82577313883494],
      zoom: 12,
      container: "viewDiv", // Div element
    });

    // toggle visibility

    //test out renderer
    let colorParams = {
      layer: populationLayer,
      view: view,
      field: "Population ",
      theme: "above",
    };

    const search = new Search({
      //Add Search widget
      view: view,
    });

    const legend = new Legend({
      view: view,
      container: legendDiv,
    });
    //   // Expand widget to expand and contract the legend widget
    const expand = new Expand({
      view: view,
      content: document.getElementById("legendDiv"),
      expanded: true,
    });
    //Adding a feature Table

    //Adding UIs
    view.ui.add(expand, {
      position: "top-right",
    });

    view.ui.add(search, {
      position: "top-left",
    });
    view.whenLayerView(SDHLayer).then((layerView) => {
      const field = "top_category";

      const filterSelector = document.getElementById("filter");
      filterSelector.addEventListener("input", (event) => {
        let filterExpression;

        if (event.target.value === "1=1") {
          //show all values
          filterExpression = event.target.value;
        } else {
          filterExpression = `${field}='${event.target.value}'`;
          console.log(filterExpression);
        }
        layerView.filter = {
          where: filterExpression,
        };
      });
    });
  },
};
</script>

<style>
@import url("https://js.arcgis.com/4.23/esri/themes/light/main.css");
html,
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
}

#viewDiv{
  padding: 0;
  margin: 0;
  height: 92vh;
  width: 100%;
}
.bg-hubbar {
  background-color: #33a9bc;
  color: white;
}
.icon {
  width: 2.5rem;
}
.dash {
  color: #33a9bc;
  margin-right: 3rem;
}
.left {
  left: 20%;
}
#legendDiv {
  min-height: 25rem;
  height: auto;
}
strong {
  color: #33a9bc;
}
em{
  color:#33a9bc;
  font-weight: 600;
}
</style>
