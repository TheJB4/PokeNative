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
    password: Yup.string()
    .required('La contraseña es requerida')
    .min(8, 'La contraseña debe contener minimo 8 caracteres.')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'La contraseña debe contener almenos 1 letra,1 numero y un caracter especial')
})

export default function GetPassword() {
    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigation<any>()
    let [viewPassword, setViewPassword] = useState(true)
    return (
        <StyledView className="items-center flex-1 justify-between">
            <StyledText className="mt-10 mb-5 text-xl font-semibold">Ahora...</StyledText>
            <StyledText className="text-3xl font-bold">Crea una contraseña!</StyledText>
            <Formik
                initialValues={{ password: '' }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    dispatch(updateUser(values))
                    navigate.navigate('GetName')
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <StyledView className="flex-1">
                        <StyledInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            placeholder="Password"
                            secureTextEntry={viewPassword}
                            value={values.password}
                            className="mt-5 w-[328px] h-[52px] border border-slate-400 text-start p-4  rounded-md relative" 
                        />
                        <StyledTouchable className="absolute right-5 top-8" onPress={() => setViewPassword(!viewPassword)}>
                            {viewPassword ? <Feather name="eye" size={24} color="black" />  : <Feather name="eye-off" size={24} color="black" /> }   
                        </StyledTouchable>
                        {errors.password && (
                            <StyledText className=" text-red-600 text-center w-[300px]">{errors.password}</StyledText>
                        )}
                        <Button1 onPress={handleSubmit} className={`mt-auto mb-20 ${!values.password && 'bg-slate-400'}`}>Continuar</Button1>
                    </StyledView>
                )}
            </Formik>
        </StyledView>
    )
}