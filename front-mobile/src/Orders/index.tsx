import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, Alert } from "react-native";
import Header from "../Header";
import OrderCard from "../OrderCard";
import { fetchOrders } from "../api";
import { Order } from "../types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);


    const handleOnPress = (order: Order) => {
        navigation.navigate("OrderDatails", {
            order
        });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando Pedidos...</Text>
                ) : (orders.map(order => (
                    <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                        <OrderCard order={order} />
                    </TouchableWithoutFeedback>
                )))}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: "5%",
        paddingLeft: "5%"
    }
});