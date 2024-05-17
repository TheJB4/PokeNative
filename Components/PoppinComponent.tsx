import { useFonts } from "expo-font"
import { styled } from "nativewind"
import { Children } from "react"
import { Text } from "react-native"

let StyledText = styled(Text)

export default function PoppinComponent(props: any){
    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/Poppins-Regular.ttf')
    })
    return(
        <StyledText style={{fontFamily:'Poppins-Regular'}}  {...props}>{props.children}</StyledText>
    )
}