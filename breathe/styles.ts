import { Platform, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 96,
        fontFamily: 'AlumniSansPinstripe-Regular',
        marginBottom: 50,
    },
    eTitle: {
        fontSize: 48,
        fontFamily: 'AlumniSansPinstripe-Regular',
        marginBottom: 50,
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
        margin: 5,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 8,
            },
        }),
    },
    button2: {
        padding: 5,
        backgroundColor: '#EDEDE9',
        width: 300,
        height: 45,
        borderRadius: 15,
        marginBottom: 30,
        margin: 5,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 8,
            },
        }),
    },
    buttonText: {
        fontSize: 32,
        color: '#403D39',
        textAlign: 'center',
        fontFamily: 'AlumniSansInlineOne-Regular',
    },
    buttonText2: {
        fontSize: 32,
        color: '#403D39',
        textAlign: 'center',
        fontFamily: 'AlumniSansPinstripe-Regular',
    },

    selectButton1: {
        backgroundColor: '#D6CCC2',
        width: 120,
        height: 120,
        borderRadius: 28,
        justifyContent: 'center',
        marginRight: 4,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 8, // Androidissa käytetään elevation varjostukseen
            },
        }),
    },
    selectButton2: {
        backgroundColor: '#EDEDE9',
        width: 120,
        height: 120,
        borderRadius: 28,
        justifyContent: 'center',
        marginLeft: 4,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 8,
            },
        }),
    },
    selectButton3: {
        backgroundColor: '#E3D5CA',
        width: 120,
        height: 120,
        borderRadius: 28,
        justifyContent: 'center',
        marginRight: 4,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 8,
            },
        }),
    },
    selectButton4: {
        backgroundColor: '#D5BDAF',
        width: 120,
        height: 120,
        borderRadius: 28,
        justifyContent: 'center',
        marginLeft: 4,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 8,
            },
        }),
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    speechButton: {
        position: 'absolute',
        top: 150,
        right: 50,
    },
    speechIcon: {
        fontSize: 30,
        color: '#403D39',
    },

    affirmation: {
        fontSize: 40,
        color: '#403D39',
        textAlign: 'center',
        fontFamily: 'AlumniSansPinstripe-Regular',
        marginTop: 10,
        marginBottom: 20,
        padding: 20,
    },
    menuButton: {
        position: 'absolute',
        top: 60,
        left: 30,
        zIndex: 10,
    },



    // Circle styles

    circle: {
        backgroundColor: '#D5BDAF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleCircle: {
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#D6CCC2',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    innerCircle: {
        backgroundColor: '#EDEDE9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCircle: {
        fontSize: 40,
        color: '#403D39',
        fontFamily: 'AlumniSansPinstripe-Regular',
    },

    // My Exercises styles
    exTitle: {
        fontSize: 48,
        fontFamily: 'AlumniSansPinstripe-Regular',
        marginBottom: 50,
        marginTop: 60,
    },
    eHeader: {
        fontSize: 32,
        fontFamily: 'AlumniSansPinstripe-Regular',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
    listItem: {
        padding: 12,
        margin: 4,
        backgroundColor: '#D6CCC2',
        borderRadius: 10,
    },
    listText: {
        fontSize: 25,
        fontFamily: 'AlumniSansPinstripe-Regular',
    },
    affirmationText: {
        marginTop: 4,
        color: '#403D39',
        fontFamily: 'AlumniSansPinstripe-Regular',
        fontSize: 25,
    },
    summary: {
        fontSize: 16,
        marginBottom: 4,
        fontFamily: 'AlumniSansPinstripe-Regular',
    },

});
