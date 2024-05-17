import { styled } from "nativewind"
import { Text, TouchableOpacity } from "react-native"
import PoppinComponent from "./PoppinComponent"



let StyleText = styled(Text)
let StyledBtn = styled(TouchableOpacity)

export default function Button1(props: any) {
    return (
        <StyledBtn className="w-[330px] h-[58px]  bg-[#173EA5] justify-center rounded-3xl" {...props}>
            <PoppinComponent className="text-white text-center items-center">{props.children}</PoppinComponent>
        </StyledBtn>
    )
}