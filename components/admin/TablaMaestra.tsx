'use client';
import React, { useState, useEffect, ReactElement, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FloatLabel } from 'primereact/floatlabel';
import { Calendar } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Nullable } from "primereact/ts-helpers";
import {Listas, ColumnMeta, ListaMaestra, Item} from "../../types/admin"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { MultiStateCheckbox, MultiStateCheckboxChangeEvent } from 'primereact/multistatecheckbox';

export const TablaMaestra = () => {
    const [selectedCategoria, setSelectedCategoria] = useState<Listas | null>(null);
    const [visible, setVisible] = useState(false);
    const [titleRow, setTitleRow] = useState<string | undefined>("");
    const [edit, setEdit] = useState<boolean>(false);
    const [newRow, setNewRow] = useState<ListaMaestra>();
    const toast = useRef<Toast>(null);
    const [elementos, setElementos] = useState<ListaMaestra[]>([
        {
            id: 'MNED0001',
            name: 'Pesos Colombianos',
            alfa1: 'COP',
            alfa2: undefined,
            num1: undefined,
            num2: undefined,
            bool1: undefined,
            bool2: undefined
        },
        {
            id: 'MNED0002',
            name: 'Dolares Americanos',
            alfa1: 'USD',
            alfa2: 'Ejemplo1',
            num1: 5.4,
            num2: 12.23,
            bool1: true,
            bool2: true
        },
        {
            id: 'MNED0003',
            name: 'Pesos Chilenos',
            alfa1: 'CLP',
            alfa2: undefined,
            num1: undefined,
            num2: undefined,
            bool1: undefined,
            bool2: undefined
        },
        {
            id: 'MNED0004',
            name: 'Soles Peruanos',
            alfa1: 'PEN',
            alfa2: undefined,
            num1: undefined,
            num2: undefined,
            bool1: undefined,
            bool2: undefined
        }
    ]);
    const listCategorias: Listas[] = [
        { name: 'Grupos de datos para indicadores', id: 1},
        { name: 'Monedas', id: 2},
        { name: 'Variables para indicadores', id: 3},
        { name: 'Datos de informacion financiera', id: 4},
        { name: 'Datos adicionales informacion financiera', id: 5}
    ];
    const columns: ColumnMeta[] = [
        { field: 'alfa1', header: 'Valor 1' },
        { field: 'alfa2', header: 'Valor 2' },
        { field: 'num1', header: 'Valor 3' },
        { field: 'num2', header: 'Valor 4' },
        { field: 'bool1', header: 'Valor 5' },
        { field: 'bool2', header: 'Valor 6' },
    ];
    const [visibleColumns, setVisibleColumns] = useState<ColumnMeta[]>(columns);
    const [bool1, setBool1] = useState<string>('');
    const [bool2, setBool2] = useState<string>('');
    const options: Item[] = [
        { value: 'Verdadero', icon: 'pi pi-check-circle' },
        { value: 'Falso', icon: 'pi pi-times-circle' }
    ];


    const onColumnToggle = (event: MultiSelectChangeEvent) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol: any) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const actionBodyTemplate = (rowData: ListaMaestra) => {
        return (
            <>
                <div className="flex flex-wrap gap-2">
                    <Button severity="info" icon="pi pi-pen-to-square" rounded tooltip="Editar" tooltipOptions={{ position: 'top' }} onClick={() => handlerOpenEdit(rowData)}></Button>
                    <Button severity="danger" icon="pi pi-trash" rounded tooltip="Eliminar" tooltipOptions={{ position: 'top' }} onClick={confirmDelete}></Button>
                </div>
            </>
        );
    };

    const bodyTemplateBool = (rowData: ListaMaestra) => {
        if (!rowData.bool1) {
            return;
        }
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.bool1, 'false-icon pi-times-circle': !rowData.bool1 })}></i>;
    }

    const handlerOpenEdit = (rowData: ListaMaestra) => {
        console.log(rowData);
        setEdit(true);
        setTitleRow(`Modificar ${rowData.id}`);
        setVisible(true);
    }

    const handlerDelete = (rowData: ListaMaestra) => {
        console.log(rowData);
    }

    const handlerNew = () => {
        console.log("NUEVO")
        setTitleRow("Nuevo elemento");
        setVisible(true);
    }

    const footerDialog = (
        <div>
            <Button severity="danger" icon="pi pi-times" outlined onClick={() => setVisible(false)}>Cancelar</Button>
            {edit ? 
                <Button severity="success" icon="pi pi-check" outlined onClick={() => updateRow()}>Actualizar</Button>
            :
                <Button severity="success" icon="pi pi-plus" outlined onClick={() => newElemento()}>Guardar</Button>
            }
            
        </div>
    );

    const updateRow = () => {
        setVisible(false);
        setEdit(false);
        toast.current?.show({severity:'success', summary: 'Actualizado', detail:'Se ha actualizado el elemento correctamente', life: 3000});
    }

    const newElemento = () => {
        setVisible(false);
        toast.current?.show({severity:'success', summary: 'Actualizado', detail:'Se ha actualizado el elemento correctamente', life: 3000});
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <MultiSelect value={visibleColumns} options={columns} optionLabel="header" onChange={onColumnToggle} className="w-full sm:w-20rem" display="chip" />
                <Button type="button" severity="success" icon="pi pi-plus-circle" label="Nuevo" outlined onClick={handlerNew} />
            </div>
        );
    };

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirmDelete = () => {
        confirmPopup({
            message: '¿Estás seguro de eliminar este elemento?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    const headerNew = <div className="text-xl font-bold">{titleRow}</div>;
    const header = renderHeader();

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <div className='card'>
                <div className="formgrid grid p-1">
                    <FloatLabel className="w-full">
                        <Dropdown showClear inputId="listPond" value={selectedCategoria} onChange={(e: DropdownChangeEvent) => setSelectedCategoria(e.value)} options={listCategorias} optionLabel="name" className="w-full" />
                        <label htmlFor="listPond">Seleccione una categoria</label>
                    </FloatLabel>
                </div>
            </div>
            <div className='card'>
                <DataTable value={elementos} header={header} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="Id" />
                    <Column field="name" header="Nombre" />
                    {visibleColumns.map((col) => (
                        <Column key={col.field} field={col.field} header={col.header} body={col.field.includes('bool') && bodyTemplateBool} />
                    ))}
                    <Column headerClassName="w-10rem" body={actionBodyTemplate} />
                </DataTable>
            </div>
            <Dialog header={headerNew} closeIcon="pi pi-times" visible={visible} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} footer={footerDialog} onHide={() => {if (!visible) return; setVisible(false); setEdit(false) }}>
                <div className="grid flex">
                    <div className="flex-1 h-4rem w-full p-4">
                        <FloatLabel>
                            <Dropdown showClear inputId="listPond" value={selectedCategoria} onChange={(e: DropdownChangeEvent) => setSelectedCategoria(e.value)} options={listCategorias} optionLabel="name" className="w-full" />
                            <label htmlFor="listPond">Seleccione una categoria</label>
                        </FloatLabel>
                    </div>
                    <div className="flex-1 h-4rem w-full p-4">
                        <FloatLabel>
                            <InputText id="version" value={newRow?.name} className="p-inputtext-full"/>
                            <label htmlFor="version">Nombre</label>
                        </FloatLabel>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel>
                            <InputText id="version" value={newRow?.alfa1} className="p-inputtext-full"/>
                            <label htmlFor="version">Valor 1</label>
                        </FloatLabel>
                    </div>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel>
                            <InputText id="version" value={newRow?.alfa2} />
                            <label htmlFor="version">Valor 2</label>
                        </FloatLabel>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel>
                            <InputNumber value={newRow?.num1} mode="decimal" showButtons />
                            <label htmlFor="version">Valor 3</label>
                        </FloatLabel>
                    </div>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel>
                            <InputNumber value={newRow?.num2} mode="decimal" showButtons />
                            <label htmlFor="version">Valor 4</label>
                        </FloatLabel>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 h-4rem p-4">
                        Valor 5 &nbsp;&nbsp;
                        <MultiStateCheckbox value={bool1} onChange={(e: MultiStateCheckboxChangeEvent) => setBool1(e.value)} options={options} optionValue="value" />&nbsp;
                        <span>{bool1 || 'Sin valor'}</span>
                    </div>
                    <div className="flex-1 h-4rem p-4">
                        Valor 6 &nbsp;&nbsp;
                        <MultiStateCheckbox value={bool2} onChange={(e: MultiStateCheckboxChangeEvent) => setBool2(e.value)} options={options} optionValue="value" />&nbsp;
                        <span>{bool2 || 'Sin valor'}</span>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
