import { styled } from "nativewind"
import { View } from "react-native"

let StyledView = styled(View)
export default function IconsAnimated(props: any) {
    return (
        <StyledView className="flex-row" {...props}>
            {props.reves ? (
                <>
                    <StyledView className="bg-[#8593b5] w-[9px] h-[9px] rounded-xl mr-[8px]"></StyledView>
                    <StyledView className="bg-[#173EA5] w-[28px] h-[9px] rounded-xl"></StyledView>
                </>
            ) : (
                <>
                    <StyledView className="bg-[#173EA5] w-[28px] h-[9px] rounded-xl"></StyledView>
                    <StyledView className="bg-[#8593b5] w-[9px] h-[9px] rounded-xl ml-[8px]"></StyledView>
                </>
            )}
        </StyledView>
    )
}