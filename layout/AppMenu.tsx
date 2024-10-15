/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Inicio', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Administrador',
            items: [
                { label: 'Tablas maestras', icon: 'pi pi-fw pi-table', to: '/admin/maestros' },
                { label: 'Ponderaciones', icon: 'pi pi-fw pi-chart-bar', to: '/admin/ponderacion' },
                { label: 'Garantias', icon: 'pi pi-fw pi-verified', to: '/admin/ponderacion' },
                { label: 'Indicadores', icon: 'pi pi-fw pi-chart-line', to: '/admin/ponderacion' },
                { label: 'Calificaciones', icon: 'pi pi-fw pi-trophy', to: '/admin/ponderacion' },
                { label: 'Tipo de cambio', icon: 'pi pi-fw pi-money-bill', to: '/admin/ponderacion' },
                { label: 'Fuentes externas', icon: 'pi pi-fw pi-external-link', to: '/admin/ponderacion' }
            ]
        },
        {
            label: 'Riesgo B2B',
            items: [
                { label: 'Clientes', icon: 'pi pi-fw pi-users', to: '/b2b/clientes', badge: 'NEW' },
                { label: 'Proyectos', icon: 'pi pi-fw pi-briefcase', to: '/b2b/proyectos'  }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
