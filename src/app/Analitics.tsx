
"use client"
import React from 'react'
import { useReportWebVitals } from 'next/web-vitals'

const Analitics = ({ children }) => {
    useReportWebVitals(metric => {

        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments) }
        // @ts-expect-error
        gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
            event_label: metric.id, // id unique to current page load
            non_interaction: true, // avoids affecting bounce rate.
        });
    })
    return (
        <>{children}</>
    )
}

export default Analitics