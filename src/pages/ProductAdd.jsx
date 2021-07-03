import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from "yup"
import {Button} from 'semantic-ui-react'
import RgsTextInput from '../utilities/customFormControls/RgsTextInput'

export default function ProductAdd () {

    const initialValues = { productName: "", unitPrice: 0 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün Adı Zorunlu"),
        unitPrice: Yup.number().required("Ürün Fiyatı Zorunludur.")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}>
                <Form className="ui form">
                    <RgsTextInput name="productName" placeholder="Ürün Adı"/>
                    <RgsTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
