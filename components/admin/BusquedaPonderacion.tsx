'use client';
import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FloatLabel } from 'primereact/floatlabel';
import { Calendar } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Nullable } from "primereact/ts-helpers";
import {PonderacionModel} from '../../types/admin';

export const BusquedaPonderacion = () => {
    const [vigencia, setVigencia] = useState<Nullable<Date>>();
    const [selectedPonderacion, setSelectedPonderacion] = useState<PonderacionModel | null>(null);
    const listPonderaciones: PonderacionModel[] = [
        { name: 'Calificación clientes'},
        { name: 'Indicadores'},
        { name: 'Riesgo Mercado'},
        { name: 'Proyecto'},
        { name: 'Liquidez'}
    ];
    return (
        <div className='card'>
            <Accordion activeIndex={0}>
                <AccordionTab header="Filtro de búsqueda">
                    <div className="formgrid grid p-1">
                        <div className="field col">
                            <FloatLabel className="w-full">
                                <Dropdown inputId="listPond" value={selectedPonderacion} onChange={(e: DropdownChangeEvent) => setSelectedPonderacion(e.value)} options={listPonderaciones} optionLabel="name" className="w-full" />
                                <label htmlFor="listPond">Ponderación</label>
                            </FloatLabel>
                        </div>
                        <div className="field col">
                            <FloatLabel className="w-full">
                                <Calendar inputId="buttondisplay" value={vigencia} onChange={(e) => setVigencia(e.value)} showIcon/>
                                <label htmlFor="buttondisplay">Vigencia desde</label>
                            </FloatLabel>
                        </div>
                        <div className="field col">
                            <FloatLabel className="w-full">
                                <Calendar inputId="buttondisplay" value={vigencia} onChange={(e) => setVigencia(e.value)} showIcon/>
                                <label htmlFor="buttondisplay">Vigencia hasta</label>
                            </FloatLabel>
                        </div>
                        <div className="field col">
                            <FloatLabel className="w-full">
                                <Calendar inputId="buttondisplay" value={vigencia} onChange={(e) => setVigencia(e.value)} showIcon disabled/>
                                <label htmlFor="buttondisplay">Vigencia en</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div className="formgrid grid justify-content-end">
                        <div className="flex flex-wrap gap-2 ">
                            <Button icon="pi pi-search" label="Buscar"></Button>
                            <Button severity="danger" icon="pi pi-times" label="Limpiar"></Button>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
