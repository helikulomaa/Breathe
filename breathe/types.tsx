
// Päätyyppimääritys, joka määrittää kaikki mahdolliset näkymät
// ja niiden parametrit sovelluksessa.
export type RootStackParamList = {
    // Määritellään, että BreatheSceen ottaa vastaan duration paramenterin
    BreatheScreen: {
        duration: number;
    };
    HomeScreen: undefined;
};