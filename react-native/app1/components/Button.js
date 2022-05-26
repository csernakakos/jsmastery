import { TouchableOpacity, Image, View, Text } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";

export function CircleButton({ imgUrl, handlePress, ...props }) {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props,
            }}
        >

        </TouchableOpacity>
    )
}

export function RectButton() {
    return (
        "RectButton"
    )
}