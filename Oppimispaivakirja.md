# Oppimispäiväkirja

## 25.3. Idean kehittäminen

Sovelluksen kehittäminen alkoi sopivan kokoisen idean keksimisestä. Haasteena oli, että sovellusidean piti sisältää tiettyjä kurssin tavoitteisiin liittyviä toimintoja, kuten laiteominaisuuksien ja rajapintojen käyttöä. Ideaa oli myös haastavaa keksiä aivan tyhjästä, joten tuntui helpolta lähteä löyhästi kopioimaan jotain olemassa olevaa ideaa. Hengitysharjoitusten logiikka onkin melko samanlainen kuin Finch-nimisessä sovelluksessa olevat hengitysharjoitukset.

## 8.4. Projekti käyntiin

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

## 11.4. Liikkeelle ajastuslogiikasta

Aloittelin animaation logikan tekemistä. Minulla oli ensin vähän haasteita, mitä tapahtuu missäkin tiedostossa ja miten tieto harjoituksen kestosta siirtyy näytöltä toiselle ja sitten animaation toteuttavaan komponenttiin.

## 15.4. ja 22.4. Tyylittelyt, ajastus ja animaatio kuntoon

Tuntui helpoimmalta tehdä sovelluksen tyylittelyt kuntoon ennen haastavampia logiikkaan liittyviä asioita. Poikkesin siinä hieman alkuperäisestä suunnitelmasta tehdä logiikan ensin. Tuo etenemisjärjes toimii kuitenkin selkeästi itselleni paremmin, jotta tulee sellainen olo, että tekeminen etenee. Tyylien muokkaaminen tuntui onneksi suhteellisen helpolta ja mukava huomata, että tyylien tekeminen on jo itselle helppo asia.

Sain tehtyä animaatiota toteuttavan logiikan valmiiksi. Muokkasin tosi paljon sitä ensimmäistä yritystä. Siirsin kaiken logiikan animaatiota toteuttavaan komponenttiin pois screeniltä. Aika paljon piti kokeilla ja huomata toimimattomuutta kunnes alkoi toimia. Tein ajastuksen ja animaation aluksi hassusti omiksi toiminnoikseen, mutta yhdistin ne lopulta samaan useEffect-funktioon.

Oppeja tekemisestä:
- useNativeDriver liittyy animaation toimivuuteen ja suorituskykyyn. Kun se on asetettu trueksi, animaatio lasketaan natiivisti.
- useRef luo muuttujan, jonka arvo säilyy uudelleen rendröintien ajan eikä sen muutos aiheuta renderöintiä.
- Expo Speechin käyttö oli suoraviivaista, mutta äänet kovin robottomaisia, eikä soveltuisi tähän oikeasti.
- Ikonitkin pitää asentaa erikseen, mutta niiden käyttöön otto on ihan helppoa.

User story 2 "Käyttäjänä haluan nähdä ja kuulla ohjeet hengittämiseen, jotta voin seurata niitä helposti." toteutettu!
User story 8 "Käyttäjänä haluan nähdä harjoituksen lopuksi satunnaisen viestin tai affirmaation, joka kannustaa minua jatkamaan." toteutettu

## 22.4. Värinätoiminnan toteuttaminen

React Nativen omalla Vibration-työkalulla ei pystynytkään tekemään erilaisia värinöitä iOS-laitteelle. Ilmeisesti Androidille olisi saanut, mutta koska testailen iPhonella, vaihdoin työkalun Expo Hapticsiin: https://docs.expo.dev/versions/latest/sdk/haptics/

## 25.4. Muistutuksen toteuttaminen

Tein muistutuksen Expo Notificationilla: https://docs.expo.dev/versions/latest/sdk/notifications/. Muistutuksen ei ollutkaan ihan suoraviivaista, vaan ilmoituksen triggerin oikean tietotyypin keksiminen vei aika paljon aikaa. Tässä vaiheessa sain toteutettua muistutuksen, joka näkyy kunnolla vain jos sovellus on auki. Jos se on kiinni tai taustalla, tulee vain ilmoitus jonka klikkaus avaa sovelluksen.

## 29.4. Navigaatiotyypin vaihtaminen Draweriksi

Halusin toteuttaa muistutuksen asettamisen ja omien harjoitusten tarkastelun, niin, että niihin pääsee menuvalikosta. Tuo muutos aiheutti sen, että Navigointi pitikin vaihtaa Stackista Drawer-tyyppiseksi. Tuo muutos selkeytti sitä, että navigointityypiksi pitää valita aina jokin ensisijaiseksi ja muita voisi laittaa ikäänkuin sen sisään. Nyt kuitenkin tein niin, että navigointityyppinä on kaikkialla tuo Drawer Navigation. Opin myös näkymät pitää laittaa kaikki Drawer-navigatorin sisälle, jotta ne toimivat kaikkialla, mutta ne voi asettaa erikseen pois näkyvistä valikosta laittamalla niihin "display: 'none'".

## 30.4. Navigoinnin vaihdosta aiheutunut bugi

Drawer-navigointiin vaihtaminen aiheutti sen, ettei harjoitus enää nollautunut kun siitä poistutaa. Ilmeisesti Drawer-navigoinnissa tilat säilyvät erilailla kuin Stack-navigoinnissa. Sain korjattua sen yksinkertaisesti lisäämällä back-nappulaan fucktion, joka lopettaa harjoituksen. Stack-navigoinnin kanssa tuota ei tarvittu.

Muuta: Olen oppinut tässä projektissa myös tekemään hallitumpia kommitteja. Minulla oli ennen tapana laittaa lisätä kaikki muutokset kaikkiin kommitteihin, mutta nykyään lisään tiedostot yksitellen ja katson ensin mitä muutoksia niihin on tullut.

## 2.5. Harjoitusten tallennusten lisäys

Firebasen käyttöönotossa oli suht helppoa noudattaa kurssilla olleita ohjeita.

## 4.5. Viimeiset viilaukset harjoitusten listauksen ulkonäköön

Flatlistin käyttö tehtyjen harjoitusten näyttämisessä aiheutti hieman haastetta asetteluissa. Olisi saattanut olla parempi käyttää erilaisia containereita ko. näkymän asetteluun, mutta ratkaisin asetteluongelman lisäämällä marginaali otsikkoon ja alhaalla olevalle nappulalle.

Jos sovellusta haluaisi vielä kehittää, voisi harjoitukseen lisätä laskurin, joka näyttäisi sekunnit ja myös värinöitä voisi vielä muokata niin, että ne ovat synkassa laskurin kanssa. Lisäksi harjoituksen pausettaminen jäi vielä toteuttamatta. Muutoin sain sovelluksen sellaiseksi kuin olin ajatellutkin.

ChatGPT:n käyttäminen "Scrum masterina" jäi vähän tyngäksi, sillä ilmainen versio ei jostain syystä kauhean hyvin muistanut mitä oltiin tekemässä. Mutta alkuun tekemisen suunnitteluun se oli oikein hyvä.
