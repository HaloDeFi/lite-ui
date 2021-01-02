import React, { useContext } from "react";
import { Icon, SocialIcon as NativeSocialIcon, SocialIconProps } from "react-native-elements";

import { GlobalContext } from "../context/GlobalContext";
import useColors from "../hooks/useColors";
import useLinker from "../hooks/useLinker";
import FlexView from "./FlexView";

const SocialIcons = () => {
    const { darkMode } = useContext(GlobalContext);
    const { background, textLight } = useColors();
    const onPressTwitter = useLinker("https://twitter.com/halodefi", "", "_blank");
    const onPressTelegram = useLinker("http://t.me/HaloDeFi", "", "_blank");
    return (
        <FlexView style={{ width: "100%", justifyContent: "center" }}>
            <SocialIcon type="twitter" onPress={onPressTwitter} />
            <Icon
                type={"material-community"}
                name={"telegram"}
                raised={true}
                reverse={true}
                color={background}
                reverseColor={darkMode ? "white" : "#7289da"}
                style={{ backgroundColor: background }}
                containerStyle={{
                    borderWidth: 1,
                    borderColor: darkMode ? "white" : textLight
                }}
                onPress={onPressTelegram}
            />
        </FlexView>
    );
};

const SocialIcon = (props: SocialIconProps) => {
    const { darkMode } = useContext(GlobalContext);
    const { background, textLight } = useColors();
    return (
        <NativeSocialIcon
            {...props}
            light={!darkMode}
            iconColor={darkMode ? "white" : undefined}
            style={{
                backgroundColor: background,
                borderWidth: 1,
                borderColor: darkMode ? "white" : textLight
            }}
        />
    );
};

export default SocialIcons;
