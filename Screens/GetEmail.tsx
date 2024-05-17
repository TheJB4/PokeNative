import { styled } from "nativewind";
import { View, Text, TextInput, TouchableOpacityBase, TouchableOpacity } from "react-native";
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button1 from "../Components/Button1";

import type { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from "../store/userSlice";
import { useNavigation } from "@react-navigation/native";

let StyledView = styled(View)
let StyledText = styled(Text)
let StyledInput = styled(TextInput)

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Utiliza una direccion de email valida!').required('El email es requerido')
})

export default function GetEmail() {
    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigation<any>()
    return (
        <StyledView className="items-center flex-1 justify-between">
            <StyledText className="mt-10 mb-5 text-xl font-semibold">Vamos a comenzar!</StyledText>
            <StyledText className="text-3xl font-bold">Cual es su e-mail?</StyledText>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    dispatch(updateUser(values))
                    navigate.navigate('GetPassword')
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <StyledView className="flex-1">
                        <StyledInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            placeholder="E-mail"
                            value={values.email}
                            className="mt-5 w-[328px] h-[52px] border border-slate-400 text-start p-4  rounded-md" 
                        />
                        {errors.email && (
                            <StyledText className=" text-red-600">{errors.email}</StyledText>
                        )}
                        <Button1 onPress={handleSubmit} className={`mt-auto mb-20 ${!values.email && 'bg-slate-400'}`}>Continuar</Button1>
                    </StyledView>
                )}
            </Formik>
        </StyledView>
    )
}