import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { useFonts } from 'expo-font';

function book1() {
  console.log("Iene Miene Mutte - GELEZEN");
}
function book2() {
  console.log("Het meisje in het ijs - GELEZEN");
}
function book3() {
  console.log("Bloedlijn - GELEZEN");
}
function title1() {
  console.log("Iene Miene Mutte - TITEL GEKLIKT");
}
function title2() {
  console.log("Het meisje in het ijs - TITEL GEKLIKT");
}
function title3() {
  console.log("Bloedlijn - TITEL GEKLIKT");
}
function title4() {
  console.log("Nu ben je van mij - TITEL GEKLIKT");
}


import BookTile from './components/BookTile.js';
import Line from './components/Line.js';

export default function App() {

  let a = useFonts({
    'MaliLight': require('./assets/fonts/Mali-Light.ttf'),
    'MaliExtraLight': require('./assets/fonts/Mali-ExtraLight.ttf'),
    'VarelaRoundRegular': require('./assets/fonts/VarelaRound-Regular.ttf'),
  });

  return (
    <ScrollView style={styles.container}>



      <View style={styles.head}>
        
        <View>
          <Text style={styles.title}>Bookshop</Text>
        </View>

        <View style={styles.shoppingcart}>
          <Image
              style={styles.icon}
              source={{uri: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png'}}
            />
          <Text style={styles.text}>1</Text>
        </View>

      </View>



<View style={styles.section}>


      <TouchableWithoutFeedback onPress={() => title1()}><Text style={styles.booktitle}>Iene Miene Mutte</Text></TouchableWithoutFeedback>
      <BookTile author="M.J. Arlidge" description="Het meisje was amper nog in leven toen ze het bos uit kwam lopen. Het verhaal van haar ontvoering was donkerder dan de meest verschrikkelijke nachtmerrie. Maar alles wat ze zei was waar. Elk gruwelijk detail. Een aantal dagen later wordt een tweede in shock verkerend slachtoffer gevonden en ontstaat er een patroon. In tweetallen worden mensen ontvoerd, vastgehouden en uitgehongerd. Vervolgens krijgen ze een duivels dilemma voorgelegd: doden of gedood worden." isbn="978-9-0225-7622-9"/>
      
      <TouchableHighlight underlayColor="#0077B6" onPress={() => book1()} style={styles.tile}>

        <View>
            <Text style={styles.tileText}>GELEZEN</Text>
        </View>
      </TouchableHighlight>
      
</View>


      <Line></Line>


<View style={styles.section}>

      <TouchableWithoutFeedback onPress={() => title2()}><Text style={styles.booktitle}>Het meisje in het ijs</Text></TouchableWithoutFeedback>
      <BookTile author="Robert Bryndza" description="Haar ogen zijn wijd open. Haar lippen iets uiteen, alsof ze nog iets wil zeggen. Haar lichaam bevroren in het ijs. En ze is niet de enige… Als het lichaam van een jonge vrouw wordt gevonden in een park in Zuid-Londen, wordt inspecteur Erika Foster ingeschakeld om het moordonderzoek te leiden. Het slachtoffer, de mooie, jonge en rijke Andrea Douglas-Brown, leek het perfecte leven te leiden. Haar vader is een belangrijk en invloedrijk man, haar verloofde een gerespecteerd zakenman. Toch lijken er duistere geheimen te zijn. Werden die het meisje fataal?" isbn="978-9-0225-8510-8"/>
      
      <TouchableHighlight underlayColor="#0077B6" onPress={() => book2()} style={styles.tile}>

        <View>
            <Text style={styles.tileText}>GELEZEN</Text>
        </View>
      </TouchableHighlight>

</View>

      <Line></Line>


<View style={styles.section}>

      <TouchableWithoutFeedback onPress={() => title3()}><Text style={styles.booktitle}>Bloedlijn</Text></TouchableWithoutFeedback>
      <BookTile author="Angela Marson" description="Rechercheur Kim Stone wordt ter plaatse geroepen bij een slachtoffer dat met een enkele, precieze steek in het hart is vermoord. Alles wijst op een overval met fatale afloop. Niet lang daarna wordt er een maatschappelijk werker gevonden die het slachtoffer was van zinloos geweld. Twee zaken die ogenschijnlijk niets met elkaar te maken hebben, maar voor Kim klopt er iets niet. Wanneer een lokale drugsverslaafde vermoord wordt aangetroffen met een identieke wond, weet Kim instinctief dat ze met dezelfde moordenaar te maken heeft. Maar met geen enkel bewijs dat de drie slachtoffers met elkaar verbindt, behalve de kille, berekenende aard van hun dood, zou dit wel eens haar moeilijkste zaak ooit kunnen zijn." isbn="978-9-0225-9169-7"/>
      
      <TouchableHighlight underlayColor="#0077B6" onPress={() => book3()} style={styles.tile}>
        <View>
            <Text style={styles.tileText}>GELEZEN</Text>
        </View>
      </TouchableHighlight>

</View>

      <Line></Line>


<View style={styles.section}>

      <TouchableWithoutFeedback onPress={() => title4()}><Text style={styles.booktitle}>Nu ben je van mij</Text></TouchableWithoutFeedback>
      <BookTile author="Lisa Regan" description="Ze was dichtbij genoeg om te zien dat het meisje een woord op de muur had geschreven in helder, rood bloed. Of eigenlijk geen woord – een naam. Alle inwoners van Denton zijn op zoek naar Isabelle Coleman, een tienermeisje dat al een week wordt vermist. Ook rechercheur Josie Quinn, die wegens haar schorsing eigenlijk thuis zou moeten zitten. Het enige wat de zoektocht tot dusver heeft opgeleverd, is Isabelles telefoon en de vondst van een ander meisje, June Spencer. Iedereen dacht dat June een jaar geleden van huis was weggelopen, maar nu is ze zwaar getraumatiseerd teruggevonden… met Isabelles tongpiercing in haar mond." isbn="978-9-0225-9611-1"/>

      <TouchableHighlight underlayColor="#0077B6" onPress={() => book3()} style={styles.tile}>
        <View>
            <Text style={styles.tileText}>GELEZEN</Text>
        </View>
      </TouchableHighlight>

</View>

      <Line></Line>



      <View style={styles.view}></View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    backgroundColor: '#FFFAE8',
  },

  head: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 0, 
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 35,
  },

  title: {
    fontSize: 35,
    height: 55,
    fontFamily: 'MaliLight',
  },

  shoppingcart: {
    marginRight: 35,
    marginTop: 5,
  },

  icon: {
    height: 30,
    width: 30,
    marginTop: 8,
  }, 

  text: {
    marginLeft: 30,
    fontSize: 15,
    fontFamily: 'VarelaRoundRegular',
  },

  section: {
    backgroundColor: '#FFF1C8',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

  },

  booktitle: {
    fontSize: 25,
    marginLeft: 32,
    marginTop: 15,
    fontFamily: 'MaliLight',
  },

  tile: {
    borderRadius: 5,
    backgroundColor: '#FFD991',
    marginVertical: '2%',
    padding: 10,
    width: 90,
    marginLeft: 280,

    shadowColor: "#AE5E25",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }, 

  tileText: {
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'MaliLight',
  }, 

  view: {
    height: 100,
  }

});