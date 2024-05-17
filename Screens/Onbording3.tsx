import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { styled } from "nativewind";

import Button1 from "../Components/Button1";
import PoppinComponent from "../Components/PoppinComponent";
import IconsAnimated from "../Components/IconsAnimated";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';

let StyledView = styled(View)
let StyledImage = styled(Image)
let StyleText = styled(Text)

export default function Onboarding3() {
    const constant = useAppSelector((state) => state.constantes.value)
    const navigate = useNavigation<any>()

    return (
        <StyledView
            className="h-full justify-center items-center"
            style={{ marginTop: constant, }}
        >
            <StyledImage
                source={require('../assets/Onboarding3.png')}
                className="self-center w-[300px] h-[300px]"
            />
            <StyledView className="w-full h-[30%] flex-col items-center justify-between">
                <PoppinComponent className="mt-10 text-center text-3xl w-[80%] font-medium">Esta listo para esta aventura?</PoppinComponent>
                <PoppinComponent className="mt-5 text-center text-lg w-[80%]">Crea una cuenta para comenzar a explorar el mundo de los Pokemon vamos!</PoppinComponent>

                <Button1 className="mt-[50px]" onPress={() => navigate.navigate('Register')}>Crear Cuenta</Button1>
                
                <TouchableOpacity onPress={(e) => navigate.navigate('Login')}>
                    <StyleText className="mt-[50px] text-[#173EA5] text-lg">Ya tengo una cuenta</StyleText>
                </TouchableOpacity>
            </StyledView>
        </StyledView>
    )
}