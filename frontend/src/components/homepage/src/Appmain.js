import React from 'react'
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default function Appmain() {
    return (
        <div class="wrapper">
            <Header />
            <Menu />
            <Dashboard />
            <Footer />
        </div>
    )
}
