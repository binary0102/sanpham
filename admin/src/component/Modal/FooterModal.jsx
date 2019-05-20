import React, { Fragment } from 'react';


export const ModalFooterProduct = ({ updateRequest, product, setShow }) => {
    console.log("123213")
    return (
        <div>
            <button onClick={() => setShow(false)} type="button" class="btn btn-secondary mr-3" data-dismiss="modal">Close</button>
            <button onClick={() => { updateRequest(product._id, product); setTimeout(() => setShow(false), 500) }} type="button" class="btn btn-success mr-3">Lưu & Thêm mới</button>
        </div>)
}
export const ModalContentProduct = ({ product, onProductChange }) => {

    return (
        <Fragment>

            <div label="Thông tin">
                <div className="container">                              <div className="row">
                    <div className="col-md-7">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm">
                                Mã hàng hóa
                                        </label>
                            <div class="col-sm-9">

                                <input onChange={(e) => {

                                }} type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm">
                                Tên hàng
                                        </label>
                            <div class="col-sm-9">
                                <input
                                    onChange={(e) => {
                                        e.preventDefault();
                                        onProductChange({ ...product, title: e.target.value })

                                    }}
                                    value={product.title} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm">
                                Giá bán
                                        </label>
                            <div class="col-sm-9">
                                <input
                                    onChange={(e) => {
                                        e.preventDefault();
                                        onProductChange({ ...product, retailPrice: e.target.value })
                                    }}
                                    value={product.retailPrice} type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm">
                                Giá giảm giá
                                        </label>
                            <div class="col-sm-9">
                                <input value={product.salePrice} type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm">
                                Số lượng
                                        </label>
                            <div class="col-sm-9">
                                <input value={product.quantity} type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm">
                                Số lượng đặt hàng
                                        </label>
                            <div class="col-sm-9">
                                <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" />
                            </div>
                        </div>


                    </div>
                    <div className="col-md-5">
                        b
                                </div>
                </div>
                </div>

            </div>
            <div label="Mô tả chi tiết">
             
            </div>
            <div label="Thành phần">
                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
        </Fragment>
    )
}