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
    }

})

export default styles;
