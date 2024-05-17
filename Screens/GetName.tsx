import { styled } from "nativewind";
import { View, Text, TextInput, TouchableOpacityBase, TouchableOpacity } from "react-native";
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button1 from "../Components/Button1";

import type { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from "../store/userSlice";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

import { useState } from "react";

let StyledView = styled(View)
let StyledText = styled(Text)
let StyledInput = styled(TextInput)
let StyledTouchable = styled(TouchableOpacity)

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es requerido')
})

export default function GetName() {
    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigation<any>()
    return (
        <StyledView className="items-center flex-1 justify-between">
            <StyledText className="mt-10 mb-5 text-xl font-semibold">Para finalizar</StyledText>
            <StyledText className="text-3xl font-bold">Cual es tu nombre?</StyledText>
            <Formik
                initialValues={{ name: '' }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    dispatch(updateUser(values))
                    navigate.navigate('RegisterSucces')
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <StyledView className="flex-1">
                        <StyledInput
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            placeholder="Nombre maestro pokemon"
                            value={values.name}
                            className="mt-5 w-[328px] h-[52px] border border-slate-400 text-start p-4  rounded-md relative"
                        />
                        {errors.name && (
                            <StyledText className=" text-red-600 text-center w-[300px]">{errors.name}</StyledText>
                        )}
                        <StyledText className=" text-gray-600 text-center w-[300px]">Este sera el nombre de usuario en la app</StyledText>
                        <Button1 onPress={handleSubmit} className={`mt-auto mb-20 ${!values.name && 'bg-slate-400'}`}>Continuar</Button1>
                    </StyledView>
                )}
            </Formik>
        </StyledView>
    )
}