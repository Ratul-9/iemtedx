"use client";
import React from 'react';
import SchedulePage from "@/components/SchedulePage";
import Footer from "@/components/footer";

export default function Schedule(){
    return(
        <div className="min-h-screen">
            <SchedulePage />
            <Footer />
        </div>
    );
}