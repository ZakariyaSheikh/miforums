import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RatesContext from '../../../context/rates/ratesContext';
import Dropdown from '../../../components/UI/Dropdown';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {
    currencyFormat,
    currrencyUnitConverter,
} from '../../../utils/currencyFormat';

const RatesCalculatorSideBar = ({ settings }) => {
    const {
        currencies,
        currencyNames,
        dicountRatioX2,
        dicountRatioX3,
        // earlyBirdExpiry,
    } = settings;

    const ratesContext = useContext(RatesContext);

    const { selectedEvent, setCurrencyType, currency } = ratesContext;
   
    const [discountRate, setDiscountRate] = useState(0);
    const [fullRate, setFullRate] = useState(0);
    const [percentage, setTotalpercentage] = useState(0);
    const [meetings, setMeetings] = useState(0);
    const [earlyBird, setEarlyBird] = useState('0%');
    // const [vipConnect, setVIP] = useState('0%');
   

    useEffect(() => {
        calculate(currency);
        // eslint-disable-next-line
    }, [selectedEvent]);

    const onCurrency = (e) => {
        const currencyType = typeof e !== 'object' ? e : e.target.value;
        setCurrencyType(currencyType);
        calculate(currencyType);
    };

    const calculate = (currency) => {
        let discountArray = [];
        let fullArray = [];
        // let vipConnect = false;
        let firstChecked = false;
        let secondChecked = false;
        let percentageTotal = [0];
        let meeting = [];
        let earlyBirdTotalDiscount = [];
        // let vipConnectDiscount = [];
        // console.log(currency);
        setEarlyBird('0%');
        // setVIP('0%');

        // const expiryEarlyBird = moment(earlyBirdExpiry);
        // const nowEarlyBird = moment();

        const singleEvents = [...selectedEvent]
            .filter((s) => s.singleCheckbox || s.singleCheckboxND)
            .sort((a, b) => b[currency] - a[currency])
            .map((f) => ({
                ...f,
                value: f[currency],
            }));

        const shareEvents = [...selectedEvent]
            .filter((s) => s.shareCheckbox || s.shareCheckboxND)
            .sort((a, b) => b[`shared${currency}`] - a[`shared${currency}`])
            .map((f) => ({
                ...f,
                value: f[`shared${currency}`],
            }));

        const combine = [...singleEvents, ...shareEvents].sort(
            (a, b) => b.value - a.value
        );
        // console.log(combine);




        combine.forEach((event, index) => {
            
 


            // let vipDiscountValue = 0;
            // let vipDiscountValueExtra = 0;
            // let vipDiscountValueShare = 0;

            // if (vipDiscount) {
            //     vipDiscountValue = (event[currency] / 100) * 25;
            //     vipDiscountValueExtra =
            //         (settings[`extraDelegate${currency}`] / 100) * 25;
            //         vipDiscountValueShare = (event[`shared${currency}`] / 100) * 25;
            // }

            // const vipDiscountFunc = (val, origin) => {
            //     vipConnectDiscount.push(origin - val);
            //     return val;
            // };

            // let singleVIP = event.singleCheckbox || event.singleCheckboxND
            //     ? vipDiscount
            //         ? vipDiscountFunc(vipDiscountValue, event[currency])
            //         : event[currency]
            //         : 0;
            //         let extraVIP =
            //         (event.extraCheckbox && event.singleCheckbox) || (event.extraCheckbox && event.singleCheckboxND)
            //             ? vipDiscount
            //                 ? vipDiscountFunc(
            //                     vipDiscountValueExtra,
            //                       settings[`extraDelegate${currency}`]
            //                   )
            //                 : settings[`extraDelegate${currency}`]
            //             : 0;
            //     let shareVIP = event.shareCheckbox || event.shareCheckboxND
            //         ? vipDiscount
            //             ? vipDiscountFunc(
            //                 vipDiscountValueShare,
            //                   event[`shared${currency}`]
            //               )
            //             : event[`shared${currency}`]
            //         : 0;

            let eventEarly = event.earlyBird;
            // if ((expiryEarlyBird < nowEarlyBird) || (event.earlyBird === false) ) {
            //     setEarlyBird('0%');
            //     eventEarly = !eventEarly;
            // } else {
            //     setEarlyBird('10%');
            // }
            // // console.log(index);

            let earlyBirdValue = 0;
            let earlyBirdValueExtra = 0;
            let earlyBirdValueShare = 0;

            if (eventEarly) {
                earlyBirdValue = (event[currency] / 100) * 90;
                earlyBirdValueExtra =
                    (settings[`extraDelegate${currency}`] / 100) * 90;
                earlyBirdValueShare = (event[`shared${currency}`] / 100) * 90;
            }

            const earlyBirdFunc = (val, origin) => {
                earlyBirdTotalDiscount.push(origin - val);
                return val;
            };

            let single = event.singleCheckbox || event.singleCheckboxND
                ? eventEarly
                    ? earlyBirdFunc(earlyBirdValue, event[currency])
                    : event[currency]
                : 0;
            let extra =
                (event.extraCheckbox && event.singleCheckbox) || (event.extraCheckbox && event.singleCheckboxND)
                    ? eventEarly
                        ? earlyBirdFunc(
                              earlyBirdValueExtra,
                              settings[`extraDelegate${currency}`]
                          )
                        : settings[`extraDelegate${currency}`]
                    : 0;
            let share = event.shareCheckbox || event.shareCheckboxND
                ? eventEarly
                    ? earlyBirdFunc(
                          earlyBirdValueShare,
                          event[`shared${currency}`]
                      )
                    : event[`shared${currency}`]
                : 0;


            let vipConnect = event.eventName === 'm&i VIP Connect Americas 2023*' || event.eventName === 'm&i VIP Connect Europe 2023*';
            let discountTotal = single + share;
            let fullTotal = single + share ;
            // console.log(total);

            // VIP Stuff
            // if (((index === 0 && event.vipConnect && event.singleCheckbox))) {
            //     discountTotal = single - singleVIP;
            // } else if (((index === 0 && event.vipConnect && event.shareCheckbox))) {
            //     discountTotal = share - shareVIP;
            // }
            // else if (((index === 0 && event.vipConnect && event.singleTableND) || (index === 0 && event.vipConnect && event.shareCheckboxND))) {
            //         discountTotal = single + share;
            // }

            // Percentage calc second item 30%

           
            if (((index === 0 && event.singleCheckboxND) || (index === 0 && event.shareCheckboxND)   )) {
                firstChecked = false;
                secondChecked = false;
            } else if ((index >= 0 && event.singleCheckboxND) || (index >= 0 && event.shareCheckboxND) ) {
                firstChecked = false;
                secondChecked = false;
            }

            if (((index >= 0 && vipConnect))){
                firstChecked = false;
                secondChecked = false;
                console.log('vip')
            }


            if (((index === 0 && event.singleCheckbox) || (index === 0 && event.shareCheckbox )  )) {
                firstChecked = true;
            } else if ((index === 0 && !event.singleCheckbox) || (index === 0 &&  event.singleCheckboxND) || (index === 0 && event.shareCheckboxND) ) {
                firstChecked = false;
            }
            if (index === 1 && firstChecked ) {
                // console.log('second');
                discountTotal = (discountTotal / 100) * (100 - dicountRatioX2);
                // console.log(total);
                percentageTotal.push(dicountRatioX2);
            }



        //   if(((index === 0 && event.eventName === "m&i Europe Spring 2023" || event.eventName === "m&i Europe Summer, Oslo 2023" || event.eventName === "m&i Europe Autumn 2023"
        //   || event.eventName === "m&i Americas 2023"
        //   || event.eventName === "m&i Europe Winter 2023"))){
        //     flagShip = true;
          
        //   }

        //   if(((index === 0 && event.eventName === "m&i VIP Connect Europe 2023*" || event.eventName === "m&i VIP Connect Americas 2023*" || event.eventName === "m&i Healthcare 2023*"
        //   || event.eventName === "m&i Private 2022"
        //   || event.eventName === "m&i Europe Winter 2023"))){
        //     nonFlagShip = true;
            
        //   }

        //   if(((index === 1 && flagShip ))){
        //   console.log('is this 2?')
        // }
         
            // Percentage calc from third item 40%
            if ((index >= 1 && event.singleCheckbox) || event.shareCheckbox) {
                secondChecked = true;
            } else if ((index >= 1 && !event.singleCheckbox) || (event.singleCheckboxND || event.shareCheckboxND)) {
                secondChecked = false;
            }

           
            if ((index >= 2 && secondChecked && vipConnect)) {
               
                console.log('this shouldnt work');
                discountTotal = (discountTotal / 100) * (100 - dicountRatioX3);
                percentageTotal.push(dicountRatioX3);
            } 

            discountArray.push(discountTotal + extra);
            fullArray.push(fullTotal + extra);
            meeting.push(event.meetings);
            // console.log(event.meetings);
        });
        const discountTotal = discountArray.reduce((a, b) => a + b, 0);
        const fullTotal = fullArray.reduce((a, b) => a + b, 0);

        const earlyBirdTotal = earlyBirdTotalDiscount.reduce(
            (a, b) => a + b,
            0
        );
        setDiscountRate(discountTotal);
        setFullRate(fullTotal + earlyBirdTotal);
        setTotalpercentage(
            (percentageTotal.reduce((a, b) => a + b, 0) /
                (percentageTotal.length * 100)) *
                100
        );
        setMeetings(meeting.reduce((a, b) => a + b, 0));
    };

    return (
        <div className='calculatorMobile'>
            <div className='calculator__sidebar sidebar sidebar--white'>
                <h4 style={{ color: '#fff' }}>currency</h4>
                <Dropdown
                    onChange={onCurrency}
                    data={{ currencies, currencyNames }}
                    className='sidebar__dropdown'
                />
                <p>you save:</p>{' '}
                <h4 style={{ color: '#fff' }}>
                    {currencyFormat(currency)}
                    {currrencyUnitConverter(fullRate - discountRate)}
                </h4>
                <hr className='barDivider' />
                <p>full rate:</p>
                <h4>
                    {currencyFormat(currency) +
                        currrencyUnitConverter(fullRate)}
                </h4>
                <br></br>
                <p>multi-forum discount:</p>
                <h4>{Math.round(percentage)}%</h4>
                <br></br>
                {/* <p>early booking discount:</p>
                <h4>{earlyBird}</h4>
                <br></br> */}
                <hr className='barDivider' />
                <p>net cost:</p>
                <h4 style={{ color: '#fff' }}>
                    {currencyFormat(currency) +
                        currrencyUnitConverter(discountRate)}
                </h4>
                <br></br>
                <p>
                    did you know...
                    <br />
                    by choosing this option <br />
                    you will attend {meetings} meetings <br />
                    at a cost per meeting of:
                </p>
                <br></br>
                <h4>
                    {' '}
                    {currencyFormat(currency)}
                    {discountRate &&
                        currrencyUnitConverter(
                            Math.round(discountRate / meetings)
                        )}{' '}
                </h4>
                <br />
                <br />
                <a href='/signup'>
                    <span className='text-white btn btn-secondary white'>
                        sign me up
                    </span>
                </a>
            </div>

            <Accordion
                className='mobileSavings'
                allowZeroExpanded={true}
                style={{ color: '#fff' }}
            >
                <AccordionItem>
                    <AccordionItemHeading>

                        <AccordionItemButton className="mobileSavingsButton">

                            <span
                                style={{ fontSize: '20px' }}
                                className='savings-arrow'
                            >
                                        view savings
                            </span>

                            </AccordionItemButton>

                    </AccordionItemHeading>
                    <AccordionItemPanel className='mobileSavingsPanel'>
                        <h4 style={{ color: '#fff' }}>currency</h4>
                        <Dropdown
                            onChange={onCurrency}
                            data={{ currencies, currencyNames }}
                            className='sidebar__dropdown'
                        />
                        <p>
                            you save:{' '}
                            <span style={{ color: '#fff' }}>
                                {currencyFormat(currency)}
                                {currrencyUnitConverter(
                                    fullRate - discountRate
                                )}
                            </span>
                        </p>

                        <hr className='barDivider' />
                        <p>
                            full rate:{' '}
                            <span>
                                {currencyFormat(currency) +
                                    currrencyUnitConverter(fullRate)}
                            </span>
                        </p>

                        <br></br>
                        <p>
                            multi-forum discount:{' '}
                            <span>{Math.round(percentage)}%</span>
                        </p>

                        <br></br>
                        <p>
                            early booking discount: <span>{earlyBird}</span>
                        </p>
                        <br></br>
                        <hr className='barDivider' />
                        <p>
                            net cost:{' '}
                            <span style={{ color: '#fff' }}>
                                {currencyFormat(currency) +
                                    currrencyUnitConverter(discountRate)}
                            </span>
                        </p>

                        <br></br>
                        <p>
                            did you know...
                            <br />
                            by choosing this option you will attend {
                                meetings
                            }{' '}
                            meetings at a cost per meeting of:{' '}
                            <span>
                                {' '}
                                {currencyFormat(currency)}
                                {discountRate &&
                                    currrencyUnitConverter(
                                        Math.round(discountRate / meetings)
                                    )}{' '}
                            </span>
                        </p>

                        <br />
                        <a href='/signup' style={{ marginBottom: '40px' }}>
                            <span className='text-white btn btn-secondary white'>
                                sign me up
                            </span>
                        </a>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

RatesCalculatorSideBar.propTypes = {
    settings: PropTypes.object.isRequired,
};

export default RatesCalculatorSideBar;
