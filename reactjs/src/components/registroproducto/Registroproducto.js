import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './registroproducto.css'
import './styles.css'
import './scripts.js'


const Registroproducto = () => {


    return (
        <div className="registroproductoComponent">
            <div className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="card shadow-lg border-0 rounded-lg mt-4">
                                            <div className="card-header">
                                                <h2 className="text-center font-weight-light my-4">Formulario de ingreso de nuevo producto</h2>
                                                <h6 className="text-center font-weight-light my-4">Por favor registre el nuevo producto ingresando la información a continuación</h6>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div><h6 className="font-weight-light my-4">Registrado por (Admin)</h6></div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputID" type="text" placeholder="Ingrese ID de usuario" />
                                                                <label for="inputID">ID</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="inputUserName" type="text" placeholder="Ingrese el nombre de usuario" />
                                                                <label for="inputUserName">Nombre de usuario</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div><h6 className="font-weight-light my-4">Información del producto</h6></div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputUPC" type="text" placeholder="Ingrese código UPC" />
                                                        <label for="inputUPC">Código UPC</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputProducto" type="text" placeholder="Ingrese el producto" />
                                                        <label for="inputProducto">Nombre</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputMarca" type="text" placeholder="Ingrese marca" />
                                                        <label for="inputMarca">Marca</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputModelo" type="text" placeholder="Ingrese modelo" />
                                                        <label for="inputModelo">Modelo</label>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputFabricacion" type="text" placeholder="Ingrese el año de fabricación" />
                                                                <label for="inputFabricacion">Año de fabricación</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputCompra" name="fcompra" type="text" placeholder="dd/mm/yyyy" />
                                                                <label for="inputCompra">Fecha de compra</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputPrecio" type="text" placeholder="Ingrese el precio de venta" />
                                                        <label for="inputPrecio">Precio de venta</label>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <div className="d-grid"><a className="btn btn-primary btn-block" onclick="sweetalertclick" href="#">Crear nuevo producto</a></div>
                                                     
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><a href="Admin_roles.html">Regresar a la página de incio</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; TICDev's Solutions 2021 - Misión TIC 2022</div>
                                    <div>
                                        <a href="#">Política de privacidad</a>
                                        &middot;
                                        <a href="#">Términos &amp; Condiciones</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                <script src="/TICDevSolutions/Sprints/2/Main/sweetalert.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                <script src="./scripts.js"></script>
            </div>
        </div >

    )
}


export default Registroproducto
