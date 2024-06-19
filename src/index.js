import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/pages/MainLayout';
import CatalogPage from './components/pages/CatalogPage';
import BlogPage from './components/pages/BlogPage';
import HomePage from './components/pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/about' element={<CatalogPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
   
);