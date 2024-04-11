import { useMediaQuery } from "react-responsive";

import React, { useState, createRef, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import RatesCalculator from "../../containers/RatesCalculator";
import RatesState from "../../context/rates/ratesState";
import RatesCharacter from "../../assets/images/rates_page_cta_section.png";
import HeroBanner1920 from "../../assets/images/banners/rates_hero_1920.png";
import HeroBanner1024 from "../../assets/images/banners/rates_hero_1024.png";
import HeroBanner766 from "../../assets/images/banners/rates_hero_766.png";
import HeroBanner320 from "../../assets/images/banners/rates_hero_320.png";
import QuarterCircle from "../../assets/images/rates_quartercircle.svg";
import SemiCircle from "../../assets/images/rates_semicircle.svg";
import Grouped from "../../assets/images/rates.png"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Rates = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const values = [
    
    // {
    //   type: "flagship",
    //   event: "m&i Europe Spring, Istanbul 2023",
    //   meetings: 40,
    //   date: "16-19 apr",
    //   price: {
    //     gbp: 8400,
    //     usd: 9500,
    //     eur: 9700,
    //   },
    //   discount: "yes",
    //   sharedprice: {
    //     gbp: 5500,
    //     usd: 6250,
    //     eur: 6400,
    //   },
    //   single: true,
    //   shared: true,
    //   extradelegate: false,
    //   year: 2023,
    // },
    // {
    //   type: "specialist",
    //   event: "m&i Private, Ibiza 2023",
    //   meetings: 40,
    //   date: "23-26 apr",
    //   price: {
    //     gbp: 7300,
    //     usd: 8300,
    //     eur: 8450,
    //   },
    //   discount: "yes",
    //   sharedprice: {
    //     gbp: 20,
    //     usd: 5650,
    //   },
    //   single: true,
    //   shared: false,
    //   thirtymeetings: false,
    //   fourtymeetings: false,
    //   extradelegate: false,
    //   year: 2023,
    // },

    // {
    //   type: "specialist",
    //   event: "m&i Healthcare, The Hague 2023",
    //   meetings: 40,
    //   date: "6-8 jun",
    //   price: {
    //     gbp: 5750,
    //     usd: 6500,
    //     eur: 6650,
    //   },
    //   discount: "no",
    //   sharedprice: {
    //     gbp: 3975,
    //     usd: 4750,
    //   },
    //   single: true,
    //   shared: false,
    //   extradelegate: false,
    //   year: 2023,
    // },

    // {
    //   type: "flagship",
    //   event: "m&i Europe Summer, Oslo 2023",
    //   meetings: 30,
    //   date: "25-28 jun",
    //   price: {
    //     gbp: 8400,
    //     usd: 9500,
    //     eur: 9700,
    //   },
    //   discount: "yes",
    //   sharedprice: {
    //     gbp: 5500,
    //     usd: 6250,
    //     eur: 6400,
    //   },
    //   single: true,
    //   shared: true,
    //   extradelegate: false,
    //   year: 2023,
    // },
    
   

   

    {
      type: "private",
      event: "m&i Private Sorrento 24",
      meetings: 40,
      date: "21-24 apr",
      price: {
        gbp: 7900,
        usd: 9100,
        eur: 9100,
      },
      discount: "yes",
      sharedprice: {
        gbp: 5350,
        usd: 6200,
        eur: 6200
      },
      single: true,
      shared: false,
      extradelegate: false,
      year: 2024,
    },

    {
      type: "healthcare",
      event: "m&i Healthcare London 24",
      meetings: 40,
      date: "6-8 may",
      price: {
        gbp: 5950,
        usd: 6900,
        eur: 6900,
      },
      discount: "no",
      sharedprice: {
        gbp: 4375,
        usd: 5100,
        eur: 5100
      },
      single: true,
      shared: false,
      extradelegate: false,
      year: 2024,
    },

   

    {
      type: "flagship",
      event: "m&i Miami 24",
      meetings: 40,
      date: "23-26 jun",
       price: {
        gbp: 8900,
        usd: 10300,
        eur: 10300,
      },
      discount: "yes",
      sharedprice: {
        gbp: 5850,
        usd: 6800,
        eur: 6800
      },
      single: true,
      shared: true,
      extradelegate: false,
      year: 2024,
    },

    {
      type: "flagship",
      event: "m&i Tbilisi 24",
      meetings: 40,
      date: "30 jun - 4 jul",
       price: {
        gbp: 8900,
        usd: 10300,
        eur: 10300,
      },
      discount: "no",
      sharedprice: {
        gbp: 5850,
        usd: 6800,
        eur: 6800
      },
      single: true,
      shared: false,
      extradelegate: false,
      year: 2024,
    },

    {
      type: "flagship",
      event: "m&i Lisbon 24",
      meetings: 40,
      date: "25-28 aug",
       price: {
        gbp: 8900,
        usd: 10300,
        eur: 10300,
      },
      discount: "yes",
      sharedprice: {
        gbp: 5850,
        usd: 6800,
        eur: 6800
      },
      single: true,
      shared: true,
      extradelegate: false,
      year: 2024,
    },

    {
      type: "flagship",
      event: "m&i Sardinia 24",
      meetings: 40,
      date: "25-28 sep",
       price: {
        gbp: 8900,
        usd: 10300,
        eur: 10300,
      },
      discount: "yes",
      sharedprice: {
        gbp: 5850,
        usd: 6800,
        eur: 6800
      },
      single: true,
      shared: true,
      extradelegate: false,
      year: 2024,
    },

    {
      type: "luxe",
      event: "m&i Luxe Bodrum 24",
      meetings: 40,
      date: "2-5 oct",
      price: {
        gbp: 8900,
        usd: 10300,
        eur: 10300,
      },
      discount: "no",
      sharedprice: {
        gbp: 5850,
        usd: 6800,
        eur: 6800
      },
      single: true,
      shared: false,
      extradelegate: false,
      year: 2024,
    },

    {
      type: "vip_connect",
      event: "m&i VIP Costa Mujeres 24",
      meetings: 40,
      date: "17-20 nov",
      price: {
        gbp: 8900,
        usd: 10300,
        eur: 10300,
      },
      discount: "yes",
      sharedprice: {
        gbp: 5850,
        usd: 6800,
        eur: 6800
      },
      single: true,
      shared: false,
      extradelegate: false,
      year: 2024,
    },

   
    

  ];
  const extraDelegatePrice = {
    gbp: 1450,
    usd: 1600,
    eur: 1700,
  };

  const [result, setResult] = useState({
    yousave: 0,
    fullrate: 0,
    netcost: 0,
    meetingcost: 0,
    meetingcount: 0,
    discount: 0,
  });
  const [priceType, setPriceType] = useState("gbp");
  const [selected, setSelected] = useState(values[0].value);
  const [isChecked, setIsChecked] = useState(false);
  const [table_type, setTableType] = useState(0);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [extraDelegates, setExtraDelegates] = useState(0);
  const eventRefs = useRef([]);
  const eventRefs2 = useRef([]);

  eventRefs.current = values.map((i) => eventRefs.current[i] ?? createRef());
  eventRefs2.current = values.map((i) => eventRefs.current[i] ?? createRef());
  useEffect(() => {
    calculator();
  }, [selectedEvents, priceType, extraDelegates]);

  // Handler for Single and Shared checkbox change
  const handleButton = (event) => {
    // console.log(event.target.checked);
    
    const targetChecked = event.target.checked;
    const targetType = event.target.value;
    const idx = event.target.dataset.index;
    let calcFullPrice = result.fullrate;

    let discount;
    if (targetChecked) {
      // Add into selected events list
      discount =
        values[event.target.dataset.index].discount == "yes" ? true : false;
      if (
        targetType === "single" ||
        targetType === "thirtymeetings" 
      ) {
        //price = values[event.target.dataset.index].price[priceType];
        eventRefs.current[idx].current.style.display = "block";
        // console.log(eventRefs.current[idx]);
      } else if ((targetType === "shared") || (targetType === "fourtymeetings")) {
        //price = values[event.target.dataset.index].sharedprice[priceType];
        eventRefs.current[idx].current.style.display = "none";
        eventRefs2.current[idx].current.style = "display: none !important;";
        // console.log(eventRefs.current[idx].current);
        // console.log(
        //   document.querySelector(`[data-index="${idx}"]`).childNodes[0]
        //     .childNodes[3].childNodes[0]
        // );
        // console.log(eventRefs2.current[idx].current.value);
      } else {
        // console.log("Invalid Type");
        return false;
      }

      setSelectedEvents({
        ...selectedEvents,
        [idx]: { discount: discount, event_index: idx, type: targetType },
      });
    } else {
      // Remove from selected events list
      let currentEvents = selectedEvents;
      delete currentEvents[idx];
      if (
        targetType === "single" ||
        targetType === "thirtymeetings" 
      ) {
        // Uncheck the Extra Delegates and if its already checked and reduce the extra deligate price
        if (eventRefs.current[idx].current.childNodes[0].checked) {
          // console.log(eventRefs.current[idx].current.childNodes[0].checked);
          eventRefs.current[idx].current.childNodes[0].checked = false;
          let calcExtraPrice = extraDelegatePrice[priceType];
          setExtraDelegates(extraDelegates - calcExtraPrice);
          eventRefs.current[idx].current.style = "display: none !important;";
        }
        eventRefs.current[idx].current.style = "display: none !important;";
      } else if ((targetType === "shared") || (targetType === "fourtymeetings")) {
        eventRefs2.current[idx].current.style = "display: block !important; position:relative!important";
      } else {
        // console.log("Invalid Type");
        return false;
      }
      setSelectedEvents(currentEvents);
      // Call the function to make effect
      calculator();
    }
  };

  // Calculate Price
  function calculator() {
    var fullRate = 0;
    var discountPrices = [];
    var appliedDscount = 0;
    let netCost = 0;
    
    // Separate multi-forum discount events from all events
    Object.keys(selectedEvents).map((key, value) => {
      // console.log(selectedEvents[key].type);

      if (selectedEvents[key].type === "single") {
        var price = values[key].price[priceType];
              } else if (selectedEvents[key].type === "shared") {
        var price = values[key].sharedprice[priceType];
      } else if (selectedEvents[key].type === "thirtymeetings") {
        var price = values[key].thirtyprice[priceType];
      } else if (selectedEvents[key].type === "fourtymeetings") {
        var price = values[key].fourtyprice[priceType];
      }

      if (selectedEvents[key].discount == true) {
        discountPrices[discountPrices.length] = price;
      } else {
        netCost = netCost + price;
      }
      fullRate = fullRate + price;
      
    });

    // Find number of multi-forum events to calculate discount %
    var noOfDiscountForums = discountPrices.length;
    // Apply discount
    if (discountPrices.length > 1) {
      if (discountPrices.length == 2) {
        var lowestPrice = Math.min(...discountPrices);
        var index = discountPrices.indexOf(lowestPrice);
        // Apply 30% discount
        netCost = netCost + lowestPrice * 0.7;
        appliedDscount = appliedDscount + 30;
        if (index > -1) {
          discountPrices.splice(index, 1);
        }
        for (let val of discountPrices) {
          netCost = netCost + val;
        }
      } else {
        var highestPrice = Math.max(...discountPrices);
        var index = discountPrices.indexOf(highestPrice);
        // No Discoint
        netCost = netCost + highestPrice;
        if (index > -1) {
          discountPrices.splice(index, 1);
        }

        var highestPrice = Math.max(...discountPrices);
        index = discountPrices.indexOf(highestPrice);
        // Apply 30% discount
        netCost = netCost + highestPrice * 0.7;
        appliedDscount = appliedDscount + 30;
        if (index > -1) {
          discountPrices.splice(index, 1);
        }

        for (let val of discountPrices) {
          netCost = netCost + val * 0.6;
          appliedDscount = appliedDscount + 40;
        }
      }
    } else if (discountPrices.length == 1) {
      // No discoint
      netCost = netCost + discountPrices[0];
    }
    // Add Extra delegates price
    netCost = netCost + extraDelegates;
    fullRate = fullRate + extraDelegates;

    // Store the calc result
    setResult({
      ...result,
      fullrate: fullRate,
      netcost: netCost,
      yousave: fullRate - netCost,
      discount:
        appliedDscount > 0 && noOfDiscountForums > 0
          ? Math.round(appliedDscount / noOfDiscountForums)
          : 0,
    });
  }

  // Handle for Extra delegates
  const handleExtraDelegate = (event) => {
    const targetChecked = event.target.checked;
    let calcExtraPrice = extraDelegatePrice[priceType];
    if (targetChecked) {
      setExtraDelegates(extraDelegates + calcExtraPrice);
    } else {
      setExtraDelegates(extraDelegates - calcExtraPrice);
    }
  };

  // Handle for price change
  const handleChange = (event) => {
    setSelected(event.target.value);
    setPriceType(event.target.value);
  };

  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const sidebarEl = document
      .querySelector(".sidebar")
      .getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);

    // console.log(sidebarEl);
  }, []);

  // useEffect(() => {
  //   if (!sidebarTop) return;

  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // }, [sidebarTop]);

  // const isSticky = (e) => {
  //   const sidebarEl = document.querySelector(".sidebar");
  //   const scrollTop = window.scrollY;
  //   if (scrollTop >= sidebarTop - 1) {
  //     sidebarEl.classList.add("is-sticky");
  //   } else {
  //     sidebarEl.classList.remove("is-sticky");
  //   }
  //   if (isDesktopOrLaptop && scrollTop >= 1762) {
  //     sidebarEl.classList.remove("is-sticky");
  //     sidebarEl.classList.add("is-sticky-2");
  //   }

  //   if (isDesktopOrLaptop && scrollTop <= 1762 && scrollTop >= 583) {
  //     sidebarEl.classList.remove("is-sticky-2");
  //     sidebarEl.classList.add("is-sticky");
  //   }

  //   if (isTabletOrMobile) {
  //     sidebarEl.style.padding = 5;
  //   }
  // };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
      : HeroBanner1920;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pricing | m&i</title>
        <meta
          name="description"
          content="Make your budget go further with our wide range of event pricing options. Learn more."
        />
        <meta
          property="og:url"
          content={
            "https://www.mi-forums.com/images/ographs/OG_image_Pricing.png"
          }
        />
        <meta
          property="og:image"
          content={
            "https://www.mi-forums.com/images/ographs/OG_image_Pricing.png"
          }
        />
      </Helmet>
      <div className="site-wrap ratesPage">

      <div className="site-half newHeader camel-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'10%'}}>

              <h2></h2>
               
                <h1>Our pricing summary</h1>
                <p>
                How much does it cost a supplier to attend one of our events? View our range of prices and cost-effective table options. 
                
                <br/><br/>And if you’re a buyer, view our buyer experience to find out what to expect.
                </p>
                
          
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

       
        <div className="camel-bg">
          <div className="rates">
            <div className="rates__calculator calculator">
              <div className="container">
                <div
                  className="row ratesPage ml-rg-auto py-5"
                  style={{ position: "relative" }}
                >
                  <div
                    className="col-lg-8"
                    style={{ paddingRight: "0px" }}
                    id="left-ane"
                  >
                    <table className="table pricingRates">
                      {/* <tr>  
              <th>Type</th>  
                <th>Event</th>  
                <th>Date</th>                  
                <th>Discount</th>  
                <th>Price</th>
                
            </tr>   */}

                      {values.map((values, index) => (
                        <tr className="eventRow" data-index={index} key={index}>
                          {/* <td>{values.type}</td>   */}
                          <td className="event">
                            {" "}
                            <h3 className="calculatorHeader">
                              {values.event}
                            </h3>{" "}
                            <p>{values.location}</p>
                            <p>{values.date}</p>
                           
                          </td>
                          <td>
                          <div className="event-checkboxes">
                              {(() => {
                                if (values.single === true) {
                               
                                  return (
                                    <td className="tables">
                                      <div style={{position:'relative'}} ref={eventRefs2.current[index]}>
                                         <label>
                                        <input
                                          type="checkbox"
                                          id="Single"
                                          name={"table_type_" + index}
                                          value="single"
                                          onChange={handleButton}
                                          data-index={index}
                                        />
                                       Single table</label>
                                      </div>
                                    </td>
                                  );
                                }
                              })()}
                              {(() => {
                                if (values.shared === true) {
                                  return (
                                    <td>
                                      <input
                                        type="checkbox"
                                        id="Shared"
                                        name={"table_type_" + index}
                                        value="shared"
                                        onChange={handleButton}
                                        data-index={index}
                                      />
                                      <label>Sharer table</label>
                                    </td>
                                  );
                                }
                              })()}
                              {(() => {
                                if (values.thirtymeetings === true) {
                                  return (
                                    <td className="thirtymeetings">
                                       <div ref={eventRefs2.current[index]}>
                                      <input
                                        type="checkbox"
                                        id="thirtymeetings"
                                        name={"table_type_" + index}
                                        value="thirtymeetings"
                                        onChange={handleButton}
                                        data-index={index}
                                      />
                                      <label>30 meetings - Single table</label>
                                      </div>
                                    </td>
                                  );
                                }
                              })()}

                              {(() => {
                                if (values.fourtymeetings === true) {
                                  return (
                                    <td className="thirtymeetings">
                                      <input
                                        type="checkbox"
                                        id="fourtymeetings"
                                        name={"table_type_" + index}
                                        value="fourtymeetings"
                                        onChange={handleButton}
                                        data-index={index}
                                      />
                                      <label>40 meetings - Single table </label>
                                    </td>
                                  );
                                }
                              })()}

                              <td>
                                <div
                                  ref={eventRefs.current[index]}
                                  style={{ display: "none" }}
                                >
                                  <input
                                    type="checkbox"
                                    id="Extradelegate"
                                    name={"extra_delegate_" + index}
                                    value="extradelegate"
                                    onChange={handleExtraDelegate}
                                    data-index={index}
                                    className={"extra_delegate_" + index}
                                  />
                                  <label>Extra delegate</label>
                                </div>
                              </td>
                            </div>
                          </td>
                          {(() => {
                            if (priceType === "gbp") {
                              return (
                                <td className="price">
                                  One off price:
                                  <br /> £{values.price.gbp}
                                </td>
                              );
                            } else if (priceType === "usd") {
                              return (
                                <td className="price">
                                  One off price:
                                  <br /> ${values.price.usd}
                                </td>
                              );
                            } else {
                              return (
                                <td className="price">
                                  One off price:
                                  <br /> €{values.price.eur}
                                </td>
                              );
                            }
                          })()}
                        </tr>
                      ))}
                       
                    </table>
                  </div>

                  <div
                    className="calculatorMobile sidebar"
                    id="right-ane"
                    style={{
                      width:
                        !isDesktopOrLaptop || isTabletOrMobile ? "100%" : "",
                      paddingLeft:
                        !isDesktopOrLaptop || isTabletOrMobile
                          ? "15px !important"
                          : "0px",
                    }}
                  >
                    <div
                      className="calculator__sidebar sidebar sidebar--white"
                      style={{
                        marginLeft:
                          !isDesktopOrLaptop || isTabletOrMobile
                            ? "15px !important"
                            : "0px",
                        width:
                          !isDesktopOrLaptop || isTabletOrMobile ? "100%" : "",
                      }}
                    >
                      <h4 style={{ color: "#fff" }}>currency</h4>
                      <select
                        name="currency"
                        id="currency"
                        className="sidebar__dropdown"
                        defaultValue={priceType}
                        onChange={handleChange}
                      >
                        <option value="usd">US Dollars</option>
                        <option value="gbp">British Pound</option>
                        <option value="eur">Euros</option>
                      </select>
                      <p>You save:</p>{" "}
                      <h4 style={{ color: "#fff" }}>
                        {(() => {
                          if (priceType === "gbp") {
                            return <span>£{result.yousave}</span>;
                          } else if (priceType === "usd") {
                            return <span>${result.yousave}</span>;
                          } else {
                            return <span>€{result.yousave}</span>;
                          }
                        })()}
                      </h4>
                      <hr className="barDivider" />
                      <p>Full rate:</p>
                      <h4>
                        {(() => {
                          if (priceType === "gbp") {
                            return <span>£{result.fullrate}</span>;
                          } else if (priceType === "usd") {
                            return <span>${result.fullrate}</span>;
                          } else {
                            return <span>€{result.fullrate}</span>;
                          }
                        })()}
                      </h4>
                      <br></br>
                      <p>Multi-forum discount:</p>
                      <h4> {result.discount}%</h4>
                      <br></br>
                      {/* <p>early booking discount:</p>
                <h4>{earlyBird}</h4>
                <br></br> */}
                      <hr className="barDivider" />
                      <p>Net cost:</p>
                      <h4 style={{ color: "#fff" }}>
                        {(() => {
                          if (priceType === "gbp") {
                            return <span>£{result.netcost}</span>;
                          } else if (priceType === "usd") {
                            return <span>${result.netcost}</span>;
                          } else {
                            return <span>€{result.netcost}</span>;
                          }
                        })()}
                      </h4>
                      {/* <br></br>
                <p>
                    did you know...
                    <br />
                    by choosing this option <br />
                    you will attend {values.meetings} meetings <br />
                    at a cost per meeting of:
                </p>
                <br></br>
                <h4>
                    {' '}
                    {result.meetingcost}{' '}
                </h4> */}
                <br />
                      <br />
                      <a href="/signup">
                        <span className="text-white btn btn-secondary white">
                          Sign me up
                        </span>
                      </a>
                    </div>

                    <Accordion
                      className="mobileSavings"
                      allowZeroExpanded
                      style={{ color: "#fff" }}
                    >
                      <AccordionItem key={"@#7TG"}>
                        <AccordionItemHeading>
                          <AccordionItemButton className="mobileSavingsButton">
                            <span
                              style={{ fontSize: "20px" }}
                              className="savings-arrow"
                            >
                              view savings
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="mobileSavingsPanel">
                          <h4 style={{ color: "#FAE271" }}>currency</h4>
                          <select
                            name="currency"
                            id="currency"
                            className="sidebar__dropdown roundArrow"
                            defaultValue={priceType}
                            onChange={handleChange}
                          >
                            <option value="usd">US Dollars</option>
                            <option value="gbp">British Pound</option>
                            <option value="eur">Euros</option>
                          </select>

                          <p>
                            you save:{" "}
                            {(() => {
                              if (priceType === "gbp") {
                                return (
                                  <span style={{ color: "#FAE271" }}>
                                    £{result.yousave}
                                  </span>
                                );
                              } else if (priceType === "usd") {
                                return (
                                  <span style={{ color: "#FAE271" }}>
                                    ${result.yousave}
                                  </span>
                                );
                              } else {
                                return (
                                  <span style={{ color: "#FAE271" }}>
                                    €{result.yousave}
                                  </span>
                                );
                              }
                            })()}
                          </p>

                          <hr className="barDivider" />
                          <p>
                            full rate:{" "}
                            {(() => {
                              if (priceType === "gbp") {
                                return <span>£{result.fullrate}</span>;
                              } else if (priceType === "usd") {
                                return <span>${result.fullrate}</span>;
                              } else {
                                return <span>€{result.fullrate}</span>;
                              }
                            })()}
                          </p>

                          <br></br>
                          <p>
                            multi-forum discount:{" "}
                            <span>{result.discount}%</span>
                          </p>

                          {/* <p>
                            early booking discount: <span>{earlyBird}</span>
                        </p> */}
                          <br></br>
                          <hr className="barDivider" />
                          <p>
                            net cost:{" "}
                            <span style={{ color: "#FAE271" }}>
                              {(() => {
                                if (priceType === "gbp") {
                                  return <span>£{result.netcost}</span>;
                                } else if (priceType === "usd") {
                                  return <span>${result.netcost}</span>;
                                } else {
                                  return <span>€{result.netcost}</span>;
                                }
                              })()}
                            </span>
                          </p>

                          {/* <br></br>
                        <p>
                            did you know...
                            <br />
                            by choosing this option you will attend {
                                meetings
                            }{' '}
                            meetings at a cost per meeting of:{' '}
                            <span>
                                {' '}
                                {result.meetingcost}
                            </span>
                        </p> */}

                          <br />
                          <a href="/signup" style={{ marginBottom: "40px" }}>
                            <span className="text-white btn btn-primary">
                              sign me up
                            </span>
                          </a>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half sampleProgramme raven-bg">
          <h1>Make your budget go further</h1>
          

          <div className="fourGrid">
            <div className="container">
              <div className="row no-gutters align-items-stretch">

             
               
          
              <div
                className="col-lg-6 ml-rg-auto"
              >
                 <div className="gridItem" style={{backgroundColor:'#D4ACE5'}}>
                 
                 <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#335653'}}>Extra delegate</h1>
               <p className="itemCaption" style={{color:'#335653'}}>Take networking to the next level and potentially double your opportunities by bringing an additional delegate to an m&i event. Your extra delegate will have full access to everything, including activities, lunches and dinners, as well as completing their own matchmaking profile on our event platform.</p>
               </div>
                </div>
                </div>

              
                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#FFE0E0'}}>
                  
                  <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#352E35'}}>Table sharing</h1>
               <p className="itemCaption" style={{color:'#352E35'}}>Tight budget? Share a table with another supplier. It’s the perfect way to reap all the benefits of our events whilst spending less*.</p>
               </div>
                </div>
                </div>

               
                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#E4F2E4'}}>
                 <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#335653'}}>Early payment discount</h1>
               <p className="itemCaption" style={{color:'#335653'}}>Save money by booking your space in advance. The earlier you pay, the more you save!      <br/><br/>           

