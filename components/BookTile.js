import { StyleSheet, Text, View } from 'react-native';

const BookTile = (props) => {

    return (
        <View style={styles.bookoverview}>
            <Text style={styles.bookauthor}>van {props.author}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.isbn}>ISBN {props.isbn}</Text>

      </View>
    );
}

export default BookTile;

const styles = StyleSheet.create({

bookoverview: {
    marginLeft: 35,
  },  

  bookauthor: {
    fontSize: 18,
    fontFamily: 'MaliExtraLight',
  }, 
  
  description: {
    marginTop: 15,
    marginRight: 35,
    fontFamily: 'VarelaRoundRegular',
  }, 

  isbn: {
    marginTop: 15,
    fontFamily: 'VarelaRoundRegular',
  }, 

});