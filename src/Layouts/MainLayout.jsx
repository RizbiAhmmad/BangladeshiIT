import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FloatingChatMenu from '../Components/FloatingChatMenu';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           <FloatingChatMenu></FloatingChatMenu>
        </div>
    );
};

export default MainLayout;