<li>10% discount on payments before the end of September.</li>

<li>5% discount on payments before the end of October.</li>

            
</p>
               </div>
                </div>
                </div>


                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#335653'}}>
                 
                  <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#E4F2E4'}}>Multi-forum discount</h1>
               <p className="itemCaption" style={{color:'#E4F2E4'}}>Book more events and receive a better rate! When you book more than one m&i event, the second comes with a 30% discount*, and all subsequent events come with a 40% discount*. </p>
               <p className="finePrint">*Only applicable to m&i Flagship and m&i Private Forums. Discount always applies to the lowest priced event.</p>
               </div>
                </div>
                </div>

                </div>

              </div>
            </div>
          </div>

       
       <div className="site-half numbersRates powder-bg">
       
       
       
         <div className="container">
           <div className="row no-gutters align-items-stretch">
           <div
             className="col-lg-4 ml-rg-auto"
           >
            
              
             
           <h1 className="itemHeading"> {"<"}1% </h1>
            <p className="itemCaption" >our no-show rate</p>
            </div>

           
             <div
             className="col-lg-4 ml-rg-auto"
           >
               <h1 className="itemHeading">6 RFPs</h1>
            <p className="itemCaption" >suppliers receive on average at an m&i event</p>
            </div>

            
             <div
             className="col-lg-4 ml-rg-auto"
           >
               <h1 className="itemHeading" >x10</h1>
            <p className="itemCaption" >average supplier ROI</p>
            </div>


         
             </div>

           </div>
       </div>

      

        <div
          className="footer-slider mint-bg"
          style={{ height: "auto", padding: "40px" }}
        >
          <div className="container">
          <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5 laptop">
                  <div className="cta-content">
                  <div
                    className="footer-section-heading "
                 
                  >
                       
                   <h1>still not convinced that our events will bring value?</h1>
                   <p className="caption">Book a ROI consultation to find out exactly how much your company could make at one of our events.</p>
                  </div>
                    <a href="/roi-consultation">
                      <span className=" btn btn-secondary raven">
                   Book ROI consultation
                      </span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rates;
