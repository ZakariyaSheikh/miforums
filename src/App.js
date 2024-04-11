import React, { useRef, useEffect } from 'react';
import  { HelmetProvider } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import LayoutDefault from './layouts/LayoutDefault';
import ReactGa from 'react-ga';
import SignupLayout from './layouts/SignupLayout';
// Blogs
import RendezBlog from './views/blogs/Rendez'
import OurPlanetBlog from './views/blogs/OurPlanet';
import SevilleBlog from './views/blogs/Seville';
import BerlinBlog from './views/blogs/Berlin';
import RendezPartnersMIBlog from './views/blogs/RendezPartnersMI';
import ViennaHouseBlog from './views/blogs/ViennaHouse';
import BudapestBlog from './views/blogs/Budapest';
import LuxeBlog from './views/blogs/Luxe';
import ElPasoBlog from './views/blogs/ElPaso';
import OsloBlog from './views/blogs/VisitOslo';
import ErinTierney from './views/blogs/ErinTierney';
import HagueBlog from './views/blogs/TheHague';
import IstanbulBlog from './views/blogs/IstanbulBlog';
import VisitIbiza from './views/blogs/VisitIbiza';
import LuxeBlog2 from './views/blogs/LuxeBlog2';
import Limassol from './views/blogs/Limassol';
import JordanBlog from './views/blogs/JordanBlog';
import IstanbulRundown from './views/blogs/IstanbulRundown';
import GeorgiaBlog from './views/blogs/GeorgiaBlog';
import OsloRecap from './views/blogs/OsloRecap'
import HagueDebrief from './views/blogs/HagueDebrief'
import LuxeTouch from './views/blogs/LuxeTouch'
import LuxePorto from './views/blogs/LuxePorto';
import Wrapped23 from './views/blogs/Wrapped23';
import RichardB from './views/blogs/RichardB';
import Thefutureisgreen from './views/blogs/Thefutureisgreen';
import Webinars from './views/blogs/Webinars';
// Pages
import Home from './views/Home';
import Home24 from './views/Home24';
import Meetings from './views/Meetings';
import Contact from './views/Contact';
import Register from './views/Register';
import CampaignRegister from './views/CampaignRegister'
import RegisterLuxe from './views/RegisterLuxe';
import Referral from './views/Referral';
import BookingForm from './views/BookingForm'
import BookingFormEmbed from './views/BookingFormEmbed';
// import RegisterOld from './views/RegisterOld'
import OnDemand from './views/OnDemand';
import Blog from './views/Blog';
import About from './views/About';
import ThankYou from './views/ThankYou';
import ThankYouRegister from './views/ThankYouRegister';
import TermsBuyers from './views/TermsBuyers';
import TermsReferral from './views/TermsReferral';
import TermsSuppliers from './views/TermsSuppliers';
import CovidProcedures from './views/CovidProcedures';
import CovidProceduresEuropeAutumn from './views/CovidProceduresEuropeAutumn';
import CovidProceduresMadrid from './views/CovidProceduresMadrid';
import CovidProceduresAbuDhabi from './views/CovidProceduresAbuDhabi';
import PeopleOfMI from './views/PeopleOfMI';
import Toolkit from './views/DigitalAssets';
import LuxeDiamondSuppliers from './views/LuxeDiamondSuppliers';
import TellMeMore from './views/TellMeMore';
// import FlexibleTerms from './views/FlexibleTerms';
import Rates from './pages/Rates';
import Roi from './pages/Roi/Roi';
import Calendar from './views/Calendar';
import CovidSafe from './views/CovidSafe';
import JoinUs from './views/JoinUs';
import HowWorks from './views/HowWorks';
import Ambassador from './views/Ambassador';
import Advisor from './views/Advisor';
import BuyerExperience from './views/BuyerExperience';
import SupplierExperience from './views/SupplierExperience';
// Events
import EuropeAutumn2021 from './views/EuropeAutumn2021';
import AmericasPuntaCana from './views/AmericasPuntaCana';
import EuropeSpring from './views/EuropeSpring'
import EuropeHealthcare from './views/EuropeHealthcare';
import Fest from './views/2024/Fest';
import SpainPortugal from './views/SpainPortugal';
import EuropeWinter from './views/EuropeWinter';
// 2023 Events
import EuropeSummer2023 from './views/2023/EuropeSummer2023';
import VIPConnectEurope2023 from './views/2023/VIPConnectEurope';
import EuropeAutumn2023 from './views/2023/EuropeAutumn2023';
import EuropePrivate2023 from './views/2023/EuropePrivate2023';
import Americas2023 from './views/2023/Americas2023';
import EuropeHealthcare2023 from './views/2023/EuropeHealthcare2023';
import EuropeVIPConnect2023 from './views/2023/EuropeVIPConnect2023';
import EuropeSummerLimassol2023 from './views/2023/EuropeSummerLimassol2023';
import EuropeSpringTurkey2023 from './views/2023/EuropeSpringTurkey2023';
import LuxeEurope2023 from './views/2023/LuxeEurope2023';
import LuxeAmericas2023 from './views/2023/LuxeAmericas2023';


