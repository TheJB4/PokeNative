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

export default function RegisterSucces() {
    const constant = useAppSelector((state) => state.constantes.value)
    const navigate = useNavigation<any>()

    return (
        <StyledView
            className="justify-center items-center flex-1"
            style={{ marginTop: constant }}
        >
            <StyledView className="h-[50%] w-[100%] justify-center items-center">
                <StyledImage
                    source={require('../assets/Path.png')}
                    className="self-center w-[100%] h-[100%] relative"
                />
                <StyledImage
                    source={require('../assets/SuccesRegister.png')}
                    className="self-center  w-[400px] h-[400px]  absolute bottom-0 rigth-0"
                />
            </StyledView>
            <StyledView className="h-[50%] w-full flex-col items-center  flex-1">
                <PoppinComponent className="mt-10 text-center text-3xl w-[70%] font-medium">Su cuenta fue creada con Exito!</PoppinComponent>
                <PoppinComponent className="mt-5 text-center text-lg w-[80%]">¡Bienvenido, entrenador! Estamos emocionados de seguir su viaje.</PoppinComponent>

                <Button1 className="mt-20 font-bold" onPress={() => navigate.navigate('Register')}>Continuar</Button1>
            </StyledView>
        </StyledView>
    )
}