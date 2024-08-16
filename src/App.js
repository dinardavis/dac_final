import React from 'react'
import './assets/css/reset.css'
import './assets/css/App.css';
import './assets/css/nav_styles.css';
import './assets/css/background_graphic_styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from "./components/Home/Home";
import MissionVision from './components/pages/MissionVision';
import NewsArticles from './components/pages/NewsArticles';
import Donate from './components/pages/Donate';
import Careers from './components/pages/Careers';
import NewsArticleDetail from './components/pages/NewsArticleDetail';
import Staff from './components/pages/Staff';
import Board from './components/pages/Board';
import Financials from './components/pages/Financials';
import Impact from './components/pages/Impact';
import Diversity from './components/pages/Diversity';


import KnowYourRights from './components/pages/KnowYourRights';
import FamilyDefense from './components/pages/programs/FamilyDefense';
import Prevention from './components/pages/programs/Prevention';
import InternshipVolunteer from './components/pages/InternshipVolunteer';
import CareersDetail from './components/pages/CareersDetail';
import PageNotFound from './components/pages/PageNotFound';



function App() {

  return (
    <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<PageNotFound />}/>
            <Route path="/" element={<Home />} />

            <Route path="mission-vision" element={<MissionVision />} />
            <Route path="staff" element={<Staff />} />
            <Route path="board" element={<Board />} />
            <Route path="financials" element={<Financials />} />
            <Route path="impact" element={<Impact />} />
            <Route path="deia" element={<Diversity />} />
            <Route path="dei" element={<Diversity />} />

            <Route path="family-defense-programs" element={<FamilyDefense />} />
            <Route path="prevention-programs" element={<Prevention />} />
       
            <Route path="updates-articles" element={<NewsArticles />} />
            <Route path="updates-articles/:id" element={<NewsArticleDetail />} />

            <Route path="careers" element={<Careers />} />
            <Route path="careers/:id" element={<CareersDetail />} />
            <Route path="internships-volunteers" element={<InternshipVolunteer />} />
            <Route path="donate" element={<Donate />} />
           
            <Route path="know-your-rights" element={<KnowYourRights />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