// 2024 Events

import Sorrento from './views/2024/Sorrento';
// import VIPConnect from './views/VIPConnect';
import EuropeAutumn2022 from './views/EuropeAutumn2022';
import Private2022 from './views/Private2022';
import RoiConsultation from './views/RoiConsultation';
// FormTitan
import BuyerProfile from './views/BuyerProfile';
import SupplierProfile from './views/SupplierProfile';
import SelfBooker from './views/SelfBooker';
import SupplierPayment from './views/SupplierPayment';
import TravelAccommodation from './views/TravelAccommodation';
import CovidSafeForm from './views/CovidSafeForm';
import PreEventDetails from './views/PreEventDetails';
// Event Guide
import EuropeHealthcareBuyerEventGuide from './views/guides/EuropeHealthcareBuyerEventGuide';
import EuropeHealthcareSupplierEventGuide from './views/guides/EuropeHealthcareSupplierEventGuide';
import AdvisoryBoard from './views/AdvisoryBoard';
import TheHague from './views/blogs/TheHague';
import TheHagueHealthcare from './views/blogs/TheHagueHealthcare';
import LDSAssets from './views/LDSAssets';
import Gallery from './views/Gallery';
import IbizaBlog from './views/blogs/IbizaBlog';
import JordanTombsTemples from './views/blogs/JordanTombsTemples';
import Miami from './views/2024/Miami';
import London from './views/2024/London';
import Lisbon from './views/2024/Lisbon';
import Sardinia from './views/2024/Sardinia';
import Bodrum from './views/2024/Bodrum';
import Costa from './views/2024/Costa';
import Marrakesh from './views/2024/Marrakesh';
import MarrakeshNew from './views/2024/Marrakesh24'
import LakeComoBlog from './views/blogs/LakeComoBlog';
import ElPasoQA from './views/blogs/ElPasoQA';
import MichaelCohen from './views/blogs/MichaelCohen';
import Amman from './views/2024/Amman';
import TbilisiTwo from './views/2024/TbilisiTwo';
import FestAmbassador from './views/FestAmbassador';
import SupplierTravelDetails from './views/SupplierTravelDetails';
import FestExperiencesBuyer from './views/hostedfiles/FestExperiencesBuyer';
import FestExperiencesSuppliers from './views/hostedfiles/FestExperiencesSuppliers';
import FestSurvivalGuideAmbassador from './views/hostedfiles/FestSurvivalGuideAmbassador';
import FestSurvivalGuideSocialAssets from './views/hostedfiles/FestSurvivalGuideSocialAssets';
import FestSurvivalGuideEventPartners from './views/hostedfiles/FestSurvivalGuideEventPartners';
import FestSurvivalGuideHeadlinePartners from './views/hostedfiles/FestSurvivalGuideHeadlinePartners';
import FestBriefingSuppliers from './views/hostedfiles/FestBriefingSuppliers';
import FestBriefingBuyers from './views/hostedfiles/FestBriefingBuyers';
import ActivityGuideSorrento from './views/hostedfiles/ActivityGuideSorrento';
import BuyerNetworkingProfile from './views/BuyerNetworkingProfile';
import LakeLouise from './views/2025/LakeLouise';


