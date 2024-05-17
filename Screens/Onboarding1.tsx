import { View, Text, Image } from "react-native";
import { useAppSelector } from "../store/hooks";
import { styled } from "nativewind";

import Button1 from "../Components/Button1";
import PoppinComponent from "../Components/PoppinComponent";
import IconsAnimated from "../Components/IconsAnimated";
import { useNavigation } from "@react-navigation/native";

let StyledView = styled(View)
let StyledImage = styled(Image)
let StyleText = styled(Text)

export default function Onboarding1() {
    const constant = useAppSelector((state) => state.constantes.value)
    const navigate = useNavigation<any>()

    return (
        <StyledView
            className="h-full justify-center items-center"
            style={{ marginTop: constant, }}
        >
            <StyledImage
                source={require('../assets/Onboarding1.png')}
                className="self-center w-[300px] h-[300px]"
            />
            <StyledView className="w-full h-[30%] flex-col items-center justify-between">
                <PoppinComponent className="mt-10 text-center text-3xl w-[80%] font-medium">Todos Los Pokemons en un solo Lugar!</PoppinComponent>
                <PoppinComponent className="mt-5 text-center text-lg w-[80%]">Accede a una amplia lista de Pokémon de todas las generaciones creada por Nintendo</PoppinComponent>
                <IconsAnimated className="mt-10" />
                <Button1 className="mt-[50px]" onPress={() => navigate.navigate('Onboarding2')}>Continuar</Button1>
            </StyledView>
        </StyledView>
    )
}