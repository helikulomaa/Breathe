import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
    },
    bodyText: {
        alignSelf: "flex-start"
    },
    button: {
        padding: 5,
        backgroundColor: '#EDEDE9',
        width: 300,
        height: 45,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 30,
        color: '#403D39',
        textAlign: 'center',
        fontFamily: 'AlumniSansPinstripe-Regular',
    },



    // Circle styles

    circle: {
        backgroundColor: '#D6CCC2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleCircle: {
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#EDEDE9',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    innerCircle: {
        backgroundColor: '#D5BDAF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCircle: {
        fontSize: 24,
        color: '#888',
    },
});