const App = () => {
    const childRef = useRef();
    let location = useLocation();
    const { pathname } = useLocation();
    useEffect(() => {
        document.body.classList.add('is-loaded');
        childRef.current.init();
        ReactGa.initialize('UA-432158-8');
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, [location]);

    // const ClickHandler = () => {
    //   ReactGa.event({
    //     category: 'Button',
    //     action: 'Click the button from first page'
    //   })
    // }

    return (
        <HelmetProvider>

        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>



                    <Redirect from='/mi-vip-amman-24' to='/calendar' />
                    <Redirect from='/register' to='/signup' />
                    <Redirect from='/joinus' to='/' />
                    <Redirect from='/mi-europe-autumn' to='/calendar' />
                    <Redirect from='/mi-europe-healthcare' to='/calendar' />
                    <Redirect from='/mi-europe-spring-2022' to='/calendar' />
                    <Redirect from='/mi-vip-connect-2022' to='/calendar' />

                    <Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
                    <Redirect from='/covid-procedures-mi-eu-autumn-2021' to='/covid-procedures-sibenik'/>
                    <AppRoute
                        exact
                        path='/'
                        component={Home24}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        path='/social'
                        component={() => {
                            window.location =
                                'https://www.instagram.com/miforums/';
                        }}
                    />
                    <AppRoute
                        path='/wyred-world/buyer-profile'
                        component={() => {
                            window.location =
                                'https://fs11.formsite.com/9a1OET/mslre3ugki/';
                            return null;
                        }}
                    />
                    <AppRoute
                        path='/joinus'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com';
                            return null;
                        }}
                    />
                    <AppRoute
                        path='/wyred-world/supplier-profile'
                        component={() => {
                            window.location =
                                'https://fs11.formsite.com/9a1OET/pysfdmyjnv/';
                            return null;
                        }}
                    />
                    <AppRoute
                        path='/networkingplatform'
                        component={() => {
                            window.location =
                                'https://web.wyred.travel/europeautumn2020virtual/';
                            return null;
                        }}
                    />
                      <AppRoute
                        path='/wyred-showcase-wales'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/wyred-showcase.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-pre-event-timeline-a'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-pre-event-timeline-a.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi_americas_buyer_samples_list'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_americas_sample_buyer_list.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-europe-spring-2023-dress-code'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-europe-spring-2023-dress-code.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-private-2023-activities-guide'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-private-2023-activities-guide.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-private-2023-dress-code'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-private-2023-dress-code.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-fest-buyer-ambassador-welcome-pack'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-fest-buyer-ambassador-welcome-pack.pdf';
                            return null;
                        }}
                    />




<AppRoute
                        path='/mi-americas-2023-sales-pack'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_Americas_Sales_Pack.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-luxe-2023-sales-pack'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_Luxe_Sales_pack_Porto_Montenegro.pdf';
                            return null;
                        }}
                    />


<AppRoute
                        path='/mi-healthcare-2023-style-guide'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-healthcare-2023-style-guide.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-healthcare-2023-activities-guide'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-healthcare-2023-activities-guide.pdf';
                            return null;
                        }}
                    />





<AppRoute
                        path='/mi-2023-shareable-social-assets'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-2023-shareable-social-assets.zip';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-2024-shareable-social-assets'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-2024-shareable-social-assets.zip';
                            return null;
                        }}
                    />                                  





                    



<AppRoute
                        path='/erin-partnership-proposal'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/erin-partnership-proposal.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-americas-2022-dress-code'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-americas-2022-dress-code.pdf';
                            return null;
                        }}
                    />


