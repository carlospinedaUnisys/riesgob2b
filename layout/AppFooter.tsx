/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src={`/layout/images/Logo_ITCO.png`} alt="Logo" height="50" className="mr-2" />
            by
            <span className="font-medium ml-2">Unisys de Colombia</span>
        </div>
    );
};

export default AppFooter;
