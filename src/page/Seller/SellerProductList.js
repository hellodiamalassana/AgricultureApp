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
    Button,
} from 'react-native';

import TopTabNavigator from '../../routes/TopTabNavigator';
import Search from '../Search/Search';
import MainStyles from '../../styles/MainStyles';
import ModalStyles from '../../styles/ModalStyles';
import InputStyles from '../../styles/InputStyles';

import Swiper from 'react-native-swiper'
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Rating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import ImageViewer from 'react-native-image-zoom-viewer';
import ModalLib from 'react-native-modal';
import Timeline from 'react-native-timeline-flatlist'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class SellerProductList extends Component {

    onGoToShopAdd() {
        this.props.navigation.navigate('SellerProductAdd')
    }

    onChooseImage() {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
                maxWidth: 250,
                maxHeight: 250,
                AccountImage: "",
                dataProfile: "",
            },
            title: 'เลือก',
            takePhotoButtonTitle: "ถ่ายรูปภาพ",
            chooseFromLibraryButtonTitle: "เลือกจากคลังภาพ",
            cancelButtonTitle: 'ยกเลิก',
        };
        launchImageLibrary(options, response => {
            this.setState({
                getImagePhoto: response.assets[0].uri,
            });
        });
    }

    onGoToChat() {
        this.props.navigation.navigate('Home')
    }
    onGoToProduct() {
        this.props.navigation.navigate('SellerProductList')
    }
    onGoToOrder() {
        this.props.navigation.navigate('SellOrderList')
    }
    onGoToEent() {
        this.props.navigation.navigate('SellerEvent')
    }
    onGoToTour() {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.15, backgroundColor: 'white' }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                    <View style={[MainStyles.contentBG]}>

                        {/* Shop Content */}
                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                            <ImageBackground
                                source={require('../../../assets/placeholder.jpg')}
                                style={{
                                    width: '100%',
                                    height: 80
                                }}
                                imageStyle={{ borderRadius: 6 }}
                            >
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../../assets/images/12.png')}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            justifyContent: 'center',
                                            marginTop: 10,
                                            marginRight: 10
                                        }}
                                    />
                                    <Text allowFontScaling={false} style={[MainStyles.textWhite, MainStyles.Text18]}>
                                        ผ้าคราม สิงห์ล้านนา 'Singha Lanna'
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={[MainStyles.m15]}>
                            <View style={{ flexDirection: 'row', width: '100%', marginBottom: 5 }}>
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
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16, MainStyles.ml10]}>
                                        รายละเอียดข้อมูลร้านค้า / แหล่งผลิต
                                    </Text>
                                </View>
                            </View>

                            {/* Transaction Menu */}
                            <View style={[styles.TransactionMenucontent, { backgroundColor: "#fdfdfd", paddingVertical: 10, marginBottom: 5 }]}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.TransactionMenucontentMenu}
                                    onPress={() => this.onGoToChat()}
                                >
                                    <View style={styles.TransactionMenucustomBadgeGray}>
                                        <MaterialIcons name='chat-bubble' style={styles.TransactionMenucustomIcon} size={22} color="#fff" />
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แชท</Text>
                                    <View style={styles.TransactionMenutextUnactive}></View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.TransactionMenucontentMenu}
                                    onPress={() => this.onGoToProduct()}
                                >
                                    <View style={styles.TransactionMenucustomBadgeGreen}>
                                        <FontAwesome5 name='shopping-cart' style={styles.TransactionMenucustomIcon} size={20} color="#fff" />
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>ข้อมูลสินค้า</Text>
                                    <View style={styles.TransactionMenutextActive}></View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.TransactionMenucontentMenu}
                                    onPress={() => this.onGoToOrder()}
                                >
                                    <View style={styles.TransactionMenucustomBadgeGray}>
                                        <FontAwesome5 name='store-alt' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>คำสั่งซื้อ</Text>
                                    <View style={styles.TransactionMenutextUnactive}></View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, styles.notify]}>0</Text>

                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.TransactionMenucontentMenu}
                                    onPress={() => this.onGoToEent()}
                                >
                                    <View style={styles.TransactionMenucustomBadgeGray}>
                                        <FontAwesome5 name='calendar-check' style={styles.TransactionMenucustomIcon} size={25} color="#fff" />
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>จองกิจกรรม</Text>
                                    <View style={styles.TransactionMenutextUnactive}></View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.TransactionMenucontentMenu}
                                    onPress={() => this.onGoToTour()}
                                >
                                    <View style={styles.TransactionMenucustomBadgeGray}>
                                        <Foundation name='mountains' style={styles.TransactionMenucustomIcon} size={23} color="#fff" />
                                    </View>
                                    <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12]}>แหล่งเที่ยว</Text>
                                    <View style={styles.TransactionMenutextUnactive}></View>
                                </TouchableOpacity>
                            </View >

                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
                                    <View style={[styles.content, { width: '60%' }]}>
                                        <View style={styles.inputFormContent}>
                                            <TextInput
                                                clearButtonMode="always"
                                                allowFontScaling={false}
                                                style={[styles.inputForm]}
                                                placeholder="ค้นหาข้อมูลสินค้า"
                                                placeholderTextColor={"#838383"}
                                                onChange={e => this.handleChange(e)}
                                            />
                                        </View>
                                        <View style={styles.iconInputFormContent}>
                                            <Icon name='search1' style={{ marginTop: 12 }} size={20} color="#448165" />
                                        </View>
                                    </View>
                                    <View style={[{ width: '20%' }]}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[MainStyles.btnGreenSmall, { marginHorizontal: 5 }]}
                                            onPress={() => this.onGoToShop()}
                                        >
                                            <Text allowFontScaling={false} style={[MainStyles.btnSmall]}>ล้างการค้นหา</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[{ width: '20%' }]}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[MainStyles.btnYellowSmall, { marginRight: 5 }]}
                                            onPress={() => this.onGoToShopAdd()}
                                        >
                                            <Text allowFontScaling={false} style={[MainStyles.btnSmall]}>เพิ่มสินค้า</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.contentCartShopProductGray}>
                                    <View style={styles.contentCartShopProductList}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/placeholder.jpg')}
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}
                                        />
                                        <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                เสื้อผ้าครามงานฝีมือ
                                            </Text>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                                ราคา  590 บาท
                                            </Text>
                                            <View style={[MainStyles.mt15, { alignItems: 'flex-start' }]}>
                                                <Rating
                                                    type='star'
                                                    ratingCount={5}
                                                    imageSize={10}
                                                    isDisabled={true}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <View style={{ alignSelf: 'flex-end' }}>
                                                <FontAwesome5 name='edit' style={styles.TransactionMenucustomIcon} size={15} color="#333" />
                                            </View>
                                            <View style={{ marginTop: 15 }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[MainStyles.btnCartGreen2, { width: 100 }]}
                                                    onPress={() => this.onGoToShop()}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>เผยแพร่</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                <View style={styles.contentCartShopProductGray}>
                                    <View style={styles.contentCartShopProductList}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/placeholder.jpg')}
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}
                                        />
                                        <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                เสื้อผ้าครามงานฝีมือ
                                            </Text>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                                ราคา  590 บาท
                                            </Text>
                                            <View style={[MainStyles.mt15, { alignItems: 'flex-start' }]}>
                                                <Rating
                                                    type='star'
                                                    ratingCount={5}
                                                    imageSize={10}
                                                    isDisabled={true}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <View style={{ alignSelf: 'flex-end' }}>
                                                <FontAwesome5 name='edit' style={styles.TransactionMenucustomIcon} size={15} color="#333" />
                                            </View>
                                            <View style={{ marginTop: 15 }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[MainStyles.btnCartGreen2, { width: 100 }]}
                                                    onPress={() => this.onGoToShop()}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>เผยแพร่</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>
                                <View style={styles.contentCartShopProductGray}>
                                    <View style={styles.contentCartShopProductList}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../../assets/placeholder.jpg')}
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}
                                        />
                                        <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text16]}>
                                                เสื้อผ้าครามงานฝีมือ
                                            </Text>
                                            <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.Text12, MainStyles.textflexShrink]}>
                                                ราคา  590 บาท
                                            </Text>
                                            <View style={[MainStyles.mt15, { alignItems: 'flex-start' }]}>
                                                <Rating
                                                    type='star'
                                                    ratingCount={5}
                                                    imageSize={10}
                                                    isDisabled={true}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <View style={{ alignSelf: 'flex-end' }}>
                                                <FontAwesome5 name='edit' style={styles.TransactionMenucustomIcon} size={15} color="#333" />
                                            </View>
                                            <View style={{ marginTop: 15 }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[MainStyles.btnCartGreen2, { width: 100 }]}
                                                    onPress={() => this.onGoToShop()}
                                                >
                                                    <Text allowFontScaling={false} style={[MainStyles.btnLoadMoreText, { marginLeft: 10 }]}>เผยแพร่</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[MainStyles.BorderBottomGrayWhite]}></View>

                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(83, 127, 100, 1)',
        borderRadius: 0,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
    },
    inputFormContent: {
        width: '90%',
    },
    inputForm: {
        height: 45,
        fontSize: 14,
        color: '#333333',
        fontFamily: 'Prompt-Regular',
    },
    iconInputFormContent: {
        width: '10%',
    },
    iconInputFormSearch: {
        height: 10,
        width: 10,
        alignSelf: 'center',
        flex: 1
    },

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
        borderBottomColor: "#448165",
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
    TransactionMenucustomBadgeGreen: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#448165",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 13,
        marginBottom: 5
    },
    TransactionMenucustomGreen: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#448165",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 5
    },
    TransactionMenucustomYellow: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#e9b266",
        justifyContent: "center",
        alignSelf: "center",
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


    contentMenu: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    contentMenuBade: {
        width: 17,
        height: 17,
        borderRadius: 50,
        backgroundColor: "#cc3300",
        position: 'absolute',
        right: 0,
        top: -10,
        zIndex: 999
    },
    contentMenuIcon: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        width: 60,
        height: 45,
        marginHorizontal: 13,
    },
    customIcon: {
        justifyContent: "center",
        alignSelf: "center",
    },

    contentCart: {
        marginVertical: 15
    },
    contentTitle: {
        backgroundColor: '#448165',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%'
    },
    contentTitleRow: {
        backgroundColor: '#448165',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
    },
    contentTitleRowGray: {
        backgroundColor: '#d7d7d7',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
    },
    contentCartShop: {
        flexDirection: 'row'
    },
    contentCartShopProduct: {
        flexDirection: 'column'
    },
    contentCartShopProductList: {
        flexDirection: 'row',
        marginBottom: 15
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
    notify: {
        backgroundColor: '#cc3300',
        position: 'absolute',
        right: 8,
        top: -5,
        paddingHorizontal: 7,
        color: 'white',
        borderRadius: 50,
        fontSize: 15,
        width: 23,
        height: 23
    }
});