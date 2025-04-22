# Oppimispäiväkirja

## 25.3.  
Sovelluksen kehittäminen alkoi sopivan kokoisen idean keksimisestä. Haasteena oli, että sovellusidean piti sisältää tiettyjä kurssin tavoitteisiin liittyviä toimintoja, kuten laiteominaisuuksien ja rajapintojen käyttöä. Ideaa oli myös haastavaa keksiä aivan tyhjästä, joten tuntui helpolta lähteä löyhästi kopioimaan jotain olemassa olevaa ideaa. Hengitysharjoitusten logiikka onkin melko samanlainen kuin Finch-nimisessä sovelluksessa olevat hengitysharjoitukset.

## 8.4.  

Aloitin työskentelyn tekemällä Figmalla pienen käyttöliittymäsuunnitelman (Readme-tiedostossa). Minulle sovellusten kehittäminen on aina helpompaa visuaalinen puoli edellä kun minulla on käsitys, mitä olen lähdössä tekemään.Figmaan tehdyn suunnitelman perusteella on myös helppo myöhemmin poimia muotoilut. En ollut hetkeen käyttänyt Figmaa, joten tuli taas muisteltua, miten sinne saa lisättyä variantteja eli esim. värejä tai fontteja, mitä haluaa käyttää koko sovelluksessa. Loin myös väripaletin verkossa löytyvällä väripalettityökalulla (Coolors). Minua kiehtoi ajatus pastellisesta värimaailmasta, jossa ei ole suuria kontrasteja, mutta toki pohditutti onko kontrastit liian pieniä saavutettavuuden näkökulmasta. Päätin kuitenkin olla välittämättä siitä nyt liikaa kun se ei ole tämän kurssitehtävän ydintä. 

Vaikka teen sovelluksen yksin, halusin lähteä työskentelemään jollain lailla järjestelmällisesti ja srummaisesti. Ohjeistin ChatGPT:tä toimimaan meidän tiimin Scrum Masterina ja sen avulla luotiin lista user storeista, joita lähden toteuttamaan taski kerrallaan. Toimiva tapa on tehdä ensin mahdollisimman yksinkertaista, mutta toimivaa ja sitten alkaa pala palalta lisäämään yksityiskohtia. Muutatan iteroinin jälkeen user storeista tuli tällaiset:

User Story -lista (priorisoitu)

🟢 1	Käyttäjänä haluan valita hengitysharjoituksen pituuden, jotta voin tehdä minulle sopivan harjoituksen.

🟢 2	Käyttäjänä haluan nähdä ja kuulla ohjeet hengittämiseen, jotta voin seurata niitä helposti.

🟢 3	Käyttäjänä haluan, että puhelin värisee hengityksen tahdissa, jotta voin tehdä harjoituksen myös ilman ääntä.

🟢 4	Käyttäjänä haluan, että sovellus tallentaa tehdyt harjoitukset Firebaseen.

🟢 5	Käyttäjänä haluan nähdä, kuinka monta minuuttia olen harjoitellut tällä viikolla.

🟢 6	Käyttäjänä haluan ajastaa muistutuksen harjoitukseen, jotta en unohda hengittää rauhassa päivittäin.

🟡 7	Käyttäjänä haluan, että voin keskeyttää ja jatkaa harjoitusta.

🟡 8	Käyttäjänä haluan nähdä harjoituksen lopuksi satunnaisen viestin tai affirmaation, joka kannustaa minua jatkamaan.


Oppeja:

- Oli hyvää harjoitusta käydä ohjeet uudelleen läpi, lähtien siitä, miten uusi projekti perustetaan. Uutta projektia pitäisi perustaa varmaan monta kertaa, ettei mikään menisi mönkään.

- Ei kannata asentaa uusimpia versioita, mihin asennuksissa suositellaan päivittävän. Nyt asensin ensin muistaakseni React Nativesta sellaisen ja se ei (googletuksen perusteella) toiminut yhteen Expon kanssa. 

- Onnistuin myös asentamaan React Navigation -paketit väärälle tasolle ja ihmettelemään hetken, mikä meni vikaan. Ne täytyy asentaa samalla tasolla kuin missä sovellus käynnistetään. 

- Google fontin käyttöön ottaminen: siihen on monta tapaa, mutta yksi on se, että se tuodaan tiedostona esim. assets/fonts-kansioon, asennetaan expo-fonts, ja sitten sitä käytetään useFonts-hookin avulla App.js-tiedostosta käsin. Fontin voi asettaa nimellä styles-tiedostoon. 

- Ajastuslogiikan rakentamisesta...

User story "Käyttäjänä haluan valita hengitysharjoituksen pituuden, jotta voin tehdä minulle sopivan harjoituksen" valmis. 

## 11.4.

Aloittelin animaation logikan tekemistä. Minulla oli ensin vähän haasteita, mitä tapahtuu missäkin tiedostossa ja miten tieto harjoituksen kestosta siirtyy näytöltä toiselle ja sitten animaation toteuttavaan komponenttiin.

## 22.4.

Tuntui helpoimmalta tehdä sovelluksen tyylittelyt kuntoon ennen haastavampia logiikkaan liittyviä asioita. Poikkesin siinä hieman alkuperäisestä suunnitelmasta tehdä logiikan ensin. Tuo etenemisjärjes toimii kuitenkin selkeästi itselleni paremmin, jotta tulee sellainen olo, että tekeminen etenee. Tyylien muokkaaminen tuntui onneksi suhteellisen helpolta ja mukava huomata, että tyylien tekeminen on jo itselle helppo asia.

Sain tehtyä animaatiota toteuttavan logiikan valmiiksi. Muokkasin tosi paljon sitä ensimmäistä yritystä. Siirsin kaiken logiikan animaatiota toteuttavaan komponenttiin pois screeniltä. Aika paljon piti kokeilla ja huomata toimimattomuutta kunnes alkoi toimia. Tein ajastuksen ja animaation aluksi hassusti omiksi toiminnoikseen, mutta yhdistin ne lopulta samaan useEffect-funktioon.

Oppeja tekemisestä:
- useNativeDriver liittyy animaation toimivuuteen ja suorituskykyyn. Kun se on asetettu trueksi, animaatio lasketaan natiivisti.
- useRef luo muuttujan, jonka arvo säilyy uudelleen rendröintien ajan eikä sen muutos aiheuta renderöintiä.
- Expo Speechin käyttö oli suoraviivaista, mutta äänet kovin robottomaisia, eikä soveltuisi tähän oikeasti.
- Ikonitkin pitää asentaa erikseen, mutta niiden käyttöön otto on ihan helppoa.

User story 2 "Käyttäjänä haluan nähdä ja kuulla ohjeet hengittämiseen, jotta voin seurata niitä helposti." toteutettu!
User story 8 "Käyttäjänä haluan nähdä harjoituksen lopuksi satunnaisen viestin tai affirmaation, joka kannustaa minua jatkamaan." toteutettu