<AppRoute
                        path='/mi-americas-2022-activity-guide'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-americas-2022-activity-guide.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi_global_buyer_sample_list'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_global_buyer_sample_list.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi_healthcare_buyer_samples_list'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_healthcare_buyer_samples_list.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi_luxe_europe_buyer_guestlist'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_luxe_europe_buyer_guestlist.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi_europe_buyer_sample_list'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi_europe_buyer_sample_list.pdf';
                            return null;
                        }}
                    />


<AppRoute
                        path='/mi-healthcare-2023-brochure'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-healthcare-2023-brochure.pdf';
                            return null;
                        }}
                    />


<AppRoute
                        path='/americas-partnership-proposal'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/americas-partnership-proposal.pdf';
                            return null;
                        }}
                    />


<AppRoute
                        path='/mi-top-tips'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-top-tips.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/luxe-diamond-suppliers-proposal'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/Luxe_Diamond_Supplier_Proposal.pdf';
                            return null;
                        }}
                    />

<AppRoute
                        path='/mi-partnership-guide-headline-partners'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/mi-partnership-guide-headline-partners.pdf';
                            return null;
                        }}
                    />





                    <AppRoute
                        path='/virtualbackgrounds'
                        component={() => {
                            window.location =
                                'https://www.mi-forums.com/virtualbackgrounds.zip';
                            return null;
                        }}
                    />
                    <AppRoute
                        path='/networkinglounge'
                        component={() => {
                            window.location =
                                'https://live.remo.co/e/mandi-europe-autumn-2020-virtual';
                            return null;
                        }}
                    />
                    <AppRoute
                        path='/sociallounge'
                        component={() => {
                            window.location =
                                'https://live.remo.co/e/mandi-europe-autumn-2020-virtual';
                            return null;
                        }}
                    />



                    <AppRoute
                        exact
                        path='/wyred-world'
                        component={Home}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/on-demand'
                        component={OnDemand}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/roi-consultation'
                        component={RoiConsultation}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/roi-calculator'
                        component={Roi}
                        layout={LayoutDefault}
                    />



                    <AppRoute
                        exact
                        path='/smart-meetings'
                        component={Meetings}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/about'
                        component={About}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/blog'
                        component={Blog}
                        layout={LayoutDefault}
                    />

                    <AppRoute
                        exact
                        path='/metaverse-coming-meetings-industry-you-ready-m-i-forums'
                        component={RendezBlog}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/impact-events-our-planet-m-i-forums'
                        component={OurPlanetBlog}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/back-so-soon-why-were-hosting-our-second-event-seville-5-years'
                        component={SevilleBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/perfect-city-healthcare-events-m-i-forums'
                        component={BerlinBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-partners-rendezverse-bring-corporate-metaverse-hospitality'
                        component={RendezPartnersMIBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/we-asked-vienna-house-andels-berlin-what-makes-them-perfect'
                        component={ViennaHouseBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/the-story-behind-the-concept'
                        component={LuxeBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/the-incentive-trip-is-having-a-comeback'
                        component={LuxeBlog2}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/why-limassol-should-be-the-MICE-destination'
                        component={Limassol}
                        layout={LayoutDefault}
                    />


<AppRoute
                        exact
                        path='/green-oslo'
                        component={OsloBlog}
                        layout={LayoutDefault}
                    />



<AppRoute
                        exact
                        path='/meet-our-director-of-sales-for-north-america'
                        component={ErinTierney}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/istanbul-2023-the-rundown'
                        component={IstanbulRundown}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-private-ibiza-2023'
                        component={IbizaBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/jordan-tombs-temples-and-terrific-mice-facilities'
                        component={JordanTombsTemples}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/6-unique-lake-como-venues-worth-watching'
                        component={LakeComoBlog}
                        layout={LayoutDefault}
                    />

<AppRoute               exact
                        path='/find-out-what-our-event-managers-loved-in-elpaso'
                        component={ElPasoQA}
                        layout={LayoutDefault}
                    />

<AppRoute               exact
                        path='/michael-cohen-on-our-gaintalks-partnership'
                        component={MichaelCohen}
                        layout={LayoutDefault}
                    />

<AppRoute               exact
                        path='/discover-georgia-powered-by-mi-forums'
                        component={GeorgiaBlog}
                        layout={LayoutDefault}
                    />

<AppRoute               exact
                        path='/what-happened-in-oslo'
                        component={OsloRecap}
                        layout={LayoutDefault}
                    />

<AppRoute               exact
                        path='/the-hague-debrief'
                        component={HagueDebrief}
                        layout={LayoutDefault}
                    />                   
                    
<AppRoute
                        exact
                        path='/the-hague-from-peace-to-mice'
                        component={TheHague}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/the-hague-what-to-expect'
                        component={TheHagueHealthcare}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/vip-what-to-expect'
                        component={JordanBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/whats-so-good-about-istanbul'
                        component={IstanbulBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/discover-the-real-ibiza'
                        component={VisitIbiza}
                        layout={LayoutDefault}
                    />



                    

<AppRoute
                        exact
                        path='/8-reasons-you-should-visit-el-paso'
                        component={ElPasoBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-returns-live-events-budapest-m-i-forums'
                        component={BudapestBlog}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/the-luxe-touch'
                        component={LuxeTouch}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-luxe-porto-montenegro-recap'
                        component={LuxePorto}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-wrapped-2023'
                        component={Wrapped23}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/richard-barnes-gives-the-lowdown-on-mi'
                        component={RichardB}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/the-key-issues-affecting-miceprofessionals-today'
                        component={Webinars}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/the-future-is-green'
                        component={Thefutureisgreen}
                        layout={LayoutDefault}
                    />



                    <AppRoute
                        exact
                        path='/contact'
                        component={Contact}
                        layout={LayoutDefault}
                    />

                    <AppRoute
                        exact
                        path='/signup-mi-luxe-2023'
                        component={RegisterLuxe}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/2024-signup'
                        component={CampaignRegister}
                        layout={LayoutDefault}
                    />



<AppRoute
                        exact
                        path='/signup'
                        component={Register}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/tell-me-more'
                        component={TellMeMore}
                        layout={LayoutDefault}
                    />



                    <AppRoute
                        exact
                        path='/thank-you'
                        component={ThankYou}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/register-thank-you'
                        component={ThankYouRegister}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/terms-conditions-buyers'
                        component={TermsBuyers}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/referral-terms-conditions'
                        component={TermsReferral}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/terms-conditions-suppliers'
                        component={TermsSuppliers}
                        layout={LayoutDefault}
                    />
                    {/* <AppRoute
                        exact
                        path='/flexi-terms-promise'
                        component={FlexibleTerms}
                        layout={LayoutDefault}
                    /> */}
                      <AppRoute
                        exact
                        path='/covid-safe-events'
                        component={CovidSafe}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/how-it-works'
                        component={HowWorks}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/pricing'
                        component={Rates}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/referral-programme'
                        component={Referral}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/airport-transfer-booking-disclaimer'
                        component={BookingForm}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/supplier-transfer-payment'
                        component={BookingFormEmbed}
                    />


                    <AppRoute
                        exact
                        path='/calendar'
                        component={Calendar}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/people-of-mi'
                        component={PeopleOfMI}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/past-events'
                        component={Gallery}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/mi-toolkit'
                        component={Toolkit}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/luxe-diamond-suppliers'
                        component={LuxeDiamondSuppliers}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/advisory-board'
                        component={AdvisoryBoard}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/Americas-Ambassadors'
                        component={Ambassador}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/fest-ambassadors'
                        component={FestAmbassador}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/LDS-Assets'
                        component={LDSAssets}
                        layout={LayoutDefault}
                    />



                     <AppRoute
                        exact
                        path='/Americas-Advisors'
                        component={Advisor}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/buyer-experience'
                        component={BuyerExperience}
                        layout={LayoutDefault}
                    />
<AppRoute
                        exact
                        path='/supplier-experience'
                        component={SupplierExperience}
                        layout={LayoutDefault}
                    />



                    <AppRoute
                        exact
                        path='/mi-europe-autumn'
                        component={EuropeAutumn2021}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/mi-americas-2022'
                        component={AmericasPuntaCana}
                        layout={LayoutDefault}
                    />
                     <AppRoute
                        exact
                        path='/mi-europe-spring-2022'
                        component={EuropeSpring}
                        layout={LayoutDefault}
                    />

                    <AppRoute
                        exact
                        path='/mi-europe-summer-limassol-2023'
                        component={EuropeSummerLimassol2023}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-luxe-porto-montenegro-2023'
                        component={LuxeEurope2023}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-luxe-costa-mujeres-2023'
                        component={LuxeAmericas2023}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-europe-spring-2023'
                        component={EuropeSpringTurkey2023}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-europe-autumn-2023'
                        component={EuropeAutumn2023}
                        layout={LayoutDefault}
                    />

                    <AppRoute
                        exact
                        path='/mi-europe-winter-testgreg'
                        component={EuropeWinter}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/mi-europe-healthcare'
                        component={EuropeHealthcare}
                        layout={LayoutDefault}
                    />

                   < AppRoute
                        exact
                        path='/2024-signup'
                        component={CampaignRegister}
                        layout={LayoutDefault} />
                    {/* <AppRoute
                        exact
                        path='/mi-private-europe'
                        component={PrivateEurope}
                        layout={LayoutDefault}
                    /> */}
                      <AppRoute
                        exact
                        path='/mi-private-europe-2022'
                        component={Private2022}
                        layout={LayoutDefault}
                    />
                      <AppRoute
                        exact
                        path='/mi-europe-autumn-2022'
                        component={EuropeAutumn2022}
                        layout={LayoutDefault}
                    />

                    {/* Oslo */}
                    <AppRoute
                        exact
                        path='/mi-europe-summer-oslo-2023'
                        component={EuropeSummer2023}
                        layout={LayoutDefault}
                    />
                    {/* Jordan */}
                      <AppRoute
                        exact
                        path='/mi-vip-connect-europe-2023'
                        component={VIPConnectEurope2023}
                        layout={LayoutDefault}
                    />
                    {/* Ibiza */}
                     <AppRoute
                        exact
                        path='/mi-private-2023'
                        component={EuropePrivate2023}
                        layout={LayoutDefault}
                    />
                    {/* Americas */}
                    <AppRoute
                        exact
                        path='/mi-americas-2023'
                        component={Americas2023}
                        layout={LayoutDefault}
                    />
                    {/* The Hague */}
                     <AppRoute
                        exact
                        path='/mi-healthcare-2023'
                        component={EuropeHealthcare2023}
                        layout={LayoutDefault}
                    />

                    {/* Lake Como */}
                    <AppRoute
                        exact
                        path='/mi-europe-autumn-2023'
                        component={EuropeAutumn2023}
                        layout={LayoutDefault}
                    />
  {/* Limassol */}
                    <AppRoute
                        exact
                        path='/mi-europe-summer-limassol-2023'
                        component={EuropeSummerLimassol2023}
                        layout={LayoutDefault}
                    />


                    {/* 2024 Events */}

                    <AppRoute
                        exact
                        path='/mi-fest'
                        component={Fest}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-fest-marrakesh-24'
                        component={MarrakeshNew}
                        layout={LayoutDefault}
                    />

                   
                    <AppRoute
                        exact
                        path='/mi-private-sorrento-24'
                        component={Sorrento}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-vip-amman-24'
                        component={Amman}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-tbilisi-georgia-24'
                        component={TbilisiTwo}
                        layout={LayoutDefault}
                    />

                      
                      <AppRoute
                        exact
                        path='/mi-americas-miami-24'
                        component={Miami}
                        layout={LayoutDefault}
                    />

                    <AppRoute
                        exact
                        path='/mi-healthcare-london-24'
                        component={London}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-lisbon-24'
                        component={Lisbon}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-sardinia-24'
                        component={Sardinia}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-luxe-bodrum-24'
                        component={Bodrum}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/mi-vip-costa-mujeres-24'
                        component={Costa}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/mi-luxe-lake-louise-25'
                        component={LakeLouise}
                        layout={LayoutDefault}
                    />


<AppRoute
                        exact
                        path='/mi-fest-survival-guide-ambassadors'
                        component={FestSurvivalGuideAmbassador}
                    />


<AppRoute
                        exact
                        path='/mi-fest-survival-guide-social-assets'
                        component={FestSurvivalGuideSocialAssets}
                    />



<AppRoute
                        exact
                        path='/mi-fest-survival-guide-event-partners'
                        component={FestSurvivalGuideEventPartners}
                    />



<AppRoute
                        exact
                        path='/mi-fest-survival-guide-headline-partners'
                        component={FestSurvivalGuideHeadlinePartners}
                    />


<AppRoute
                        exact
                        path='/mi-fest-wyred-briefing-suppliers'
                        component={FestBriefingSuppliers}
                    />


<AppRoute
                        exact
                        path='/mi-fest-wyred-briefing-buyers'
                        component={FestBriefingBuyers}
                    />

<AppRoute
                        exact
                        path='/activity-guide-sorrento'
                        component={ActivityGuideSorrento}
                    />

<AppRoute
                        exact
                        path='/mi-fest-experiences-guide-buyers'
                        component={FestExperiencesBuyer}
                    />


<AppRoute
                        exact
                        path='/mi-fest-experiences-guide-suppliers'
                        component={FestExperiencesSuppliers}
                    />



                    <AppRoute
                        exact
                        path='/buyer-profile'
                        component={BuyerProfile}
                    />
                    <AppRoute
                        exact
                        path='/buyer-networking-profile'
                        component={BuyerNetworkingProfile}
                    />
                    <AppRoute
                        exact
                        path='/supplier-profile'
                        component={SupplierProfile}
                    />
                    <AppRoute
                        exact
                        path='/supplier-travel-details'
                        component={SupplierTravelDetails}
                    />
                     <AppRoute
                        exact
                        path='/self-booker'
                        component={SelfBooker}
                    />
                    <AppRoute
                        exact
                        path='/covid-safe-form'
                        component={CovidSafeForm} />

<AppRoute
                        exact
                        path='/pre-event-details'
                        component={PreEventDetails} />

                    <AppRoute
                        exact
                        path='/travel-accommodation'
                        component={TravelAccommodation}
                    />
                    <AppRoute
                        exact
                        path='/supplier-payment'
                        component={SupplierPayment}
                    />

                    <AppRoute
                        exact
                        path='/spain-portugal'
                        component={SpainPortugal}
                        layout={LayoutDefault}
                    />
                     {/* <AppRoute
                        exact
                        path='/mi-vip-connect'
                        component={VIPConnect}
                        layout={LayoutDefault}
                    /> */}
                      <AppRoute
                        exact
                        path='/joinus'
                        component={JoinUs}
                    />

<AppRoute
                        exact
                        path='/covid-procedures-mi-private-2021'
                        component={CovidProcedures}
                        layout={LayoutDefault}
                    />


<AppRoute
                        exact
                        path='/covid-procedures-abu-dhabi'
                        component={CovidProceduresAbuDhabi}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/covid-procedures-sibenik'
                        component={CovidProceduresEuropeAutumn}
                        layout={LayoutDefault}
                    />

<AppRoute
                        exact
                        path='/covid-procedures-madrid'
                        component={CovidProceduresMadrid}
                        layout={LayoutDefault}
                    />
<AppRoute
                        exact
                        path='/mi-europe-healthcare-2022-buyer-event-guide'
                        component={EuropeHealthcareBuyerEventGuide}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path='/mi-europe-healthcare-2022-supplier-event-guide'
                        component={EuropeHealthcareSupplierEventGuide}
                        layout={LayoutDefault}
                    />



                </Switch>

            )}
            />
             </HelmetProvider>
    );
};

export default App;
