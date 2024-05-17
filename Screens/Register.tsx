import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { styled } from "nativewind";

import Button1 from "../Components/Button1";
import PoppinComponent from "../Components/PoppinComponent";
import IconsAnimated from "../Components/IconsAnimated";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
let AppleIcon = require('../assets/apple1.svg')
import { AntDesign } from '@expo/vector-icons';

let StyledView = styled(View)
let StyledImage = styled(Image)
let StyleText = styled(Text)
let StyledBtn = styled(TouchableOpacity)

export default function Register() {
    const navigate = useNavigation<any>()

    return (
        <StyledView
            className="justify-center items-center"
        >
            <StyledImage
                source={require('../assets/registerImage.png')}
                className="self-center w-[300px] h-[300px]"
            />
            <StyledView className="w-full h-[40%] flex-col items-center justify-between">
                <PoppinComponent className="mt-10 text-center text-3xl w-[80%] font-medium">Falta poco para explorar este mundo!</PoppinComponent>
                <PoppinComponent className="mt-5 text-center text-lg w-[80%]">Como se desea conectar?</PoppinComponent>

                <StyledView className="w-full h-[350px] items-center justify-end">
                    <StyledBtn className="w-[330px] h-[58px] border border-x-black justify-center rounded-3xl mb-5 flex-row items-center">
                        <AntDesign name="apple1" size={24} color="black" />
                        <PoppinComponent className="text-gray-700 font-bold text-center items-center ml-5">Continuar con Apple</PoppinComponent>
                    </StyledBtn>

                    <StyledBtn className="w-[330px] h-[58px] border border-x-black justify-center rounded-3xl mb-5 flex-row items-center">
                        <StyledImage
                            source={require('../assets/GoogleIcon.png')}
                            className="self-center"
                        />
                        <PoppinComponent className=" text-gray-700 font-bold  text-center items-center ml-5">Continuar con Google</PoppinComponent>
                    </StyledBtn>

                    <Button1 className="" onPress={() => navigate.navigate('GetEmail')}>Continuar con Email</Button1>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}