import { StyleSheet } from 'react-native';

import { 
    Colors, 
    Sizes,
    Spaces
} from '../constants/theme';

const styles = StyleSheet.create({
    container: {

    },

    column: {

    },

    center: {
        flex: 1,
        alignItems: "center",
        marginVertical: Spaces.medium_height
    },

    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    message: {
        paddingHorizontal: Spaces.base_width,
        paddingTop: Spaces.small_height,
        borderWidth: Sizes.small / 10,
        borderBottomColor: Colors.gray
    },

    settingsRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: Spaces.medium_width,
        paddingVertical: Spaces.small_height
    },

    innerRow: {
        flexDirection: "row"
    }

})

export default styles;
