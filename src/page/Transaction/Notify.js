import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    ImageBackground,
    Dimensions,
    Platform,
    AsyncStorage,
    ViewPropTypes,
    ActivityIndicator,
    Modal,
} from 'react-native';

import Search from '../Search/Search';
import PaymentOrder from './PaymentOrder';
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import InputStyles from '../../styles/InputStyles';

import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';
import Timeline from 'react-native-timeline-flatlist'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class Notify extends Component {

    onBackToMain() {
        this.props.navigation.navigate('Home')
    }
    onGoToFav() {
        this.props.navigation.navigate('Favorite')
    }
    onGoToCart() {
        this.props.navigation.navigate('OrderList')
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={[MainStyles.contentBG]}>
                        <View style={[MainStyles.m15]}>

                            {/* Search Content */}
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ justifyContent: 'center', width: '10%' }}
                                    onPress={() => this.onBackToMain()}
                                >
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/icon/back.png')}
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={{ width: '90%' }}>
                                    <Search />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Transaction Menu */}
                    <View style={[styles.TransactionMenucontent]}>
                        <View style={styles.TransactionMenucontentMenu}>
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='chat-bubble' style={styles.TransactionMenucustomIcon} size={22} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แชท</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </View>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToCart()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <FontAwesome5 name='shopping-cart' style={styles.TransactionMenucustomIcon} size={20} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>คำสั่งซื้อ</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                        >
                            <View style={styles.TransactionMenucustomBadgeYellow}>
                                <MaterialIcons name='notifications-active' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แจ้งเตือน</Text>
                            <View style={styles.TransactionMenutextActive}></View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.TransactionMenucontentMenu}
                            onPress={() => this.onGoToFav()}
                        >
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='favorite' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>รายการโปรด</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </TouchableOpacity>

                        <View style={styles.TransactionMenucontentMenu}>
                            <View style={styles.TransactionMenucustomBadgeGray}>
                                <MaterialIcons name='calendar-today' style={styles.TransactionMenucustomIcon} size={23} color="#fff" />
                            </View>
                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>กิจกรรม</Text>
                            <View style={styles.TransactionMenutextUnactive}></View>
                        </View>
                    </View >


                    <View style={[MainStyles.mx15, MainStyles.mb15]}>
                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.my15, MainStyles.Text16]}>รายการแจ้งเตือน</Text>

                        <View style={styles.contentCartShopProductGray}>
                            <View style={styles.contentCartShopProductList}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/25.png')}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        กรุณาให้คะแนนรีวิวสินค้า
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                        คุณได้ทำการสั่งซื้อสินค้าผ้าครามเสร็จสิ้น แล้วกรุณาให้คะแนนสินค้า
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>
                                        24 พ.ย. 2564
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.contentCartShopProduct}>
                            <View style={styles.contentCartShopProductList}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/26.png')}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        กรุณาให้คะแนนรีวิวสินค้า
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                        คุณได้ทำการสั่งซื้อสินค้าผ้าครามเสร็จสิ้น แล้วกรุณาให้คะแนนสินค้า
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>
                                        24 พ.ย. 2564
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.contentCartShopProductGray}>
                            <View style={styles.contentCartShopProductList}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../../assets/image/27.png')}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.Text16]}>
                                        กรุณาให้คะแนนรีวิวสินค้า
                                    </Text>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                        คุณได้ทำการสั่งซื้อสินค้าผ้าครามเสร็จสิ้น แล้วกรุณาให้คะแนนสินค้า
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text10]}>
                                        24 พ.ย. 2564
                                    </Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    TransactionMenucontent: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignSelf: "center",
    },
    TransactionMenucontentMenu: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    TransactionMenutextUnactive: {
        paddingTop: 5
    },
    TransactionMenutextActive: {
        borderBottomColor: "#e9b266",
        borderBottomWidth: 1,
        width: 40,
        paddingTop: 5
    },
    TransactionMenucustomBadgeGray: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#999999",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    TransactionMenucustomBadgeYellow: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#e9b266",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    TransactionMenucustomIcon: {
        justifyContent: "center",
        alignSelf: "center",
    },
    contentCartShopProductGray: {
        flexDirection: 'column',
        backgroundColor: "rgba(242, 242, 242, 1)",
        padding: 10
    },
    contentCartShopProduct: {
        flexDirection: 'column',
        padding: 10
    },
    contentCartShopProductList: {
        flexDirection: 'row',
    },
    cartShopProductListBtnMinus: {
        backgroundColor: '#e4e4e4',
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    cartShopProductListBtnPlus: {
        backgroundColor: '#448165',
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
});