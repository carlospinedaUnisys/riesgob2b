'use client';
import React, { useState, useRef } from 'react';
import { TreeTable, TreeTableTogglerTemplateOptions } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { TreeNode } from 'primereact/treenode';
import { Nullable } from "primereact/ts-helpers";
import {PonderacionModel} from '../../types/admin';

export const ArbolPonderacion = () => {
    const [titleNode, setTitleNode] = useState(null);
    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const toast = useRef<Toast>(null);
    const [value, setValue] = useState<PonderacionModel>({
        vigencia: '',
        version: 0,
        name: '',
        peso: 0,
    });
    const [selectedNode, setSelectedNode] = useState<TreeNode>({
        key: 1,
        data: {
            name: '',
            size: '',
            type: '',
            nivel: '',
            vigencia: ''
        },
        children: [
            {
                key: 2,
                data: {
                    name: '',
                    size: '',
                    type: '',
                    nivel: '',
                    vigencia: ''
                },
            }
        ]
    });
    const [nodes, setNodes] = useState<TreeNode[]>([
        {
            key: '0',
            data: {
                name: 'Calificación clientes',
                size: '100%',
                type: 'Ponderación',
                nivel: 0,
                vigencia: '2022-01-01'
            },
            children: [
                {
                    key: '0-0',
                    data: {
                        name: 'Indicadores',
                        size: '70%',
                        type: 'Ponderación',
                        nivel: 1,
                        vigencia: '2022-01-01'
                    },
                    children: [
                        {
                            key: '0-0-0',
                            data: {
                                name: 'Liquidez',
                                size: '40%',
                                type: 'Ponderación',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            },
                            children: [
                                {
                                    key: '0-0-0-0',
                                    data: {
                                        name: 'Capital de trabajo Neto Operativo',
                                        size: '20%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-0-1',
                                    data: {
                                        name: 'Indice de Flujo de Caja Operativo',
                                        size: '15%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-0-2',
                                    data: {
                                        name: 'Prueba Acida',
                                        size: '10%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-0-3',
                                    data: {
                                        name: 'Ciclo de caja días',
                                        size: '40%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-0-4',
                                    data: {
                                        name: 'PKT',
                                        size: '15%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                }
                            ]
                        },
                        {
                            key: '0-0-1',
                            data: {
                                name: 'Endeudamiento',
                                size: '25%',
                                type: 'Ponderación',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            },
                            children: [
                                {
                                    key: '0-0-1-0',
                                    data: {
                                        name: 'Cobertura Servicio Deuda',
                                        size: '20%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-1-1',
                                    data: {
                                        name: 'Concentración endeudamiento corto plazo',
                                        size: '30%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-1-2',
                                    data: {
                                        name: 'Capacidad de pago financiero CP',
                                        size: '25%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-1-3',
                                    data: {
                                        name: 'Capacidad de pago financiero LP',
                                        size: '10%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-1-4',
                                    data: {
                                        name: 'Nivel de endeudamiento',
                                        size: '15%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                }
                            ]
                        },
                        {
                            key: '0-0-2',
                            data: {
                                name: 'Rentabilidad',
                                size: '10%',
                                type: 'Ponderación',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            },
                            children: [
                                {
                                    key: '0-0-2-0',
                                    data: {
                                        name: 'Margen de Beneficio Bruto',
                                        size: '100%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                }
                            ]
                        },
                        {
                            key: '0-0-3',
                            data: {
                                name: 'Eficiencia',
                                size: '10%',
                                type: 'Ponderación',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            },
                            children: [
                                {
                                    key: '0-0-3-0',
                                    data: {
                                        name: 'ROA',
                                        size: '50%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-3-1',
                                    data: {
                                        name: 'ROE',
                                        size: '50%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                }
                            ]
                        },
                        {
                            key: '0-0-4',
                            data: {
                                name: 'Solvencia',
                                size: '15%',
                                type: 'Ponderación',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            },
                            children: [
                                {
                                    key: '0-0-4-0',
                                    data: {
                                        name: 'Relación deuda vs Capital',
                                        size: '35%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                },
                                {
                                    key: '0-0-4-1',
                                    data: {
                                        name: 'Capacidad de Asumir los Gastos de Operación',
                                        size: '65%',
                                        type: 'Indicador',
                                        nivel: 3,
                                        vigencia: '2022-01-01'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: {
                        name: 'Riesgo Mercado',
                        size: '20%',
                        type: 'Ponderación',
                        nivel: 1,
                        vigencia: '2022-01-01'
                    },
                    children: [
                        {
                            key: '0-1-0',
                            data: {
                                name: 'Sector',
                                size: '50%',
                                type: 'Indicador',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            }
                        },
                        {
                            key: '0-1-1',
                            data: {
                                name: 'País',
                                size: '50%',
                                type: 'Indicador',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            }
                        }
                    ]
                    
                },
                {
                    key: '0-2',
                    data: {
                        name: 'Proyecto',
                        size: '10%',
                        type: 'Ponderación',
                        nivel: 1,
                        vigencia: '2022-01-01'
                    },
                    children: [
                        {
                            key: '0-1-0',
                            data: {
                                name: 'CAPEX + OPEX vs Flujo de Caja',
                                size: '100%',
                                type: 'Indicador',
                                nivel: 2,
                                vigencia: '2022-01-01'
                            }
                        }
                    ]
                }
            ]
        }
    ]);

    const actionTemplate = (node: TreeNode) => {
        return (
            node.data.type === 'Indicador' ?
            <div></div>
            :
            <div className="flex flex-wrap gap-2">
                <Button severity="success" icon="pi pi-eye" rounded tooltip="Ver Ponderación" tooltipOptions={{ position: 'top' }} onClick={() => handlerOpenView(node)}></Button>
                <Button severity="info" icon="pi pi-pen-to-square" rounded tooltip="Editar Ponderación" tooltipOptions={{ position: 'top' }} onClick={() => handlerOpenEdit(node)}></Button>
            </div>
        );
    };

    const handlerOpenView = (node: TreeNode) => {
        console.log(node);
        setSelectedNode(node);
        setTitleNode(node.data.name);
        setVisible(true);
    }

    const handlerOpenEdit = (node: TreeNode) => {
        console.log(node);
        setSelectedNode(node);
        setTitleNode(node.data.name);
        setVisibleEdit(true);
    }

    const togglerTemplate = (node: TreeNode,  options: TreeTableTogglerTemplateOptions) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-treetable-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-treetable-toggler p-link" style={options.buttonStyle} tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    const footerContent = (
        <div>
            <Button severity="danger" icon="pi pi-times" outlined onClick={() => setVisibleEdit(false)}>Cancelar</Button>
            <Button severity="success" icon="pi pi-check" outlined onClick={() => update()}>Actualizar</Button>
        </div>
    );

    const update = () => {
        setVisibleEdit(false);
        toast.current?.show({severity:'success', summary: 'Actualizado', detail:'Se ha actualizado la ponderación correctamente', life: 3000});

    }

    const headerTable = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Ponderaciones</span>
        </div>)

    const headerView = <div className="text-xl font-bold">{titleNode}</div>;

    const rowClassName = (node: TreeNode) => {
        const stockClassName = {
            'bg-yellow-100': node.data.nivel === 0,
            'bg-blue-100': node.data.nivel === 1,
            'bg-green-100': node.data.nivel === 2,
            'bg-gray-100': node.data.nivel === 3,
        };
        return stockClassName;
    }

    const createDynamicTabs = () => {
        return selectedNode.children?.map((node, i) => {
            return (
                <div className="flex" key={node.key}>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel >
                            <InputText id="name" value={node.data.name} disabled/>
                            <label htmlFor="name">Nombre</label>
                        </FloatLabel>
                    </div>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel >
                            <InputText id="name" value={node.data.size} disabled className="p-inputtext-sm"/>
                            <label htmlFor="name">Peso</label>
                        </FloatLabel>
                    </div>
                </div>
            );
        });
    };

    const createDynamicEdit = () => {
        return selectedNode.children?.map((node, i) => {
            return (
                <div className="flex" key={node.key}>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel >
                            <InputText id="name" value={node.data.name} disabled/>
                            <label htmlFor="name">Nombre</label>
                        </FloatLabel>
                    </div>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel >
                            <InputText id="name" value={node.data.size} className="p-inputtext-sm"/>
                            <label htmlFor="name">Versión</label>
                        </FloatLabel>
                    </div>
                </div>
            );
        });
    };
  return (
    <>
        <Toast ref={toast} />
        <div className="card">            

            <TreeTable value={nodes} header={headerTable} rowClassName={rowClassName} togglerTemplate={togglerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Nombre" expander style={{ width: '25rem' }}></Column>
                <Column field="size" header="Peso" style={{ width: '7rem' }}></Column>
                <Column field="type" header="Tipo" style={{ width: '7rem' }}></Column>
                <Column body={actionTemplate} headerClassName="w-10rem" />
            </TreeTable>
            <Dialog header={headerView} closeIcon="pi pi-times" visible={visible} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <Accordion >
                    <AccordionTab key="1" header={<>Version 1 - Vigencia {selectedNode.data.vigencia}</>}>
                        {createDynamicTabs()}
                    </AccordionTab>
                    <AccordionTab key="2" header="Version 2 - Vigencia 2023-05-25">
                        {createDynamicTabs()}
                    </AccordionTab>
                    <AccordionTab key="3" header="Version 3  - Vigencia 2024-02-10">
                        {createDynamicTabs()}
                    </AccordionTab>
                </Accordion>
            </Dialog>
            <Dialog header={headerView} closeIcon="pi pi-times" visible={visibleEdit} footer={footerContent} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => {if (!visibleEdit) return; setVisibleEdit(false); }}>
                <div className="flex">
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel>
                            <InputText id="version" value={"Version 4"} disabled className="p-inputtext-sm"/>
                            <label htmlFor="version">Versión</label>
                        </FloatLabel>
                    </div>
                    <div className="flex-1 h-4rem p-4">
                        <FloatLabel>
                            <Calendar inputId="vigencia" value={value.vigencia} onChange={(e) => setValue({...value,vigencia:e.value})} />
                            <label htmlFor="vigencia">Vigencia</label>
                        </FloatLabel>
                    </div>
                </div>
                <br/>
                {createDynamicEdit()}
            </Dialog>
        </div>
    </>
  )
}
