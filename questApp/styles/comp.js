import { StyleSheet } from 'react-native';

import { 
    Colors, 
    Sizes,
    Spaces
} from '../constants/theme';

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginVertical: Spaces.base_height / 5,
        marginHorizontal: Spaces.base_width,
        borderRadius: Sizes.small,
        borderWidth: Sizes.small / 4,
        borderColor: Colors.dark
    },

    input: {
        width: "80%",
        height: Spaces.base_height,
        fontSize: Sizes.base * 1.1
    },

    titleText: {
        fontSize: Sizes.large,
        color: Colors.primary
    },

    largeText: {
        fontSize: Sizes.large * 1,
        color: Colors.primary,
        marginVertical: Spaces.small_width,
        paddingHorizontal: Spaces.medium_width
    },

    paragraph: {
        fontSize: Sizes.base,
        color: Colors.dark
    },

    primaryText: {
        fontSize: Sizes.base,
        color: Colors.primary
    },

    mediumText: {
        fontSize: Sizes.medium,
        color: Colors.light
    },

    boldText: {
        fontSize: Sizes.medium / 1.25,
        color: Colors.dark,
        fontWeight: "bold"
    },

    grayText: {
        fontSize: Sizes.base,
        color: Colors.gray
    },

    smallGrayText: {
        fontSize: Sizes.small * 3,
        color: Colors.gray
    },

    filledButton: {
        flex: 1,
        justifyContent: "center",
        width: "90%",
        height: Sizes.base_height,
        marginVertical: Spaces.small_height
    },

    userProfile: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Spaces.base_width,
        marginVertical: Spaces.base_height
    },

    roundedImage: {
        width: Sizes.large * 2.8,
        height: Sizes.large * 2.8,
        borderRadius: Sizes.large * 2.8,
        marginRight: Spaces.medium_width / 1.65
    },

    workCard: {
        flex: 1,
        alignItems: "center",
        padding: Sizes.medium,
        width: Sizes.large * 5,
        height: Sizes.large * 3.5,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 2.5,
        marginHorizontal: Spaces.base_width,
        borderRadius: Sizes.small
    },

    gradeCard: {
        flex: 1,
        alignItems: "center",
        padding: Sizes.base,
        width: Sizes.large * 5,
        height: Sizes.large * 3.5,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 2.5,
        marginHorizontal: Spaces.base_width,
        borderRadius: Sizes.small
    },

    line: {
        height: 1,
        backgroundColor: Colors.gray,
        width: "85%",
        alignSelf: "center"
    }
})

export default styles;
