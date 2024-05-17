import { styled } from "nativewind";
import { View, Text, Image } from "react-native";
import { useAppSelector } from "../store/hooks";
import { useNavigation } from "@react-navigation/native";
import PoppinComponent from "../Components/PoppinComponent";
import IconsAnimated from "../Components/IconsAnimated";
import Button1 from "../Components/Button1";


let StyledView = styled(View)
let StyledImage = styled(Image)
let StyleText = styled(Text)

export default function Onboarding2() {
    const constant = useAppSelector((state) => state.constantes.value)
    const navigate = useNavigation<any>()
    return (
        <StyledView
            className="h-full justify-center items-center"
            style={{ marginTop: constant, }}
        >
            <StyledImage
                source={require('../assets/sprite_hilda1.png')}
                className="self-center w-[300px] h-[300px]"
            />
            <StyledView className="w-full h-[30%] flex-col items-center justify-between">
                <PoppinComponent className="mt-10 text-center text-3xl w-[80%] font-medium" style={{ fontFamily: 'Poppins-Regular' }}>Mantenga su Pokedex actualizada</PoppinComponent>
                <PoppinComponent className="mt-5 text-center text-lg w-[80%]" style={{ fontFamily: 'Poppins-Regular' }}>Regístrate y mantén tu perfil, Pokémon favoritos, configuraciones y mucho más guardados en la aplicación, incluso sin conexión a Internet.</PoppinComponent>

                <IconsAnimated className="mt-10" reves={true}/>

                <Button1 className="mt-[50px]" onPress={() => navigate.navigate('Onboarding3')}>Vamos a comenzar!</Button1>
            </StyledView>
        </StyledView>
    )
}