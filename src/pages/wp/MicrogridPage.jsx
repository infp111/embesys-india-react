// Auto-converted from https://embesysindia.com/microgrid/ — edit freely, it's plain JSX now.
import usePageTitle from '../../hooks/usePageTitle';
import LegacyPage from '../../components/LegacyPage';
import '../../styles/pages/microgrid.css';

export default function MicrogridPage() {
  usePageTitle("MICROGRID – Embesys Innovative Technologies Pvt.Ltd");
  return (
    <LegacyPage slug="microgrid">
      {" "}
      <section>
        {" "}
        <div className="container">
          {" "}
          {" "}
          <div className="elementor elementor-8148">
            {" "}
            <section className="elementor-section elementor-top-section elementor-element elementor-element-c02e53f elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              {" "}
              <div className="elementor-container elementor-column-gap-default">
                {" "}
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4fa1dc2">
                  {" "}
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {" "}
                    <div className="elementor-element elementor-element-c9bdbcf elementor-widget__width-initial elementor-widget elementor-widget-html">
                      {" "}
                      <div className="elementor-widget-container">
                        {" "}
                        {" "}
                        <section className="smg-banner">
                          {" "}
                          <h1 style={{ color: "#ffffff" }} id="smart-micro-grid">
                            SMART MICRO GRID
                          </h1>
                          {" "}
                        </section>
                        {" "}
                        {" "}
                        <div className="container-fluid py-4 smg-intro-top">
                          {" "}
                          <div className="row h-100">
                            {" "}
                            {" "}
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                              {" "}
                              <h2 className="text-success" id="introduction">
                                Introduction
                              </h2>
                              {" "}
                              <p>
                                {" Our Smart Microgrid Lab is a cutting-edge facility designed for hands-on experimentation with localized electrical grids. It integrates advanced control systems and distributed energy resources (solar, wind, and hydrogen fuel) to generate, store, and manage electricity. Supporting both AC and DC architectures, the lab enables flexible testing of multi-source energy integration and modern grid configurations. "}
                              </p>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="col-md-6 smg-intro-top-right">
                              {" "}
                              <img src="/media/2025/09/SMG_MAIN1.webp" alt="Intro Image 1" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-4 smg-intro-bottom">
                          {" "}
                          <div className="row h-100">
                            {" "}
                            {" "}
                            <div className="col-md-3">
                              {" "}
                              <div className="smg-intro-card">
                                {" "}
                                <h3 className="text-success" id="system-architecture">
                                  System Architecture
                                </h3>
                                {" "}
                                <p>
                                  {" "}
                                  <strong>
                                    AC/DC Microgrid System Architecture
                                  </strong>
                                  {" "}
                                  <br />
                                  {" A hybrid AC/DC microgrid integrating renewable sources, storage, loads, and intelligent monitoring for reliable operation. "}
                                </p>
                                {" "}
                                <ul className="pl-3 mb-0">
                                  <li>
                                    {" "}
                                    <strong>
                                      Power Sources:
                                    </strong>
                                    {" Solar PV, Wind, Auxiliary & Utility supply with MPPT optimization. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      {"Energy Storage & Emulation:"}
                                    </strong>
                                    {" Lithium/Lead batteries and EV emulator. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      Power Conversion:
                                    </strong>
                                    {" DC/DC, DC/AC, AC/DC, and Bi-directional converters for flexible power flow. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      Grid Interface:
                                    </strong>
                                    {" Supports AC & DC grids with protection and relay management. "}
                                  </li>
                                  <li>
                                    <strong>
                                      Loads:
                                    </strong>
                                    {" Supplies both AC and DC loads."}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      {"Monitoring & Control:"}
                                    </strong>
                                    {" Sensors, DAQ, and communication protocols linked to RT server. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      Overall:
                                    </strong>
                                    {" Provides stable, efficient operation and renewable energy integration. "}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="col-md-6">
                              {" "}
                              <div className="smg-intro-card position-relative p-0">
                                {" "}
                                <h3 className="position-absolute m-2 p-1 bg-white rounded">
                                  {" "}
                                </h3>
                                {" "}
                                <img src="/media/2025/09/SHM_SYS_ARCHI.webp" alt="Main Wide Image" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="col-md-3">
                              {" "}
                              <div className="smg-intro-card">
                                {" "}
                                <h3 className="text-success" id="core-components">
                                  Core Components
                                </h3>
                                {" "}
                                <ul className="pl-3 mb-0">
                                  <li>
                                    {" "}
                                    <strong>
                                      Bidirectional Inverters/Chargers:
                                    </strong>
                                    {" Enable smooth AC/DC conversion and interaction with the grid. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      Renewable Source Controllers:
                                    </strong>
                                    {"DC-DC modules connect solar and wind sources to the central 48 V bus. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      Fuel Cell Integration Converter:
                                    </strong>
                                    {" Boosts hydrogen fuel cell output to the system bus. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      {"DC Distribution & Protection:"}
                                    </strong>
                                    {" Safeguards circuits with fuses and intelligent branch management. "}
                                  </li>
                                  <li>
                                    {" "}
                                    <strong>
                                      {"Control & Data Logging System:"}
                                    </strong>
                                    {" Provides real-time monitoring, automated control, and remote accessibility. "}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solutions">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 text-center">
                              {" "}
                              <h2 className="text-success mb-4" id="our-offered-solutions">
                                OUR OFFERED SOLUTIONS
                              </h2>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="solar-off-grid-and-on-grid-system">
                                Solar OFF grid and ON grid system
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="solar-off-grid-and-on-grid-system">
                                  Solar OFF grid and ON grid system
                                </h4>
                                {" "}
                                <p>
                                  <strong>
                                    Solar Off-Grid System:
                                  </strong>
                                  {" Works independently with solar panels and batteries, ideal for remote areas without grid access."}
                                </p>
                                {" "}
                                <p>
                                  <strong>
                                    Solar On-Grid System:
                                  </strong>
                                  {" Connected to the utility grid, feeds excess power back and draws electricity when needed, ensuring cost efficiency."}
                                </p>
                                {" "}
                                <ul>
                                  <li>
                                    Solar Panel - Converts sunlight into DC electricity.
                                  </li>
                                  <li>
                                    DC Junction Box - Collects DC power from solar panels.
                                  </li>
                                  <li>
                                    Inverter - Converts DC to AC Power
                                  </li>
                                  <li>
                                    Load Box - Represents the electrical loads
                                  </li>
                                  <li>
                                    Solar Charger with MPPT (Maximum Power Point Tracking)
                                  </li>
                                  <li>
                                    Battery - Provides backup power during grid failure (OFF-Grid Mode)
                                  </li>
                                  <li>
                                    AC Grid (ON-Grid) - If solar power is insufficient, loads draw power from the grid. Extra solar power can be fed back to the grid.
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    {"Residential & Educational Institution rooftops"}
                                  </li>
                                  <li>
                                    Commercial and industrial buildings
                                  </li>
                                  <li>
                                    Rural electrification and remote villages
                                  </li>
                                  <li>
                                    Street lighting and water pumping
                                  </li>
                                  <li>
                                    Disaster relief and emergency backup power
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/SOLAR_ON_OFF_GRID.webp" alt="Solar System" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="solar-pv-integration">
                                Solar PV Integration
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="solar-pv-integration">
                                  Solar PV Integration
                                </h4>
                                {" "}
                                <p>
                                  PV Cell converts sunlight directly into electricity using the photovoltaic effect. It forms the basic building block of solar panels and enables clean, renewable energy generation for residential, commercial, and industrial applications.
                                </p>
                                {" "}
                                <ul>
                                  <li>
                                    <strong>
                                      DC-Coupled Solar PV (3 kW):
                                    </strong>
                                    {" Connected to the 48 V DC bus via a high-voltage DC-DC charge controller for efficient energy management."}
                                  </li>
                                  <li>
                                    <strong>
                                      AC-Coupled Solar PV (3 kW, 5 kVA):
                                    </strong>
                                    {" Grid-tied inverter enables seamless integration with the utility grid and system bus for renewable support and hybrid energy experiments."}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="application">
                                  Application
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    <strong>
                                      {"Residential & Commercial Power:"}
                                    </strong>
                                    {" Rooftop and building-integrated solar energy."}
                                  </li>
                                  <li>
                                    <strong>
                                      Grid-Connected Systems:
                                    </strong>
                                    {" Feeding electricity into the utility grid."}
                                  </li>
                                  <li>
                                    <strong>
                                      {"Remote & Off-Grid Areas:"}
                                    </strong>
                                    {" Powering homes, telecom towers, and rural communities."}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/SOLAR_CELL.webp" alt="Solar PV Integration" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="hydrogen-fuel-cell-12-v-500-w-dc-dc-boost-converter-12-v-input-to-48-v-dc-bus">
                                Hydrogen Fuel Cell (12 V, 500 W) - DC-DC boost converter, 12 V input to 48 V DC bus.
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="hydrogen-fuel-cell">
                                  Hydrogen Fuel Cell
                                </h4>
                                {" "}
                                <p>
                                  A hydrogen fuel cell is an electrochemical device that converts hydrogen and oxygen directly into electricity, with water and heat as the only by-products. Hydrogen fuel cells enhance smart microgrids by providing flexible energy storage and reliable backup power, improving stability and resilience. Excess renewable energy is stored as hydrogen through electrolysis and later converted back to electricity by fuel cells, ensuring steady power supply, outage support, and a sustainable low-emission energy ecosystem
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    <strong>
                                      Transportation:
                                    </strong>
                                    {" Cars, buses, trucks, trains, ships, and drones with zero emissions."}
                                  </li>
                                  <li>
                                    <strong>
                                      Stationary Power:
                                    </strong>
                                    {" Backup power, microgrids, and combined heat & power for homes and industries."}
                                  </li>
                                  <li>
                                    <strong>
                                      Industrial Use:
                                    </strong>
                                    {" Forklifts, material handling, and renewable energy storage."}
                                  </li>
                                  <li>
                                    <strong>
                                      Grid Support:
                                    </strong>
                                    {" Energy storage, peak shaving, and renewable integration."}
                                  </li>
                                  <li>
                                    <strong>
                                      Military:
                                    </strong>
                                    {" Portable power solutions and defense applications."}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/HYDROGEN_CELL.webp" alt="Hydrogen Fuel Cell" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="wind-emulator-2-kw-220-v-dc">
                                Wind Emulator (2 kW, 220 V DC)
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="wind-emulator">
                                  Wind Emulator
                                </h4>
                                {" "}
                                <p>
                                  Wind Emulator allows for the evaluation of energy management power converters without the complexity and expense of using a real wind turbine, which is essential for integrating and stabilizing renewable energy sources in micro grids.
                                </p>
                                {" "}
                                <p>
                                  The Wind Emulator System features a Variable Frequency Drive (VFD) to control motor speed, coupled with a Motor-Generator Wind Controller for precise turbine simulation. A 3-Phase AC Synchronization Scope monitors phase, voltage, and frequency for grid integration. The system includes an AC grid interface for synchronization and a wind blower with fan, which generates airflow to drive the generator, enabling realistic wind turbine testing and performance evaluation.
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="application">
                                  Application
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Test wind turbine performance and efficiency
                                  </li>
                                  <li>
                                    Optimize turbine control algorithms
                                  </li>
                                  <li>
                                    Study hybrid renewable energy systems
                                  </li>
                                  <li>
                                    Simulate real-world wind conditions for research
                                  </li>
                                  <li>
                                    Analyse turbine response to gusts and faults
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/Wind_emulator.webp" alt="Wind Emulator" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="motor-generator-set-with-closed-loop-vfd-drive">
                                Motor-Generator Set with Closed-Loop VFD Drive
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="motor-generator-set">
                                  Motor-Generator Set
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    <strong>
                                      VFD:
                                    </strong>
                                    {" Closed-loop vector-controlled drive with encoder feedback"}
                                  </li>
                                  <li>
                                    <strong>
                                      Encoder Integration:
                                    </strong>
                                    {" Incremental/absolute encoder for precise control"}
                                  </li>
                                  <li>
                                    <strong>
                                      Connections:
                                    </strong>
                                    {" Three-phase AC input to VFD and output to motor"}
                                  </li>
                                  <li>
                                    <strong>
                                      Wiring Provision:
                                    </strong>
                                    {" Terminal blocks and entry glands for encoder and motor connections"}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="application">
                                  Application
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Load testing and performance evaluation of motors and generators
                                  </li>
                                  <li>
                                    Speed control and variable frequency experiments
                                  </li>
                                  <li>
                                    Renewable energy system simulation and grid emulation
                                  </li>
                                  <li>
                                    Power quality and stability testing
                                  </li>
                                  <li>
                                    Educational and research experiments in electrical machines
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/motor_gen.webp" alt="Motor-Generator Set" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="modular-data-acquisition-system">
                                Modular Data Acquisition System
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="cdaq">
                                  cDAQ
                                </h4>
                                {" "}
                                <p>
                                  It is used for real-time monitoring and data acquisition of voltage, current, power, and environmental parameters. Supports distributed measurements, fault detection, energy management, and performance analysis of renewable energy sources, storage systems, and microgrid operations.
                                </p>
                                {" "}
                                <h4 className="text-success mt-4 mb-3" id="i-o-modules">
                                  I/O Modules
                                </h4>
                                {" "}
                                <p>
                                  I/O Modules Enable real-time measurement and monitoring of voltage, current, power, and environmental signals. Support data acquisition from renewable sources, storage systems, and loads for energy management, fault detection, and grid performance analysis.
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Real-time monitoring and data acquisition
                                  </li>
                                  <li>
                                    Distributed measurements and fault detection
                                  </li>
                                  <li>
                                    Energy management and performance analysis
                                  </li>
                                  <li>
                                    Renewable energy sources monitoring
                                  </li>
                                  <li>
                                    Storage systems and microgrid operations analysis
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <br />
                                {" "}
                                <br />
                                {" "}
                                <img src="/media/2025/09/m_daq.webp" alt="Data Acquisition System" className="img-fluid" />
                                {" "}
                                <br />
                                {" "}
                                <br />
                                {" "}
                                <img src="/media/2025/09/I_o-modules-1.webp" alt="Data Acquisition System" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="battery-energy-storage-system-bess">
                                Battery Energy Storage System (BESS)
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="battery-energy-storage-system">
                                  Battery Energy Storage System
                                </h4>
                                {" "}
                                <p>
                                  Stores electrical energy for later use, providing load balancing, peak shaving, and backup power. The system features a Smart Battery Management System (BMS) with analytics for State of Charge (SoC) and State of Health (SoH), providing valuable insights into battery performance and lifecycle.
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Grid stabilization and renewable energy integration
                                  </li>
                                  <li>
                                    Peak load management and demand response
                                  </li>
                                  <li>
                                    Backup power for critical facilities
                                  </li>
                                  <li>
                                    Electric vehicle charging support and microgrid operation
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/battery_energy.webp" alt="Battery Energy Storage System" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="ev-charging-interface">
                                EV Charging Interface
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="ev-charging-interface">
                                  EV Charging Interface
                                </h4>
                                {" "}
                                <p>
                                  Provides a dedicated station for testing and analysing electric vehicle charging.
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Study EV charging patterns and energy demand
                                  </li>
                                  <li>
                                    Evaluate grid impact and integration with renewable sources
                                  </li>
                                  <li>
                                    Support experiments on smart charging and green mobility solutions
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/ev_charge.webp" alt="EV Charging Interface" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="data-control-and-simulation">
                                Data Control and Simulation
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="data-control-and-simulation">
                                  Data Control and Simulation
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    <strong>
                                      System Gateway:
                                    </strong>
                                    {" Central hub coordinating inverters, charge controllers, and protection devices."}
                                  </li>
                                  <li>
                                    <strong>
                                      Communication Protocols:
                                    </strong>
                                    {" RS485, CAN bus, and proprietary links for seamless integration."}
                                  </li>
                                  <li>
                                    <strong>
                                      Supervisory Interface:
                                    </strong>
                                    {" Modbus-TCP API for LabVIEW-based monitoring and control."}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Central control and coordination of microgrid components
                                  </li>
                                  <li>
                                    Real-time system monitoring and data visualization
                                  </li>
                                  <li>
                                    Communication protocol integration and testing
                                  </li>
                                  <li>
                                    LabVIEW-based research and development
                                  </li>
                                  <li>
                                    System automation and intelligent control algorithms
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/data_control.webp" alt="Data Control and Simulation" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-solar-system">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12 mb-4">
                              {" "}
                              <h3 className="text-dark font-weight-bold" id="power-panel-protection">
                                {"Power Panel & Protection"}
                              </h3>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="smg-solar-cards">
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="power-panel-protection">
                                  {"Power Panel & Protection"}
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    <strong>
                                      Protection Devices:
                                    </strong>
                                    {" Complete AC/DC safeguards with fuses, breakers, relays, and surge protection."}
                                  </li>
                                  <li>
                                    <strong>
                                      Enclosure:
                                    </strong>
                                    {" Industrial-grade, ventilated, and temperature-controlled cabinet for safe operation."}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <h4 className="text-success mb-3" id="applications">
                                  Applications
                                </h4>
                                {" "}
                                <ul>
                                  <li>
                                    Comprehensive electrical safety and protection
                                  </li>
                                  <li>
                                    Equipment and personnel safety assurance
                                  </li>
                                  <li>
                                    System reliability and fault protection
                                  </li>
                                  <li>
                                    Industrial-grade operation and durability
                                  </li>
                                  <li>
                                    Temperature and environmental control
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <div className="smg-solar-card">
                              {" "}
                              <div className="smg-card-content">
                                {" "}
                                <img src="/media/2025/09/POWER_PANEL_PROTECTION.webp" alt="Power Panel & Protection" className="img-fluid" />
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container-fluid py-5 smg-experiments">
                          {" "}
                          <div className="row">
                            {" "}
                            <div className="col-12">
                              {" "}
                              <h3 className="text-dark font-weight-bold text-center mb-4" id="list-of-experiments-to-be-performed">
                                List of Experiments to be performed:
                              </h3>
                              {" "}
                              <div className="smg-experiments-grid">
                                {" "}
                                <ul className="smg-experiments-list">
                                  <li>
                                    Effect of irradiance and temperature on PV output
                                  </li>
                                  <li>
                                    Maximum Power Point Tracking (MPPT)
                                  </li>
                                  <li>
                                    Grid-tied inverter performance
                                  </li>
                                  <li>
                                    Power injection and synchronization with grid
                                  </li>
                                  <li>
                                    Grid fault response and protection analysis
                                  </li>
                                  <li>
                                    Standalone PV system with battery storage
                                  </li>
                                  <li>
                                    Load management and peak shaving in off-grid PV
                                  </li>
                                  <li>
                                    Wind turbine performance under variable wind speeds
                                  </li>
                                  <li>
                                    Turbine control algorithm testing
                                  </li>
                                  <li>
                                    Hybrid system integration (PV + Wind + Battery)
                                  </li>
                                  <li>
                                    Fuel cell integration with DC bus
                                  </li>
                                  <li>
                                    Load response and hybrid system testing
                                  </li>
                                  <li>
                                    Real-time monitoring with cDAQ/I/O modules
                                  </li>
                                  <li>
                                    Variable speed operation with Motor-Generator set
                                  </li>
                                  <li>
                                    Simulation of microgrid and renewable integration
                                  </li>
                                  <li>
                                    Multi-source energy management and load sharing
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        {" "}
                        <div className="container py-5">
                          {" "}
                          <div className="bg-light p-4 rounded">
                            {" "}
                            <h5 className="mb-3 text-dark">
                              {" "}
                              <span className="border-left border-success pl-2">
                                Conclusion
                              </span>
                              {" "}
                            </h5>
                            {" "}
                            <p className="text-secondary">
                              {" The Smart Microgrid Laboratory provides a practical platform to explore renewable energy systems, energy storage, and intelligent grid integration. It enables hands-on learning, real-time monitoring, and optimization of smart energy networks, driving innovation toward a sustainable and resilient power future. "}
                            </p>
                            {" "}
                            <div className="bg-white border rounded p-3 mt-4 text-center">
                              {" "}
                              <p className="mb-0 text-secondary">
                                {" Choose us for "}
                                <strong className="text-success">
                                  Powering Innovation for a Smarter, Greener Tomorrow.
                                </strong>
                                {" "}
                              </p>
                              {" "}
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
          </div>
          {" "}
          {" "}
        </div>
        {" "}
      </section>
      {" "}
    </LegacyPage>
  );
}
