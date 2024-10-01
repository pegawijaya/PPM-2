import { View, Text, TextInput, Image, StyleSheet, ScrollView,TouchableOpacity} from "react-native"
// import {  } from "react-native";
import coffe from "./assets/coffe.png"
import Americano from "./assets/Americano.png"
import pega from "./assets/pega.jpeg"


const products = [
    { id: '1', name: 'Cappuccino', description: 'with chocolate', image: require('./assets/Latte.png'), price: '$4.50' },
    { id: '2', name: 'Machito', description: 'with chocolate', image: require('./assets/Torabika.png'), price: '$3.80' },
    { id: '3', name: 'Latte', description: 'with chocolate', image: require('./assets/Cappucino.png'), price: '$4.00' },
    { id: '4', name: 'Americano', description: 'with chocolate', image: require('./assets/Americano.png'), price: '$3.00' },
];


const Coffee =() =>{
    return(
        <View style={{backgroundColor:"black",}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 63, marginLeft: 30, marginRight: 30}}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.Lokasi}>
                        Location
                    </Text>
                    <Text style={{width:143, height:18, fontFamily:"sora", fontWeight:"600", fontSize:14, lineHeight:17.64, color:"#DDDDDD"}}>
                        Citamiang
                    </Text>
                </View>
                <View>
                    <Image source={pega} style={styles.Avatar}></Image>
                </View>                
            </View>

            <View style={{alignItems: 'center', marginTop: 40}}>
                <TextInput placeholder="Search Coffe" 
                style={styles.search}></TextInput>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image source={coffe}></Image>
            </View>
            
            <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cappuccino</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttoncase}>
                    <Text style={styles.buttonTextcase}>Machito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttoncase}>
                    <Text style={styles.buttonTextcase}>Latte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttoncase}>
                    <Text style={styles.buttonTextcase}>Americano</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={styles.cardWrapper}>
                {products.map(product => (
                    <View key={product.id} style={styles.cardContainer}>
                        <Image source={product.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{product.name}</Text>
                        <Text style={styles.cardDescription}>{product.description}</Text>
                        <Text style={styles.cardPrice}>{product.price}</Text>
                    </View>
                ))}
            </View>

            <View>

            </View>
        </View>
    )
}

export default Coffee ;


const styles = StyleSheet.create({
    Avatar: {
        width: 50,
        height: 50,
        borderRadius:10,
        
    },

    Lokasi: {
        width: 55, 
        height:15, 
        color:"#B7B7B7",
        fontWeight:"400",
        fontSize:12, 
        lineHeight:15.12,
        letterSpacing:1, 
        fontFamily:"sora"
    },

    search:{
        paddingLeft: 20, 
        borderRadius: 16, 
        width: 315, 
        height: 52, 
        borderWidth: 1, 
        borderColor: '#DDDDDD',
        backgroundColor: "white"
    },
    scrollView: {
        marginTop: 20,
        marginLeft:25,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#C67C4E",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },

    buttoncase: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    buttonText: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: "#FFFFFF",
    },
    buttonTextcase: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: "#2F4B4E",
    },

    cardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10, 
        marginTop:70
    },
    cardContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 4,
        marginTop:-50,
        marginBottom:70,
        width: '45%', // Mengatur lebar card agar ada dua dalam satu baris
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 20,
        fontWeight:'bold',
        color: "#333",
        marginTop:10,
        marginLeft:5
    },

    cardImage: {
        width: '100%',
        height: 130,
        borderRadius:10,
        // marginBottom: 50,
        
    },
    
    cardDescription: {
        marginTop: 10,
        fontSize: 14,
        color: "#666",
    },

    cardPrice: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#333",
    },
});